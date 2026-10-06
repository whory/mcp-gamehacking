---
name: ags-rootkit-2
description: "This project is a kernel proof of concept for detecting hidden processes by walking csrss-maintained data structures instead of trusting ordinary process enumeration paths."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rootkit-2
---

# Rootkit 2

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-rootkit-2

## Description

This project is a kernel proof of concept for detecting hidden processes by walking csrss-maintained data structures instead of trusting ordinary process enumeration paths.
The driver attaches to each csrss.exe instance, locates CsrExecServerThread inside csrsrv.dll, pattern-scans it to recover the CSR_PROCESS list head, and then walks that linked list to resolve every client PID back to an EPROCESS.
By printing the process IDs and image names recovered from the CSRSS list, the repository demonstrates a secondary enumeration path that can still expose processes hidden from more obvious views.
It is mainly useful for anti-cheat and kernel researchers studying hidden-process detection, CSRSS internals, and alternative enumeration strategies for rootkit triage.
