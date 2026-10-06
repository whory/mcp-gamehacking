---
name: ags-kernel-vad-injector
description: "This project is an unsigned-driver-assisted DLL injector that tries to hide its staging region by manipulating VADs and PTEs instead of relying on ordinary user-mode allocations alone."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-vad-injector
---

# Kernel VAD Injector

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-kernel-vad-injector

## Description

This project is an unsigned-driver-assisted DLL injector that tries to hide its staging region by manipulating VADs and PTEs instead of relying on ordinary user-mode allocations alone.
The archived README says the driver communicates through a PatchGuard-safe xKdEnumerateDebuggingDevices hook, then traps a user thread in kernel and runs a command loop for read, write, allocate memory, spoof PTE, allocate VAD, and remove VAD requests.
Internally it pattern-finds MiAllocateVad, MiInsertVad, and MiInsertVadCharges inside ntoskrnl, uses KeStackAttachProcess around memory operations, and removes the VAD node again after mapping so the injected region is less visible to NtQueryVirtualMemory and similar checks.
It is mainly useful for Windows kernel researchers studying manual mapping with VAD tree abuse, executable-page concealment, and driver-based post-injection cleanup.
