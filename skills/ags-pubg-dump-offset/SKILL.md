---
name: ags-pubg-dump-offset
description: "A versioned collection of dumped PUBG memory offsets covering dozens of game updates from version 19.1 through 24.2, with each header file containing hardcoded addresses for GObjects, GWorld, Xenuine "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pubg-dump-offset
---

# pubg dump offset

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-pubg-dump-offset

## Description

A versioned collection of dumped PUBG memory offsets covering dozens of game updates from version 19.1 through 24.2, with each header file containing hardcoded addresses for GObjects, GWorld, Xenuine decryption keys, FNameEntry, player state fields (Health, GroggyHealth, TeamNum), camera parameters, weapon data, bone indices, vehicle structures, and item/loot offsets.
Each version-specific offset file tracks changes across PUBG patches including encrypted pointer bases (XenuineDecrypt), skeletal mesh bone arrays, weapon trajectory/ballistics data, and replay/spectator detection fields, providing a historical record of how the game's UE4 memory layout evolved across updates.
It is mainly useful for game security researchers studying UE4 offset evolution, Xenuine encryption scheme changes, and PUBG's anti-cheat hardening across patch cycles.
