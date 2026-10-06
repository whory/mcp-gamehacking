---
name: ags-overwatch2-colorbot-cheats
description: "A Python-based Overwatch 2 colorbot that uses screen pixel color detection to identify enemy outlines (set to purple in-game settings), then calculates aim deltas and sends mouse movement commands to "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-overwatch2-colorbot-cheats
---

# Overwatch2 colorbot Cheats

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-overwatch2-colorbot-cheats

## Description

A Python-based Overwatch 2 colorbot that uses screen pixel color detection to identify enemy outlines (set to purple in-game settings), then calculates aim deltas and sends mouse movement commands to an Arduino Leonardo via serial communication at 115200 baud to bypass mouse input detection.
The Arduino firmware implements HID Mouse.move() calls with chunked 127-unit increments for large movements, and supports shoot/silent-aim/reset commands received over the serial link, making the input indistinguishable from legitimate hardware mouse events.
It is mainly useful for game security researchers studying hardware-based input spoofing via Arduino HID and pixel-based color aimbot techniques.
