---
name: ags-inject-set-console
description: "InjectSetConsole is a Windows C++ tool that injects code into a child process by feeding a payload through standard input pipes rather than using VirtualAllocEx and WriteProcessMemory. It launches an "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-inject-set-console
---

# InjectSetConsole

**Author:** TwoSevenOneT
**Source:** mcp-gamehacking/skills/ags-inject-set-console

## Description

InjectSetConsole is a Windows C++ tool that injects code into a child process by feeding a payload through standard input pipes rather than using VirtualAllocEx and WriteProcessMemory. It launches an interactive console program, writes embedded shellcode to the process via stdin, scans remote memory for a marker pattern to locate the buffer, and makes that region executable with VirtualProtectEx before hijacking the main thread's instruction pointer through NtSetContextThread. The implementation includes helpers for remote pattern scanning, main-thread discovery, and pipe-based I/O, with customizable shellcode and search patterns for evasion. It is aimed at security researchers studying process injection, EDR bypass techniques, and anti-cheat or offensive tooling on Windows x64.
