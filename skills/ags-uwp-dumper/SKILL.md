---
name: ags-uwp-dumper
description: "This project is a Windows DLL and injector tool for dumping UWP application files at runtime."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-uwp-dumper
---

# UWPDumper

**Author:** Wunkolo
**Source:** mcp-gamehacking/skills/ags-uwp-dumper

## Description

This project is a Windows DLL and injector tool for dumping UWP application files at runtime.
It works by injecting into a target process and extracting package data that is otherwise protected by the UWP file system model.
The implementation is C++ based, includes command-line handling, and is designed to build with the Windows 10 SDK.
It is useful for reverse engineering and security analysis of UWP software, including protected game builds distributed through the Microsoft ecosystem.
