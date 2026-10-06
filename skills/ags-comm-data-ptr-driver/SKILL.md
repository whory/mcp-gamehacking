---
name: ags-comm-data-ptr-driver
description: "A kernel driver implementing data-pointer-based communication for stealthy user-kernel interaction."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-comm-data-ptr-driver
---

# Comm data ptr driver

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-comm-data-ptr-driver

## Description

A kernel driver implementing data-pointer-based communication for stealthy user-kernel interaction.
Uses shared data pointers rather than traditional IOCTLs to exchange memory read/write requests between a user-mode cheat and kernel-mode driver, evading IOCTL-based detection.
