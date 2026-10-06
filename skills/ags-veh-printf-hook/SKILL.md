---
name: ags-veh-printf-hook
description: "This project demonstrates using Windows Vectored Exception Handling (VEH) to hook printf and similar output functions. It sets page guards on target function memory, catches the resulting exceptions i"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-veh-printf-hook
---

# veh printf hook

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-veh-printf-hook

## Description

This project demonstrates using Windows Vectored Exception Handling (VEH) to hook printf and similar output functions. It sets page guards on target function memory, catches the resulting exceptions in a VEH handler, and redirects execution to custom logging or filtering code. This non-invasive hooking technique avoids patching function bytes. It is aimed at security researchers studying VEH-based function interception techniques.
