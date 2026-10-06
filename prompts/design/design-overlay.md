---
name: design-overlay
description: Design a rendering overlay architecture -- method selection, anti-detection, performance optimization.
arguments:
  - name: method
    description: "Overlay method: external-d3d11, dwm-hijack, canvas-hook, gdi, present-hook"
    required: true
  - name: game
    description: Target game (affects AC considerations)
    required: false
  - name: features
    description: "Required features: esp, menu, radar, crosshair"
    required: false
---

Design a rendering overlay using `{method}` for `{game}`.
Features: {features}

## Architecture

### 1. Rendering Method
- External D3D11 window overlay (transparent, topmost, click-through)
- DWM hijack (attach to existing window)
- Canvas hook (UE4/UE5 PostRender UFunction)
- GDI overlay (simple, detected)
- Present hook (IDXGISwapChain::Present VMT)

### 2. Window Setup
- WS_EX_TRANSPARENT, WS_EX_LAYERED, WS_EX_TOPMOST
- DwmExtendFrameIntoClientArea for transparent background
- Anti-screenshot measures (SetWindowDisplayAffinity)

### 3. Rendering Pipeline
- D3D11 device/swapchain creation
- ImGui integration (or raw D3D draw calls)
- Frame synchronization with game
- Multi-threaded rendering considerations

### 4. Detection Surface
- Window enumeration (EnumWindows, FindWindow)
- OBS/capture tool bypass
- AC screenshot detection
- DWM composition checks

### 5. Reference Implementations
Search skill library for working overlay code.
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