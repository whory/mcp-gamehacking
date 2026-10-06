---
name: ags-apk-sh
description: "This project is a Bash script that automates Android APK reverse engineering tasks including pulling, decoding, rebuilding, and patching APKs."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-apk-sh
---

# apk.sh

**Author:** ax
**Source:** mcp-gamehacking/skills/ags-apk-sh

## Description

This project is a Bash script that automates Android APK reverse engineering tasks including pulling, decoding, rebuilding, and patching APKs.
It uses apktool for disassembly and rebuilding, supports Frida gadget injection for runtime instrumentation, handles app bundles and split APKs by combining them into a single APK, and signs the result with apksigner.
The tool supports multiple architectures (arm, arm64, x86, x86_64) and works without requiring a rooted Android device.
It is mainly useful for mobile security researchers and reverse engineers performing Android app analysis and Frida-based instrumentation.
