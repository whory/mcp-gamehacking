---
name: ags-opainject
description: "This project is opainject, a command-line tool for injecting dynamic libraries (dylibs) into running processes on iOS/macOS. It uses task_for_pid and Mach thread APIs to create a remote thread in the "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-opainject
---

# opainject

**Author:** opa334
**Source:** mcp-gamehacking/skills/ags-opainject

## Description

This project is opainject, a command-line tool for injecting dynamic libraries (dylibs) into running processes on iOS/macOS. It uses task_for_pid and Mach thread APIs to create a remote thread in the target process that loads the specified dylib via dlopen. The Objective-C tool works on jailbroken devices with tfp0 access. It is aimed at iOS jailbreak developers and security researchers who need runtime dylib injection for tweak development and process analysis.
