---
name: ags-shoggoth
description: "Polymorphic x86/x64 shellcode encoder that uses the asmjit JIT assembler to generate unique, position-independent encrypted payloads on each run. It applies two encryption layers with randomized decod"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shoggoth
---

# Shoggoth

**Author:** frkngksl
**Source:** mcp-gamehacking/skills/ags-shoggoth

## Description

Polymorphic x86/x64 shellcode encoder that uses the asmjit JIT assembler to generate unique, position-independent encrypted payloads on each run. It applies two encryption layers with randomized decoder stubs, producing output that can be executed directly as shellcode. The project also bundles standalone COFF and PE reflective loaders (built as position-independent blobs) for loading Cobalt Strike BOFs or arbitrary PE executables from memory.
