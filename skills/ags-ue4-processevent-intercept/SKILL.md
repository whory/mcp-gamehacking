---
name: ags-ue4-processevent-intercept
description: "This project is a compact C++ library for intercepting Unreal Engine 4 ProcessEvent calls on selected objects. It uses VMT shadowing instead of direct patching, and its hook lifecycle is designed to b"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ue4-processevent-intercept
---

# ue4 processevent intercept

**Author:** Skengdo
**Source:** mcp-gamehacking/skills/ags-ue4-processevent-intercept

## Description

This project is a compact C++ library for intercepting Unreal Engine 4 ProcessEvent calls on selected objects. It uses VMT shadowing instead of direct patching, and its hook lifecycle is designed to be reapplied as objects are recreated. The included example shows how to capture and modify gameplay-related function calls at runtime. The primary use case is UE4 reverse engineering and internal instrumentation for game security research.
