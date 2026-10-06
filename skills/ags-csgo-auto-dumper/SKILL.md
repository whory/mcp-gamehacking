---
name: ags-csgo-auto-dumper
description: "This project is a Windows C++ automation utility that tracks Counter-Strike: Global Offensive updates and triggers offset dumping. It uses steamcmd commands, build ID parsing, and a timed loop to dete"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-csgo-auto-dumper
---

# csgo auto dumper

**Author:** Akandesh
**Source:** mcp-gamehacking/skills/ags-csgo-auto-dumper

## Description

This project is a Windows C++ automation utility that tracks Counter-Strike: Global Offensive updates and triggers offset dumping. It uses steamcmd commands, build ID parsing, and a timed loop to detect new game builds. When an update is found, it launches a local dumper executable and follow-up scripts to refresh generated data. It is primarily intended for maintaining up-to-date reverse engineering artifacts with minimal manual work.
