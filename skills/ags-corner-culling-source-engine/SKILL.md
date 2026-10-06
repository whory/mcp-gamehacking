---
name: ags-corner-culling-source-engine
description: "This project is a Source engine anti-wallhack extension that performs strict server-side visibility culling. It combines C++ extension code with SourceMod scripts and map-side occluder definitions to "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-corner-culling-source-engine
---

# CornerCullingSourceEngine

**Author:** 87andrewh
**Source:** mcp-gamehacking/skills/ags-corner-culling-source-engine

## Description

This project is a Source engine anti-wallhack extension that performs strict server-side visibility culling. It combines C++ extension code with SourceMod scripts and map-side occluder definitions to control what players can see in competitive matches. The system emphasizes ray-cast correctness, low frame-time overhead, and latency-safe behavior to avoid visibility popping for normal ping ranges. It is primarily aimed at server operators and researchers improving anti-cheat protections in Source-based games.
