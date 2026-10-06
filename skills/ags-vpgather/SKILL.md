---
name: ags-vpgather
description: "This project is a user-mode proof of concept for testing whether a virtual address would fault before directly dereferencing it. It relies on AVX2 VPGATHER instruction behavior plus vectored exception"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vpgather
---

# VPGATHER

**Author:** Peribunt
**Source:** mcp-gamehacking/skills/ags-vpgather

## Description

This project is a user-mode proof of concept for testing whether a virtual address would fault before directly dereferencing it. It relies on AVX2 VPGATHER instruction behavior plus vectored exception handling to infer address accessibility with reduced side effects on target memory state. The implementation includes initialization checks for CPU support and a simple API for repeated address-validity probes. It is mainly relevant to stealth memory probing in reverse engineering, anti-cheat bypass, and low-level security research.
