---
name: ags-arc-raiders-radar-dma-radar
description: "This project is a DMA-based radar and ESP tool for Arc Raiders that reads game memory externally through FPGA hardware using MemProcFS."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-arc-raiders-radar-dma-radar
---

# ArcRaidersRadar dma Radar

**Author:** a0yark
**Source:** mcp-gamehacking/skills/ags-arc-raiders-radar-dma-radar

## Description

This project is a DMA-based radar and ESP tool for Arc Raiders that reads game memory externally through FPGA hardware using MemProcFS.
It uses Unicorn Engine to emulate the game's own decryption functions for resolving obfuscated pointers such as GWorld, GameInstance, CameraManager, and BoneBase without manually reversing the decryption logic.
The C++ codebase includes DMA initialization, process and module discovery, emulation-based pointer decryption, and a framework for player and actor iteration.
It is mainly useful for DMA security researchers studying emulation-assisted pointer resolution and hardware-based external memory reading techniques.
