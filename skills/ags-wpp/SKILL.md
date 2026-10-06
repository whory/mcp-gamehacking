---
name: ags-wpp
description: "This project is a proof-of-concept for intercepting driver DeviceControl calls by hijacking Windows WPP (Windows Software Trace Preprocessor) tracing infrastructure."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wpp
---

# wpp

**Author:** btbd
**Source:** mcp-gamehacking/skills/ags-wpp

## Description

This project is a proof-of-concept for intercepting driver DeviceControl calls by hijacking Windows WPP (Windows Software Trace Preprocessor) tracing infrastructure.
It modifies the WPP trace function pointer and control flags in drivers like disk.sys and mountmgr.sys, then identifies DeviceControl invocations via return address checks and IRP pointer extraction through stack walking or register capture.
The kernel driver demonstrates how .data section WPP pointers in system drivers can be repurposed for DeviceControl interception.
It is mainly useful for kernel security researchers studying unconventional driver hooking techniques and HWID spoofing via disk serial interception.
