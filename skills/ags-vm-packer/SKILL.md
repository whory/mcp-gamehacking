---
name: ags-vm-packer
description: "This project is a virtual machine-based code protection tool for ARM64 binaries, written in Go. It translates native ARM64 instructions into custom VM bytecode with support for indirect dispatch, chai"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vm-packer
---

# VMPacker

**Author:** LeoChen-CoreMind
**Source:** mcp-gamehacking/skills/ags-vm-packer

## Description

This project is a virtual machine-based code protection tool for ARM64 binaries, written in Go. It translates native ARM64 instructions into custom VM bytecode with support for indirect dispatch, chained encryption, CRC integrity checks, and function splitting obfuscation. The repository includes comprehensive demo programs demonstrating individual instruction virtualization and protection strategies. It is mainly useful for binary protection researchers and reverse engineers studying VM-based obfuscation schemes on ARM64 platforms.
