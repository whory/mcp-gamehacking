---
name: ags-ida-unity-pdb-downloader
description: "This project is an IDA Pro plugin that downloads PDB symbol files from the Unity symbol server."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-unity-pdb-downloader
---

# ida unity pdb downloader

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-ida-unity-pdb-downloader

## Description

This project is an IDA Pro plugin that downloads PDB symbol files from the Unity symbol server.
It is implemented in C++ as an IDA extension and focuses on automating symbol retrieval during interactive reverse engineering sessions.
By pulling matching debug symbols, it helps recover names and structural context in Unity-related binaries more quickly.
The plugin is primarily useful for game reverse engineering and game security analysis workflows inside IDA.
