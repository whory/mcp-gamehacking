---
name: ags-fair-count
description: "FairCount is a Minecraft Fabric mod that enforces server-side mod and resource pack whitelists by requiring clients to report their loaded mods when joining a multiplayer server. Written in Java for F"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-fair-count
---

# FairCount

**Author:** XuJun05
**Source:** mcp-gamehacking/skills/ags-fair-count

## Description

FairCount is a Minecraft Fabric mod that enforces server-side mod and resource pack whitelists by requiring clients to report their loaded mods when joining a multiplayer server. Written in Java for Fabric Loader and Fabric API, it inventories standalone JARs and nested jar-in-jar mods, verifies SHA-256 hashes to detect tampered versions of approved mods, and disconnects players who lack the mod or use disallowed client additions. It also monitors external resource packs with similar whitelist and hash checks, automatically permits Fabric API modules, and provides admin commands and localized kick messages. The mod targets server administrators who need anti-cheat style client integrity enforcement for competitive PvP, events, and vanilla-fair gameplay.
