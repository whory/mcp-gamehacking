---
name: gh-eac-bypass
description: EasyAntiCheat detection vectors, HWID sources, thread stack walking, usermode hook list, and bypass via manual-mapped driver with PiDDB and MmUnloadedDrivers cleanup.
---

# GH EasyAntiCheat Bypass

## Architecture

EAC is a kernel driver (not boot-time); loads when game launches.
Usermode EAC client DLL injected into game process.
Backend server receives scan results and issues bans.

## Detection Vectors (30+)

Hypervisor/VM detection, instrumentation callbacks, DR6/DR7 reads,
DbgUiRemoteBreakin patch detection, stack walking, handle enumeration,
IAT hooks, inline hooks, module enumeration, thread start address checks,
HWID fingerprinting, DMA device scanning, suspicious DLL blacklist,
suspicious driver blacklist, integrity callbacks.

## Thread Detection Method

1. CreateToolhelp32Snapshot to list all threads
2. NtQueryInformationThread(ThreadQuerySetWin32StartAddress) to get thread entry point
3. GetThreadContext to capture register state
4. RtlLookupFunctionEntry + RtlVirtualUnwind to walk the stack
5. For each frame RIP: check if address is inside a known loaded module
6. If RIP not backed by a module (no DllName in MEMORY_BASIC_INFORMATION): SUSPICIOUS

Key check: memory_region_info.DllName.Length == 0 means orphan thread = cheat thread.

## HWID Generation Sources

- KUSER_SHARED_DATA.ProcessorFeatures (kernel address 0xFFFFF78000000274)
- Registry: HKLM\HARDWARE\DESCRIPTION\System\BIOS
- Registry: HKLM\HARDWARE\DeviceMap\Scsi\ScsiPort0 (disk serial)
- Registry: HKLM\SYSTEM\CurrentControlSet\Services\Disk\Enum
- Registry: HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update (SusClientId)
- Registry: HKLM\SOFTWARE\Microsoft\Cryptography (MachineGuid)
- MAC address via GetAdaptersInfo
- GPU registry keys (Display adapter PCI hardware IDs)

## Usermode IAT Hooks EAC Places

kernel32.dll, kernelbase.dll, user32.dll, ws2_32.dll: common API hooks
Mono assembly functions: inline hooks for Unity games

## Suspicious DLL/Driver Blacklist

DLLs: vmclientcore.dll, virtualbox guest additions, vboxvmm.dll, Dumper.dll
Drivers: Dbgv.sys, PROCMON23.sys, dbk64.sys (Cheat Engine)

## Bypass Approach

1. Use kdmapper / KDU to load driver before EAC
2. Clear PiDDBCacheTable for your driver binary
3. Scrub MmUnloadedDrivers entries
4. Clean system pool tags left by your allocation
5. Hide orphan threads: set start address to a legit module address via NtSetInformationThread
6. Spoof HWID sources before EAC reads them (hook relevant registry and API paths)
7. Keep payload in kernel; expose IOCTL for usermode cheat to read/write game memory