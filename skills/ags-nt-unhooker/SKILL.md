---
name: ags-nt-unhooker
description: "This project is a Rust-based Windows tool and library for detecting and removing hooks in NTDLL. It analyzes inline and IAT hook states, compares in-memory code against a clean reference image, and re"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nt-unhooker
---

# nt unhooker

**Author:** Teach2Breach
**Source:** mcp-gamehacking/skills/ags-nt-unhooker

## Description

This project is a Rust-based Windows tool and library for detecting and removing hooks in NTDLL. It analyzes inline and IAT hook states, compares in-memory code against a clean reference image, and restores modified regions while handling critical safety checks. The implementation includes PE parsing, symbol-based clean DLL retrieval, and both programmatic and CLI usage paths. It is mainly used by malware analysts, red team researchers, and defenders investigating user-mode hook tampering.
