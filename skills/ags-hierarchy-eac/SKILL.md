---
name: ags-hierarchy-eac
description: "This project is a proof-of-concept Windows kernel driver that demonstrates bypassing EasyAntiCheat.sys self-integrity checks by abusing call hierarchy behavior. The codebase is mostly C++ with support"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hierarchy-eac
---

# hierarchy eac

**Author:** Sinclairq
**Source:** mcp-gamehacking/skills/ags-hierarchy-eac

## Description

This project is a proof-of-concept Windows kernel driver that demonstrates bypassing EasyAntiCheat.sys self-integrity checks by abusing call hierarchy behavior. The codebase is mostly C++ with supporting x64 assembly and includes PE parsing, section-bound checks, and custom VM-style control logic. It ships Visual Studio project files and references a technical write-up that explains the approach in detail. The primary use case is anti-cheat reverse engineering and research into kernel-level integrity mechanisms.
