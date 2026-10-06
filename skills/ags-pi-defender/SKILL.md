---
name: ags-pi-defender
description: "This project is a Windows kernel security driver designed to block process injection techniques. It protects target processes by filtering dangerous handle rights such as remote memory write and opera"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pi-defender
---

# pi defender

**Author:** PI-Defender
**Source:** mcp-gamehacking/skills/ags-pi-defender

## Description

This project is a Windows kernel security driver designed to block process injection techniques. It protects target processes by filtering dangerous handle rights such as remote memory write and operation permissions that injection chains rely on. The codebase includes C++ driver sources, tests, and documentation covering attacks like process hollowing, doppelganging, ghosting, and DLL injection. It is primarily useful for defensive security research and anti-cheat style hardening on Windows.
