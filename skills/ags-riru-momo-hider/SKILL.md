---
name: ags-riru-momo-hider
description: "This project is a Riru module for hiding Magisk root from detection by apps. It hooks system calls and Java APIs used by root detection libraries (like MagiskDetector/RootBeer) to hide Magisk's presen"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-riru-momo-hider
---

# Riru MomoHider

**Author:** canyie
**Source:** mcp-gamehacking/skills/ags-riru-momo-hider

## Description

This project is a Riru module for hiding Magisk root from detection by apps. It hooks system calls and Java APIs used by root detection libraries (like MagiskDetector/RootBeer) to hide Magisk's presence, including spoofing mount points, hiding Magisk files, and blocking property queries that reveal root status. The C/Java module operates through Riru's Zygote injection mechanism. It is aimed at Android users and security researchers studying root detection bypass techniques.
