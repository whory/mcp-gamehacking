---
name: ags-dsmm
description: "This project is a Windows kernel proof of concept for manually mapping a driver into a discarded section of a legitimate driver image. It demonstrates creating a system thread after boot while attempt"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dsmm
---

# DSMM

**Author:** 0xf1a
**Source:** mcp-gamehacking/skills/ags-dsmm

## Description

This project is a Windows kernel proof of concept for manually mapping a driver into a discarded section of a legitimate driver image. It demonstrates creating a system thread after boot while attempting to avoid immediate PatchGuard-triggered detection. The implementation is centered on C-based driver development with supporting loader and structure code. It is intended for advanced kernel stealth loading experiments in authorized anti-cheat and security research environments.
