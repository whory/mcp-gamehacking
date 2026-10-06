---
name: ags-nvidia-api
description: "A C++ library that interfaces with NVIDIA's undocumented NvAPI to query GPU hardware information including GPU serial numbers, physical GPU handles, board names, and driver versions by dynamically loa"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nvidia-api
---

# NvidiaApi

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-nvidia-api

## Description

A C++ library that interfaces with NVIDIA's undocumented NvAPI to query GPU hardware information including GPU serial numbers, physical GPU handles, board names, and driver versions by dynamically loading nvapi64.dll and resolving internal API function pointers through NvAPI_QueryInterface.
The library wraps both public NvAPI functions (EnumPhysicalGPUs, GetFullName) and internal/private interfaces for accessing hardware identifiers that are not exposed through the standard NvAPI SDK.
It is mainly useful for HWID spoofer developers and game security researchers studying GPU serial number retrieval and NVIDIA hardware fingerprinting methods used by anti-cheat systems.
