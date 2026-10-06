---
name: ags-ghidra-obfuscation-detection
description: "Ghidra-Obfuscation-Detection is a Ghidra script for spotting potentially obfuscated or unusually complex functions. It applies heuristic feature extraction to function bodies so analysts can quickly p"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghidra-obfuscation-detection
---

# Ghidra Obfuscation Detection

**Author:** Deatty
**Source:** mcp-gamehacking/skills/ags-ghidra-obfuscation-detection

## Description

Ghidra-Obfuscation-Detection is a Ghidra script for spotting potentially obfuscated or unusually complex functions. It applies heuristic feature extraction to function bodies so analysts can quickly prioritize suspicious code regions during reverse engineering sessions. The project is implemented in Java for direct use inside the Ghidra scripting environment and is lightweight to integrate into existing analysis workflows. It is primarily aimed at malware and game binary researchers who need faster triage of protected code.
