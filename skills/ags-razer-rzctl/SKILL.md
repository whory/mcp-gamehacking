---
name: ags-razer-rzctl
description: "This project exploits Razer's rzctl.sys kernel driver for input simulation or kernel access. The Razer driver provides privileged I/O operations that can be used to simulate mouse/keyboard input at th"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-razer-rzctl
---

# razer rzctl

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-razer-rzctl

## Description

This project exploits Razer's rzctl.sys kernel driver for input simulation or kernel access. The Razer driver provides privileged I/O operations that can be used to simulate mouse/keyboard input at the kernel level, bypassing user-mode input detection by anti-cheat systems, or for gaining kernel memory access through vulnerable IOCTLs. It is aimed at game security researchers studying Razer driver exploitation for input simulation and BYOVD.
