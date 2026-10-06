---
name: ags-findcrypt-yara
description: "This project is FindCrypt, an IDA Pro plugin that identifies cryptographic constants and algorithm implementations in disassembled binaries using YARA rules. It scans for known byte patterns of AES S-"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-findcrypt-yara
---

# findcrypt yara

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-findcrypt-yara

## Description

This project is FindCrypt, an IDA Pro plugin that identifies cryptographic constants and algorithm implementations in disassembled binaries using YARA rules. It scans for known byte patterns of AES S-boxes, DES permutation tables, SHA hash constants, CRC lookup tables, and other crypto signatures, annotating identified locations with algorithm names. The Python plugin helps analysts quickly locate cryptographic code in binaries. It is aimed at malware analysts and reverse engineers identifying cryptographic implementations in unknown binaries.
