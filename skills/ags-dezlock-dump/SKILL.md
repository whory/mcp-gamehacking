---
name: ags-dezlock-dump
description: "A runtime schema and RTTI extraction tool for Source 2 engine games (Deadlock, CS2, Dota 2) that dumps class hierarchies, netvars, interfaces, protobuf definitions, and global singletons from live gam"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dezlock-dump
---

# dezlock dump

**Author:** dougwithseismic
**Source:** mcp-gamehacking/skills/ags-dezlock-dump

## Description

A runtime schema and RTTI extraction tool for Source 2 engine games (Deadlock, CS2, Dota 2) that dumps class hierarchies, netvars, interfaces, protobuf definitions, and global singletons from live game processes.
It includes pattern scanning, MSVC x64 RTTI hierarchy reconstruction, a WebSocket-based live bridge for real-time introspection, and a visual schema browser.
It is mainly useful for game security researchers and modders reverse engineering Source 2 engine internals and extracting SDK definitions from Valve games.
