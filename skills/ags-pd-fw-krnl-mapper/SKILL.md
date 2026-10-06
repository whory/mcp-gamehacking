---
name: ags-pd-fw-krnl-mapper
description: "A kernel driver mapper that exploits the PdFwKrnl.sys (BitLocker) driver vulnerability to bypass Driver Signature Enforcement (DSE) and map unsigned drivers into kernel space via SeValidateImageData/H"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pd-fw-krnl-mapper
---

# PdFwKrnlMapper

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-pd-fw-krnl-mapper

## Description

A kernel driver mapper that exploits the PdFwKrnl.sys (BitLocker) driver vulnerability to bypass Driver Signature Enforcement (DSE) and map unsigned drivers into kernel space via SeValidateImageData/Header patching.
