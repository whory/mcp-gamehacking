---
name: ags-allocating-individual-pages
description: "This project demonstrates techniques for allocating individual memory pages in the Windows kernel for stealthy code execution. It allocates isolated kernel pages through non-standard methods to avoid "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-allocating-individual-pages
---

# Allocating individual pages

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-allocating-individual-pages

## Description

This project demonstrates techniques for allocating individual memory pages in the Windows kernel for stealthy code execution. It allocates isolated kernel pages through non-standard methods to avoid pool tag tracking and memory scanner detection. The technique is used by manually mapped drivers to reduce their memory footprint visibility. It is aimed at kernel researchers studying stealth memory allocation and anti-forensic techniques.
