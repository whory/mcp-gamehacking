---
name: spoof-hardware
description: Design HWID spoofing strategy -- disk, NIC, GPU, SMBIOS, registry, firmware-level.
arguments:
  - name: target_ac
    description: Anti-cheat to spoof against
    required: true
  - name: level
    description: "Spoof level: registry (easy, detected), driver (medium), firmware (hard, persistent)"
    required: false
---

Design HWID spoofing strategy against `{target_ac}`.
Level: {level}

## Spoof Targets

### 1. Disk Serial
- IOCTL_STORAGE_QUERY_PROPERTY interception
- SMART data spoofing
- NVMe serial (IOCTL_SCSI_MINIPORT)
- Registry: HKLM\HARDWARE\DEVICEMAP\Scsi

### 2. Network Adapter
- NDIS OID_802_3_PERMANENT_ADDRESS
- Registry MAC override
- NdisMSetMiniportAttributes hook

### 3. SMBIOS / DMI
- GetSystemFirmwareTable hook
- SMBIOS table patching (Type 1 UUID, serial)
- EFI variable modification

### 4. GPU
- Direct3D adapter LUID
- NVIDIA/AMD serial via WMI
- Display EDID

### 5. Motherboard
- SMBIOS Type 2 (baseboard serial)
- Registry BIOS info
- ACPI table modification

### 6. TPM / Secure Boot
- TPM EK certificate
- Measured Boot PCR values
- Secure Boot variable spoofing

## Detection Methods Per AC
Cross-reference with `anti-cheat-timeline` plugin.
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