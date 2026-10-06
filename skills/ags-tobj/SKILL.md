---
name: ags-tobj
description: "This project is a lightweight Rust loader for Wavefront OBJ and MTL assets. It focuses on fast parsing into simple mesh and material vectors while supporting optional triangulation and flexible handli"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-tobj
---

# tobj

**Author:** Twinklebear
**Source:** mcp-gamehacking/skills/ags-tobj

## Description

This project is a lightweight Rust loader for Wavefront OBJ and MTL assets. It focuses on fast parsing into simple mesh and material vectors while supporting optional triangulation and flexible handling of normals, texture coordinates, and vertex colors. The crate exposes feature flags for behaviors such as vertex merging, index reordering, and async loading backends. Its main use case is integrating straightforward model import into rendering engines and graphics tooling.
