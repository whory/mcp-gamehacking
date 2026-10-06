---
name: ags-fatpack
description: "This project is a Windows x64 PE packer that compresses executables with LZMA and runs them through a custom loader stub. Written mainly in C++, it supports both resource-based and section-based packi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-fatpack
---

# Fatpack

**Author:** Fatmike-GH
**Source:** mcp-gamehacking/skills/ags-fatpack

## Description

This project is a Windows x64 PE packer that compresses executables with LZMA and runs them through a custom loader stub. Written mainly in C++, it supports both resource-based and section-based packing, icon and manifest handling, and robust relocation, import, and TLS processing. The solution includes helper tooling to embed loader stubs and automate post-build integration. Its primary use case is executable protection research and manual-mapping style loader experimentation.
