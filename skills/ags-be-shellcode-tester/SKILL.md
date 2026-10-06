---
name: ags-be-shellcode-tester
description: "This project is a testing environment for executing and analyzing BattlEye anti-cheat shellcode modules in a controlled sandbox. It loads dumped BattlEye scanning modules, emulates the expected runtim"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-be-shellcode-tester
---

# be shellcode tester

**Author:** es3n1n
**Source:** mcp-gamehacking/skills/ags-be-shellcode-tester

## Description

This project is a testing environment for executing and analyzing BattlEye anti-cheat shellcode modules in a controlled sandbox. It loads dumped BattlEye scanning modules, emulates the expected runtime environment, and logs their behavior including memory scans, hash checks, and detection routines. The C++ tester helps researchers understand BattlEye's detection coverage. It is aimed at anti-cheat researchers reverse engineering BattlEye's shellcode-based scanning modules.
