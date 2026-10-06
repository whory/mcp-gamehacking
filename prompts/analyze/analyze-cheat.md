---
name: analyze-cheat
description: Analyze a game cheat's architecture, techniques, and detection surface.
arguments:
  - name: target
    description: Skill name or project to analyze
    required: true
  - name: focus
    description: "Focus area: architecture, injection, stealth, detection, all"
    required: false
---

Analyze the cheat project `{target}` from our skill library.

Read the skill's SKILL.md and source.txt, then provide:

## 1. Architecture Classification
- Type: internal / external / overlay / DMA / EFI / hybrid
- Engine: UE4/UE5 / Unity Mono/IL2CPP / Source / custom
- Access: RPM / kernel driver / hypervisor / DMA / direct

## 2. Injection Chain
- How does the code get into the target process?
- What privileges are required?
- What vulnerable drivers or exploits are used?

## 3. Feature Set
- ESP / Aimbot / Triggerbot / Wallhack / Radar / Misc
- Rendering method: canvas hook / overlay / GDI / DWM

## 4. Stealth Analysis
- What hiding techniques are used?
- What traces are left?
- What anti-debug/anti-analysis is present?

## 5. Detection Surface
- What would each major AC (BE/EAC/Vanguard/VAC) catch?
- Risk rating: LOW / MEDIUM / HIGH / CRITICAL per AC

## 6. Notable Techniques
- Anything novel or well-implemented worth studying

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