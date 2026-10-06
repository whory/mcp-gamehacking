---
name: ags-s4killer
description: "This project exploits the S4 (Samsung) vulnerable kernel driver to gain arbitrary kernel read/write on Windows. It sends crafted IOCTLs to the signed Samsung driver to read and write physical or virtu"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-s4killer
---

# s4killer

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-s4killer

## Description

This project exploits the S4 (Samsung) vulnerable kernel driver to gain arbitrary kernel read/write on Windows. It sends crafted IOCTLs to the signed Samsung driver to read and write physical or virtual memory, providing a BYOVD primitive for loading unsigned drivers, patching kernel structures, or bypassing anti-cheat protections. It is aimed at BYOVD researchers studying Samsung driver vulnerabilities for kernel access.
