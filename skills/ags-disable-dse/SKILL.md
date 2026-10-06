---
name: ags-disable-dse
description: "A tool that disables Windows Driver Signature Enforcement (DSE) by patching the kernel validation chain."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-disable-dse
---

# DisableDSE

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-disable-dse

## Description

A tool that disables Windows Driver Signature Enforcement (DSE) by patching the kernel validation chain.
Targets the SeValidateImageHeader call path through MiValidateSectionCreate and MiValidateSectionSigningPolicy to allow loading of unsigned kernel drivers.
