---
name: ags-imxyvi-mapper
description: "This project is a Windows kernel driver mapper that loads unsigned drivers by exploiting a specific vulnerable signed driver. It handles PE manual mapping including section copying, import resolution,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-imxyvi-mapper
---

# imxyviMapper

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-imxyvi-mapper

## Description

This project is a Windows kernel driver mapper that loads unsigned drivers by exploiting a specific vulnerable signed driver. It handles PE manual mapping including section copying, import resolution, relocation processing, and entry point invocation through the vulnerable driver's kernel access primitive. It is aimed at kernel researchers studying driver mapping implementations.
