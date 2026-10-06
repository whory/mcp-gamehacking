---
name: ags-known-dll-unhook
description: "This project is a Windows API unhooking utility that restores module code sections from clean images in the \KnownDlls namespace. It iterates loaded DLLs, maps trusted copies, replaces the hooked .tex"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-known-dll-unhook
---

# KnownDllUnhook

**Author:** ORCx41
**Source:** mcp-gamehacking/skills/ags-known-dll-unhook

## Description

This project is a Windows API unhooking utility that restores module code sections from clean images in the \KnownDlls namespace. It iterates loaded DLLs, maps trusted copies, replaces the hooked .text section, and restores original memory protections. The implementation relies on low-level native syscalls for critical memory and mapping operations. It is intended for security research on EDR or anti-cheat hook detection and evasion behavior.
