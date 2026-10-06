---
name: ags-pubg-dx
description: "An internal PUBG cheat DLL that hooks DirectX 11 to render an ImGui-based overlay menu with ESP (player boxes, weapon icons for every in-game weapon as embedded PNG textures), aimbot, and item ESP, pr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pubg-dx
---

# PUBG DX

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-pubg-dx

## Description

An internal PUBG cheat DLL that hooks DirectX 11 to render an ImGui-based overlay menu with ESP (player boxes, weapon icons for every in-game weapon as embedded PNG textures), aimbot, and item ESP, protected by VMProtect SDK integration.
The DLL uses kernel driver communication (drive.h) for memory reads, decrypts PUBG's Xenuine-protected pointers (decrypt.h), resolves UE4 GObjects/GWorld/FNameEntry arrays, and implements return-address spoofing (SpoofCall.asm) to hide call origins from anti-cheat stack-walking.
It is mainly useful for game security researchers studying internal DX11 hook-based cheat rendering, Xenuine pointer decryption, and VMProtect integration in UE4 game cheats.
