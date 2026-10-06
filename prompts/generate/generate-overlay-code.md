---
name: generate-overlay-code
description: Generate overlay rendering boilerplate with ImGui integration.
arguments:
  - name: target
    description: Primary target for this prompt
    required: true
  - name: constraints
    description: Additional constraints or requirements
    required: false
---

# Generate overlay rendering boilerplate with ImGui integration.

Search the skill library for reference implementations, techniques, and patterns. Cross-reference with 3,985 archived projects.

## Detailed Workflow

### Context Gathering

Before beginning the main task, gather context by: (1) searching the skill library for relevant techniques and implementations using search_skills with multiple keyword combinations, (2) reading the most relevant skills in detail with read_skill to understand proven approaches, (3) examining source code from archived projects with read_source to see real implementations, (4) cross-referencing multiple sources to verify accuracy of offsets and techniques.

### Analysis Framework

Apply this analysis framework to the task: identify the target system (game, engine, anti-cheat, platform), determine the constraints (stealth requirements, performance budget, update resilience), evaluate available techniques from the skill library, select the optimal approach based on the constraint matrix, and provide a complete implementation plan with code examples.

### Output Structure

Structure the output as follows: (1) Executive summary with the recommended approach and key tradeoffs, (2) Architecture overview showing component relationships, (3) Implementation steps with code snippets from real projects in the archive, (4) Offset table with sources and confidence levels where applicable, (5) Detection surface analysis with risk ratings per anti-cheat, (6) Testing strategy including verification steps and fallback plans.

### Quality Checklist

Before finalizing output, verify: all offsets include data types and sizes, all code compiles under C++20 (usermode) or C11 (kernel), all techniques include detection risk assessment, all version-specific information is clearly labeled, all referenced skills actually exist in the library, and all cross-references have been verified against source code.

### Related Prompts

This prompt can be combined with other prompts for comprehensive coverage. Use analyze prompts for understanding existing implementations, bypass prompts for anti-cheat evasion, build prompts for feature-specific implementation, write prompts for code generation, reverse prompts for binary analysis, implement prompts for specific feature details, and compare prompts for technique evaluation.

### Skill Library Integration

This prompt leverages the full mcp-gamehacking skill library of 4,161 skills. Search strategies: use game name for game-specific results, technique name for cross-game implementations, engine name with feature for engine-specific approaches, and anti-cheat name with bypass for evasion techniques.