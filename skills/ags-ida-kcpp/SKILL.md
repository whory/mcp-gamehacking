---
name: ags-ida-kcpp
description: "This project is an IDAPython plugin for reverse engineering iOS kernelcaches that maps C++ virtual method calls to their actual implementations."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-kcpp
---

# ida kcpp

**Author:** cellebrite-labs
**Source:** mcp-gamehacking/skills/ags-ida-kcpp

## Description

This project is an IDAPython plugin for reverse engineering iOS kernelcaches that maps C++ virtual method calls to their actual implementations.
It leverages ida_kernelcache's class hierarchy reconstruction to synchronize binary functions with original virtual methods, enabling double-click navigation on C++ virtual calls and cross-reference tracking.
Inspired by ida_medigate, it exploits the unique structure of iOS kernelcaches to provide a more powerful research environment for analyzing vtable-heavy C++ code.
It is mainly useful for iOS kernel security researchers analyzing C++ virtual dispatch patterns and vtable-based code flow in Apple kernelcaches.
