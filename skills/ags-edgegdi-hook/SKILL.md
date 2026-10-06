---
name: ags-edgegdi-hook
description: "This project is a proof of concept for hooking GDI behavior through an EdgeGDI-related data section pointer patch. It uses C++ pattern scanning and runtime pointer replacement to intercept exported GD"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-edgegdi-hook
---

# edgegdi hook

**Author:** 0mdi
**Source:** mcp-gamehacking/skills/ags-edgegdi-hook

## Description

This project is a proof of concept for hooking GDI behavior through an EdgeGDI-related data section pointer patch. It uses C++ pattern scanning and runtime pointer replacement to intercept exported GDI32-related functionality such as BitBlt paths. The repository includes implementation code and a small test harness, with notes and screenshots from specific Windows 10 builds. It is mainly relevant to graphics-hook research and low-level anti-cheat evasion analysis where minimizing code-section patching is important.
