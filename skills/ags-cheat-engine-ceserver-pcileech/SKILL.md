---
name: ags-cheat-engine-ceserver-pcileech
description: "This project is a Cheat Engine server (ceserver) that uses PCILeech for DMA-based memory access. It implements the ceserver protocol over a PCILeech/LeechCore backend, allowing Cheat Engine to scan an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cheat-engine-ceserver-pcileech
---

# cheat engine ceserver pcileech

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-cheat-engine-ceserver-pcileech

## Description

This project is a Cheat Engine server (ceserver) that uses PCILeech for DMA-based memory access. It implements the ceserver protocol over a PCILeech/LeechCore backend, allowing Cheat Engine to scan and edit process memory through DMA hardware on a separate machine. This makes the memory access completely invisible to the target system's anti-cheat. It is aimed at DMA security researchers using Cheat Engine through PCILeech hardware.
