---
name: ags-branch-monitoring-project
description: "This project is a research framework for monitoring program execution using Intel's Last Branch Record (LBR) and Branch Trace Store (BTS) hardware features. It captures branch-level execution traces f"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-branch-monitoring-project
---

# BranchMonitoringProject

**Author:** marcusbotacin
**Source:** mcp-gamehacking/skills/ags-branch-monitoring-project

## Description

This project is a research framework for monitoring program execution using Intel's Last Branch Record (LBR) and Branch Trace Store (BTS) hardware features. It captures branch-level execution traces from running programs through kernel-mode access to CPU branch recording registers, enabling fine-grained control flow monitoring without software instrumentation. The C kernel driver and user-mode tools provide branch trace collection and analysis. It is aimed at security researchers studying hardware-assisted execution monitoring for malware analysis and integrity checking.
