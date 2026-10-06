---
name: ags-rootkit-detection-ebpf-time-trace
description: "rootkit-detection-ebpf-time-trace is a Linux research framework for detecting rootkits by analyzing timing anomalies in kernel execution paths. It uses eBPF probes to collect fine-grained timing data "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rootkit-detection-ebpf-time-trace
---

# rootkit detection ebpf time trace

**Author:** ait-aecid
**Source:** mcp-gamehacking/skills/ags-rootkit-detection-ebpf-time-trace

## Description

rootkit-detection-ebpf-time-trace is a Linux research framework for detecting rootkits by analyzing timing anomalies in kernel execution paths. It uses eBPF probes to collect fine-grained timing data from functions in the getdents flow, including paths manipulated by file-hiding rootkits. The repository includes Python tooling for experiment orchestration, dataset handling, and semi-supervised statistical anomaly detection with evaluation outputs. Its primary audience is kernel security researchers studying behavior-based rootkit detection and anti-stealth telemetry techniques.
