---
name: ags-gpu-shell-code
description: "GPU_ShellCode is a proof-of-concept that stores active payload data in NVIDIA GPU memory instead of keeping it in normal process memory. It uses C/C++ on Windows with CUDA APIs and MinHook to intercep"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gpu-shell-code
---

# GPU ShellCode

**Author:** H1d3r
**Source:** mcp-gamehacking/skills/ags-gpu-shell-code

## Description

GPU_ShellCode is a proof-of-concept that stores active payload data in NVIDIA GPU memory instead of keeping it in normal process memory. It uses C/C++ on Windows with CUDA APIs and MinHook to intercept functions like Sleep and VirtualAlloc, then restores execution through a vectored exception handler when needed. The workflow copies a staged payload to GPU memory during idle periods and repopulates executable pages on wake-up, demonstrating memory hiding techniques. This project is mainly useful for low-level offensive security research and for studying anti-cheat or anti-malware memory inspection evasion.
