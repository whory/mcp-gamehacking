---
name: ags-integrity
description: "integrity is a header-only C library for runtime memory integrity verification of Windows PE images. It computes baseline checksums for non-writable sections and re-checks them later to detect unautho"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-integrity
---

# integrity

**Author:** afulsamet
**Source:** mcp-gamehacking/skills/ags-integrity

## Description

integrity is a header-only C library for runtime memory integrity verification of Windows PE images. It computes baseline checksums for non-writable sections and re-checks them later to detect unauthorized code modifications. The implementation supports hardware-accelerated CRC32 with SSE4.2 and allows custom checksum algorithms through compile-time configuration. This library targets defensive use cases such as tamper detection, anti-cheat hardening, and runtime self-protection experiments.
