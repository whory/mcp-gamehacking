---
name: ags-buster-call
description: "This project is a Windows kernel research tool that demonstrates techniques for detecting and disabling kernel-mode callbacks and notification routines. It enumerates registered process, thread, image"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-buster-call
---

# BusterCall

**Author:** zer0condition
**Source:** mcp-gamehacking/skills/ags-buster-call

## Description

This project is a Windows kernel research tool that demonstrates techniques for detecting and disabling kernel-mode callbacks and notification routines. It enumerates registered process, thread, image load, and registry callbacks, identifies their owning drivers, and can selectively remove or patch them. The C driver provides insight into how anti-cheat systems register kernel callbacks and how attackers attempt to disable them. It is aimed at kernel security researchers studying callback-based detection and its evasion.
