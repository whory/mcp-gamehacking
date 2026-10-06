---
name: ags-midgetpack
description: "This project is an ELF binary packer designed to protect executables used on untrusted systems. It offers a password mode and a challenge-response mode based on Curve25519 key exchange with AES-128 an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-midgetpack
---

# midgetpack

**Author:** arisada
**Source:** mcp-gamehacking/skills/ags-midgetpack

## Description

This project is an ELF binary packer designed to protect executables used on untrusted systems. It offers a password mode and a challenge-response mode based on Curve25519 key exchange with AES-128 and HMAC-SHA256. The implementation supports cross-architecture packing across Linux and FreeBSD targets including x86, x86-64, and ARM. It is aimed at security practitioners who need to harden sensitive tooling during controlled assessments and deployments.
