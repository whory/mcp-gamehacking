---
name: anti-cheat-timeline
description: Track anti-cheat updates, detection waves, and bypass shelf-life across BattlEye, EAC, Vanguard, VAC, FACEIT.
type: tool-plugin
---

# Anti-Cheat Timeline Plugin

Tracks anti-cheat evolution and bypass effectiveness over time.

## Commands

### `ac_latest`
Get latest known detection capabilities for an anti-cheat.
- Input: anti-cheat name (BE, EAC, Vanguard, VAC, FACEIT)
- Output: current detection methods, recent additions, known bypasses still working

### `ac_bypass_history`
History of bypasses for a specific technique.
- Input: technique (e.g., "manual map", "EPT hook", "HWID spoof")
- Output: timeline of when it worked, when detected, current status per AC

### `ac_compare`
Compare detection capabilities between anti-cheats.
- Input: two AC names
- Output: side-by-side comparison of detection methods and coverage

### `ac_detect_method`
Detailed explanation of a specific detection method.
- Input: detection method (e.g., "stack walking", "module enumeration", "timing attack", "hypervisor detection")
- Output: how it works, which ACs use it, known evasion techniques

## Data Sources

Cross-references all `vgk-*`, `ags-*battleye*`, `ags-*eac*`, `ags-*vac*` skills and archived bypass research.
## Detailed Specification

### Data Model
This plugin provides structured access to: track anti-cheat updates, detection waves, and bypass shelf-life across battleye, eac, vanguard, vac, faceit. Data is sourced from the full skill library (4,161 skills including 3,985 with complete source code archives) and organized for efficient lookup and cross-referencing.

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