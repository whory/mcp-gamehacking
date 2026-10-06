---
name: ags-l-assemblies
description: "A collection of C# assemblies (plugins) for the LeagueSharp scripting platform targeting League of Legends, providing automated champion scripts for Annie, Cassiopeia, Cho'Gath, Darius, Evelynn, and K"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-l-assemblies
---

# L Assemblies

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-l-assemblies

## Description

A collection of C# assemblies (plugins) for the LeagueSharp scripting platform targeting League of Legends, providing automated champion scripts for Annie, Cassiopeia, Cho'Gath, Darius, Evelynn, and Katarina, plus a ward/summoner spell cooldown tracker with minimap overlay.
Each champion module implements combo logic, spell casting sequences, and target selection using the LeagueSharp SDK's Orbwalker, TargetSelector, and Spell prediction APIs, while the tracker draws cooldown indicators and ward positions on the HUD using Drawing.OnDraw callbacks.
It is mainly useful for game security researchers studying scripting platform plugin architectures and automated gameplay logic in League of Legends.
