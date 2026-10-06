---
name: ags-wmi-static-spoofer
description: "This project is a kernel-mode proof of concept for statically spoofing hardware serial information exposed through WMI and related paths. It uses direct memory manipulation and registry updates instea"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wmi-static-spoofer
---

# wmi static spoofer

**Author:** Alex3434
**Source:** mcp-gamehacking/skills/ags-wmi-static-spoofer

## Description

This project is a kernel-mode proof of concept for statically spoofing hardware serial information exposed through WMI and related paths. It uses direct memory manipulation and registry updates instead of long-lived hooks, allowing the driver to unload after changes are applied. The implementation includes configurable offsets and randomized serial generation for testing different setups. It is mainly used for HWID evasion research against anti-cheat and licensing telemetry.
