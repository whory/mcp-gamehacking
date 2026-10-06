---
name: ags-anti-emulator
description: "This project is an Android emulator detection library that checks for common emulator artifacts including QEMU-specific system properties, generic hardware identifiers, operator names, build fingerpri"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-emulator
---

# anti emulator

**Author:** strazzere
**Source:** mcp-gamehacking/skills/ags-anti-emulator

## Description

This project is an Android emulator detection library that checks for common emulator artifacts including QEMU-specific system properties, generic hardware identifiers, operator names, build fingerprints, sensor availability, and file system signatures. The Java library provides a simple API that returns detection results for each heuristic, helping apps determine if they are running on a physical device or an emulated environment. It is aimed at Android security researchers and developers implementing emulator detection for anti-cheat, anti-fraud, or DRM purposes.
