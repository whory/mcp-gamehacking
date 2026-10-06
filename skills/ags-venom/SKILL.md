---
name: ags-venom
description: "Venom is a single-header C++ library for covert network communication on Windows. Instead of opening an obvious socket in the caller process, it creates a hidden detached browser process and reuses on"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-venom
---

# Venom

**Author:** Idov31
**Source:** mcp-gamehacking/skills/ags-venom

## Description

Venom is a single-header C++ library for covert network communication on Windows. Instead of opening an obvious socket in the caller process, it creates a hidden detached browser process and reuses one of its sockets for send and receive operations. The implementation relies on Win32 and Winsock internals, including handle discovery and duplication techniques. It is meant for evasion-oriented networking research in offensive security and stealth tooling contexts.
