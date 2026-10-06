---
name: ags-lab-sync
description: "This project is an IDA Pro plugin that synchronizes IDB data between multiple reverse engineers working on the same binary through a shared git repository."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-lab-sync
---

# LabSync

**Author:** cellebrite-labs
**Source:** mcp-gamehacking/skills/ags-lab-sync

## Description

This project is an IDA Pro plugin that synchronizes IDB data between multiple reverse engineers working on the same binary through a shared git repository.
It exports names, types, inlined functions, and other IDB data to YAML format on each save, then commits, pushes, and pulls changes through git with automatic merge conflict resolution via git mergetool.
The plugin identifies IDBs by the MD5 of the input file for cross-user synchronization and is designed for frequent, non-intrusive syncs.
It is mainly useful for reverse engineering teams collaborating on the same binary who need lightweight IDB synchronization without full database sharing.
