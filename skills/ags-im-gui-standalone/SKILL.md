---
name: ags-im-gui-standalone
description: "ImGui Standalone is a Direct3D11-based framework for running an external ImGui interface as either an EXE or a DLL on Windows."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-im-gui-standalone
---

# ImGui Standalone

**Author:** adamhlt
**Source:** mcp-gamehacking/skills/ags-im-gui-standalone

## Description

ImGui Standalone is a Direct3D11-based framework for running an external ImGui interface as either an EXE or a DLL on Windows.
It is implemented in C++ and ships preconfigured Visual Studio projects for both x86 and x64 targets.
The project creates its own rendering window, which makes it useful even when a target process does not expose a convenient internal DirectX render path.
It is commonly used for game tooling, menu prototyping, and external UI workflows in game security research.
