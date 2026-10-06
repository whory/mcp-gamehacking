---
name: ags-windows-intel-pt
description: "This project is a Windows driver and user-mode library for capturing Intel Processor Trace (IPT) data on Windows systems. It provides a kernel driver that configures IPT MSRs and manages trace buffers"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-windows-intel-pt
---

# WindowsIntelPT

**Author:** intelpt
**Source:** mcp-gamehacking/skills/ags-windows-intel-pt

## Description

This project is a Windows driver and user-mode library for capturing Intel Processor Trace (IPT) data on Windows systems. It provides a kernel driver that configures IPT MSRs and manages trace buffers, along with a user-mode API for starting/stopping traces and processing captured data. The tool supports both per-process and system-wide tracing modes. It is aimed at security researchers and tool developers using Intel PT for Windows binary tracing, coverage-guided fuzzing, and execution analysis.
