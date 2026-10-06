---
name: ags-pesign
description: "This project is pesign, a Linux tool for signing and verifying UEFI Secure Boot binaries using the Authenticode signature format. It generates and embeds PKCS#7 signatures into PE executables compatib"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pesign
---

# pesign

**Author:** rhboot
**Source:** mcp-gamehacking/skills/ags-pesign

## Description

This project is pesign, a Linux tool for signing and verifying UEFI Secure Boot binaries using the Authenticode signature format. It generates and embeds PKCS#7 signatures into PE executables compatible with UEFI firmware verification, supporting certificate management through NSS databases. The C tool handles signature generation, removal, and validation for EFI bootloaders and kernel images. It is aimed at Linux distribution maintainers and system engineers managing UEFI Secure Boot signing infrastructure.
