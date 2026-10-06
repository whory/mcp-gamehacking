---
name: ags-byovd-read-write-primitive
description: "This project is an educational BYOVD toolkit that exposes kernel read and write primitives on Windows through a vulnerable driver. It contains multiple C proof-of-concept tools for changing process pr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-byovd-read-write-primitive
---

# BYOVD read write primitive

**Author:** 0xJs
**Source:** mcp-gamehacking/skills/ags-byovd-read-write-primitive

## Description

This project is an educational BYOVD toolkit that exposes kernel read and write primitives on Windows through a vulnerable driver. It contains multiple C proof-of-concept tools for changing process protection levels, editing tokens, disabling ETW telemetry, removing kernel callbacks and minifilters, and modifying DSE state. The tooling resolves kernel offsets and symbols, then performs privileged memory operations through IOCTL-based communication. It is designed for authorized kernel security research and for studying anti-cheat or EDR hardening gaps.
