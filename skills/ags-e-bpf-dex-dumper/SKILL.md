---
name: ags-e-bpf-dex-dumper
description: "eBPFDexDumper is an Android in-memory DEX dumping tool that uses eBPF probes to capture runtime code with a low-intrusion workflow."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-e-bpf-dex-dumper
---

# eBPFDexDumper

**Author:** LLeavesG
**Source:** mcp-gamehacking/skills/ags-e-bpf-dex-dumper

## Description

eBPFDexDumper is an Android in-memory DEX dumping tool that uses eBPF probes to capture runtime code with a low-intrusion workflow.
The project is primarily written in Go and targets rooted ARM64 Android devices, with filtering by UID or package name.
It can stream method execution traces, dump DEX files from ART activity, and automatically repair dumped files for easier analysis.
It is intended for Android reverse engineering and mobile game security research where dynamically loaded code must be recovered.
