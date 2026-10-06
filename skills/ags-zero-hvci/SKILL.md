---
name: ags-zero-hvci
description: "This project is a proof of concept for bypassing Windows HVCI (Hypervisor-Protected Code Integrity) to execute unsigned kernel code. HVCI normally prevents loading unsigned drivers by using Hyper-V to"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-zero-hvci
---

# ZeroHVCI

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-zero-hvci

## Description

This project is a proof of concept for bypassing Windows HVCI (Hypervisor-Protected Code Integrity) to execute unsigned kernel code. HVCI normally prevents loading unsigned drivers by using Hyper-V to enforce code integrity at the hypervisor level. This tool demonstrates techniques to circumvent HVCI protection, such as exploiting edge cases in the HVCI policy or leveraging vulnerable signed drivers. It is aimed at kernel security researchers studying HVCI bypass methods and Windows virtualization-based security limitations.
