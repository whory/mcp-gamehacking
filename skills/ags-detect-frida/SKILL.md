---
name: ags-detect-frida
description: "An Android native library that implements multiple Frida detection techniques including named-pipe scanning, Frida-specific thread name detection, and .text section integrity comparison between memory"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detect-frida
---

# DetectFrida

**Author:** darvincisec
**Source:** mcp-gamehacking/skills/ags-detect-frida

## Description

An Android native library that implements multiple Frida detection techniques including named-pipe scanning, Frida-specific thread name detection, and .text section integrity comparison between memory and on-disk ELF images.
It also demonstrates native code hardening through syscall-based libc replacement, custom string/memory operations, and O-LLVM obfuscation to resist hooking and tampering.
It is mainly useful for mobile game security engineers studying anti-instrumentation and native code hardening techniques on Android.
