---
name: ags-winbo
description: "This project is a Windows C++ tool for detecting overlay-style window hijacking through ETW and GDI table scanning. It parses dxgkrnl ETW events to identify which processes call Present on which windo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-winbo
---

# winbo

**Author:** noahware
**Source:** mcp-gamehacking/skills/ags-winbo

## Description

This project is a Windows C++ tool for detecting overlay-style window hijacking through ETW and GDI table scanning. It parses dxgkrnl ETW events to identify which processes call Present on which window handles, comparing the caller PID against the window owner PID to flag unauthorized cross-process rendering via DirectX or OpenGL. For GDI-based rendering, it iterates the shared GDI handle table to find DC handles whose owner differs from the target window. Processes sharing a common parent are whitelisted to allow legitimate multi-process window sharing. It is aimed at anti-cheat and defensive security researchers studying overlay detection techniques.
