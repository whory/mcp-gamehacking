---
name: ags-model-anti-cheat
description: "This project is a machine-learning anti-cheat pipeline for DayZ that collects server-side player telemetry and trains a classifier to flag suspicious behavior. A DayZ mission script logs per-second DA"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-model-anti-cheat
---

# ModelAnti Cheat

**Author:** rafalimma
**Source:** mcp-gamehacking/skills/ags-model-anti-cheat

## Description

This project is a machine-learning anti-cheat pipeline for DayZ that collects server-side player telemetry and trains a classifier to flag suspicious behavior. A DayZ mission script logs per-second DATA_LOG records with player position, view direction, weapon-raised state, equipped weapon, and raycast-based line-of-sight to the nearest aim target. Python preprocessing and training scripts turn those server logs into features and fit a saved random forest model, with sample log profiles that include known cheater sessions. It is aimed at DayZ server operators and game security researchers exploring data-driven detection of aimbot and wallhack-style cheating.
