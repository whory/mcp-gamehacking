---
name: ags-luminary-dma
description: "LuminaryDMA is a Windows C++ application that reads Call of Duty game memory through external Direct Memory Access hardware to provide read-only visual overlays such as ESP, radar, and player informat"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-luminary-dma
---

# LuminaryDMA

**Author:** TheAustinUS
**Source:** mcp-gamehacking/skills/ags-luminary-dma

## Description

LuminaryDMA is a Windows C++ application that reads Call of Duty game memory through external Direct Memory Access hardware to provide read-only visual overlays such as ESP, radar, and player information. It integrates PCILeech FPGA devices via LeechCore and the DMALibrary wrapper, includes a MockDMA test mode for development without hardware, and runs on a separate machine from the game. The project features platform auto-detection for GamePass and BattleNet, BattleNet pointer decryption, configurable memory offsets, and an ImGui-based overlay menu built with Visual Studio 2022. It is intended for researchers studying DMA-based external cheating, anti-cheat evasion techniques, and reverse engineering of protected game memory structures.
