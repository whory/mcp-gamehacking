---
name: ags-code-integrity-driver-blocklist
description: "CodeIntegrity-DriverBlocklist is a data repository of Windows Code Integrity policy blocklists for vulnerable or abuse-prone drivers. It provides large XML policy files with deny rules based on hashes"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-code-integrity-driver-blocklist
---

# CodeIntegrity DriverBlocklist

**Author:** Harvester57
**Source:** mcp-gamehacking/skills/ags-code-integrity-driver-blocklist

## Description

CodeIntegrity-DriverBlocklist is a data repository of Windows Code Integrity policy blocklists for vulnerable or abuse-prone drivers. It provides large XML policy files with deny rules based on hashes and driver identities, including anti-cheat relevant kernel modules. The content is configuration data rather than executable source code, and it is intended to be consumed by WDAC or related policy tooling. Its main use case is defensive hardening, kernel attack surface reduction, and anti-cheat environment protection.
