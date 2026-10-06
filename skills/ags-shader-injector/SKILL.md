---
name: ags-shader-injector
description: "This project is a D3D12 shader injector for FF7 Rebirth on PC that intercepts rendering API calls to inject or replace pixel shaders at runtime."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shader-injector
---

# ShaderInjector

**Author:** frostbone25
**Source:** mcp-gamehacking/skills/ags-shader-injector

## Description

This project is a D3D12 shader injector for FF7 Rebirth on PC that intercepts rendering API calls to inject or replace pixel shaders at runtime.
It uses MinHook and ImGui, supports live shader editing, and can theoretically be adapted to other D3D12 titles because it is primarily a DX12 interceptor.
It is mainly useful for graphics programmers and Windows game tooling developers working in the directx / hook area.
