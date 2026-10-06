---
name: ags-phantom-frida
description: "This project is a build system that patches Frida to evade common anti-instrumentation detection mechanisms. It uses Python-based patch scripts and name generators to randomize Frida's identifiable st"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-phantom-frida
---

# phantom frida

**Author:** TheQmaks
**Source:** mcp-gamehacking/skills/ags-phantom-frida

## Description

This project is a build system that patches Frida to evade common anti-instrumentation detection mechanisms. It uses Python-based patch scripts and name generators to randomize Frida's identifiable strings, symbols, and artifacts during the build process, with WSL build support and comprehensive JavaScript-based testing. It is mainly useful for mobile reverse engineers and security researchers who need stealth Frida builds that bypass anti-Frida detection in protected applications.
