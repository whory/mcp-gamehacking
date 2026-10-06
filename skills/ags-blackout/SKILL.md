---
name: ags-blackout
description: "A kernel-mode tool leveraging the gmer driver (sourced from loldrivers.io) to disable or terminate EDR and AV processes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-blackout
---

# Blackout

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-blackout

## Description

A kernel-mode tool leveraging the gmer driver (sourced from loldrivers.io) to disable or terminate EDR and AV processes.
Operates by loading a signed vulnerable driver and issuing IOCTL calls to kill target security product processes by PID.
Supports Windows Defender with continuous suppression to prevent the service from restarting.
