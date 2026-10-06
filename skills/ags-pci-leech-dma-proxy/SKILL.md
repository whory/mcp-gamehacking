---
name: ags-pci-leech-dma-proxy
description: "This project is a DLL proxy that hooks standard Windows memory API functions and redirects them to a remote device via DMA using the PCILeech/MemProcFS framework. It includes a MinHook-based hooking l"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pci-leech-dma-proxy
---

# PCILeech DMA Proxy

**Author:** MGreif
**Source:** mcp-gamehacking/skills/ags-pci-leech-dma-proxy

## Description

This project is a DLL proxy that hooks standard Windows memory API functions and redirects them to a remote device via DMA using the PCILeech/MemProcFS framework. It includes a MinHook-based hooking layer for process, module, thread, and memory operations, a DMA memory library with input and registry access, and a proxy loader application. It is mainly useful for DMA security researchers studying API-transparent remote memory access and DMA-proxied game interaction techniques.
