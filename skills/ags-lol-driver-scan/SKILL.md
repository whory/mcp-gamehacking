---
name: ags-lol-driver-scan
description: "This project is a Go-based scanner that detects known vulnerable drivers present on a system. It retrieves vulnerable driver intelligence from a public driver threat feed and compares it against local"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-lol-driver-scan
---

# LolDriverScan

**Author:** FourCoreLabs
**Source:** mcp-gamehacking/skills/ags-lol-driver-scan

## Description

This project is a Go-based scanner that detects known vulnerable drivers present on a system. It retrieves vulnerable driver intelligence from a public driver threat feed and compares it against local driver hashes and metadata. The tool supports verbose reporting and JSON export for automation or integration into other security workflows, and it is designed to run without elevated privileges. Its main use case is defensive security auditing, including hardening and anti-cheat environment checks.
