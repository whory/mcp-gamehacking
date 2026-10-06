---
name: ags-custom-dpapi
description: "This project is a C++ proof-of-concept that calls the undocumented DPAPI RPC interface directly, bypassing the standard CryptUnprotectData API. It demonstrates how to invoke NdrClientCall3 with the co"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-custom-dpapi
---

# CustomDpapi

**Author:** EvilBytecode
**Source:** mcp-gamehacking/skills/ags-custom-dpapi

## Description

This project is a C++ proof-of-concept that calls the undocumented DPAPI RPC interface directly, bypassing the standard CryptUnprotectData API. It demonstrates how to invoke NdrClientCall3 with the correct parameters to perform data decryption through the lsass RPC endpoint, based on reverse engineering of dpapi.dll internals. It is mainly useful for security researchers studying Windows credential protection, DPAPI internals, and RPC-based attack surfaces.
