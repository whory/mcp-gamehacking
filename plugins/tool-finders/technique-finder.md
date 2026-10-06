---
name: technique-finder
description: Find implementation examples of specific techniques across all archived source code.
type: tool-plugin
---

# Technique Finder Plugin

Searches archived source code for implementations of specific game hacking techniques.

## Commands

### `find_technique`
Find projects implementing a specific technique.
- Input: technique name (e.g., "silent aim", "dma read", "ept hook", "vmprotect unpack")
- Output: matching projects with code excerpts

### `find_pattern`
Find projects using a specific code pattern or API.
- Input: function/API name (e.g., "NtReadVirtualMemory", "DeviceIoControl", "MmCopyVirtualMemory")
- Output: projects using this API with context

### `find_similar`
Find projects similar to a given one.
- Input: skill name
- Output: related projects by technique overlap

## Technique Categories

- **Injection**: reflective, manual map, process hollowing, APC, thread hijack, EFI map
- **Hooks**: VMT, IAT, inline, .data ptr, EPT, PTE, syscall
- **Memory**: RPM, kernel driver, DMA/FPGA, hypervisor, EFI runtime
- **Rendering**: overlay, canvas hook, DWM, GDI, DirectX/Vulkan/OpenGL hook
- **Stealth**: driver hiding, thread cloaking, trace cleaning, stack spoofing
- **Anti-AC**: callback removal, minifilter bypass, ETW patching, screenshot bypass

## Detailed Specification

### Data Model
This plugin provides structured access to: find implementation examples of specific techniques across all archived source code. Data is sourced from the full skill library (4,161 skills including 3,985 with complete source code archives) and organized for efficient lookup and cross-referencing.

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