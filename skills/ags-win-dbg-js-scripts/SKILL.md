---
name: ags-win-dbg-js-scripts
description: "This project is a collection of JavaScript scripts for WinDbg that helps analysts examine Windows memory dumps. It provides commands for tasks like finding exception record candidates, walking STL map"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-win-dbg-js-scripts
---

# WinDbg JS Scripts

**Author:** KasperskyLab
**Source:** mcp-gamehacking/skills/ags-win-dbg-js-scripts

## Description

This project is a collection of JavaScript scripts for WinDbg that helps analysts examine Windows memory dumps. It provides commands for tasks like finding exception record candidates, walking STL map structures, fixing broken noexcept stack traces, and inspecting x86 stacks in x64 kernel dumps. The codebase is primarily JavaScript, with supporting manifest XML files and a small Python helper script for related debugging workflows. It is aimed at reverse engineers and game security researchers who need faster low-level dump triage during anti-cheat and malware analysis.
