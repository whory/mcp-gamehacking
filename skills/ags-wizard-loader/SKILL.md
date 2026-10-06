---
name: ags-wizard-loader
description: "This project is a Windows PE loader/injector that implements manual mapping of DLLs into target processes with various anti-detection features. It handles PE section mapping, import resolution, reloca"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wizard-loader
---

# Wizard Loader

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-wizard-loader

## Description

This project is a Windows PE loader/injector that implements manual mapping of DLLs into target processes with various anti-detection features. It handles PE section mapping, import resolution, relocation fixups, TLS callbacks, and exception handler registration while implementing measures to avoid detection by anti-cheat systems such as PE header erasure and thread hiding. It is aimed at kernel and game security researchers studying advanced DLL loading and injection detection evasion.
