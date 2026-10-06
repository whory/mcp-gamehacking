---
name: ags-nasty-alignment
description: "This project is a compact Windows proof of concept that demonstrates alignment-check edge cases with process instrumentation callbacks. It combines C and x64 assembly to set AC-related flags, trigger "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nasty-alignment
---

# NastyAlignment

**Author:** asamy
**Source:** mcp-gamehacking/skills/ags-nasty-alignment

## Description

This project is a compact Windows proof of concept that demonstrates alignment-check edge cases with process instrumentation callbacks. It combines C and x64 assembly to set AC-related flags, trigger unaligned memory access, and observe resulting STATUS_DATATYPE_MISALIGNMENT exceptions. The sample uses NtSetInformationProcess with ProcessInstrumentationCallback and custom exception handling to highlight where callback code can fail. It is primarily useful for low-level kernel and runtime instrumentation research.
