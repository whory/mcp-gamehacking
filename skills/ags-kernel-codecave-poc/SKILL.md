---
name: ags-kernel-codecave-poc
description: "This project is a Windows kernel proof of concept that hides executable code inside code caves within legitimate kernel drivers. It scans loaded drivers for unused padding regions (code caves) in thei"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-codecave-poc
---

# kernel codecave poc

**Author:** rogerxiii
**Source:** mcp-gamehacking/skills/ags-kernel-codecave-poc

## Description

This project is a Windows kernel proof of concept that hides executable code inside code caves within legitimate kernel drivers. It scans loaded drivers for unused padding regions (code caves) in their .text sections, copies shellcode into these gaps, and executes it from the context of a trusted driver module. This avoids allocating new executable kernel memory that would be detectable by anti-cheat scans. It is aimed at kernel security researchers studying code cave abuse and stealthy kernel code execution techniques.
