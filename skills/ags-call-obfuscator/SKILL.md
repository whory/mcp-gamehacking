---
name: ags-call-obfuscator
description: "A PE binary post-processing tool that obfuscates API call targets by rewriting a binary's import table to point at different (decoy) functions, then patches the call sites at load time to redirect to "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-call-obfuscator
---

# CallObfuscator

**Author:** d35ha
**Source:** mcp-gamehacking/skills/ags-call-obfuscator

## Description

A PE binary post-processing tool that obfuscates API call targets by rewriting a binary's import table to point at different (decoy) functions, then patches the call sites at load time to redirect to the real targets through a shellcode-based resolver, making static analysis show misleading API references.
Configured via an INI file that maps real API calls to fake ones, the tool modifies the PE import directory entries and injects position-independent shellcode that resolves the actual function addresses at runtime via PEB->Ldr module walking and export table parsing.
It is mainly useful for malware researchers, red teamers, and game security researchers studying import table obfuscation techniques to evade static analysis and signature-based detection.
