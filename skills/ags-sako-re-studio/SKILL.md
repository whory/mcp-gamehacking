---
name: ags-sako-re-studio
description: "Sako RE Studio is a mobile-first reverse engineering suite for Android that combines an interactive disassembler, IR-based decompiler, call-graph explorer, ptrace debugger, APK analyzer, and extensibl"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sako-re-studio
---

# SakoREStudio

**Author:** Maxamedxasa
**Source:** mcp-gamehacking/skills/ags-sako-re-studio

## Description

Sako RE Studio is a mobile-first reverse engineering suite for Android that combines an interactive disassembler, IR-based decompiler, call-graph explorer, ptrace debugger, APK analyzer, and extensible plugin system in a single offline app. Its native C++17 engine uses Capstone for disassembly and supports APK, ELF, PE, and DEX binaries on ARM64 and x86-64, while the Kotlin Jetpack Compose UI provides assembly views, pseudo-C decompilation, control-flow graphs, and SQLite-backed project persistence. Built-in SakoScript plugins automate security auditing, ARM analysis, DEX inspection, and string hunting, and an optional AI assistant can explain functions locally or via OpenAI-compatible endpoints. It targets reverse engineers, mobile security researchers, and analysts who need IDA Pro or Ghidra-like capabilities on a phone or tablet without sending binaries off-device.
