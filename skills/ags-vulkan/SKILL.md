---
name: ags-vulkan
description: "This project is a PE image dumper designed for processes protected by dynamic code encryption such as Hyperion and Theia anti-tamper solutions."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vulkan
---

# vulkan

**Author:** atrexus
**Source:** mcp-gamehacking/skills/ags-vulkan

## Description

This project is a PE image dumper designed for processes protected by dynamic code encryption such as Hyperion and Theia anti-tamper solutions.
It restores encrypted PE images by iteratively resolving NOACCESS pages until the target module is decrypted, with configurable decryption factor thresholds and import resolution support.
The C++ tool has been tested on Roblox and The Finals, and also works for dumping regular images and loaded modules from memory.
It is mainly useful for reverse engineers and game security researchers studying anti-tamper protections and PE dumping techniques for encrypted executables.
