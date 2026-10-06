---
name: gh-vanguard-bypass
description: Vanguard (vgk.sys) boot-time kernel AC overview -- why the race-condition bypass fails, DMA approach, and HackerOne bug bounty context.
---

# GH Vanguard Bypass

## Architecture

Vanguard = Riot Games kernel AC (vgk.sys).
Loads at BOOT -- before Windows login screen, before any user process.
This is what makes Vanguard fundamentally different from BE and EAC.

## Why Standard Bypass Fails

BE/EAC are NOT boot-time. Standard bypass: load your driver first (race),
set AC service to "manual start" in services.msc, load game after.
Your driver is already in kernel before AC driver loads -- you win the race.

With Vanguard: vgk.sys is already running when you try to map your driver.
Vanguard sees your mapping attempt and can prevent game launch or trigger a ban.

## Known Bypass Vectors

DMA (Direct Memory Access) device: hardware PCIe card that reads system RAM
directly from PCIe bus, below even kernel level. Devices like PCIe Screamer.
However: Vanguard actively scans PCIe device list and blocks known DMA cards
by their default PCI vendor/device IDs. Must modify DMA firmware IDs to bypass.

No pure software bypass is publicly documented.
Recommend: master BE bypass first, then EAC, before attempting Vanguard.

## Difficulty Rating

BE: medium (well-documented, open-source bypass examples exist)
EAC: medium-hard (more detection vectors but still kernel race possible)
Vanguard: very hard (boot-time, active RE of cheats, proactive banning, DMA scanning)

## Bug Bounty

Riot operates a HackerOne program with up to ,000 for Vanguard bypass reports.
This indicates the high value Riot places on Vanguard integrity.
Riot actively reverse-engineers circulating cheats and patches detections proactively.

## Practical Notes

EAC and Vanguard share roughly 50% of detection logic overlap.
Vanguard runs ring-0 indefinitely (not just during game), wider attack surface for research.
UEFI-level persistence (loading before OS) is the theoretical counterplay to boot-time ACs.