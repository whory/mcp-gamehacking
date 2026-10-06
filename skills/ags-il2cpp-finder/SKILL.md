---
name: ags-il2cpp-finder
description: "This project is a tool for locating and identifying IL2CPP metadata structures in Unity game binaries. It scans game executables and shared libraries for IL2CPP global-metadata.dat signatures, CodeReg"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-il2cpp-finder
---

# il2cpp finder

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-il2cpp-finder

## Description

This project is a tool for locating and identifying IL2CPP metadata structures in Unity game binaries. It scans game executables and shared libraries for IL2CPP global-metadata.dat signatures, CodeRegistration, and MetadataRegistration pointers, helping locate the entry points needed for IL2CPP dumping and analysis. It is aimed at Unity game reverse engineers who need to find IL2CPP metadata in unfamiliar or obfuscated game binaries.
