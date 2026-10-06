---
name: ags-hiearchy-eac
description: "This project is a Windows kernel proof of concept for bypassing anti-cheat self-integrity checks by manipulating call hierarchy and memory reads. It is implemented in C++ with some assembly, and hooks"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hiearchy-eac
---

# hiearchy eac

**Author:** Sinclairq
**Source:** mcp-gamehacking/skills/ags-hiearchy-eac

## Description

This project is a Windows kernel proof of concept for bypassing anti-cheat self-integrity checks by manipulating call hierarchy and memory reads. It is implemented in C++ with some assembly, and hooks selected verification routines to redirect inspection toward a cleaned image copy. The code monitors module load events, tracks EasyAntiCheat driver memory boundaries, and spoofs stack and register references during integrity-related accesses. It targets anti-cheat reverse engineering and defensive understanding of integrity verification paths.
