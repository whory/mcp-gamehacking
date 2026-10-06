---
name: ags-int-fastdiv
description: "Header-only C++ class that replaces runtime integer division with precomputed multiply-and-shift operations based on "Hacker's Delight" magic number theory. Works transparently as a drop-in int replac"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-int-fastdiv
---

# int fastdiv

**Author:** milakov
**Source:** mcp-gamehacking/skills/ags-int-fastdiv

## Description

Header-only C++ class that replaces runtime integer division with precomputed multiply-and-shift operations based on "Hacker's Delight" magic number theory. Works transparently as a drop-in int replacement with overloaded / and % operators, targeting both CPU and CUDA GPU kernels via __host__ __device__ annotations for approximately 2x speedup over hardware division.
