---
name: ags-vmlinux-to-elf
description: "This project is vmlinux-to-elf, a Python tool that converts raw Linux kernel images (vmlinux, bzImage, zImage) into proper ELF files with symbol tables. It extracts the kernel's kallsyms symbol table,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vmlinux-to-elf
---

# vmlinux to elf

**Author:** marin-m
**Source:** mcp-gamehacking/skills/ags-vmlinux-to-elf

## Description

This project is vmlinux-to-elf, a Python tool that converts raw Linux kernel images (vmlinux, bzImage, zImage) into proper ELF files with symbol tables. It extracts the kernel's kallsyms symbol table, reconstructs section headers, and produces an ELF binary that can be loaded into IDA Pro, Ghidra, or other disassemblers with full function names. It is aimed at Linux kernel researchers, exploit developers, and reverse engineers who need to analyze kernel binaries with proper symbol information.
