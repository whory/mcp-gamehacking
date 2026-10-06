---
name: ags-anti-xray-viewer
description: "AntiXrayViewer is a Minecraft Paper server plugin that automatically detects suspected X-ray cheating and records player activity for later review. Written in Java 21 and built with Gradle, it monitor"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-xray-viewer
---

# AntiXrayViewer

**Author:** RiseShieldDev
**Source:** mcp-gamehacking/skills/ags-anti-xray-viewer

## Description

AntiXrayViewer is a Minecraft Paper server plugin that automatically detects suspected X-ray cheating and records player activity for later review. Written in Java 21 and built with Gradle, it monitors ore-breaking patterns such as diamond and ancient debris, triggers configurable threshold alerts, and captures roughly three minutes of movement, look direction, and block break or place events. Server administrators can replay sessions from the suspect's first-person perspective using smooth camera interpolation and dedicated commands to list, view, delete, and manage stored recordings. The plugin is aimed at Minecraft server operators and anti-cheat workflows who need evidence-based investigation of mining cheats rather than relying on heuristics alone.
