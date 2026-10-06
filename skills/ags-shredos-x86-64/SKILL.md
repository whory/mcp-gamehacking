---
name: ags-shredos-x86-64
description: "This project provides a bootable Linux environment focused on secure disk erasure. It bundles nwipe with multiple sanitization methods such as DoD patterns, Gutmann passes, PRNG streams, and verificat"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shredos-x86-64
---

# shredos.x86 64

**Author:** PartialVolume
**Source:** mcp-gamehacking/skills/ags-shredos-x86-64

## Description

This project provides a bootable Linux environment focused on secure disk erasure. It bundles nwipe with multiple sanitization methods such as DoD patterns, Gutmann passes, PRNG streams, and verification modes, and supports wiping multiple drives. The system is built with Buildroot and distributed as BIOS/UEFI-capable IMG and ISO images for both 64-bit and 32-bit hardware, with optional certificates and logs for wipe records. It is mainly used by security, forensics, and IT operations teams that need reliable media sanitization before reuse or disposal.
