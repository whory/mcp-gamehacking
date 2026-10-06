---
name: ags-themida-research
description: "This project is research notes on Themida / WinLicense 3.x virtualization, covering VM_CONTEXT layout, handler behavior, bytecode dispatch, and de-virtualization ideas."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-themida-research
---

# Themida Research

**Author:** stuxnet147
**Source:** mcp-gamehacking/skills/ags-themida-research

## Description

This project is research notes on Themida / WinLicense 3.x virtualization, covering VM_CONTEXT layout, handler behavior, bytecode dispatch, and de-virtualization ideas.
The write-ups explain how Themida maps native x64 into custom VM bytecode with virtual registers, stacks, and anti-debugging, and sketch lifting approaches with tools such as Triton.
It is mainly useful for reverse engineers defeating or analyzing Themida-protected game and anti-cheat binaries.
