---
name: ags-dolboeb-executor
description: "This project is a kernel-mode code executor that uses a vulnerable signed driver to execute arbitrary code in kernel space. It loads and exploits the vulnerable driver's IOCTL interface to run custom "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dolboeb-executor
---

# dolboeb executor

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-dolboeb-executor

## Description

This project is a kernel-mode code executor that uses a vulnerable signed driver to execute arbitrary code in kernel space. It loads and exploits the vulnerable driver's IOCTL interface to run custom kernel shellcode or call arbitrary kernel functions from user mode. It is aimed at kernel exploitation researchers studying BYOVD-based kernel code execution techniques.
