---
name: ags-job-communication
description: "This project is a small proof of concept for undocumented ring0 to ring3 communication using NtQueryInformationJobObject."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-job-communication
---

# job communication

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-job-communication

## Description

This project is a small proof of concept for undocumented ring0 to ring3 communication using NtQueryInformationJobObject.
The kernel-side notes show the idea of checking the current process Job field, resolving the job's server silo with PsGetJobServerSilo, and copying data from ServerSiloGlobals or UserSharedData into the output buffer returned to user mode.
The user-mode sample then calls NtQueryInformationJobObject with JobObjectReserved17Information and interprets the returned SILO_USER_SHARED_DATA fields as the hidden communication result.
It is mainly useful for Windows internals researchers studying obscure job-object and silo-based communication paths that bypass standard device IOCTL interfaces.
