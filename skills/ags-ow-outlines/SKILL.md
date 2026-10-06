---
name: ags-ow-outlines
description: "An internal Overwatch DLL that enables enemy glow/outline ESP by patching a specific memory offset (GlowESP at 0xE22510) relative to the Overwatch.exe base address, injected into the game process as a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ow-outlines
---

# Ow Outlines

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ow-outlines

## Description

An internal Overwatch DLL that enables enemy glow/outline ESP by patching a specific memory offset (GlowESP at 0xE22510) relative to the Overwatch.exe base address, injected into the game process as a DLL.
The module resolves the base address via GetModuleHandleA("Overwatch.exe"), uses a VEH (Vectored Exception Handler) mechanism defined in USEVEH.h, and writes glow configuration values directly to the game's outline rendering data structures.
It is mainly useful for game security researchers studying internal game memory manipulation for visual ESP features and outline rendering exploitation in Overwatch.
