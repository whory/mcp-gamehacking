---
name: ags-intro-virt
description: "IntroVirt is a virtualization introspection framework that lets analysts inspect and control guest VM memory and execution at runtime."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-intro-virt
---

# IntroVirt

**Author:** IntroVirt
**Source:** mcp-gamehacking/skills/ags-intro-virt

## Description

IntroVirt is a virtualization introspection framework that lets analysts inspect and control guest VM memory and execution at runtime.
It combines a patched KVM hypervisor component with a C++ userland library and symbol parsing support for detailed Windows and Linux guest analysis.
The codebase includes APIs for process and thread introspection, breakpoints, memory access, and syscall-level visibility.
It is primarily used by reverse engineers and security researchers who need out-of-guest monitoring, malware analysis, or hardened VM security tooling.
