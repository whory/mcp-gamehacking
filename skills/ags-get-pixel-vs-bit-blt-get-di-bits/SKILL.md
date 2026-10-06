---
name: ags-get-pixel-vs-bit-blt-get-di-bits
description: "This project is a C++ benchmark and capture utility that compares GetPixel against BitBlt plus GetDIBits for reading screen or window pixels. It implements a Win32 capture class with switchable captur"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-get-pixel-vs-bit-blt-get-di-bits
---

# GetPixel vs BitBlt GetDIBits

**Author:** PierreCiholas
**Source:** mcp-gamehacking/skills/ags-get-pixel-vs-bit-blt-get-di-bits

## Description

This project is a C++ benchmark and capture utility that compares GetPixel against BitBlt plus GetDIBits for reading screen or window pixels. It implements a Win32 capture class with switchable capture modes, frame buffer handling, and bitmap export for testing. The code demonstrates that BitBlt with GetDIBits is dramatically faster than per-pixel GetPixel calls for practical capture sizes. It is mainly useful for game tooling and security research workflows that need fast external frame capture.
