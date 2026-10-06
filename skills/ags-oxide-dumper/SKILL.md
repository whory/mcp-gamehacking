---
name: ags-oxide-dumper
description: "Oxide Dumper is an automation project that keeps Rust game offsets updated and exports them in a reusable header format."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-oxide-dumper
---

# OxideDumper

**Author:** LabGuy94
**Source:** mcp-gamehacking/skills/ags-oxide-dumper

## Description

Oxide Dumper is an automation project that keeps Rust game offsets updated and exports them in a reusable header format.
It uses Python scripts with SteamCMD, Il2CppDumper, and GitHub Actions to fetch game data, process dumps, and regenerate offset definitions.
The repository emphasizes repeatable offset extraction instead of manual one-off reverse engineering steps.
It is intended for game security researchers and tooling maintainers who track frequent Rust updates.
