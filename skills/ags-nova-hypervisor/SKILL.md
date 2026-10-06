---
name: ags-nova-hypervisor
description: "NovaHypervisor is a defensive x64 Intel hypervisor for protecting sensitive kernel memory regions. It is designed to mitigate kernel attacks such as BYOVD by enforcing memory access policies and prote"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nova-hypervisor
---

# NovaHypervisor

**Author:** Idov31
**Source:** mcp-gamehacking/skills/ags-nova-hypervisor

## Description

NovaHypervisor is a defensive x64 Intel hypervisor for protecting sensitive kernel memory regions. It is designed to mitigate kernel attacks such as BYOVD by enforcing memory access policies and protecting selected addresses with read, write, or execute controls. The project is implemented in C++ and assembly as a Windows kernel driver, with a companion client for adding and removing protections and support tooling for logging. It is mainly for anti-cheat and endpoint defense research in virtualized kernel security.
