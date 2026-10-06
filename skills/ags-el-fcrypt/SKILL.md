---
name: ags-el-fcrypt
description: "A tool that encrypts the .text section of ELF binaries using RC4, embedding a decryption stub that recovers the original code at runtime by mprotect-ing and decrypting the section before jumping to th"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-el-fcrypt
---

# ELFcrypt

**Author:** droberson
**Source:** mcp-gamehacking/skills/ags-el-fcrypt

## Description

A tool that encrypts the .text section of ELF binaries using RC4, embedding a decryption stub that recovers the original code at runtime by mprotect-ing and decrypting the section before jumping to the entry point.
It operates by mmap-ing the ELF, locating the target section via section headers, applying RC4 encryption, and writing a self-decrypting binary to disk.
It is mainly useful for security researchers studying ELF binary encryption, runtime unpacking techniques, and basic software protection mechanisms on Linux.
