---
name: ags-eat-guard
description: "This project is a Windows proof of concept that monitors and protects the Export Address Table (EAT) of loaded modules against runtime modification. It uses VEH (Vectored Exception Handling) to set pa"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eat-guard
---

# EATGuard

**Author:** connormcgarr
**Source:** mcp-gamehacking/skills/ags-eat-guard

## Description

This project is a Windows proof of concept that monitors and protects the Export Address Table (EAT) of loaded modules against runtime modification. It uses VEH (Vectored Exception Handling) to set page guards on EAT memory pages, detecting and logging any attempts to overwrite exported function pointers. The C implementation demonstrates how defenders can detect EAT hooking, a technique commonly used by rootkits and cheats. It is aimed at security researchers studying EAT integrity monitoring and hook detection.
