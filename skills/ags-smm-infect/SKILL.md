---
name: ags-smm-infect
description: "This project is an SMM backdoor research framework that pairs a firmware-level SMI handler with user-mode clients. It includes UEFI and EDK2 components plus Windows and Linux-side code to trigger SMIs"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-smm-infect
---

# SmmInfect

**Author:** Oliver-1-1
**Source:** mcp-gamehacking/skills/ags-smm-infect

## Description

This project is an SMM backdoor research framework that pairs a firmware-level SMI handler with user-mode clients. It includes UEFI and EDK2 components plus Windows and Linux-side code to trigger SMIs and exchange data with privileged SMM logic. The repository documents build and BIOS patching steps, hardware requirements, and secure-boot or firmware constraints. It is aimed at advanced platform security research on firmware trust boundaries and high-privilege persistence.
