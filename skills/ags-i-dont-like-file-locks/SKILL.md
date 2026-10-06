---
name: ags-i-dont-like-file-locks
description: "This project is a C++ research collection for extracting data from files that are locked by other running processes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-i-dont-like-file-locks
---

# IDontLikeFileLocks

**Author:** EvilBytecode
**Source:** mcp-gamehacking/skills/ags-i-dont-like-file-locks

## Description

This project is a C++ research collection for extracting data from files that are locked by other running processes.
It demonstrates several techniques, including stealing memory-mapped section handles, duplicating and closing remote handles, and related lock-bypass workflows.
The examples target scenarios like reading browser databases without stopping the browser, highlighting low-noise file acquisition behavior.
Its primary use case is authorized security research and forensics focused on understanding file-lock evasion and info-stealer tradecraft.
