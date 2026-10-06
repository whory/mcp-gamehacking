---
name: ags-kajiya
description: "This project is an experimental real-time global illumination renderer designed to approach path-traced quality in dynamic scenes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kajiya
---

# kajiya

**Author:** EmbarkStudios
**Source:** mcp-gamehacking/skills/ags-kajiya

## Description

This project is an experimental real-time global illumination renderer designed to approach path-traced quality in dynamic scenes.
It uses Rust for engine code, Vulkan for graphics backend work, and a large HLSL shader stack for hybrid rasterization, compute, and ray-tracing passes.
Key features include dynamic GI without prebaked probes, temporal reconstruction, ray-traced shadows and reflections, and a reference path-tracing mode for validation.
Its primary use case is advanced rendering research and prototyping for developers studying modern real-time lighting techniques.
