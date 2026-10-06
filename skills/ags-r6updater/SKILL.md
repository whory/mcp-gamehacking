---
name: ags-r6updater
description: "This project is an offset dumper and updater utility for Rainbow Six Siege."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-r6updater
---

# R6Updater

**Author:** Kix48
**Source:** mcp-gamehacking/skills/ags-r6updater

## Description

This project is an offset dumper and updater utility for Rainbow Six Siege.
It uses C++ pattern scanning and memory modules to locate managers and patch-sensitive offsets after updates.
The codebase is structured as a Visual Studio x64 Windows tool with separate scan and memory handling components.
Its usage flow focuses on refreshing signatures and extracting usable offsets during a game session.
It is primarily aimed at reverse engineers and cheat developers maintaining game-specific data.
