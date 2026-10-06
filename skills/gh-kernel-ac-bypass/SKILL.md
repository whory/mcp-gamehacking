---
name: gh-kernel-ac-bypass
description: Kernel-mode AC bypass strategy -- KMDF driver development, IOCTL memory R/W, KDMapper with iqvw64e.sys, vulnerable driver BYOVD list, and post-map stealth cleanup.
---

# GH Kernel Mode AC Bypass

## Architecture Goal

Keep cheat logic in kernel (hidden from usermode AC scans).
Expose IOCTL interface for usermode cheat module to call.
Kernel reads/writes game memory directly via MmCopyVirtualMemory.

## Windows Ring Separation

Ring 3 (usermode): each process has private virtual address space; AC can enumerate all.
Ring 0 (kernel): shared address space; single crash = BSOD; AC drivers live here too.
Your driver must be in kernel to hide from usermode ACs and to match kernel-level BE/EAC.

## Driver Signing Problem

Windows requires kernel drivers to be signed by Microsoft (WHQL) or a trusted CA.
Test signing (bcdedit /set testsigning on) is detected by all serious ACs.
Solution: use a vulnerable ALREADY-SIGNED driver to load YOUR unsigned driver.

## KDMapper

Tool by z175. Embeds iqvw64e.sys (Intel Network Adapter Diagnostic Driver).
iqvw64e.sys CVE-2015-2291, CVSS 7.8, signed by Intel in 2013.
IOCTL 0x80862007: accepts kernel-execute callback from usermode.
SHA256: B2B2A748EA3754C90C83E1930336CF76C5DF9CBB1E3EEC175164BB01A54A4701
Usage: KDMapper.exe YourDriver.sys

KDMapper is widely known and detected by most ACs.
For production use: find your own undisclosed vulnerable driver (or use KDU with a less-known provider).

## KDU (hfiref0x/KDU)

Supports multiple vulnerable driver providers as plug-in backends:
Intel NIC iqvw64e.sys, RTCore64 (MSI Afterburner), Gdrv (Gigabyte),
ATSZIO64 (ASUS WinFlash), MsIo64 (Patriot Viper RGB), GLCKIO2 (ASRock),
EneIo (G.SKILL Trident Z), WinRing0x64 (EVGA Precision), EneTechIo (Thermaltake).

## Post-Map Stealth (Required)

After mapping your driver, clean these or ACs will detect you:
1. PiDDBCacheTable: kernel cache of loaded driver info (timestamp + name); find and remove your entry
2. MmUnloadedDrivers: ring buffer of 50 recently unloaded drivers; scrub your entry
3. System pool tags: kernel allocations tagged by driver; use ExAllocatePool with a common tag or scrub
4. Orphan threads: threads without a backing module; set start address to legit address via KeSetEvent tricks

## Vulnerable Driver List (Partial)

iqvw64e.sys, gpcidrv64.sys, AsUpIO64.sys, AsrDrv10x.sys, BSMEMx64.sys,
BSMIXP64.sys, MsIo64.sys, WinRing0x64.sys, RTCore64, Gdrv, GLCKIO2.sys,
HwOs2Ec10x64.sys, WinFlash64.sys, amifldrv64.sys, dbk64.sys, nvflash.sys,
rtkio64.sys, semav6msr.sys, piddrv64.sys, Capcom.sys (old, fully detected)

Reference: eclypsium/Screwed-Drivers on GitHub for full list with SHA256.

## 6-Step Paste Path (Beginner)

1. Write basic KMDF driver with IOCTL for memory R/W
2. Set up DeviceIoControl IOCTL interface in usermode
3. Implement MmCopyVirtualMemory for cross-process reads
4. Use CSGO kernel multihack source as reference (open source)
5. Map with KDMapper
6. Start game (with BE/EAC service set to manual load first)

## PatchGuard Note

PatchGuard prevents patching the KERNEL itself or the AC kernel driver.
Cannot directly patch BEDaisy or EAC driver code via your own driver.
Strategy: disable/remove AC callbacks and hooks without patching AC code directly.