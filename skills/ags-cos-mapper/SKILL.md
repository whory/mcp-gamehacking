---
name: ags-cos-mapper
description: "This project is a Windows kernel driver mapper that uses a signed helper driver to map an unsigned payload driver. It combines user-mode and kernel-mode components, transfers mapped images through ker"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cos-mapper
---

# CosMapper

**Author:** armvirus
**Source:** mcp-gamehacking/skills/ags-cos-mapper

## Description

This project is a Windows kernel driver mapper that uses a signed helper driver to map an unsigned payload driver. It combines user-mode and kernel-mode components, transfers mapped images through kernel hooks, and attempts to clean common forensic traces such as unloaded-driver and cache artifacts. The repository includes an example entry contract for mapped drivers and buildable Visual Studio projects for the full mapping flow. It is aimed at low-level game security and kernel research where driver loading behavior and stealth tradeoffs are being studied.
