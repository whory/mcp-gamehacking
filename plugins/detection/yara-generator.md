---
name: yara-generator
description: Generate YARA rules from archived cheat sources for detection and classification.
type: tool-plugin
---

# YARA Generator Plugin

Generates YARA detection rules by analyzing cheat source code patterns across the skill library.

## Commands

### `gen_yara`
Generate a YARA rule for detecting a specific technique or project.
- Input: skill name or technique description
- Output: YARA rule with strings, conditions, and metadata

### `gen_yara_family`
Generate rules for a family of related projects.
- Input: category (e.g., "kdmapper variants", "valorant externals", "dma cheats")
- Output: family detection rule covering common patterns

### `validate_yara`
Check if a YARA rule matches expected targets and has no false positives.
- Input: YARA rule text
- Output: match results against archived sources

## Built-in Rule Templates

Reference: `yara-pe-artifact-scanner` skill contains 14 ready-made rules:
- ReflectiveLoader, Meterpreter, CobaltStrike
- ClassicInjection, Hollowing, ETWPatch, AMSIPatch
- NTDLLUnhook, Packed, Mimikatz
- EntryAnomaly, BigOverlay, Sideload, DirectSyscall

## Detailed Specification

### Data Model
This plugin provides structured access to: generate yara rules from archived cheat sources for detection and classification. Data is sourced from the full skill library (4,161 skills including 3,985 with complete source code archives) and organized for efficient lookup and cross-referencing.

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