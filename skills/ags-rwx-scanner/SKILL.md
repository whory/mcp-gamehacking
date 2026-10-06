---
name: ags-rwx-scanner
description: "This project is a Windows kernel-mode scanner that enumerates process page tables to find writable and executable memory regions. The driver walks PML4, PDPT, PD, and PT structures with physical memor"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rwx-scanner
---

# RwxScanner

**Author:** Oliver-1-1
**Source:** mcp-gamehacking/skills/ags-rwx-scanner

## Description

This project is a Windows kernel-mode scanner that enumerates process page tables to find writable and executable memory regions. The driver walks PML4, PDPT, PD, and PT structures with physical memory reads and logs suspicious mappings per process context. It also reports process metadata such as image name and admin-token state to support investigation. It is intended for low-level anti-cheat and malware detection research around injected or self-modifying code.
