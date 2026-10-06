---
name: ags-project-nexus-csgo
description: "Project Nexus is a Counter-Strike 2 internal cheat suite that injects a feature DLL into the game process and pairs it with a separate external overlay for rendering and configuration. Written in C++2"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-project-nexus-csgo
---

# ProjectNexus CSGO

**Author:** Atonl200
**Source:** mcp-gamehacking/skills/ags-project-nexus-csgo

## Description

Project Nexus is a Counter-Strike 2 internal cheat suite that injects a feature DLL into the game process and pairs it with a separate external overlay for rendering and configuration. Written in C++20 with CMake, it includes aimbot, triggerbot, recoil control, ESP, movement assists, and skin changing, using MinHook hooks, CS2 schema and offset resolution, and shared-memory IPC between the injected module and a DirectX 11 ImGui overlay. A usermode loader performs manual-map injection through direct syscalls, with optional kernel driver, BYOVD, and PE mapper components for advanced injection workflows. It is intended for game security researchers and reverse engineers studying cheat architecture, memory manipulation, and anti-cheat evasion in modern FPS games.
