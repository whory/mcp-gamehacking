---
name: ags-amd-sp-loader
description: "A Binary Ninja loader plugin for AMD Secure Processor (SP) / Platform Security Processor (PSP) firmware binaries that correctly sets up load addresses for AGESA Bootloader (ABL) and PSP bootloader blo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-amd-sp-loader
---

# AMD SP Loader

**Author:** dayzerosec
**Source:** mcp-gamehacking/skills/ags-amd-sp-loader

## Description

A Binary Ninja loader plugin for AMD Secure Processor (SP) / Platform Security Processor (PSP) firmware binaries that correctly sets up load addresses for AGESA Bootloader (ABL) and PSP bootloader blobs.
It optionally annotates PSP syscalls using a bundled dictionary and is designed to work with binaries extracted via PSPTool.
It is mainly useful for firmware security researchers reverse engineering AMD PSP firmware and analyzing the AMD Secure Processor's bootloader chain.
