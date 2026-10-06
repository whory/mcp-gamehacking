---
name: ags-anti-frida-bypass
description: "This project is a set of Frida JavaScript scripts that attempt to bypass common anti-Frida checks."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-frida-bypass
---

# AntiFrida Bypass

**Author:** apkunpacker
**Source:** mcp-gamehacking/skills/ags-anti-frida-bypass

## Description

This project is a set of Frida JavaScript scripts that attempt to bypass common anti-Frida checks.
It hooks libc and process-introspection routines, masks suspicious strings in procfs-derived data, and interferes with detection-oriented probes.
The repository contains multiple script variants targeting different app protections and anti-instrumentation behaviors.
It is mainly aimed at mobile reverse engineers and game security researchers testing the resilience of Frida detection logic.
