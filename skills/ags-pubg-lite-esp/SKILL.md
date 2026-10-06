---
name: ags-pubg-lite-esp
description: "An external PUBG Lite ESP cheat that uses a Direct2D overlay (via Coltonon's D2DOverlay library) to render player boxes, names, health bars, and distance indicators on a transparent window positioned "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pubg-lite-esp
---

# Pubg Lite ESP

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-pubg-lite-esp

## Description

An external PUBG Lite ESP cheat that uses a Direct2D overlay (via Coltonon's D2DOverlay library) to render player boxes, names, health bars, and distance indicators on a transparent window positioned over the game.
The tool reads game memory externally through RPM, resolves UE4 engine structures (GWorld, GameInstance, PlayerController, AcknowledgedPawn) using hardcoded offsets, performs world-to-screen projection via the camera view matrix, and includes configurable settings for render distance, bone ESP, and a hotkey-driven menu system.
It is mainly useful for game security researchers studying external overlay-based ESP implementations with Direct2D rendering and UE4 offset-based entity enumeration.
