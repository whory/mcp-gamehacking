---
name: ags-ept-hook-detection
description: "Usermode tool that detects EPT (Extended Page Table) hooks set by hypervisors using three independent methods: timing-based detection measuring execution latency discrepancies, write-and-compare check"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ept-hook-detection
---

# ept hook detection

**Author:** momo5502
**Source:** mcp-gamehacking/skills/ags-ept-hook-detection

## Description

Usermode tool that detects EPT (Extended Page Table) hooks set by hypervisors using three independent methods: timing-based detection measuring execution latency discrepancies, write-and-compare checks that write to code pages and verify if the hypervisor silently redirects reads, and cross-thread consistency checks comparing code views across CPU cores.
