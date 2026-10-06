---
name: ags-dot-niet
description: "This project is dotNIET, an IDA Pro plugin for deobfuscating .NET Native (NativeAOT) compiled binaries. It reconstructs type information, method names, and metadata references that are lost during .NE"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dot-niet
---

# dotNIET

**Author:** synacktiv
**Source:** mcp-gamehacking/skills/ags-dot-niet

## Description

This project is dotNIET, an IDA Pro plugin for deobfuscating .NET Native (NativeAOT) compiled binaries. It reconstructs type information, method names, and metadata references that are lost during .NET Native AOT compilation, mapping native code back to original .NET types and methods. The Python plugin helps analyze .NET applications that have been compiled to native code. It is aimed at reverse engineers analyzing .NET Native binaries where standard .NET decompilation tools cannot be used.
