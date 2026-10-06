---
name: ags-idacpp
description: "This project is a C++ scripting plugin for IDA Pro that embeds a Cling/Clang 20-based C++ interpreter directly into IDA's scripting engine."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-idacpp
---

# idacpp

**Author:** allthingsida
**Source:** mcp-gamehacking/skills/ags-idacpp

## Description

This project is a C++ scripting plugin for IDA Pro that embeds a Cling/Clang 20-based C++ interpreter directly into IDA's scripting engine.
It provides native access to the full IDA SDK and Hex-Rays APIs in a REPL, using the same types (ea_t, func_t*, cfunc_t*) as compiled plugins without FFI or bindings.
The plugin includes a snippet editor, output window REPL tab, and cross-platform support for Windows and macOS.
It is mainly useful for reverse engineers who want interactive C++ scripting in IDA Pro with direct SDK-level access.
