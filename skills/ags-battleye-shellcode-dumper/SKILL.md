---
name: ags-battleye-shellcode-dumper
description: "This project is a tool for dumping BattlEye's runtime shellcode modules that are streamed from the BattlEye server and executed in the game process. It intercepts and saves these scanning modules befo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-battleye-shellcode-dumper
---

# Battleye Shellcode Dumper

**Author:** lguilhermee
**Source:** mcp-gamehacking/skills/ags-battleye-shellcode-dumper

## Description

This project is a tool for dumping BattlEye's runtime shellcode modules that are streamed from the BattlEye server and executed in the game process. It intercepts and saves these scanning modules before they execute, enabling offline analysis of BattlEye's detection logic. The tool captures the shellcode payloads and their decryption keys. It is aimed at anti-cheat researchers reverse engineering BattlEye's dynamic scanning module architecture and detection signatures.
