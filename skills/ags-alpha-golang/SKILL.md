---
name: ags-alpha-golang
description: "This project is a toolkit of scripts that helps reverse engineers analyze Go binaries in IDA Pro. It is mainly written in IDAPython and is organized as a step-by-step workflow covering binary identifi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-alpha-golang
---

# AlphaGolang

**Author:** SentineLabs
**Source:** mcp-gamehacking/skills/ags-alpha-golang

## Description

This project is a toolkit of scripts that helps reverse engineers analyze Go binaries in IDA Pro. It is mainly written in IDAPython and is organized as a step-by-step workflow covering binary identification, pclntab recovery, function discovery, string handling, and type extraction. It also includes a YARA rule for quickly spotting Go executables across PE, ELF, and Mach-O formats. The primary use case is malware and threat analysis where stripped or heavily optimized Go samples are difficult to read manually.
