---
name: gh-game-hacking-bible-4
description: GHB Part 4 -- anticheat bypass guide covering antidebug, signature detection, VAC, BattlEye, EAC, XignCode, polymorphic code, kernel mode drivers, vulnerable drivers, and KDMapper.
---

# GH Game Hacking Bible Part 4 -- Anti-Cheat & Kernel Mode

NOT a complete guide -- a collection of resources. Do not attempt anticheat bypass without 6+ months game hacking experience.

## Anticheat Overview

Types: file integrity, antidebug, signature-based detection, hook detection, memory integrity, virtualization, kernel drivers, VM detection.
Commercial AC: BattlEye (BE), EasyAntiCheat (EAC), Xigncode3, Punkbuster, FairFight, HackShield.
VAC: usermode, signature scanning, modules streamed from server. Ban waves, not immediate.

## Classic AntiDebug

IsDebuggerPresent: reads PEB.BeingDebugged flag. Bypass: patch to `mov eax,0; ret` externally.
CheckRemoteDebuggerPresent: calls NtQueryInformationProcess with ProcessDebugPort.
Manual PEB check: fs:[30h]+2 (x86) or gs:[60h]+2 (x64).
NtQueryInformationProcess ProcessDebugPort=7: returns 0xFFFFFFFF if debugged.
ThreadHideFromDebugger (NtSetInformationThread class 0x11): hides thread from debugger events.
Bypass: set PEB.BeingDebugged=0; hook NtQueryInformationProcess to spoof ProcessDebugPort.

## Signature Detection

AC scans memory pages for known cheat byte patterns. Defense: write your own code, don't paste public.
Junk code: changes file hash but NOT signature (repe scan still matches bytes).
Polymorphic code: changes assembly bytes every run -- defeats signature scanning. Required for pay cheats.
Polymorphism methods: modify at link stage; before injection; during manual mapping.

## VAC Bypass (5 steps)

1. Manual map your DLL (avoid LoadLibrary hook, Toolhelp32Snapshot, PEB Ldr walk).
2. Write everything yourself (no public source code with known sigs).
3. Use trampoline/midfunction hook not VMT hook.
4. Don't rage -- use humanlike features.
5. Don't share your hack.
VAC 2022+: also scans cvars (m_flFlashMaxAlpha, m_bSpotted, m_clrRender). Hook cvar scanner to spoof.

## Kernel Mode Drivers

Ring 0 vs Ring 3: kernel drivers (.sys) run below usermode, usermode AC can't touch them.
If AC has kernel driver: must also be in kernel to bypass.
Driver signing: Windows requires valid cert. Enable TestSigning (bcdedit) -- but kernel AC detects it.
Solution: exploit vulnerable signed drivers to manually map your unsigned driver.

## KDMapper (CVE-2015-2291)

Uses iqvw64e.sys (Intel NIC diagnostic driver, signed 2013, cert not revoked).
IOCTL 0x80862007 = arbitrary kernel execute. Maps your unsigned driver into kernel.
Detection: very easy for AC -- driver is well-known. Clear PiDDBCacheTable + MmUnloadedDrivers after mapping.
Also clear: system thread traces, system pool allocations.

## List of Vulnerable Drivers (partial)

iqvw64e.sys, gpcidrv64.sys, AsrDrv10x.sys, capcom.sys, gdrv.sys, RTCore64.sys, WinRing0x64.sys.
AC blacklists these -- use less known alternatives (hfiref0x/KDU for current list).

## BattlEye Architecture

BEService (Windows service), BEDaisy.sys (kernel driver), BEClient (usermode DLL, manually mapped), BEServer (backend).
BEDaisy: ObRegisterCallbacks (blocks OpenProcess), blocks handle creation, NtQuerySystemInformation hooks, APC injection for stack walking.
BEClient: dynamically streamed shellcode, VMProtect obfuscation, integrity checks.
Stack walking: RtlWalkFrameChain detects threads outside known module ranges.
Hypervisor detection: CPUID timing (normal ~200 cycles, virtualized ~2000+ cycles).

## EAC (EasyAntiCheat)

EAC usermode hooks (partial): hk_NtUserGetAsyncKeyState, hk_VirtualAlloc_iat, hk_NtProtectVirtualMemory, mono assembly hooks.
Suspect thread detection: enumerates threads, gets start address via NtQueryInformationThread, stack-walks via RtlVirtualUnwind, flags threads with executable pages not backed by a module.
Manually mapped driver detection: PiDDBCacheTable, MmUnloadedDrivers, system pool/thread enumeration.

## XignCode3

Heartbeat: constant AC<->server comms, tampering causes disconnect (30-120s).
Detections: all debuggers, code page CRC checks, common hooks, VMT hooks, module loading.
Files: x3.xem (main), xhunter1.sys (kernel driver).
Bypass approach: hook NtQueryVirtualMemory to hide module, manual map to avoid Toolhelp/PEB/NtQueryVM detection, hook GAKS (wait for XC to hook first, then re-hook after).

## Kernel Anticheat Bypass Steps

1. Get kernel code execution via vulnerable driver (KDMapper/KDU).
2. Clear PiDDBCacheTable (driver timestamp blacklist) and MmUnloadedDrivers.
3. Hide system threads and pool allocations.
4. Dump + reverse the AC's kernel module and usermode module.
5. Patch/hook AC detections from kernel.
6. Inject usermode module with kernel protection.
PatchGuard: detects kernel patches -- must disable or work around it (complex).

## Key Resources

- hfiref0x/KDU: Kernel Driver Utility (many vulnerable drivers)
- secret.club: BattlEye analysis and mitigation articles
- Daniel Krupinski: reversed VAC source code
- CVEAC-2020: Bypassing EasyAntiCheat integrity checks