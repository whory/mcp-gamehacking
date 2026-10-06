---
name: ags-battleye-decryption
description: "A tool that decrypts BattlEye's multi-layered encrypted communication packets exchanged between the BEService usermode component and the BEDaisy kernel driver via named pipes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-battleye-decryption
---

# battleye decryption

**Author:** dllcrt0
**Source:** mcp-gamehacking/skills/ags-battleye-decryption

## Description

A tool that decrypts BattlEye's multi-layered encrypted communication packets exchanged between the BEService usermode component and the BEDaisy kernel driver via named pipes.
It implements the XOR-based decryption algorithms including generic packet decryption, hardware information encryption/decryption, and second-stage key-derived decryption routines.
It is mainly useful for anti-cheat researchers reverse engineering BattlEye's client-driver communication protocol and packet encryption schemes.
