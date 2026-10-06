---
name: game-offset-db
description: Cross-reference game offsets across all archived projects. Find, validate, and track offset changes between versions.
type: tool-plugin
---

# Game Offset Database Plugin

Searches the full skill library (3900+ projects) to build cross-referenced offset tables for any supported game.

## Commands

### `offset_lookup`
Find a specific offset across all archived sources.
- Input: game name, offset name (e.g., "cs2", "local_player")
- Output: all matching values, source count, confidence

### `offset_table`
Build a complete offset table for a game.
- Input: game name
- Output: all known offsets with values and sources

### `offset_diff`
Compare offsets between two project versions.
- Input: two skill names
- Output: changed offsets with old/new values

## Supported Games (by archive count)

Games with 5+ archived projects: CS2, CSGO, Valorant, Fortnite, Apex Legends,
PUBG, Rust, R6 Siege, EFT, Overwatch, DayZ, Genshin Impact, Minecraft,
Call of Duty (Warzone/MW/BO), Battlefield, Roblox, GTA V, League of Legends,
Dota 2, MapleStory, PalWorld, Arma 3, Elden Ring, Sea of Thieves

## Detailed Specification

### Data Model
This plugin provides structured access to: cross-reference game offsets across all archived projects. find, validate, and track offset changes between versions. Data is sourced from the full skill library (4,161 skills including 3,985 with complete source code archives) and organized for efficient lookup and cross-referencing.

### Query Interface
The plugin supports multiple query patterns: exact lookup by name or identifier, fuzzy search by keywords or description, filtered listing by category or type, cross-reference queries that combine data from multiple sources, and diff queries that compare values between versions or projects.

### Data Quality
All data returned by this plugin includes provenance information: which skill or archived project the data was extracted from, when that source was last updated, and whether multiple sources agree on the value. Confidence ratings help consumers decide whether to trust a result or seek additional verification.

### Caching and Performance
The plugin uses the server-side skill directory cache (30-second TTL) for listing operations. Individual skill reads are not cached and always return current data. For bulk operations (searching across all 3,985 archived sources), the plugin uses keyword pre-filtering to avoid reading every source file.

### Integration Points
This plugin is available to all 50 agents and 104 subagents. It is commonly used by: the relevant game-specific or engine-specific agent for domain queries, the offset-finder subagent for cross-referencing, the detection-assessor subagent for evaluating technique safety, and the code-analyzer subagent for classifying implementations.

### Update Strategy
Plugin data is as current as the underlying skill library. When new archived projects are added or hand-written skills are updated, the plugin automatically reflects these changes on the next query (after the 30-second cache expires). No manual index rebuilding is required.

### Usage Examples
Typical usage patterns include: looking up a specific game offset and finding all archived projects that reference it, searching for implementations of a technique and comparing their approaches, generating code templates based on patterns found across multiple sources, and building comparison tables of detection methods across anti-cheat systems.