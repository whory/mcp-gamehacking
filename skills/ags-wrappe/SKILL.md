---
name: ags-wrappe
description: "This project is a Rust packer that turns an executable plus its resource directory into a single self-contained binary. It provides Zstandard compression, parallel packing and unpacking, streaming dec"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wrappe
---

# wrappe

**Author:** Systemcluster
**Source:** mcp-gamehacking/skills/ags-wrappe

## Description

This project is a Rust packer that turns an executable plus its resource directory into a single self-contained binary. It provides Zstandard compression, parallel packing and unpacking, streaming decompression, and metadata/resource transfer support. The tool is designed to reduce distribution complexity while keeping startup overhead and artifact size practical across platforms. It is mainly used by developers who need portable one-file deployment for desktop applications and tools.
