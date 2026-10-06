---
name: ags-network-time-sync
description: "This project is an Unreal Engine plugin that provides more accurate server world time synchronization for clients."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-network-time-sync
---

# NetworkTimeSync

**Author:** Erlite
**Source:** mcp-gamehacking/skills/ags-network-time-sync

## Description

This project is an Unreal Engine plugin that provides more accurate server world time synchronization for clients.
It is implemented in C++ with Blueprint-compatible integration so multiplayer projects can consume synchronized time values in both code and visual scripting.
The plugin is structured for drop-in installation under a project plugins folder and focuses on reducing time drift in networked gameplay logic.
Its primary use case is multiplayer game development where reliable shared time is important for simulation, events, and latency-sensitive mechanics.
