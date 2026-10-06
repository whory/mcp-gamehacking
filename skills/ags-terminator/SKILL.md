---
name: ags-terminator
description: "This project is Terminator, a Windows tool that terminates protected processes (antivirus, EDR, anti-cheat) using a vulnerable signed driver (BYOVD). It exploits the Zemana anti-malware driver's arbit"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-terminator
---

# Terminator

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-terminator

## Description

This project is Terminator, a Windows tool that terminates protected processes (antivirus, EDR, anti-cheat) using a vulnerable signed driver (BYOVD). It exploits the Zemana anti-malware driver's arbitrary process termination IOCTL to kill processes that cannot be terminated through standard APIs due to kernel-level protections. It is aimed at red team operators and security researchers studying BYOVD-based security product termination.
