---
name: ags-drmemory
description: "Dr. Memory is a dynamic memory debugger that detects common runtime memory errors in native programs. Built largely in C and C++ on top of the DynamoRIO instrumentation platform, it can find uninitial"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-drmemory
---

# drmemory

**Author:** DynamoRIO
**Source:** mcp-gamehacking/skills/ags-drmemory

## Description

Dr. Memory is a dynamic memory debugger that detects common runtime memory errors in native programs. Built largely in C and C++ on top of the DynamoRIO instrumentation platform, it can find uninitialized reads, out-of-bounds accesses, use-after-free, double frees, and leaks, with additional Windows-specific checks like handle and GDI misuse. It supports unmodified binaries across Windows, Linux, macOS, and Android on IA-32, AMD64, and ARM targets. The project is widely used for software hardening and security bug hunting, including reliability testing of game and anti-cheat code.
