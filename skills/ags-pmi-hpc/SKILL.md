---
name: ags-pmi-hpc
description: "This project demonstrates using Performance Monitoring Interrupts (PMI) and hardware performance counters (HPC) for security monitoring on Windows. It configures CPU performance counters to generate i"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pmi-hpc
---

# PMI hpc

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-pmi-hpc

## Description

This project demonstrates using Performance Monitoring Interrupts (PMI) and hardware performance counters (HPC) for security monitoring on Windows. It configures CPU performance counters to generate interrupts on specific events like branch mispredictions or cache misses, enabling detection of anomalous execution patterns that may indicate code injection or ROP attacks. It is aimed at security researchers exploring hardware-assisted detection techniques.
