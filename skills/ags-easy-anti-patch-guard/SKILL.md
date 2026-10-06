---
name: ags-easy-anti-patch-guard
description: "This project is a Windows kernel proof of concept for interfering with PatchGuard execution behavior. It includes a driver and low-level assembly hook logic that observes or short-circuits specific di"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-easy-anti-patch-guard
---

# EasyAntiPatchGuard

**Author:** armasm
**Source:** mcp-gamehacking/skills/ags-easy-anti-patch-guard

## Description

This project is a Windows kernel proof of concept for interfering with PatchGuard execution behavior. It includes a driver and low-level assembly hook logic that observes or short-circuits specific dispatch paths in protected routines. The implementation is focused on Win8 through Win10-era systems and documents call-chain analysis from kernel debugging sessions. It is intended for kernel security and anti-cheat researchers studying PatchGuard internals and bypass concepts.
