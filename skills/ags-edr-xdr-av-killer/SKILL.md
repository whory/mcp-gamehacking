---
name: ags-edr-xdr-av-killer
description: "This project is a Go-based reproduction of the Spyboy Terminator technique that terminates EDR, XDR, and antivirus processes by abusing the vulnerable zam64.sys (Zemana) driver. It exploits IOCTL-base"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-edr-xdr-av-killer
---

# EDR XDR AV Killer

**Author:** EvilBytecode
**Source:** mcp-gamehacking/skills/ags-edr-xdr-av-killer

## Description

This project is a Go-based reproduction of the Spyboy Terminator technique that terminates EDR, XDR, and antivirus processes by abusing the vulnerable zam64.sys (Zemana) driver. It exploits IOCTL-based process ID trust listing to bypass the driver's access controls, then uses kernel-level process termination primitives to kill security software. It is mainly useful for security researchers studying BYOVD (Bring Your Own Vulnerable Driver) attacks and EDR evasion techniques.
