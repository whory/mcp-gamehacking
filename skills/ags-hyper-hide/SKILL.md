---
name: ags-hyper-hide
description: "This project is an open-source hypervisor-based anti-anti-debug plugin for x64dbg and x32dbg. It uses a kernel driver and Intel VT-x/EPT techniques to hook and sanitize many debugger-detection surface"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hyper-hide
---

# HyperHide

**Author:** Air14
**Source:** mcp-gamehacking/skills/ags-hyper-hide

## Description

This project is an open-source hypervisor-based anti-anti-debug plugin for x64dbg and x32dbg. It uses a kernel driver and Intel VT-x/EPT techniques to hook and sanitize many debugger-detection surfaces, including PEB values, thread and process flags, and numerous Nt* API queries. The implementation targets 64-bit Windows systems and focuses on masking debugger presence while preserving practical debugging workflows. It is widely applicable to reverse engineering and game security research against heavily protected binaries.
