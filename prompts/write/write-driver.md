---
name: write-driver
description: Design and implement a kernel driver for game memory access or system manipulation.
arguments:
  - name: purpose
    description: "Driver purpose: memory-rw, communication, hide, hook, spoof"
    required: true
  - name: communication
    description: "Comm method: ioctl, data-ptr-swap, registry-callback, shared-memory, socket"
    required: false
  - name: stealth
    description: "Stealth level: none (dev), basic (clean traces), full (hide everything)"
    required: false
---

Design a kernel driver for: `{purpose}`.
Communication: {communication}. Stealth: {stealth}.

## Architecture

### 1. Driver Type Selection
- WDM vs KMDF vs minifilter
- Loading method: sc create / vulnerable driver / EFI / manual map

### 2. Core Implementation
Based on purpose, provide:
- IOCTL dispatch (if IOCTL comm)
- .data pointer hook setup (if data-ptr-swap)
- Registry callback registration (if registry-callback)
- Memory R/W primitives (MmCopyVirtualMemory, CR3 walk, MDL)

### 3. Communication Channel
Reference implementations from skill library:
- `driver-communication` -- overview of all methods
- `ags-*` sources with working driver code

### 4. Stealth Measures (if requested)
- PiDDB cleanup
- MmUnloadedDrivers cleanup
- Thread hiding
- Driver object concealment
- Reference: `kernel-hide-stealth`

### 5. Code Template
Provide compilable WDK C code skeleton with:
- DriverEntry / DriverUnload
- Selected communication method
- Memory access primitives
- Error handling

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