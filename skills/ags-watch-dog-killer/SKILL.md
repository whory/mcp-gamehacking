---
name: ags-watch-dog-killer
description: "WatchDogKiller is a PoC for weaponizing the WatchDog Anti-Malware amsdk.sys or wamsdk.sys BYOVD flaw to terminate protected security products."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-watch-dog-killer
---

# WatchDogKiller

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-watch-dog-killer

## Description

WatchDogKiller is a PoC for weaponizing the WatchDog Anti-Malware amsdk.sys or wamsdk.sys BYOVD flaw to terminate protected security products.
The program opens either \\.\amsdk or the guard device GUID, optionally bypasses authorization by first registering its own PID with IOCTL_REGISTER_PROCESS (0x80002010), and then submits IOCTL_TERMINATE_PROCESS (0x80002048) requests containing a PID and wait flag.
The README ties the technique to research on Silver Fox tradecraft and states that the tested WatchDog build was still absent from common vulnerable-driver and HVCI blocklists at the time of publication.
In practice the repository is a focused EDR and AV terminator PoC, not just a vague description of another signed driver issue.
