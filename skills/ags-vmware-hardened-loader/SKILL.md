---
name: ags-vmware-hardened-loader
description: "This project is a VMware anti-detection hardening tool that patches VMware virtual machines to evade VM detection techniques used by malware and anti-cheat systems. It modifies CPUID leaves, SMBIOS ta"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vmware-hardened-loader
---

# VmwareHardenedLoader

**Author:** hzqst
**Source:** mcp-gamehacking/skills/ags-vmware-hardened-loader

## Description

This project is a VMware anti-detection hardening tool that patches VMware virtual machines to evade VM detection techniques used by malware and anti-cheat systems. It modifies CPUID leaves, SMBIOS tables, ACPI data, registry keys, MAC addresses, and other hardware fingerprints to make the VM appear as a physical machine. The C/C++ loader operates at the hypervisor level and includes both Windows and Linux guest support. It is aimed at malware analysts and game security researchers needing to hide virtualization from VM-aware software.
