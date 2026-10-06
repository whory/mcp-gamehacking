---
name: ags-ida-kmdf
description: "This project is an IDA Pro plugin for analyzing Windows Kernel-Mode Driver Framework (KMDF) drivers. It identifies and annotates KMDF framework structures, callback registrations, I/O queue configurat"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-kmdf
---

# ida kmdf

**Author:** thalium
**Source:** mcp-gamehacking/skills/ags-ida-kmdf

## Description

This project is an IDA Pro plugin for analyzing Windows Kernel-Mode Driver Framework (KMDF) drivers. It identifies and annotates KMDF framework structures, callback registrations, I/O queue configurations, and device initialization patterns in driver binaries. The Python plugin applies KMDF type definitions and names framework function calls, simplifying driver reverse engineering. It is aimed at reverse engineers analyzing KMDF-based Windows kernel drivers.
