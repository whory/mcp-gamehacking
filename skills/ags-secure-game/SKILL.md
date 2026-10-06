---
name: ags-secure-game
description: "SecureGame is a Pong-like sample game that places core game logic inside a Windows VBS enclave."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-secure-game
---

# SecureGame

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-secure-game

## Description

SecureGame is a Pong-like sample game that places core game logic inside a Windows VBS enclave.
The solution is split into a host application for rendering and input handling and an enclave DLL that stores runtime state and gameplay rules.
It uses C and C++ with SDL2, Visual Studio, Windows SDK, and vcpkg-based dependencies on modern Windows systems with VBS features enabled.
The project is intended for anti-cheat and trusted execution research by showing how sensitive game logic can be isolated from normal user-mode tampering.
