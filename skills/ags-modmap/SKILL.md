---
name: ags-modmap
description: "This project is a DLL manual mapper that extends a pre-existing module's size and maps the payload DLL into the extended region."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-modmap
---

# modmap

**Author:** btbd
**Source:** mcp-gamehacking/skills/ags-modmap

## Description

This project is a DLL manual mapper that extends a pre-existing module's size and maps the payload DLL into the extended region.
It forcefully allocates memory immediately after a target module's end, extends the module's size in its LDR entry to cover the new allocation, and maps the DLL into this region to appear as part of the legitimate module.
The kernel driver uses MiAllocateVad for memory allocation and LDR entry manipulation to make the injected module blend with the host process's module list.
It is mainly useful for game security researchers studying advanced manual mapping techniques that evade module enumeration-based detection.
