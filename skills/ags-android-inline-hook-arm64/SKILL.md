---
name: ags-android-inline-hook-arm64
description: "Android Inline Hook ARM64 is a native hooking framework for building ARM64 Android shared libraries that patch target code paths at runtime. The implementation is based on C, C++, and ARM64 assembly w"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-android-inline-hook-arm64
---

# Android Inline Hook ARM64

**Author:** GToad
**Source:** mcp-gamehacking/skills/ags-android-inline-hook-arm64

## Description

Android Inline Hook ARM64 is a native hooking framework for building ARM64 Android shared libraries that patch target code paths at runtime. The implementation is based on C, C++, and ARM64 assembly with Android NDK build scripts and stub logic for inline trampoline handling. It emphasizes pure inline hooking rather than PLT hooking and includes examples for register-level control inside hook handlers. Its main use case is mobile reverse engineering and game security experimentation where native function interception is required.
