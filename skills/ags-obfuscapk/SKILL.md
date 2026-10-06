---
name: ags-obfuscapk
description: "This project is a modular Python tool that performs black-box obfuscation of Android applications. It decompiles APKs with apktool, applies obfuscation passes to smali code, resources, and manifests, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-obfuscapk
---

# Obfuscapk

**Author:** ClaudiuGeorgiu
**Source:** mcp-gamehacking/skills/ags-obfuscapk

## Description

This project is a modular Python tool that performs black-box obfuscation of Android applications. It decompiles APKs with apktool, applies obfuscation passes to smali code, resources, and manifests, and rebuilds functionally equivalent but harder-to-analyze outputs. The repository includes multiple obfuscators, documentation, and early support for Android App Bundles through an external decompiler component. It is primarily used by mobile security researchers and developers evaluating resilience against reverse engineering and signature-based detection.
