---
name: ags-ceserver-rawmem
description: "This project is a Cheat Engine server (ceserver) implementation that uses raw physical memory access instead of standard process memory APIs. It implements the ceserver network protocol for remote Che"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ceserver-rawmem
---

# ceserver rawmem

**Author:** cs1ime
**Source:** mcp-gamehacking/skills/ags-ceserver-rawmem

## Description

This project is a Cheat Engine server (ceserver) implementation that uses raw physical memory access instead of standard process memory APIs. It implements the ceserver network protocol for remote Cheat Engine connections, but reads target process memory through direct physical memory access (e.g., /dev/mem or DMA), bypassing OS-level memory access protections and anti-cheat monitoring. It is aimed at security researchers studying physical memory-based cheat engine configurations and DMA attack scenarios.
