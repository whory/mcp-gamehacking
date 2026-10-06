---
name: ags-eac-vm-check-asm
description: "This project is a tiny extraction of the virtual machine detection assembly from easyanticheat.sys."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-vm-check-asm
---

# EAC VmCheck.asm

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-eac-vm-check-asm

## Description

This project is a tiny extraction of the virtual machine detection assembly from easyanticheat.sys.
The archived README says it was pulled from the driver's vm directory, and the included vmCheck.asm shows a CheckVM routine calling a small ExecVMREAD helper that issues VMREAD and branches on the result.
Because the repository is just the recovered assembly file rather than a full framework, its value is in preserving the exact low-level control flow of EAC's VM detection logic for reanalysis.
It is mainly useful for reverse engineers studying Easy Anti-Cheat virtualization checks, VMREAD-based probing, and how EAC distinguishes VM-found and VM-not-found paths.
