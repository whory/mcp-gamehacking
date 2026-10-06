---
name: ags-ret-spoofing
description: "This project is a minimal x64 return-address spoofing implementation that avoids exception-handler usage. It combines C++ and assembly stubs to set and use fake return targets with very low overhead i"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ret-spoofing
---

# Ret Spoofing

**Author:** Peribunt
**Source:** mcp-gamehacking/skills/ags-ret-spoofing

## Description

This project is a minimal x64 return-address spoofing implementation that avoids exception-handler usage. It combines C++ and assembly stubs to set and use fake return targets with very low overhead in simple call redirection scenarios. The repository documents assumptions around preserved nonvolatile registers in the Windows x64 calling convention. It is primarily used for stealth call-flow manipulation research in reverse engineering and cheat-development contexts.
