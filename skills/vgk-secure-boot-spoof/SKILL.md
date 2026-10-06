---
name: vgk-secure-boot-spoof
description: Spoofing Secure Boot state for Vanguard -- ntoskrnl pattern patch, registry key (UEFISecureBootEnabled), WCBL file/registry patch, and KUSER_SHARED_DATA.DbgSecureBootEnabled.
---

# VGK Secure Boot Spoof

Vanguard (vgk.sys) checks Secure Boot status via multiple layers:
1. Kernel-internal flags in ntoskrnl (KUSER_SHARED_DATA + ntoskrnl byte)
2. Registry: `SYSTEM\CurrentControlSet\Control\SecureBoot\State\UEFISecureBootEnabled`
3. WCBL (Windows Boot Configuration Log): file + registry binary blob
4. TPM PCR attestation of boot chain (handled separately by TPM spoof)
5. CI registry: `SYSTEM\CurrentControlSet\Control\CI\Protected\Licensed` and `CI\UMCIAuditMode`

## 1. ntoskrnl Byte Patch (SetSecureBootNtosValue)

Pattern: `C1 E8 03 24 01 88 42 01` (relative offset -0x6, type 0x2 = byte at fixed address).
Found value is a ULONG; set bits 0 and 3:

```cpp
ULONG ulValue = *(ULONG*)(pDriver->ulSecureBootValueAddress);
ulValue |= 0x1;  // secure boot enabled flag
ulValue |= 0x8;  // supplementary flag
*(ULONG*)(pDriver->ulSecureBootValueAddress) = ulValue;
```

Save original value in `pDriver->ulSecureBootOrigValue` for restore on unload.
**Risk**: direct write to ntoskrnl code pages may trigger PatchGuard on systems with HVCI active. Use SafeWrite (MDL remap) to avoid CR0 bypass pattern.

## 2. Registry Key (SetSecureBootRegKey)

```
\Registry\Machine\SYSTEM\CurrentControlSet\Control\SecureBoot\State
  UEFISecureBootEnabled = DWORD 1
```

```cpp
DWORD dwValue = 0x1;
ZwSetValueKey(hKey, &usValueName, 0, REG_DWORD, &dwValue, sizeof(DWORD));
```

Additional CI keys that VGK reads:
```
\SYSTEM\CurrentControlSet\Control\CI\Protected  -> Licensed = 1
\SYSTEM\CurrentControlSet\Control\CI            -> UMCIAuditMode = 0
```

## 3. WCBL File Patch (SetWCBLFile)

WCBL = Windows Boot Configuration Log. Contains Secure Boot status as a binary record.
Path read from registry: `SYSTEM\CurrentControlSet\Control\IntegrityServices\PlatformLogFile`.

Algorithm: scan file bytes for `S.e.c.u` (UTF-16 `0x0075006300650053`).
- `iSizeIndex` = found_offset - 0x24 (size byte)
- `iSecureBootIndex` = found_offset + 0x14 (SB status byte)
- `iSecureBootIndex2` = found_offset - 0x8 (backup SB byte)

If `pAlloc[iSizeIndex] == 0x34` (size=52): insert extra byte, bump size to 0x35, set both SB bytes to 0x1.
If `pAlloc[iSizeIndex] == 0x35` (size=53): set SB byte and backup byte to 0x1.
Write back with `ZwWriteFile` at offset 0.

## 4. WCBL Registry Patch (SetWCBLRegistry)

Same algorithm as file patch, but operates on:
```
\SYSTEM\CurrentControlSet\Control\IntegrityServices\WBCL  (REG_BINARY)
```
Read with `ZwQueryValueKey(KeyValuePartialInformation)`, scan for `S.e.c.u`, patch, write back with `ZwSetValueKey`.

## 5. KUSER_SHARED_DATA.DbgSecureBootEnabled (SetUserSharedDataSecureBoot)

```cpp
_KUSER_SHARED_DATA2* pSharedData = (_KUSER_SHARED_DATA2*)KI_USER_SHARED_DATA;
// Copy struct to non-paged pool to avoid direct write triggering PG
_KUSER_SHARED_DATA2* pAlloc = ExAllocatePool(NonPagedPool, sizeof(_KUSER_SHARED_DATA2));
memcpy(pAlloc, pSharedData, sizeof(_KUSER_SHARED_DATA2));
pAlloc->DbgSecureBootEnabled = 1;
SafeWrite(&pSharedData->SharedDataFlags, &pAlloc->SharedDataFlags, sizeof(ULONG));
ExFreePool(pAlloc);
```

## Call order

```cpp
SetSecureBootNtosValue();    // kernel flags
SetSecureBootRegKey();       // registry UEFISecureBootEnabled
SetTPMRegister();            // reads PlatformLogFile path -> SetWCBLFile + SetWCBLRegistry
SetUserSharedDataSecureBoot(); // KUSER_SHARED_DATA
```

## Notes

- Ideal approach: enable Secure Boot in BIOS for real attestation. Use only when testing on secondary or VM.
- Patterns may shift between Windows builds — verify offsets before casting.
- Patching `ulSecureBootValueAddress` directly can cause BSOD (`CRITICAL_STRUCTURE_CORRUPTION`) if PatchGuard scans that region. Use MDL-based SafeWrite.