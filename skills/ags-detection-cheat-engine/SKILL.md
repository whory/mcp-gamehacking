---
name: ags-detection-cheat-engine
description: "This project is a small user-mode detector for Cheat Engine artifacts built on top of ReadDirectoryChangesW directory monitoring."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detection-cheat-engine
---

# Detection CheatEngine

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-detection-cheat-engine

## Description

This project is a small user-mode detector for Cheat Engine artifacts built on top of ReadDirectoryChangesW directory monitoring.
The sample watches the user's profile and C:\ for file creation, rename, and write events, then flags filenames containing markers such as ADDRESSES.FIRST and MEMORY.FIRST defined in CEInfo.h.
Rather than scanning memory or processes, it focuses on a lightweight filesystem-based heuristic that can be extended with additional detection strings and directory watches.
It is mainly useful for anti-cheat engineers studying simple user-mode Cheat Engine detection strategies based on table and artifact creation behavior.
