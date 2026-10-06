---
name: vgk-driver-loading-dse
description: Driver loading under Vanguard -- DSE bypass + NtLoadDriver vs manual mapping (kdmapper-style). Tradeoffs, detection vectors, BigPoolTable, PiDDB, hash-link cleanup.
---

# Driver Loading: DSE Bypass vs Manual Mapping

## Two Approaches

| Property | DSE Bypass + NtLoadDriver | Manual Mapping (kdmapper-style) |
|---|---|---|
| PsLoadedModuleList | Clean entry | No entry (or fake entry) |
| Module visible to tools | Yes | No |
| Stack walk | Legitimate module | Thread may have no-module return addr -> NMI flag |
| BigPoolTable | Clean (ntoskrnl-owned) | Visible (pool tag, size) |
| PiDDBCacheTable | Must clean | Must not appear in the first place |
| Unload | NtUnloadDriver -> DriverUnload | Manual free |
| On crash | Has symbols | Anonymous code |
| ObRegisterCallbacks detect | Return addr in our .sys -> legit | Return addr outside any module -> flag |

## DSE Bypass + NtLoadDriver (preferred for stealth)

### Step 1: Disable DSE

Options:
- **CI.dll g_CiEnabled patch**: pattern-scan ntoskrnl for `CiInitialize` export chain, locate `g_CiEnabled`, write 0. Restore on unload.
- **UEFI loader**: run before Windows, disable UEFI Secure Boot or map driver from DXE phase (see vg_init.exe approach).
- **physmem exploit** (kdexploit/physmem.sys): WinTCO, GIGABYTE, any leaked cert driver -> physical R/W -> patch g_CiEnabled.

### Step 2: Write .sys to disk, call NtLoadDriver

```cpp
// Set ImagePath in HKLM\SYSTEM\CurrentControlSet\Services\<name>
// Type = 1 (kernel driver), Start = 3 (demand), ErrorControl = 1
RegCreateKeyW(L"\\Registry\\Machine\\SYSTEM\\CurrentControlSet\\Services\\VGDriver");
RegSetStr(key, L"ImagePath", L"\\??\\C:\\Windows\\System32\\vg.sys");
RegSetDw(key,  L"Type", 1);
RegSetDw(key,  L"Start", 3);

UNICODE_STRING svcPath;
RtlInitUnicodeString(&svcPath, L"\\Registry\\Machine\\SYSTEM\\CurrentControlSet\\Services\\VGDriver");
NtLoadDriver(&svcPath);
```

### Step 3: Clean PiDDB Cache

VGK scans `PiDDBCacheTable` for known-vulnerable-driver signatures (hash of SectionName + TimeDateStamp).
Pattern for `PiDDBCacheTable` in ntoskrnl: `66 03 D2 48 8D 0D`
Pattern for `PiDDBLock`: `48 8B 0D ?? ?? ?? ?? 48 8D 1D ?? ?? ?? ?? E8 ?? ?? ?? ?? 48 85 C0`

Remove our driver's entry from the RB-tree using `ExAcquireResourceExclusiveLite` + `RtlRbRemoveNode`:
```c
ExAcquireResourceExclusiveLite(PiDDBLock, TRUE);
// find entry where .TimeDateStamp == driverTs && .DriverName == L"vg.sys"
RtlRbRemoveNode(&PiDDBCacheTable->RbTree, &entry->RbNode);
ExReleaseResourceLite(PiDDBLock);
ExFreePoolWithTag(entry, 'TDiP');
```

### Step 4: Clean MmUnloadedDrivers

VGK scans `MmUnloadedDrivers` ring buffer (8 entries, Windows adds on unload).
Pattern: `EB 01 4A 4C 8B 0D`
If about to unload: zero out the entry before unload, or use `HvStealthEraseMmUnloaded` (phase 12 of VoidGuard).

### Step 5: Re-enable DSE

Restore `g_CiEnabled = 1` after driver is loaded. Driver stays in memory without CI validation after this point.

## Manual Mapping (eac/BattlEye bypass but VGK NMI hazard)

```
1. Allocate RWX pool (ExAllocatePool NonPagedPoolNx)
2. Copy headers, relocate sections
3. Fix imports (MmGetSystemRoutineAddress for ntoskrnl exports; PsGetProcessId etc.)
4. Process relocations (IMAGE_DIRECTORY_ENTRY_BASERELOC)
5. Copy to target address (MDL write if needed)
6. Call DRIVER_INITIALIZE at DriverEntry offset
```

### Detection Vectors

- **BigPoolTable**: allocation visible via `ExAllocatePoolWithTag` with custom tag. Clean: scan BigPoolTable, remove entry.
- **PFN database**: physical page has no VAD entry -> suspect.
- **NMI stackwalk**: NMI fires, kernel inspects all thread stacks. Return address outside any PsLoadedModuleList range -> flag. Fix: fake a module entry in PsLoadedModuleList pointing to allocated region.
- **PhysicalMemory section**: any driver that opened `\Device\PhysicalMemory` is logged in handle table.

## Summary

For VGK (which uses NMI stackwalk + PsLoadedModuleList checks): **DSE bypass + NtLoadDriver is safer** because return addresses stay within a legitimate module. Manual mapping requires a fake PsLoadedModuleList entry — risky if VGK checksums the list.