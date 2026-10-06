---
name: ags-nauz-file-detector
description: "This project is Nauz File Detector (NFD), a tool for identifying packers, compilers, protectors, and linkers used to build executable files. It scans PE, ELF, Mach-O, and other binary formats using si"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nauz-file-detector
---

# Nauz File Detector

**Author:** horsicq
**Source:** mcp-gamehacking/skills/ags-nauz-file-detector

## Description

This project is Nauz File Detector (NFD), a tool for identifying packers, compilers, protectors, and linkers used to build executable files. It scans PE, ELF, Mach-O, and other binary formats using signature-based detection to identify hundreds of known compilers (MSVC, GCC, Clang), packers (UPX, ASPack), protectors (Themida, VMProtect), and installers. The C++/Qt application provides both GUI and command-line interfaces. It is aimed at malware analysts and reverse engineers performing initial binary triage.
