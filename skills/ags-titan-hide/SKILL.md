---
name: ags-titan-hide
description: "This project is a driver intended to hide debuggers from certain processes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-titan-hide
---

# TitanHide

**Author:** mrexodia
**Source:** mcp-gamehacking/skills/ags-titan-hide

## Description

This project is a driver intended to hide debuggers from certain processes.
The driver hooks various Nt kernel functions (using SSDT table hooks) and modifies the return values of the original functions.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / debugging area.
