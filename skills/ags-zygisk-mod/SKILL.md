---
name: ags-zygisk-mod
description: "This project is a standalone implementation of the Zygisk runtime interface for rooted Android environments. It targets compatibility across KernelSU, Apatch, and Magisk setups, offering an alternativ"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-zygisk-mod
---

# Zygisk mod

**Author:** Admirepowered
**Source:** mcp-gamehacking/skills/ags-zygisk-mod

## Description

This project is a standalone implementation of the Zygisk runtime interface for rooted Android environments. It targets compatibility across KernelSU, Apatch, and Magisk setups, offering an alternative module-loading path when built-in or closed implementations are unavailable. The codebase uses Android build tooling with Kotlin and native components to provide API-level behavior expected by Zygisk modules. It is mainly used by Android security and modding researchers who need flexible process injection and module experimentation on rooted devices.
