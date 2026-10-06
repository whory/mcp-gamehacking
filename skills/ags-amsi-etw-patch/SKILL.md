---
name: ags-amsi-etw-patch
description: "This project is a security research proof of concept for bypassing AMSI and ETW with minimal byte patches. It includes C, PowerShell, and C# examples that illustrate where to patch branch logic in AMS"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-amsi-etw-patch
---

# AMSI ETW Patch

**Author:** Mr-Un1k0d3r
**Source:** mcp-gamehacking/skills/ags-amsi-etw-patch

## Description

This project is a security research proof of concept for bypassing AMSI and ETW with minimal byte patches. It includes C, PowerShell, and C# examples that illustrate where to patch branch logic in AMSI paths and how to short-circuit telemetry-related tracing calls. Diagrams and notes explain control flow and why single-byte changes can reduce the footprint of the modification. The main use case is red-team simulation and defensive validation of detection coverage around in-memory tampering techniques.
