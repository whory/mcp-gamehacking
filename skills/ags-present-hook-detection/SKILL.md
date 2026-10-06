---
name: ags-present-hook-detection
description: "A tool that replicates BattlEye's method for detecting IDXGISwapChain::Present hooks by creating a dummy D3D11 device and swap chain, reading the Present function pointer from the vtable, and comparin"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-present-hook-detection
---

# PresentHookDetection

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-present-hook-detection

## Description

A tool that replicates BattlEye's method for detecting IDXGISwapChain::Present hooks by creating a dummy D3D11 device and swap chain, reading the Present function pointer from the vtable, and comparing the code bytes at that address against the original dxgi.dll module to identify inline hooks (JMP patches) or vtable overwrites.
The detection checks whether the Present function's first bytes match the expected prologue or have been modified by cheat overlays that hook Present to render ESP/aimbot visuals.
It is mainly useful for anti-cheat developers implementing Present hook detection and cheat developers testing the stealth of their rendering hooks against BattlEye-style checks.
