---
name: ags-payload-dumper-go
description: "This project is a high-performance Android OTA payload dumper written in Go that extracts partition images from payload.bin files."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-payload-dumper-go
---

# payload dumper go

**Author:** ssut
**Source:** mcp-gamehacking/skills/ags-payload-dumper-go

## Description

This project is a high-performance Android OTA payload dumper written in Go that extracts partition images from payload.bin files.
It features parallelized decompression for fast extraction, payload checksum verification, and support for processing original zip packages containing payload.bin directly.
The Go codebase handles OTA payload parsing, partition data decompression, and multi-threaded I/O with xz as an external dependency for optimal performance.
It is mainly useful for Android security researchers and ROM developers who need to extract and analyze partition images from Android OTA update packages.
