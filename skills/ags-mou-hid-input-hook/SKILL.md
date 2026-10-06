---
name: ags-mou-hid-input-hook
description: "This project is a Windows kernel driver that hooks the CONNECT_DATA object inside MouHid device objects to filter, modify, and inject mouse input packets without modifying HID USB mouse device stacks."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mou-hid-input-hook
---

# MouHidInputHook

**Author:** changeofpace
**Source:** mcp-gamehacking/skills/ags-mou-hid-input-hook

## Description

This project is a Windows kernel driver that hooks the CONNECT_DATA object inside MouHid device objects to filter, modify, and inject mouse input packets without modifying HID USB mouse device stacks.
It emulates the Moufiltr strategy by intercepting the ClassService callback used to transfer mouse data to class data queues, supporting safe unhooking without unloading device stacks and PnP notification for device changes.
The technique is PatchGuard-safe and relatively stealthy since it avoids attaching filter device objects and uses a heuristic to resolve undocumented CONNECT_DATA field offsets.
It is mainly useful for anti-cheat researchers and input security analysts studying kernel-level mouse input interception and input simulation detection.
