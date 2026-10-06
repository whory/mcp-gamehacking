---
name: ags-magisk-killer
description: "This project is an Android app that detects Magisk root and MagiskHide on devices through multiple detection vectors."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-magisk-killer
---

# MagiskKiller

**Author:** canyie
**Source:** mcp-gamehacking/skills/ags-magisk-killer

## Description

This project is an Android app that detects Magisk root and MagiskHide on devices through multiple detection vectors.
It checks for active tracers (MagiskHide), unlocked bootloader state, modified system properties via property area inspection, active Magisk su sessions through PTS detection, and uses a subprocess-based approach to avoid self-tracing interference.
The Java and JNI/C++ codebase runs detection in a forked subprocess with pipe-based IPC to perform checks that MagiskHide cannot intercept on the calling process.
It is mainly useful for mobile security researchers studying Magisk detection techniques and anti-root-hiding methods on Android.
