---
name: ags-mem-scanner
description: "This project is a Windows x64 kernel memory layout scanner focused on drivers, processes, and section objects. Implemented in C for WDK and Visual Studio, it scans kernel memory regions to enumerate s"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mem-scanner
---

# MemScanner

**Author:** FaEryICE
**Source:** mcp-gamehacking/skills/ags-mem-scanner

## Description

This project is a Windows x64 kernel memory layout scanner focused on drivers, processes, and section objects. Implemented in C for WDK and Visual Studio, it scans kernel memory regions to enumerate structures such as DRIVER_OBJECT, LDR entries, and related file objects. The notes discuss behavior differences across Windows 7 through Windows 10 and include updates for stability fixes. Its main use case is kernel forensics and anti-cheat-oriented memory structure research.
