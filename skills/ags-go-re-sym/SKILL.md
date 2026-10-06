---
name: ags-go-re-sym
description: "This project is GoReSym, a tool from Mandiant for extracting function metadata and type information from Go binaries. It parses the Go runtime's pclntab (PC line table) and moduledata structures to re"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-go-re-sym
---

# GoReSym

**Author:** mandiant
**Source:** mcp-gamehacking/skills/ags-go-re-sym

## Description

This project is GoReSym, a tool from Mandiant for extracting function metadata and type information from Go binaries. It parses the Go runtime's pclntab (PC line table) and moduledata structures to recover function names, source file paths, and type definitions even from stripped Go executables. The Go tool outputs recovered symbols in a format compatible with IDA Pro and other disassemblers. It is aimed at malware analysts and reverse engineers who need to restore symbol information in stripped Go binaries used by malware.
