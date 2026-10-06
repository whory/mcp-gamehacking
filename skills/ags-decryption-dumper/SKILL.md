---
name: ags-decryption-dumper
description: "This project is a Windows C++ decryption routine dumper that traces and reconstructs encrypted pointer logic at runtime. It launches a target under a debugger, single-steps instructions, and uses Zydi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-decryption-dumper
---

# DecryptionDumper

**Author:** Nuxar1
**Source:** mcp-gamehacking/skills/ags-decryption-dumper

## Description

This project is a Windows C++ decryption routine dumper that traces and reconstructs encrypted pointer logic at runtime. It launches a target under a debugger, single-steps instructions, and uses Zydis-based disassembly to track register and stack dependencies until decryption output is resolved. The tool includes pattern scanning, context restoration, and instruction filtering to produce cleaner recovered instruction flows. It is primarily useful for reverse engineering protected game binaries and studying anti-cheat-protected decryption behavior.
