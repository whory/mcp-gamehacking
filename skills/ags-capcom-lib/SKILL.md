---
name: ags-capcom-lib
description: "A reflexive kernel driver loader that bypasses Windows Driver Signature Enforcement (DSE) using a custom PE loader."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-capcom-lib
---

# CapcomLib

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-capcom-lib

## Description

A reflexive kernel driver loader that bypasses Windows Driver Signature Enforcement (DSE) using a custom PE loader.
Exploits the Capcom.sys rootkit by default to load unsigned drivers, with a modular architecture supporting other known exploitable signed drivers.
