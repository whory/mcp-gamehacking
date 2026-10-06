---
name: ags-dynadump
description: "This project is an Objective-C command-line class-dump tool for Apple binaries and shared cache images. It can list loaded dylibs, enumerate Objective-C classes, dump class interfaces, print demangled"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dynadump
---

# dynadump

**Author:** DerekSelander
**Source:** mcp-gamehacking/skills/ags-dynadump

## Description

This project is an Objective-C command-line class-dump tool for Apple binaries and shared cache images. It can list loaded dylibs, enumerate Objective-C classes, dump class interfaces, print demangled signatures, and attempt in-place signing operations. The tool relies on dlopen with exception-handling strategies to avoid constructor side effects during analysis. It is designed for macOS and iOS reverse engineering workflows where analysts need fast runtime-assisted Objective-C introspection.
