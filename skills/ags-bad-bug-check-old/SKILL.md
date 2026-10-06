---
name: ags-bad-bug-check-old
description: "This project is a Windows kernel driver that plays animated frames during a forced system crash screen."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bad-bug-check-old
---

# Bad BugCheck Old

**Author:** NSG650
**Source:** mcp-gamehacking/skills/ags-bad-bug-check-old

## Description

This project is a Windows kernel driver that plays animated frames during a forced system crash screen.
It uses Bootvid routines such as VidBitBlt for VGA-style rendering and then triggers a bugcheck after playback.
The code is written in C for kernel-mode execution and includes low-level frame loading and display handling logic.
It is a proof-of-concept for Windows kernel graphics experimentation around BSOD behavior.
