---
name: signature-generator
description: Generate byte patterns, IDA signatures, and code signatures for functions across game versions.
type: tool-plugin
---

# Signature Generator Plugin

Creates and validates byte patterns for game function identification.

## Commands

### `sig_generate`
Generate a byte signature for a function.
- Input: function description or known bytes
- Output: IDA-style pattern with wildcards, uniqueness score

### `sig_validate`
Check if a signature still matches across known versions.
- Input: signature pattern, game name
- Output: match results from archived sources, false positive count

### `sig_migrate`
Update a broken signature for a new game version.
- Input: old signature, old version context
- Output: suggested new signature based on function structure

### `sig_batch`
Generate signatures for multiple functions at once.
- Input: list of function names/descriptions
- Output: signature table with patterns and confidence scores

## Pattern Formats

- IDA style: `48 8B 05 ?? ?? ?? ?? 48 85 C0`
- Code style (C array): `\x48\x8B\x05\x00\x00\x00\x00\x48\x85\xC0` with mask
- x64dbg style: `48 8B 05 ?? ?? ?? ?? 48 85 C0`
## Detailed Specification

### Data Model
This plugin provides structured access to: generate byte patterns, ida signatures, and code signatures for functions across game versions. Data is sourced from the full skill library (4,161 skills including 3,985 with complete source code archives) and organized for efficient lookup and cross-referencing.

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