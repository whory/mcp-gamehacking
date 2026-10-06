---
name: ags-regenny
description: "This project is ReGenny, a reverse engineering tool for interactively reconstructing data structures from memory. It provides a real-time memory viewer that maps raw bytes to user-defined struct layou"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-regenny
---

# regenny

**Author:** cursey
**Source:** mcp-gamehacking/skills/ags-regenny

## Description

This project is ReGenny, a reverse engineering tool for interactively reconstructing data structures from memory. It provides a real-time memory viewer that maps raw bytes to user-defined struct layouts, supporting nested structs, arrays, pointers, enums, and bitfields. The C++ application reads live process memory and updates views in real time, allowing iterative refinement of struct definitions. It is aimed at game hackers and reverse engineers who need to reconstruct unknown data structures from running processes, particularly for SDK generation.
