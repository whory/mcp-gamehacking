---
name: minifilter-reference
description: Filesystem minifilter altitude and callback reference.
type: tool-plugin
---

# Plugin: minifilter-reference

Filesystem minifilter altitude and callback reference.

## Data Model

This plugin provides structured access to data sourced from the full skill library (4,161 skills including 3,985 with complete source code archives). Data is organized for efficient lookup and cross-referencing across multiple archived projects.

## Query Interface

The plugin supports multiple query patterns: exact lookup by name or identifier, fuzzy search by keywords or description, filtered listing by category or type, cross-reference queries that combine data from multiple sources, and diff queries that compare values between versions or projects.

## Data Quality

All data returned includes provenance information: which skill or archived project the data was extracted from, when that source was last updated, and whether multiple sources agree on the value. Confidence ratings help consumers decide whether to trust a result or seek additional verification.

## Caching and Performance

The plugin uses the server-side skill directory cache (30-second TTL) for listing operations. Individual skill reads are not cached and always return current data. For bulk operations searching across all archived sources, the plugin uses keyword pre-filtering to avoid reading every source file.

## Integration Points

This plugin is available to all agents and subagents. It is commonly used by the relevant game-specific or engine-specific agent for domain queries, the offset-finder subagent for cross-referencing, the detection-assessor for evaluating technique safety, and the code-analyzer for classifying implementations.

## Update Strategy

Plugin data is as current as the underlying skill library. When new archived projects are added or hand-written skills are updated, the plugin automatically reflects changes on the next query after cache expires. No manual index rebuilding is required.

## Usage Examples

Typical usage patterns include: looking up specific data points across all archived projects, searching for implementations and comparing approaches, generating structured output from patterns found across multiple sources, and building comparison tables across different versions or implementations.

## Data Sources

Cross-references relevant skills and archived source code from the skill library, prioritizing hand-written reference skills for authoritative depth and archived projects for real-world implementation examples.