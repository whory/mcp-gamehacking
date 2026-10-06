---
name: ags-tpm-mmio
description: "This project focuses on using MMIO (Memory-Mapped I/O) to read TPM 2.0 public Endorsement Key."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-tpm-mmio
---

# tpm mmio

**Author:** synctop
**Source:** mcp-gamehacking/skills/ags-tpm-mmio

## Description

This project focuses on using MMIO (Memory-Mapped I/O) to read TPM 2.0 public Endorsement Key.
This proof of concept (POC) demonstrates how Memory-Mapped I/O (MMIO) can be used to directly query the TPM state and the EK from the chip itself, bypassing any OS hooks.
It is mainly useful for anti-cheat engineers and defensive security researchers working in the anti cheat / detection:hwid area.
