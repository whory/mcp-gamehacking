---
name: ags-volcano-ac
description: "VolcanoAC is a server-side anti-cheat system for Roblox games that detects and punishes common movement exploits. Written in Luau, it runs on the game server and monitors player characters each frame "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-volcano-ac
---

# VolcanoAC

**Author:** theo926
**Source:** mcp-gamehacking/skills/ags-volcano-ac

## Description

VolcanoAC is a server-side anti-cheat system for Roblox games that detects and punishes common movement exploits. Written in Luau, it runs on the game server and monitors player characters each frame using raycasts and physics state checks. It enforces limits on walk speed, air time, and collision, and responds to violations with lag-backs that snap players to their last valid position before kicking repeat offenders. The project includes checks for speed hacks, fly hacks, noclip, and fake seated states, with configurable thresholds and a loadstring-based loader for remote updates. It is aimed at Roblox developers who need lightweight server-side protection against client-side movement cheats.
