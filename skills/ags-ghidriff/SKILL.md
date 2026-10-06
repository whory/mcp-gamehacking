---
name: ags-ghidriff
description: "A Python-based Ghidra binary diffing framework that automates headless analysis of two binaries, correlates functions using multiple strategies (structural graph matching, version tracking, BSim simil"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghidriff
---

# ghidriff

**Author:** clearbluejar
**Source:** mcp-gamehacking/skills/ags-ghidriff

## Description

A Python-based Ghidra binary diffing framework that automates headless analysis of two binaries, correlates functions using multiple strategies (structural graph matching, version tracking, BSim similarity), and produces detailed Markdown reports with decompiled diffs, call-graph changes, and metadata deltas.
It supports PE, Mach-O, and ELF formats across Windows, macOS, and Linux, includes Docker packaging for CI pipelines, and provides a Docusaurus-powered documentation site with guides for diffing ntoskrnl, afd.sys CVEs, and iOS dylibs.
It is mainly useful for vulnerability researchers, patch analysts, and reverse engineers comparing binary updates to identify security fixes and behavioral changes.
