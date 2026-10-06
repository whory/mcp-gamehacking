---
name: ags-common-registry-jmp-rcx
description: "A kernel-mode communication technique using the CmRegisterCallback registry callback with a JMP RCX gadget."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-common-registry-jmp-rcx
---

# Common Registry Jmp RCX

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-common-registry-jmp-rcx

## Description

A kernel-mode communication technique using the CmRegisterCallback registry callback with a JMP RCX gadget.
Locates a JMP RCX instruction in nvraid.sys and registers it as a registry callback, hijacking the callback mechanism to redirect execution to a custom handler for covert kernel communication.
