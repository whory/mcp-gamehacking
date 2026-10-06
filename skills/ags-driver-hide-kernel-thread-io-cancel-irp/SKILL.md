---
name: ags-driver-hide-kernel-thread-io-cancel-irp
description: "This repository is a small proof of concept for disguising a custom kernel thread by making its visible start routine look like `IoCancelIrp`."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-hide-kernel-thread-io-cancel-irp
---

# Driver HideKernelThread IoCancelIrp

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-hide-kernel-thread-io-cancel-irp

## Description

This repository is a small proof of concept for disguising a custom kernel thread by making its visible start routine look like `IoCancelIrp`.
The archived README explains the trick directly: create an IRP, set a custom cancel routine, then start the system thread at `IoCancelIrp` so the real payload executes later through the IRP cancellation path instead of appearing as the thread's nominal entry point.
Its single source file demonstrates the full flow, including IRP allocation, cancel-routine wiring, context handoff through `UserBuffer` and `MdlAddress`, and notes about detection strategies such as checking for `IoCancelIrp` thread starts or walking system-thread stacks with APCs.
It is mainly useful for Windows kernel researchers studying concealed thread startup techniques and the defensive heuristics that can still expose them.
