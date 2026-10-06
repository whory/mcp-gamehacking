---
name: ags-cs2-dma-radar
description: "This project is a Counter-Strike 2 DMA radar system that streams game state into a browser-based tactical map view. It uses a Java backend with Spring Boot and WebSocket components together with a Lea"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cs2-dma-radar
---

# CS2 DMA Radar

**Author:** MoZiHao
**Source:** mcp-gamehacking/skills/ags-cs2-dma-radar

## Description

This project is a Counter-Strike 2 DMA radar system that streams game state into a browser-based tactical map view. It uses a Java backend with Spring Boot and WebSocket components together with a Leaflet and JavaScript frontend for live rendering. The backend reads memory through VMM and LeechCore related interfaces, while map assets and icons support multiple competitive maps and player markers. It is primarily used for external situational-awareness experiments in game security and anti-cheat research contexts.
