---
name: gh-battleye-bypass
description: BattlEye architecture, detection vectors, and bypass approach -- ObRegisterCallbacks removal, PiDDBCacheTable clear, and client emulation via kdmapper.
---

# GH BattlEye Bypass

## Architecture

- BEService: Windows service; orchestrates the AC lifecycle
- BEDaisy.sys: kernel driver; loads at game start, NOT at boot
- BEClient.dll: usermode DLL injected into game process; VMProtect-obfuscated Init export
- BEServer: backend server receives telemetry and issues bans

## BEDaisy.sys Capabilities

- ObRegisterCallbacks at altitude "363220": monitors process/thread handle opens
- NtWriteVirtualMemory / NtReadVirtualMemory inline hooks in lsass.exe and csrss.exe
- APC-based stack walking via RtlWalkFrameChain: checks thread call stacks
- NtQuerySystemInformation(SystemModuleInformation): enumerates all loaded drivers
- Module blacklist check: hashes driver names/certs against known-bad list

## BEClient.dll Detection Vectors

Debuggers, signature scan of injected memory, open handles to game process,
manually mapped modules, overlay windows, Steam hook detection, lsass modifications,
file integrity on game binaries, TCP connections to known cheat site IPs,
module certificate blacklists, single-step detection, CPUID timing hypervisor check.

## CPUID Hypervisor Timing Check

Real hardware: CPUID executes in ~200 CPU cycles.
Inside VM/hypervisor: CPUID may take 10x longer due to VM exit overhead.
BE measures CPUID timing; outlier = possible hypervisor = suspicious.

## Self-Protection

VMProtect virtualization on BEClient Init, streamed shellcode modules,
integrity checks on own code, encrypted named pipe comms with BEService,
extra logging enabled when RE tools are detected on the machine.

## Bypass Strategy

1. Use kdmapper (Intel iqvw64e.sys exploit) to load your unsigned driver BEFORE BEDaisy loads
2. Clear PiDDBCacheTable entry for your driver
3. Remove BEDaisy ObRegisterCallbacks: walk PsProcessType->CallbackList, find entry with altitude "363220", unlink it
4. With callbacks removed, open handles to game process without BE detection
5. Keep cheat in kernel; only safe reads/writes go to usermode
6. For BEClient: reverse the Init VMProtect stub on a separate clean machine; patch or emulate its scans

## Key Driver Source (anher0 pattern)

DisableBEObjectCallbacks() walks PsProcessType kernel object type,
iterates CallbackList entries, checks Altitude field for L"363220",
removes matching entry from doubly-linked list.