---
name: write-injector
description: Design an injection chain -- method selection, payload preparation, stealth measures.
arguments:
  - name: method
    description: "Injection method: manual-map, reflective-dll, apc, thread-hijack, efi, kernel"
    required: true
  - name: target
    description: Target process
    required: true
  - name: stealth
    description: "Stealth level: none, basic, full"
    required: false
---

Design injection into `{target}` using `{method}`.
Stealth: {stealth}

## Injection Chain

### 1. Payload Preparation
- PE stripping (remove DOS header, rich header, debug directory)
- Import resolution strategy
- TLS callback handling
- Exception directory setup

### 2. Memory Allocation
- NtAllocateVirtualMemory (usermode)
- MmCopyVirtualMemory / physical write (kernel)
- Section mapping (NtCreateSection + NtMapViewOfSection)

### 3. Code Execution
- APC injection (NtQueueApcThread)
- Thread hijack (SuspendThread + SetThreadContext)
- Thread creation (NtCreateThreadEx)
- Callback-based (TLS, DllMain via LdrLoadDll)
- Instrumentation callback

### 4. Cleanup
- Header erasure
- PE header wiping
- Thread start address spoofing
- Stack spoofing for return address

### 5. Reference Implementations
Search skill library for working injectors.
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