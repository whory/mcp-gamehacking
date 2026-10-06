---
name: ags-rainbow-efi
description: "This repository combines a Visual Studio and MSBuild-friendly EDK II environment with a separate `rainbow` UEFI driver project and debugger assets such as OVMF images, a UEFI shell ISO, and ROM files "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rainbow-efi
---

#  Rainbow   EFI

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-rainbow-efi

## Description

This repository combines a Visual Studio and MSBuild-friendly EDK II environment with a separate `rainbow` UEFI driver project and debugger assets such as OVMF images, a UEFI shell ISO, and ROM files for local testing.
According to the archived README, the `rainbow.efi` payload hooks `ExitBootServices`, walks early Windows boot structures such as `OslLoaderBlock`, then hooks `IopLoadDriver` to apply spoofing logic before removing its own hook.
The included project structure shows both the boot-stage driver code and the supporting UEFI library layer needed to build and debug the EFI component rather than just a standalone binary drop.
It is mainly useful for firmware and Windows boot researchers who want to study how UEFI drivers are built, loaded from an EFI shell, and used to alter behavior during the transition into the Windows kernel.
