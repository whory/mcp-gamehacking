---
name: gh-vac-bypass
description: Valve Anti-Cheat (VAC) architecture, module system, detection methods, and bypass -- manual mapping, no public code, no VMT hooks, human-like behavior.
---

# GH VAC Bypass

## Overview

VAC (Valve Anti-Cheat) is a USERMODE-only AC -- no kernel driver.
Primary detection: signature scanning for known cheats.
Modules are streamed from Valve servers; they never exist on disk permanently.
Dump them at runtime if you want to analyze them.

## The 5-Step Bypass (Core Rules)

1. Manually Map your DLL (bypasses LoadLibrary detection, module enumeration, PE header scan)
2. Do NOT use public downloads or open-source cheat code
3. Write everything yourself; do not distribute your hack
4. Do NOT use VMT Hooking -- use detour/trampoline hook, or better: mid-function hook (not at byte 0)
5. Play legit; do not rage-cheat

Follow these and ban chance drops below 1%.

## VAC Module Architecture

Modules streamed per-session from Valve CDN as *.tmp files.
Key known modules (reversed by danielkrupinski):
- Module 1 (SystemInfo): GetVersion, GetNativeSystemInfo, NtQuerySystemInformation (TimeOfDay, CodeIntegrity, DeviceInfo, KernelDebugger, BootEnvironment, RangeStart), volume serial, NtDll processing
- Module 2 (ProcessHandleList): enumerate running processes and handles
- Module 3 (ProcessMonitor): VacProcessMonitor filemapping, VMT hook detection on SteamService

Encryption used: MD5 (process memory hashes), ICE (import name decrypt), CRC32 (API address table), XOR (function name stack obfuscation).

## Detection Mechanisms

Signature scanning: VirtualQuery to find executable non-module-backed pages; MD5 hash; compare against known-cheat database. Scans both game process and all running processes.

Hook detection: specifically checks for hooks on GetMappedFileNameA, NtQueryVirtualMemory, GetModuleHandleA, OpenProcess, ReadProcessMemory, VirtualQuery, CreateToolHelp32Snapshot, Module32First/Next, Process32First/Next, EnumProcessModules, GetModuleBaseNameA, NtReadVirtualMemory, NtMapViewOfSection, NtOpenProcess, NtQuerySystemInformation.

Window enumeration: EnumWindows + EnumChildWindows; hashes window title + style + position; compares against known overlay window signatures. Overlay at exact game window size = obvious detection.

File hashing: NtFsControlFile with FSCTL_QUERY_USN_JOURNAL scans USN change journal for recently created/deleted/renamed files; hashes filenames and compares.

File integrity: on-disk patching of game files detected.
Process enumeration: EnumProcesses; finds external hack processes.
Event log: reads System event log for driver loading events.
Registry: scans for known cheat-related keys.
Volume serial: every module collects volume serial number.
VACNet: server-side ML on gameplay statistics for behavioral detection.

## VAC Self-Protection

Modules never hit disk (streamed). IAT encrypted. Strings XOR-encrypted.
SteamService.dll integrity checked at startup. VAC uses sysenter directly (991E.tmp).

## How VAC Bans Work

Wave-based banning: flagged data uploaded to Valve, ban issued days-weeks later.
No IP/HWID bans (accounts only). Trust Factor tracks HWID/IP for new account quality.

## Advanced Bypass (Pay Cheat Level)

- Periodically dump and diff VAC modules; patch new detections when Valve updates
- Encrypt all strings
- Randomize process, window, and class names
- Use polymorphic code to defeat signature scanning
- Stay off disk (stream payload into memory)
- Hook and spoof all VAC scan results

## Dev Workflow

Add -insecure launch argument for local development (no VAC, no secure servers).
2022 update: CSGO Trusted Mode (default on); use manual mapping to bypass DLL signing requirement.
2022 update: VAC now scans cvars (m_flFlashMaxAlpha, m_bSpotted, m_clrRender); hook cvar scanner to spoof.