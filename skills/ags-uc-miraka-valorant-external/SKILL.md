---
name: ags-uc-miraka-valorant-external
description: "This project is a C++ proof-of-concept external framework for reading Valorant game memory with a paired kernel driver and user-mode client. The kernel component hooks a win32k function to receive cus"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-uc-miraka-valorant-external
---

# UCMiraka ValorantExternal

**Author:** Chase1803
**Source:** mcp-gamehacking/skills/ags-uc-miraka-valorant-external

## Description

This project is a C++ proof-of-concept external framework for reading Valorant game memory with a paired kernel driver and user-mode client. The kernel component hooks a win32k function to receive custom request packets and exposes operations such as process memory reads and PML4-related data retrieval. The user component locates the game process, initializes the driver channel, and repeatedly reads core Unreal pointers like UWorld, ULevel, and GameState. It is primarily aimed at low-level game hacking and anti-cheat research focused on driver communication and external data extraction.
