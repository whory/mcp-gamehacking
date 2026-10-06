---
name: ags-overwatch-1-cheat-source
description: "An internal Overwatch 1 cheat DLL that hooks DirectX 11 Present via Microsoft Detours to render an ImGui overlay with ESP, aimbot, skin changer (with per-hero cosmetic selection), and a full menu syst"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-overwatch-1-cheat-source
---

# Overwatch 1 cheat source

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-overwatch-1-cheat-source

## Description

An internal Overwatch 1 cheat DLL that hooks DirectX 11 Present via Microsoft Detours to render an ImGui overlay with ESP, aimbot, skin changer (with per-hero cosmetic selection), and a full menu system, protected by VMProtect SDK.
The cheat uses return-address spoofing (Spoofcall.masm) to evade Warden stack checks, implements hardware breakpoint-based hooking (BreakPoint.h), reads game entities through SDK offsets (SKD.hpp), simulates mouse input via SendInput, and includes curl-based authentication for loader/license validation.
It is mainly useful for game security researchers studying internal DX11 hook-based cheats with VMProtect integration, return-address spoofing, and Warden anti-cheat evasion in Overwatch.
