---
name: ags-hazedumper
description: "Auto-updating CS:GO offset and netvar repository that publishes memory signatures and resolved offsets for engine.dll and client.dll in multiple output formats (JSON, TOML, YAML, C++ headers, C#, VB)."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hazedumper
---

# hazedumper

**Author:** frk1
**Source:** mcp-gamehacking/skills/ags-hazedumper

## Description

Auto-updating CS:GO offset and netvar repository that publishes memory signatures and resolved offsets for engine.dll and client.dll in multiple output formats (JSON, TOML, YAML, C++ headers, C#, VB). A companion config.json defines byte-pattern signatures with relative/absolute addressing modes for structures like dwClientState, dwEntityList, dwLocalPlayer, and netvar offsets (m_iHealth, m_vecOrigin, etc.), enabling external memory-reading cheats to stay current across game patches.
