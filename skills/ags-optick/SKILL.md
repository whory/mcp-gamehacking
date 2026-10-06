---
name: ags-optick
description: "Optick is a C++ game performance profiler featuring a lightweight in-game instrumentation SDK and a WPF-based GUI viewer that captures per-frame CPU timing, GPU events (D3D12/Vulkan), thread schedulin"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-optick
---

# optick

**Author:** bombomby
**Source:** mcp-gamehacking/skills/ags-optick

## Description

Optick is a C++ game performance profiler featuring a lightweight in-game instrumentation SDK and a WPF-based GUI viewer that captures per-frame CPU timing, GPU events (D3D12/Vulkan), thread scheduling, context switches, and hardware counters via ETW on Windows.
The SDK supports Unreal Engine 4/5, Unity, and custom engines through macros like OPTICK_EVENT/OPTICK_FRAME, communicates capture data over TCP sockets to the viewer, and provides flame graphs, per-thread timelines, call-stack sampling, and frame-comparison analysis with task-tracker integrations (GitHub, Jira).
It is mainly useful for game developers and engine programmers profiling rendering, physics, and gameplay systems to identify CPU/GPU bottlenecks.
