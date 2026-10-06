---
name: ags-physpatch
description: "This project is PhysPatch, a tool for patching Windows kernel memory through physical memory access. It translates virtual addresses to physical addresses via page table walking, then directly modifie"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-physpatch
---

# physpatch

**Author:** sonodima
**Source:** mcp-gamehacking/skills/ags-physpatch

## Description

This project is PhysPatch, a tool for patching Windows kernel memory through physical memory access. It translates virtual addresses to physical addresses via page table walking, then directly modifies physical memory pages to bypass software-level memory protection. This technique avoids kernel API hooks and memory access monitoring. It is aimed at kernel researchers studying physical memory manipulation and its implications for anti-cheat and security product integrity.
