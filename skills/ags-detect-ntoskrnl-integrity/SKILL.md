---
name: ags-detect-ntoskrnl-integrity
description: "DetectNtoskrnlIntegrity is a Windows kernel integrity research project focused on validating ntoskrnl.exe in memory against its disk image. It presents code and methodology for detecting kernel tamper"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detect-ntoskrnl-integrity
---

# DetectNtoskrnlIntegrity

**Author:** DejavuSecure
**Source:** mcp-gamehacking/skills/ags-detect-ntoskrnl-integrity

## Description

DetectNtoskrnlIntegrity is a Windows kernel integrity research project focused on validating ntoskrnl.exe in memory against its disk image. It presents code and methodology for detecting kernel tampering while accounting for practical complications such as SSDT related transformations, page table randomization, and retpoline era behavior changes. The implementation is written in C++ for low level system analysis on modern Windows builds. It is primarily useful for anti rootkit, anti cheat, and defensive kernel security research workflows.
