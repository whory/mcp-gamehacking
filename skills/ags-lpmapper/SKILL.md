---
name: ags-lpmapper
description: "This project is a Windows kernel mapper that places shellcode into already loaded large-page drivers without fresh memory allocation. It is implemented in C++ and follows a workflow inspired by known "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-lpmapper
---

# lpmapper

**Author:** VollRagm
**Source:** mcp-gamehacking/skills/ags-lpmapper

## Description

This project is a Windows kernel mapper that places shellcode into already loaded large-page drivers without fresh memory allocation. It is implemented in C++ and follows a workflow inspired by known manual mappers while requiring specific registry configuration for large-page drivers. The technique is framed as a method to reduce visibility to common kernel anti-cheat detection paths. Its main use case is advanced kernel security research and anti-cheat bypass experimentation.
