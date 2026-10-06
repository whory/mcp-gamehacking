---
name: ags-qemu-patched
description: "This project is a patched QEMU fork with anti-detection modifications to hide the virtual machine from guest OS detection techniques. It modifies CPUID responses, SMBIOS/DMI data, ACPI tables, device "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-qemu-patched
---

# qemu patched

**Author:** kila58
**Source:** mcp-gamehacking/skills/ags-qemu-patched

## Description

This project is a patched QEMU fork with anti-detection modifications to hide the virtual machine from guest OS detection techniques. It modifies CPUID responses, SMBIOS/DMI data, ACPI tables, device names, and other VM fingerprints to make QEMU VMs appear as physical hardware to anti-VM checks used by malware and anti-cheat systems. It is aimed at malware analysts and game security researchers who need to run VM-detecting software in QEMU without triggering detection.
