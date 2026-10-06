---
name: gh-faceit-bypass
description: FACEIT AC overview -- boot-time kernel driver, DMA-based bypass approach, detection vectors (callbacks, minifilter, mouse hooks), and RE methodology.
---

# GH FACEIT Bypass

## Overview

FACEIT is a competitive CS2/CSGO platform with a kernel-level AC.
Considered second-best AC after ESEA. Loads AT BOOT like Vanguard.
Combined client-side and server-side detection with behavioral ML (FBI system).

## Boot-Time Load (Critical Difference)

FACEIT, Vanguard, and ESEA load at boot before any user process.
Standard race-condition bypass (load driver before AC) does NOT work.
When you try to map your cheat driver, FACEIT is already running and can detect it.

## Detection Methods (Known)

Kernel callbacks: ObRegisterCallbacks, LoadImageNotify (logs driver/DLL/image loads),
CreateProcessNotify (logs process creation), CreateThreadNotify (remote thread detection).
Minifilter driver: monitors filesystem for DLL injection and suspicious file access.
Low-level mouse hooks: WH_MOUSE_LL and WH_KEYBOARD_LL to detect mouse_event API.
Unloading known vulnerable drivers: checks DeviceName against cpuz141, speedfan, etc.
and forcibly unloads them.

## Bypass Approaches

Option A -- DMA Device: PCIe device (e.g., Screamer M2) reads system RAM at hardware level.
Operates below kernel, bypasses most software detections.
Two-PC setup: gaming PC has DMA device; attack PC receives memory data via USB cable;
Raspberry Pi relays player positions to attacker mobile phone.
Problem: FACEIT scans PCIe device identifiers; default DMA firmware IDs are detected.
Must reflash DMA firmware with custom vendor/device IDs.

Option B -- Custom Unknown Vulnerable Driver:
Publicly known drivers (iqvw64e, speedfan, cpuz141) are immediately detected and unloaded.
Find an undisclosed vulnerable driver yourself, not on any public blocklist.
Even then, FACEIT sends scan telemetry to server; behavioral bans possible later.

## RE Methodology

1. Use a SEPARATE CLEAN PC (not your gaming PC) to avoid FACEIT logging your tools
2. Map FACEIT driver from a clean system
3. Dump the driver binary
4. Static analysis in IDA Pro
5. Identify detection routines and stub them out / patch behavioral checks

## Cheats That May Bypass FACEIT

- Color-based aimbots (DXGI screen capture, HSV scan for enemy highlights): no memory access
- Recoil macros (hardware-level, Raspberry Pi, Arduino)
These bypass memory-level detection entirely as they operate externally.

## Recommended Learning Path

1. Complete BE bypass first
2. Complete EAC bypass
3. Only then attempt FACEIT (requires both skill sets plus DMA hardware knowledge)