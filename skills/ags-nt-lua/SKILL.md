---
name: ags-nt-lua
description: "This project is a proof of concept for running Lua scripts inside the Windows kernel. It embeds a Lua 5.4 interpreter into a kernel driver, exposing NT kernel APIs such as physical and virtual memory "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nt-lua
---

# NtLua

**Author:** can1357
**Source:** mcp-gamehacking/skills/ags-nt-lua

## Description

This project is a proof of concept for running Lua scripts inside the Windows kernel. It embeds a Lua 5.4 interpreter into a kernel driver, exposing NT kernel APIs such as physical and virtual memory access, process enumeration, and MSR read/write to Lua scripts executing at ring 0. The C/C++ driver communicates with a user-mode client that sends Lua code for kernel-side evaluation. It is aimed at kernel researchers and exploit developers exploring scripted kernel introspection and the implications of running interpreted languages in privileged contexts.
