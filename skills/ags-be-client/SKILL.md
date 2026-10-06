---
name: ags-be-client
description: "BEClient is a small C++ proof-of-concept client that demonstrates how to initialize and call a BattlEye client DLL interface."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-be-client
---

# BEClient

**Author:** LilPidgey
**Source:** mcp-gamehacking/skills/ags-be-client

## Description

BEClient is a small C++ proof-of-concept client that demonstrates how to initialize and call a BattlEye client DLL interface.
It defines game and anti-cheat data structures, registers callback functions, and invokes exported routines such as run, command, and exit handlers.
The sample is set up as a Visual Studio Windows project and includes structure headers for client communication fields.
Its primary use case is reverse engineering and research on anti-cheat client integration behavior in game processes.
