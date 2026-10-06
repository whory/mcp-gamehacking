---
name: ags-evader
description: "This project is a Windows PE packer and crypter that encrypts an executable payload and embeds it into a new output file."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-evader
---

# Evader

**Author:** KooroshRZ
**Source:** mcp-gamehacking/skills/ags-evader

## Description

This project is a Windows PE packer and crypter that encrypts an executable payload and embeds it into a new output file.
It supports configurable key size and keyspace complexity, then performs runtime key recovery and in-memory payload execution in the unpacking stage.
The repository is split into a packer component and an unpack stub, both implemented in C++.
Its core techniques include payload obfuscation, resource embedding, and staged decryption.
It is mainly used for packer development practice and evasion-focused reverse-engineering research.
