---
name: ags-silent-anticheat
description: "Silent AntiCheat is a server-side-only, alert-only anti-cheat mod for Minecraft 26.2 built on the Fabric loader. Written in Java, it detects suspicious flight or hover, speed or teleport, and reach ch"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-silent-anticheat
---

# silent anticheat

**Author:** danielreytalan635-tech
**Source:** mcp-gamehacking/skills/ags-silent-anticheat

## Description

Silent AntiCheat is a server-side-only, alert-only anti-cheat mod for Minecraft 26.2 built on the Fabric loader. Written in Java, it detects suspicious flight or hover, speed or teleport, and reach cheats without ever kicking, banning, or rubberbanding players, sending styled alert messages to the server console and online operators instead. Detection runs entirely on the server through per-tick movement tracking and attack or block-break distance checks, with conservative tunable thresholds to limit false positives. The project uses Fabric API server tick and player event hooks and ships as a Gradle-built mod that regular connecting players do not need to install. It targets Minecraft server operators and game security staff who want lightweight, non-punitive cheat monitoring on Fabric servers.
