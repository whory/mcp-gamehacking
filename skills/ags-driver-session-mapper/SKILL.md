---
name: ags-driver-session-mapper
description: "This project is a session-space driver mapper that manually loads a driver image into session memory instead of using the normal kernel module loading path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-session-mapper
---

# Driver SessionMapper

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-session-mapper

## Description

This project is a session-space driver mapper that manually loads a driver image into session memory instead of using the normal kernel module loading path.
The archived README describes it as mapping drivers into session space, and the solution pairs a kernel component with a client that passes raw image data for import fixing, section copying, relocation, and entry-point execution.
Its main hook replaces an internal `ntoskrnl` callback path, allocates session-space memory for the target image, resolves imports and relocations, then clears parts of the loader metadata on unload to reduce the mapped driver's visibility.
It is mainly useful for Windows kernel researchers studying manual mapping into session space, alternative driver loading flows, and techniques for hiding mapped modules from ordinary loader structures.
