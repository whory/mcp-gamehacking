---
name: ags-prevent-vac
description: "This project focuses on it achieves its goal by hooking different steamserver.dll and winapi functions to make the anticheat think there's been an error in return."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-prevent-vac
---

# PreventVAC

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-prevent-vac

## Description

This project focuses on it achieves its goal by hooking different steamserver.dll and winapi functions to make the anticheat think there's been an error in return.
Important vac_monitor_manager function is very important and may cause unwanted side effect in lowering the trust factor because it completely prevents VAC from monitoring the game.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / explore anticheat system:vac area.
