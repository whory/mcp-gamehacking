---
name: ags-ycbr-anti-cheat
description: "YCBR AntiCheat is a lightweight anti-cheat plugin for Minecraft 1.8.9 Paper servers that detects common movement, combat, and protocol cheats. Written in Java 8 and built with Maven, it uses ProtocolL"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ycbr-anti-cheat
---

# YCBR AntiCheat

**Author:** YcbrYL1
**Source:** mcp-gamehacking/skills/ags-ycbr-anti-cheat

## Description

YCBR AntiCheat is a lightweight anti-cheat plugin for Minecraft 1.8.9 Paper servers that detects common movement, combat, and protocol cheats. Written in Java 8 and built with Maven, it uses ProtocolLib for packet inspection and a dual-thread pipeline that processes packets asynchronously before applying checks on the main thread. The plugin ships with 19 checks covering KillAura, Reach, Scaffold, Speed, Fly, Velocity, Timer, and related exploits, plus optional physics-based movement simulation inspired by Grim-style prediction. It also bundles server-side tools for offline authentication, temporary bans, DDoS connection guarding, strict-mode thresholds, and a GUI for toggling checks and configuration. It is aimed at Paper or Spigot server operators who want integrated cheat detection and basic server protection on legacy 1.8.9 networks.
