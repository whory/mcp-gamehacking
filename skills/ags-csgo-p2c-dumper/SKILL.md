---
name: ags-csgo-p2c-dumper
description: "This project is a process memory dumper targeting CS:GO internal cheats for reverse engineering and analysis."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-csgo-p2c-dumper
---

# CSGO P2C Dumper

**Author:** ch4ncellor
**Source:** mcp-gamehacking/skills/ags-csgo-p2c-dumper

## Description

This project is a process memory dumper targeting CS:GO internal cheats for reverse engineering and analysis.
It offers three dumping methods: signature-based dumping using popular cheat signatures, hook-based dumping that finds direct JMPs to cheat modules from commonly hooked functions with displacement logging, and allocation-based dumping that compares memory regions before and after injection.
The tool logs pre/post injection buffers, decoded assembly, and handler function locations relative to the dump start address.
It is mainly useful for anti-cheat researchers and game security analysts studying injected cheat module analysis and memory forensics in CS:GO.
