---
name: ags-dse-hook
description: "This project demonstrates hooking Windows Driver Signature Enforcement (DSE) to allow loading unsigned kernel drivers. It patches CI.dll's signature verification function or the g_CiEnabled global var"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dse-hook
---

# dse hook

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-dse-hook

## Description

This project demonstrates hooking Windows Driver Signature Enforcement (DSE) to allow loading unsigned kernel drivers. It patches CI.dll's signature verification function or the g_CiEnabled global variable to bypass code integrity checks that normally prevent unsigned driver loading. It is aimed at kernel researchers studying DSE bypass techniques.
