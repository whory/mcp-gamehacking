---
name: ags-petal-anti-freecam
description: "PetalAntiFreecam is a Minecraft server plugin that mitigates freecam cheating by stripping terrain below a configurable Y level from chunk packets sent to players who are above that cutoff. Written in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-petal-anti-freecam
---

# PetalAntiFreecam

**Author:** boggymc
**Source:** mcp-gamehacking/skills/ags-petal-anti-freecam

## Description

PetalAntiFreecam is a Minecraft server plugin that mitigates freecam cheating by stripping terrain below a configurable Y level from chunk packets sent to players who are above that cutoff. Written in Java for Paper and CanvasMC 1.21, it hooks outgoing chunk data with PacketEvents and uses a ChunkMasker to replace hidden sections with air while filtering tile entities, then refreshes chunks as players move with a per-tick budget to limit network load. Administrators can tune restore and hide Y thresholds, reload settings at runtime, and rely on optional CanvasMC visibility listeners for async teleport handling. It targets multiplayer server operators who need lightweight, server-side anti-cheat against client-side camera exploits rather than kernel-level or commercial anti-cheat suites.
