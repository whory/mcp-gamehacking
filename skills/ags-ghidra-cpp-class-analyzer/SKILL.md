---
name: ags-ghidra-cpp-class-analyzer
description: "This project is a Ghidra extension that analyzes C++ class metadata and runtime type information in compiled binaries. Written in Java with Gradle build scripts, it adds analyzers for GCC, Clang, and "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghidra-cpp-class-analyzer
---

# Ghidra Cpp Class Analyzer

**Author:** astrelsky
**Source:** mcp-gamehacking/skills/ags-ghidra-cpp-class-analyzer

## Description

This project is a Ghidra extension that analyzes C++ class metadata and runtime type information in compiled binaries. Written in Java with Gradle build scripts, it adds analyzers for GCC, Clang, and MSVC RTTI models, vtables, constructors and destructors, and inheritance reconstruction. It also provides visualization-oriented tooling such as class hierarchy views and scripts that integrate with the extension APIs. The intended audience is reverse engineers, including game security analysts working on large native C++ targets.
