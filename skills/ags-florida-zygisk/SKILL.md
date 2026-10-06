---
name: ags-florida-zygisk
description: "Florida-zygisk is a Magisk, KernelSU, and APatch root module that automatically launches Florida, a patched anti-detection build of frida-server, when the device boots. It packages architecture-specif"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-florida-zygisk
---

# florida zygisk

**Author:** thelok1s
**Source:** mcp-gamehacking/skills/ags-florida-zygisk

## Description

Florida-zygisk is a Magisk, KernelSU, and APatch root module that automatically launches Florida, a patched anti-detection build of frida-server, when the device boots. It packages architecture-specific Florida binaries built by applying Ylarod's source-level Frida patches, with supplemental Python carry-fix scripts to keep RPC obfuscation and anti-anti-Frida agent renaming working across new Frida releases. The module is derived from the magisk-frida template and includes shell service scripts that start the server on a random port, expose runtime status in module metadata, and allow toggling the server via a KernelSU Action button. Primary languages are Python for building and patching and shell for installation and boot-time management. It targets Android reverse engineers and game security researchers who need persistent, harder-to-detect Frida instrumentation on rooted devices for dynamic analysis and bypassing common anti-Frida and anti-cheat heuristics.
