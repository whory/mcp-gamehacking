---
name: ags-driver-efi-bootkit
description: "This project is a UEFI boot-stage implant framework that transfers execution from an infected EFI application into the Windows kernel through a staged payload chain."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-efi-bootkit
---

# Driver efi bootkit

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-efi-bootkit

## Description

This project is a UEFI boot-stage implant framework that transfers execution from an infected EFI application into the Windows kernel through a staged payload chain.
Its C code hooks ExitBootServices and SetVirtualAddressMap, tracks the image's runtime virtual address, then patches OslArchTransferToKernel so it can modify a target driver before the operating system fully starts.
The kernel-side stage locates a chosen driver image, repurposes its .rsrc section as executable space, maps an additional payload with MmMapIoSpace, updates the driver's entry point, and finally restores the original entry path to reduce boot instability.
The repository also includes Python tooling to extract the flat shellcode blob, calculate hashed identifiers, and inject the BOOTDOOR payload into an EFI binary while optionally patching bootmgfw integrity checks.
It is mainly useful for low-level Windows boot, firmware, and kernel researchers who need to study how EFI hooks, loader interception, and pre-OS driver patching are implemented in practice.
