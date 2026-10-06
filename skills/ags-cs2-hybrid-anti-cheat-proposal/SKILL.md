---
name: ags-cs2-hybrid-anti-cheat-proposal
description: "This project is a technical proposal and Python proof-of-concept for a hybrid anti-cheat system aimed at Counter-Strike 2, combining automated detection with a community Overwatch-style review pipelin"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cs2-hybrid-anti-cheat-proposal
---

# CS2 Hybrid AntiCheat Proposal

**Author:** mishka-sit2002
**Source:** mcp-gamehacking/skills/ags-cs2-hybrid-anti-cheat-proposal

## Description

This project is a technical proposal and Python proof-of-concept for a hybrid anti-cheat system aimed at Counter-Strike 2, combining automated detection with a community Overwatch-style review pipeline. It simulates VAC Live-style machine learning alongside Overwatch 2.0, using Glicko-2 ratings and weighted voting so more accurate judges carry more influence and bot farms are harder to abuse. Core techniques include invisible honeypot entities for deterministic aim and wallhack proof, shadow monitoring over two to three matches before bans to reduce false positives, and special handling for esports pro cases. The repository also sketches a Source 2 fall-damage fix based on vertical height delta rather than air time. It is intended for game security researchers, anti-cheat designers, and CS2 developers evaluating scalable hybrid detection and human review designs.
