---
name: ags-pedigest
description: "C library for computing Authenticode digests of PE files, implementing the hash-exclusion algorithm that skips the PE checksum field and security directory during hashing. Uses BCrypt APIs (SHA-1/SHA-"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pedigest
---

# pedigest

**Author:** mihaly044
**Source:** mcp-gamehacking/skills/ags-pedigest

## Description

C library for computing Authenticode digests of PE files, implementing the hash-exclusion algorithm that skips the PE checksum field and security directory during hashing. Uses BCrypt APIs (SHA-1/SHA-256/SHA-384/SHA-512), parses embedded WIN_CERTIFICATE structures, and was designed for both kernel-mode (ksecdd.lib) and usermode (bcrypt.lib) environments.
