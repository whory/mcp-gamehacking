---
name: ags-revert-mapper
description: "This project is a Windows driver mapper that cleans up traces of manually mapped kernel drivers after execution. It maps an unsigned driver into kernel memory, executes its entry point, and then rever"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-revert-mapper
---

# revert mapper

**Author:** zorftw
**Source:** mcp-gamehacking/skills/ags-revert-mapper

## Description

This project is a Windows driver mapper that cleans up traces of manually mapped kernel drivers after execution. It maps an unsigned driver into kernel memory, executes its entry point, and then reverts the mapping by freeing allocated memory, removing pool tags, and clearing references to avoid detection by anti-cheat memory scanners. The C++ tool demonstrates post-execution cleanup techniques for mapped drivers. It is aimed at kernel security researchers studying anti-forensic driver mapping and detection evasion.
