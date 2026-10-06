---
name: ags-patch-guard-encryptor-driver
description: "This project is a Windows kernel research driver that implements a custom PatchGuard-like integrity monitor. Written in C++, it tracks SSDT, IDT, and selected MSR state using periodic KTIMER and KDPC "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-patch-guard-encryptor-driver
---

# PatchGuardEncryptorDriver

**Author:** AmitMoshel1
**Source:** mcp-gamehacking/skills/ags-patch-guard-encryptor-driver

## Description

This project is a Windows kernel research driver that implements a custom PatchGuard-like integrity monitor. Written in C++, it tracks SSDT, IDT, and selected MSR state using periodic KTIMER and KDPC routines. It also adds secondary integrity checks that verify timer and DPC structures to detect tampering with the monitor itself. The code targets low-level security researchers studying kernel integrity defense and anti-tamper techniques.
