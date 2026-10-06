---
name: ags-anti-mi-ho-yo-jcc-obfuscate
description: "This project is an x64dbg plugin that assists with undoing JCC and jump-based control-flow obfuscation used in protected Unity game code paths. It monitors specific decryption routine ranges, tracks d"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-mi-ho-yo-jcc-obfuscate
---

# Anti miHoYo Jcc Obfuscate

**Author:** DNLINYJ
**Source:** mcp-gamehacking/skills/ags-anti-mi-ho-yo-jcc-obfuscate

## Description

This project is an x64dbg plugin that assists with undoing JCC and jump-based control-flow obfuscation used in protected Unity game code paths. It monitors specific decryption routine ranges, tracks dynamic jump behavior, and patches instructions to reconstruct more readable execution flow during debugging sessions. The implementation is C++ with the x64dbg plugin SDK and includes logic tailored to known game build offsets. It is intended for game reverse engineering and anti-obfuscation research, and the code is marked by the author as no longer maintained.
