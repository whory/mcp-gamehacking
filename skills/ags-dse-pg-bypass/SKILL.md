---
name: ags-dse-pg-bypass
description: "This project is a Windows kernel research proof of concept for bypassing Driver Signature Enforcement and PatchGuard through a BYOVD attack model."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dse-pg-bypass
---

# dse pg bypass

**Author:** 4l3x777
**Source:** mcp-gamehacking/skills/ags-dse-pg-bypass

## Description

This project is a Windows kernel research proof of concept for bypassing Driver Signature Enforcement and PatchGuard through a BYOVD attack model.
It combines C++ code with detailed reversing notes that trace signature validation callbacks and integrity-check execution paths in modern Windows kernels.
The material highlights how vulnerable signed drivers can be leveraged to interfere with code integrity decisions and patch-protection behavior.
It is intended for educational kernel security analysis and for defenders studying realistic BYOVD attack surfaces and mitigations.
