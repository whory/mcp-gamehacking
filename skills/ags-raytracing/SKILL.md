---
name: ags-raytracing
description: "This project is a CUDA-accelerated mesh ray tracing library with BVH acceleration and Python bindings. Core kernels are written in CUDA and C++ while the Python package exposes an interface for queryi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-raytracing
---

# raytracing

**Author:** ashawkey
**Source:** mcp-gamehacking/skills/ags-raytracing

## Description

This project is a CUDA-accelerated mesh ray tracing library with BVH acceleration and Python bindings. Core kernels are written in CUDA and C++ while the Python package exposes an interface for querying ray-mesh intersections from PyTorch tensors. The repository includes a renderer example that visualizes normals and demonstrates camera and ray generation workflows. It is useful for graphics, simulation, and vision research where fast GPU ray queries are needed.
