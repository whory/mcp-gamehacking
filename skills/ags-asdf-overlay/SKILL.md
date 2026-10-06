---
name: ags-asdf-overlay
description: "Asdf Overlay is a high-performance Windows library for rendering in-game overlays inside arbitrary target processes. It is written primarily in Rust and exposes client APIs in Rust and Node.js/TypeScr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-asdf-overlay
---

# asdf overlay

**Author:** storycraft
**Source:** mcp-gamehacking/skills/ags-asdf-overlay

## Description

Asdf Overlay is a high-performance Windows library for rendering in-game overlays inside arbitrary target processes. It is written primarily in Rust and exposes client APIs in Rust and Node.js/TypeScript, injecting an overlay DLL that hooks DirectX 9, 11, and 12, OpenGL, and Vulkan swap chains using Microsoft Detours while communicating over named-pipe IPC. The framework supports shared-texture surface rendering, cursor management, and input capture or blocking, with examples such as an Electron-based in-game browser and standalone Rust demos. It is intended for developers building game overlays and for game security researchers studying process injection, graphics API hooking, and input interception techniques common in overlay and anti-cheat research.
