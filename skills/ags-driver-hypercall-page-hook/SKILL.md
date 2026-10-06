---
name: ags-driver-hypercall-page-hook
description: "This project is a proof of concept for hooking `nt!HvcallCodeVa`, the hypercall page pointer used by Hyper-V-related kernel hypercall transitions."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-hypercall-page-hook
---

# Driver HypercallPageHook

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-hypercall-page-hook

## Description

This project is a proof of concept for hooking `nt!HvcallCodeVa`, the hypercall page pointer used by Hyper-V-related kernel hypercall transitions.
The driver locates the hypercall page reference near `HvlInvokeHypercall`, replaces it with a custom dispatcher, and flips the `HvlEnlightenments` flag so context-switch related hypercalls such as `HvlSwitchVirtualAddressSpace` are routed through the hook.
Its implementation is split between a C++ driver entry layer and an assembly dispatcher that inspects the hypercall input code, forwards targeted operations to custom callbacks, and falls back to the original hypercall page for everything else.
It is mainly useful for low-level Windows and virtualization researchers who want to study how Hyper-V hypercall dispatch can be intercepted inside the kernel for tracing or experimentation.
