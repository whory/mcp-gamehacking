---
name: ags-unflutter
description: "This project is unflutter, a tool for reversing compiled Flutter/Dart applications. It extracts Dart snapshot metadata from Flutter APKs and iOS apps, recovers class names, function names, and type in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-unflutter
---

# unflutter

**Author:** zboralski
**Source:** mcp-gamehacking/skills/ags-unflutter

## Description

This project is unflutter, a tool for reversing compiled Flutter/Dart applications. It extracts Dart snapshot metadata from Flutter APKs and iOS apps, recovers class names, function names, and type information that would otherwise be lost during AOT compilation. The Python tool parses the Dart VM snapshot format and outputs reconstructed symbol information. It is aimed at mobile security researchers and reverse engineers analyzing Flutter-based applications.
