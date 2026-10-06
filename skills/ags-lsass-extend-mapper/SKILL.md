---
name: ags-lsass-extend-mapper
description: "This project is a Windows driver mapper that loads unsigned kernel drivers by extending the lsass.exe process's address space and using its context for kernel operations. It abuses lsass's trusted sta"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-lsass-extend-mapper
---

# lsass extend mapper

**Author:** zorftw
**Source:** mcp-gamehacking/skills/ags-lsass-extend-mapper

## Description

This project is a Windows driver mapper that loads unsigned kernel drivers by extending the lsass.exe process's address space and using its context for kernel operations. It abuses lsass's trusted status to map driver code through a technique that avoids standard driver loading traces. The C++ implementation demonstrates process-context-based kernel code execution. It is aimed at kernel researchers studying advanced driver mapping techniques that leverage trusted process contexts.
