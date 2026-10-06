---
name: ags-pakkero
description: "This project is an educational binary packer that wraps executables or scripts in a protected launcher. It is written in Go and combines compression, AES-256-GCM encryption, payload padding, and obfus"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pakkero
---

# pakkero

**Author:** 89luca89
**Source:** mcp-gamehacking/skills/ags-pakkero

## Description

This project is an educational binary packer that wraps executables or scripts in a protected launcher. It is written in Go and combines compression, AES-256-GCM encryption, payload padding, and obfuscation techniques to make tampering and analysis harder. The launcher supports in-memory payload execution and can optionally use UPX while further mutating identifiable metadata. It is mainly aimed at studying anti-reversing tradeoffs and software protection techniques.
