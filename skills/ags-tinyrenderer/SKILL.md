---
name: ags-tinyrenderer
description: "This project is a software 3D renderer written in approximately 500 lines of bare C++ with no third-party graphics libraries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-tinyrenderer
---

# tinyrenderer

**Author:** ssloy
**Source:** mcp-gamehacking/skills/ags-tinyrenderer

## Description

This project is a software 3D renderer written in approximately 500 lines of bare C++ with no third-party graphics libraries.
It implements the full rendering pipeline from scratch including Bresenham line drawing, triangle rasterization, barycentric coordinates, z-buffer hidden face removal, camera handling, shading, texture mapping, normal mapping, shadow mapping, and ambient occlusion.
The accompanying course lectures demonstrate how OpenGL, Vulkan, Metal, and DirectX work internally by building each stage of the pipeline step by step.
It is mainly useful for graphics programmers and game engine researchers learning software rendering fundamentals and 3D graphics pipeline internals.
