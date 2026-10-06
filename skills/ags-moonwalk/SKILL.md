---
name: ags-moonwalk
description: "This project is a Rust library and CLI for finding loaded DLL base addresses without walking the PEB module list. It uses a stack-walking approach from TEB and stack bounds data, with branch variants "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-moonwalk
---

# moonwalk

**Author:** Teach2Breach
**Source:** mcp-gamehacking/skills/ags-moonwalk

## Description

This project is a Rust library and CLI for finding loaded DLL base addresses without walking the PEB module list. It uses a stack-walking approach from TEB and stack bounds data, with branch variants that either use VirtualQuery or avoid Windows API calls for stealth. The repository is structured as both reusable library code and a command-line demonstration binary. It is primarily intended for offensive security research and low-level tooling where traditional module enumeration paths may be monitored.
