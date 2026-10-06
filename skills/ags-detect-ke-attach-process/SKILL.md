---
name: ags-detect-ke-attach-process
description: "This project is a kernel research sample for detecting KeAttachProcess usage on Windows."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detect-ke-attach-process
---

# Detect KeAttachProcess

**Author:** KANKOSHEV
**Source:** mcp-gamehacking/skills/ags-detect-ke-attach-process

## Description

This project is a kernel research sample for detecting KeAttachProcess usage on Windows.
It enumerates processes and their threads, then inspects thread context data to identify unexpected attached target processes.
The code is packaged as a continuously running kernel driver built with Visual Studio C and C++ tooling.
It targets anti-cheat and security monitoring scenarios where covert process attachment is relevant.
