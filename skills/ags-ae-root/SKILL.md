---
name: ags-ae-root
description: "This project is a Python tool from Quarkslab for rooting Android Emulator instances at runtime without modifying the system image. It exploits the emulator's debug pipe or ADB root access to remount t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ae-root
---

# AERoot

**Author:** quarkslab
**Source:** mcp-gamehacking/skills/ags-ae-root

## Description

This project is a Python tool from Quarkslab for rooting Android Emulator instances at runtime without modifying the system image. It exploits the emulator's debug pipe or ADB root access to remount the system partition as read-write, install a custom su binary, and establish persistent root. The tool automates the process across multiple Android API levels. It is aimed at mobile security researchers and Android developers who need root access on emulator instances for testing and reverse engineering.
