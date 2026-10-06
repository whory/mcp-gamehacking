---
name: ags-data-ptr-swap-driver
description: "This project is an older cheat-driver example that uses a data-pointer swap in win32kbase for communication rather than exposing a conventional device interface."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-data-ptr-swap-driver
---

# DataPtrSwap driver

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-data-ptr-swap-driver

## Description

This project is an older cheat-driver example that uses a data-pointer swap in win32kbase for communication rather than exposing a conventional device interface.
The driver scans win32kbase for the target pointer, attaches to explorer.exe, swaps it with a custom NtSetCompositionSurfaceAnalogExclusive handler through InterlockedExchangePointer, and routes requests through structures sent from user mode.
Beyond the communication primitive, the code also bundles cleanup utilities for traces such as MmUnloadedDrivers and related loader residue, which makes the repository part comms demo and part anti-forensics helper.
It is mainly useful for Windows kernel researchers studying data-pointer-swap communication, win32k-based hook placement, and cleanup logic used alongside manually mapped cheat drivers.
