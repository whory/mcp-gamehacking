---
name: ags-cstrike2-hack
description: "This project is a Rust-based internal cheat base for Counter-Strike 2 designed as a modular framework for building in-game features."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cstrike2-hack
---

# cstrike2 hack

**Author:** W1lliam1337
**Source:** mcp-gamehacking/skills/ags-cstrike2-hack

## Description

This project is a Rust-based internal cheat base for Counter-Strike 2 designed as a modular framework for building in-game features.
It organizes interfaces, hooks, settings, and rendering into separate crates and modules, with macro-assisted interface handling and pattern scanning for dynamic offsets.
The code integrates DirectX 11 and egui for an overlay menu and uses MinHook-based function interception.
It is primarily aimed at game hacking research and developers who want a starting point for internal CS2 tooling.
