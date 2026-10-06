---
name: ags-exception-ret-spoofing
description: "This project is a minimal proof of concept for x64 return-address spoofing implemented through an exception-handler flow. The C++ example demonstrates how a spoofed call path can be built and chained "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-exception-ret-spoofing
---

# Exception Ret Spoofing

**Author:** Peribunt
**Source:** mcp-gamehacking/skills/ags-exception-ret-spoofing

## Description

This project is a minimal proof of concept for x64 return-address spoofing implemented through an exception-handler flow. The C++ example demonstrates how a spoofed call path can be built and chained with gadgets while documenting practical tradeoffs. It highlights both the convenience and the calling-convention constraints that affect reliability and performance. The code is mainly useful for low-level control-flow research in anti-cheat evasion and offensive tooling experiments.
