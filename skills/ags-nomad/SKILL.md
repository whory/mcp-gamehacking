---
name: ags-nomad
description: "This project is a kernel anti-cheat style detector for finding manually mapped drivers and suspicious kernel threads. It applies heuristic checks such as thread stack walking, thread entry-point valid"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nomad
---

# Nomad

**Author:** Rwkeith
**Source:** mcp-gamehacking/skills/ags-nomad

## Description

This project is a kernel anti-cheat style detector for finding manually mapped drivers and suspicious kernel threads. It applies heuristic checks such as thread stack walking, thread entry-point validation, big pool scanning for abnormal references, and IOCTL hook detection signals. The implementation is written in C++ as a Windows driver-oriented codebase focused on low-level telemetry. It is intended for anti-cheat engineering and kernel security research against stealthy cheat implants.
