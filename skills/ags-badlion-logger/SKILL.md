---
name: ags-badlion-logger
description: "This project is a proof-of-concept kernel logger for observing a game anti-cheat driver at runtime. It applies IAT hooks during image load callbacks to monitor behavior in a black-box manner, specific"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-badlion-logger
---

# BadlionLogger

**Author:** KiFilterFiberContext
**Source:** mcp-gamehacking/skills/ags-badlion-logger

## Description

This project is a proof-of-concept kernel logger for observing a game anti-cheat driver at runtime. It applies IAT hooks during image load callbacks to monitor behavior in a black-box manner, specifically against a VMProtect-virtualized target module. The implementation is mainly C++ with a focus on kernel callback handling and instrumentation rather than production robustness. It is intended for anti-cheat research and educational study of driver-level monitoring techniques.
