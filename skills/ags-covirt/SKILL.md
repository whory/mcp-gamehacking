---
name: ags-covirt
description: "An x86-64 code virtualizer that transforms native instructions into a stack-based virtual machine architecture for VM-based obfuscation, supporting both PE (MinGW) and ELF binaries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-covirt
---

# covirt

**Author:** dmaivel
**Source:** mcp-gamehacking/skills/ags-covirt

## Description

An x86-64 code virtualizer that transforms native instructions into a stack-based virtual machine architecture for VM-based obfuscation, supporting both PE (MinGW) and ELF binaries.
It implements mixed boolean arithmetic (MBA) transformations and self-modifying code obfuscation passes, with code markers to define protected regions in the target binary.
It is mainly useful for security researchers studying VM-based code obfuscation techniques and building custom binary protection schemes.
