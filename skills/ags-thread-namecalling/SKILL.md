---
name: ags-thread-namecalling
description: "This project focuses on setThreadDescription."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-thread-namecalling
---

# thread namecalling

**Author:** hasherezade
**Source:** mcp-gamehacking/skills/ags-thread-namecalling

## Description

This project focuses on setThreadDescription.
Then, a function GetThreadDescription is called remotely on the target, via APC, causing the description buffer to be copied into the target’s working set.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / injection:windows area.
