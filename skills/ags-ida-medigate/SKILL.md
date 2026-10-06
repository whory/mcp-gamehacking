---
name: ags-ida-medigate
description: "An IDA Pro Python plugin that reconstructs C++ class hierarchies and virtual function tables from stripped binaries by parsing GCC RTTI structures (typeinfo, vtables) and mapping virtual calls to thei"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-medigate
---

# ida medigate

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ida-medigate

## Description

An IDA Pro Python plugin that reconstructs C++ class hierarchies and virtual function tables from stripped binaries by parsing GCC RTTI structures (typeinfo, vtables) and mapping virtual calls to their concrete implementations through union-based type disambiguation in the Hex-Rays decompiler.
The plugin builds IDA structs representing each class with proper inheritance chains, assigns vtable member types, and enables cross-referencing of virtual function calls across the decompiled code using the bundled ida-referee xref tracker, all within IDA's native structure/union framework so it supports any architecture IDA handles.
It is mainly useful for reverse engineers analyzing compiled C++ binaries with polymorphism, especially IoT/embedded firmware and game engine components where manual vtable reconstruction is prohibitively tedious.
