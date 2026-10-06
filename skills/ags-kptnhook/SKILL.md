---
name: ags-kptnhook
description: "This project focuses on windows kernelmode driver to inject dll into each and every process and perform systemwide function hooking."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kptnhook
---

# kptnhook

**Author:** sum-catnip
**Source:** mcp-gamehacking/skills/ags-kptnhook

## Description

This project focuses on windows kernelmode driver to inject dll into each and every process and perform systemwide function hooking.
I'm using a kernel driver to ensure each and every process is accessible, from the first processes started by windows before even the login screen.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / injection:windows area.
