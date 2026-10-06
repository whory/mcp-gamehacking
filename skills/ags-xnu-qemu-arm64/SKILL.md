---
name: ags-xnu-qemu-arm64
description: "This project is a QEMU fork by Aleph Security that aims to boot a fully functional iOS system on QEMU with ARM64 emulation."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-xnu-qemu-arm64
---

# xnu qemu arm64

**Author:** alephsecurity
**Source:** mcp-gamehacking/skills/ags-xnu-qemu-arm64

## Description

This project is a QEMU fork by Aleph Security that aims to boot a fully functional iOS system on QEMU with ARM64 emulation.
It supports launchd services, interactive bash, read/write secondary disk devices, execution of unsigned binaries, and SSH through TCP tunneling, with optional KVM hardware acceleration.
The codebase extends QEMU with iOS-specific machine and device models for XNU kernel emulation on ARM64.
It is mainly useful for iOS security researchers and kernel exploit developers studying XNU internals and iOS runtime behavior in an emulated environment.
