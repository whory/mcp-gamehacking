---
name: ags-byovd
description: "This project is a curated collection of proof-of-concepts showing how multiple signed vulnerable drivers can be abused to terminate or disable AV and EDR components."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-byovd
---

# BYOVD

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-byovd

## Description

This project is a curated collection of proof-of-concepts showing how multiple signed vulnerable drivers can be abused to terminate or disable AV and EDR components.
The top-level README frames it as an educational BYOVD lab, and the included subprojects target drivers such as viragt64.sys, TfSysMon, ksapi64, BdApiUtil, and wsftprm with dedicated kill routines.
The Viragt64 branch also explains that the PoC was published after similar driver abuse started appearing in real-world campaigns, which gives the repository useful operational context beyond isolated driver samples.
It is mainly useful for Windows security researchers studying BYOVD tradecraft, process-kill abuse of signed drivers, and how public PoCs map to drivers later seen in the wild.
