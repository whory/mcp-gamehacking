---
name: ags-zygisk-il2cpp-dumper
description: "This project is an Android runtime dumping module that extracts IL2CPP data using Zygisk. It combines native C/C++ components with Android build tooling to inject into target apps and collect runtime "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-zygisk-il2cpp-dumper
---

# Zygisk Il2CppDumper

**Author:** Perfare
**Source:** mcp-gamehacking/skills/ags-zygisk-il2cpp-dumper

## Description

This project is an Android runtime dumping module that extracts IL2CPP data using Zygisk. It combines native C/C++ components with Android build tooling to inject into target apps and collect runtime metadata that may be protected in static files. By dumping after load time, it can bypass certain encryption, obfuscation, and packing defenses used in mobile Unity titles. It is mainly used in mobile game reverse engineering and security research workflows.
