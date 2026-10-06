---
name: ags-nmmp
description: "This project is NMMP (Nativ Method Map Protector), an Android native code protection tool that converts Java/Kotlin bytecode methods into native implementations. It extracts DEX method bytecodes, comp"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nmmp
---

# nmmp

**Author:** maoabc
**Source:** mcp-gamehacking/skills/ags-nmmp

## Description

This project is NMMP (Nativ Method Map Protector), an Android native code protection tool that converts Java/Kotlin bytecode methods into native implementations. It extracts DEX method bytecodes, compiles them into native ARM/x86 code via an interpreter or JIT-like transformation, and replaces the original methods with JNI bridges that call the native equivalents. This prevents standard DEX decompilation from recovering the protected logic. It is aimed at Android developers and security researchers studying bytecode-to-native conversion as a code protection technique.
