---
name: analyze-update
description: Analyze a game update to find offset changes, new functions, struct layout shifts, and broken patterns.
arguments:
  - name: game
    description: Game name (e.g., cs2, valorant, fortnite)
    required: true
  - name: changes
    description: Known changes or patch notes
    required: false
---

Analyze a game update for `{game}`.
Known changes: {changes}

## Analysis Steps

### 1. Offset Migration
- Compare known offsets from skill library against update
- Identify shifted, removed, or new offsets
- Generate updated offset table

### 2. Struct Changes
- Check UObject/AActor/ACharacter layout changes
- Detect new fields, removed fields, reordered fields
- Update struct definitions

### 3. Pattern Validation
- Test all known byte patterns against new binary
- Flag broken patterns
- Generate replacement patterns

### 4. New Function Discovery
- Identify newly added functions of interest
- Classify by purpose (networking, rendering, anti-cheat, gameplay)

### 5. Anti-Cheat Changes
- Check for new AC modules or detection methods
- Identify driver signature changes
- Note new integrity checks
## Detailed Workflow

### Context Gathering
Before beginning the main task, gather context by: (1) searching the skill library for relevant techniques and implementations using search_skills with multiple keyword combinations, (2) reading the most relevant skills in detail with read_skill to understand proven approaches, (3) examining source code from archived projects with read_source to see real implementations, (4) cross-referencing multiple sources to verify accuracy.

### Analysis Framework
Apply this analysis framework to the task: identify the target system (game, engine, anti-cheat, platform), determine the constraints (stealth requirements, performance budget, update resilience), evaluate available techniques from the skill library, select the optimal approach based on the constraint matrix, and provide a complete implementation plan.

### Output Structure
Structure the output as follows: (1) Executive summary with the recommended approach and key tradeoffs, (2) Architecture diagram showing component relationships, (3) Implementation steps with code snippets from real projects in the archive, (4) Offset table with sources and confidence levels, (5) Detection surface analysis with risk ratings per anti-cheat, (6) Testing strategy including verification steps and fallback plans.

### Quality Checklist
Before finalizing output, verify: all offsets include data types and sizes, all code compiles under C++20 (usermode) or C11 (kernel), all techniques include detection risk assessment, all version-specific information is clearly labeled, all referenced skills actually exist in the library, and all cross-references have been verified against source code.

### Related Prompts
This prompt can be combined with other prompts for comprehensive coverage. Use analyze-cheat for understanding existing implementations, find-bypass for anti-cheat evasion, build-* prompts for feature-specific implementation, write-* prompts for code generation, reverse-* prompts for binary analysis, and implement-* prompts for specific feature implementation.

### Skill Library Integration
This prompt leverages the full mcp-gamehacking skill library. Key search strategies: use game name as keyword for game-specific results, use technique name for cross-game implementations, combine engine name with feature name for engine-specific approaches, and use anti-cheat name with bypass for evasion techniques. The scored search ranks results by relevance across name, description, and topic matches.