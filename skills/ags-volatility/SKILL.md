---
name: ags-volatility
description: "Volatility is the original Python 2 memory forensics framework for analyzing RAM dumps from Windows, Linux, and macOS systems, providing plugins for process listing (pslist/psscan), DLL enumeration, r"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-volatility
---

# volatility

**Author:** volatilityfoundation
**Source:** mcp-gamehacking/skills/ags-volatility

## Description

Volatility is the original Python 2 memory forensics framework for analyzing RAM dumps from Windows, Linux, and macOS systems, providing plugins for process listing (pslist/psscan), DLL enumeration, registry hive extraction, network connection recovery, kernel module detection, rootkit identification, and malware artifact analysis.
The framework supports multiple address space backends (raw dumps, crash dumps, hibernation files, VMware snapshots, FireWire/IEEE 1394), uses profile-based type definitions for OS-version-specific structure parsing, and includes tools for building Linux/Mac kernel profiles from debug symbols.
It is mainly useful for DFIR analysts, malware researchers, and game security researchers performing post-mortem memory analysis to detect injected code, hidden processes, and rootkit artifacts.
