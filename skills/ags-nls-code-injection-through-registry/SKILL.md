---
name: ags-nls-code-injection-through-registry
description: "This project demonstrates code injection through Windows NLS (National Language Support) registry keys. It modifies NLS-related registry entries to redirect the loading of NLS code page translation DL"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nls-code-injection-through-registry
---

# NlsCodeInjectionThroughRegistry

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-nls-code-injection-through-registry

## Description

This project demonstrates code injection through Windows NLS (National Language Support) registry keys. It modifies NLS-related registry entries to redirect the loading of NLS code page translation DLLs, causing custom DLLs to be loaded into processes that initialize the NLS subsystem. This persistence technique loads code early in process initialization. It is aimed at red team researchers studying NLS-based code injection and persistence techniques.
