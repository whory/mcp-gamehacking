---
name: ags-budget-ept
description: "This project is a proof-of-concept that uses supervisor-mode access prevention (SMAP) and supervisor-mode execution prevention (SMEP) to create inline hooks functionally similar to extended page table"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-budget-ept
---

# BudgetEPT

**Author:** brew02
**Source:** mcp-gamehacking/skills/ags-budget-ept

## Description

This project is a proof-of-concept that uses supervisor-mode access prevention (SMAP) and supervisor-mode execution prevention (SMEP) to create inline hooks functionally similar to extended page table (EPT) hooks.
It demonstrates how CPU access control features can be repurposed to achieve split-page-like hooking behavior without requiring a hypervisor or actual EPT manipulation.
The kernel driver also includes a limited example of how software virtualization could complement these hooks to better conceal their presence.
It is mainly useful for kernel security researchers studying alternative hooking techniques, SMAP/SMEP abuse, and EPT hook emulation without virtualization.
