---
name: struct-database
description: Known game engine structures across versions -- UE4/UE5, Source, Unity IL2CPP field layouts and offsets.
type: tool-plugin
---

# Struct Database Plugin

Cross-referenced database of game engine structures from archived sources.

## Commands

### `struct_lookup`
Find a known structure definition.
- Input: struct name (e.g., "FVector", "APlayerController", "CBaseEntity", "Il2CppClass")
- Output: field layout with offsets, size, engine version

### `struct_diff`
Compare a structure between engine versions.
- Input: struct name, version A, version B
- Output: field changes, size delta, offset shifts

### `struct_search`
Find structures containing a specific field or offset.
- Input: field name or offset value
- Output: matching structures with context

## Engines Covered

- **Unreal Engine**: UE4.x, UE5.x (UObject, AActor, ACharacter, USkeletalMesh, etc.)
- **Source Engine**: Source 1, Source 2 (CBaseEntity, C_BasePlayer, IClientEntity, etc.)
- **Unity**: Mono, IL2CPP (Il2CppClass, Il2CppObject, MethodInfo, etc.)
- **id Tech**: entity systems, BSP structures
## Detailed Specification

### Data Model
This plugin provides structured access to: known game engine structures across versions -- ue4/ue5, source, unity il2cpp field layouts and offsets. Data is sourced from the full skill library (4,161 skills including 3,985 with complete source code archives) and organized for efficient lookup and cross-referencing.

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