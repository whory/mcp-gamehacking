---
name: ags-dump-pe
description: "A lightweight command-line PE dumper that reads a mapped PE image from a remote process's memory using OpenProcess/ReadProcessMemory, parses the DOS and NT headers to determine the full image size fro"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dump-pe
---

# DumpPE

**Author:** d35ha
**Source:** mcp-gamehacking/skills/ags-dump-pe

## Description

A lightweight command-line PE dumper that reads a mapped PE image from a remote process's memory using OpenProcess/ReadProcessMemory, parses the DOS and NT headers to determine the full image size from SizeOfImage, and writes the complete in-memory PE dump to a file.
It supports both 32-bit and 64-bit processes, takes a PID, hex base address, and output filename as arguments, and handles the full PE reconstruction from the live mapped image including all sections.
It is mainly useful for reverse engineers and game security researchers dumping packed or protected executables from memory after they've been unpacked at runtime.
