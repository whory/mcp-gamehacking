---
name: ags-byovd-edr-killer
description: "This project is an educational Windows BYOVD proof of concept that abuses a vulnerable signed driver to terminate selected security processes. It documents reverse engineering of the driver interface,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-byovd-edr-killer
---

# BYOVD EDRKiller

**Author:** 0xJs
**Source:** mcp-gamehacking/skills/ags-byovd-edr-killer

## Description

This project is an educational Windows BYOVD proof of concept that abuses a vulnerable signed driver to terminate selected security processes. It documents reverse engineering of the driver interface, including device naming, IOCTL selection, and required input buffer structure. The C implementation automates driver deployment, target process enumeration, repeated termination attempts, and cleanup on exit. It is aimed at authorized red-team style research on defensive product resilience and kernel attack surface.
