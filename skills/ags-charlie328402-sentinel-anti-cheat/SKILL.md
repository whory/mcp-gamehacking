---
name: ags-charlie328402-sentinel-anti-cheat
description: "Sentinel AntiCheat is a server-side anti-cheat system for NeoForge Minecraft servers that detects movement, combat, and world cheats through tick- and event-based checks. The Java mod monitors speed, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-charlie328402-sentinel-anti-cheat
---

# Sentinel Anti Cheat

**Author:** Charlie328402
**Source:** mcp-gamehacking/skills/ags-charlie328402-sentinel-anti-cheat

## Description

Sentinel AntiCheat is a server-side anti-cheat system for NeoForge Minecraft servers that detects movement, combat, and world cheats through tick- and event-based checks. The Java mod monitors speed, flight, water-walking, reach, killaura, autoclicker, and x-ray mining patterns without mixins or packet interception, logging each violation to a JSONL file. A companion Python Discord bot tails that log, posts formatted embeds to a channel, pings staff when cumulative violation levels cross a configurable threshold, and persists history to a relational database with optional FTP log mirroring. The design deliberately avoids automatic bans or kicks, focusing on staff alerting and audit trails for server administrators managing cheat-prone multiplayer worlds.
