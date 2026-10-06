---
name: ags-zygisk-magisk-hide
description: "This project is a Zygisk-based Magisk module that recreates MagiskHide-style hiding behavior. It contains native code to conceal Magisk-related mounts and modify sensitive Android system properties th"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-zygisk-magisk-hide
---

# Zygisk MagiskHide

**Author:** PShocker
**Source:** mcp-gamehacking/skills/ags-zygisk-magisk-hide

## Description

This project is a Zygisk-based Magisk module that recreates MagiskHide-style hiding behavior. It contains native code to conceal Magisk-related mounts and modify sensitive Android system properties that root-detection checks often inspect. The build scripts package multi-ABI binaries into installable module archives for deployment on rooted devices. It targets mobile security research and anti-detection testing in environments where apps enforce root checks.
