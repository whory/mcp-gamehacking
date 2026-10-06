---
name: ags-shellcode-fluctuation
description: "This project is a PoC implementation for an another in-memory evasion technique that cyclically encrypts and decrypts shellcode's contents to then make it fluctuate between RW (or NoAccess) and RX mem"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shellcode-fluctuation
---

# ShellcodeFluctuation

**Author:** mgeeky
**Source:** mcp-gamehacking/skills/ags-shellcode-fluctuation

## Description

This project is a PoC implementation for an another in-memory evasion technique that cyclically encrypts and decrypts shellcode's contents to then make it fluctuate between RW (or NoAccess) and RX memory protection.
This PoC is a demonstration of rather simple technique, already known to the offensive community (so I'm not bringin anything new here really) in hope to disclose secrecy behind magic showed by some commercial frameworks that demonstrate their evasion capabilities targeting both aforementioned memory scanners.
It is mainly useful for anti-cheat engineers and defensive security researchers working in the anti cheat / page protection area.
