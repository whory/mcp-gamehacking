---
name: ags-handle-ripper
description: "This project is a small user-mode demonstration of handle hijacking by enumerating system handles and duplicating a target handle out of another process."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-handle-ripper
---

# Handle Ripper

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-handle-ripper

## Description

This project is a small user-mode demonstration of handle hijacking by enumerating system handles and duplicating a target handle out of another process.
The sample calls NtQuerySystemInformation with SystemHandleInformation, scans the returned table for a chosen object pointer, opens the owning process with PROCESS_DUP_HANDLE, and uses DuplicateHandle to copy that handle into the current process.
Its README spends most of its space explaining the attack model and the DuplicateHandle parameters, so the code is best read as a minimal proof of concept for stolen handle reuse rather than a general-purpose framework.
It is mainly useful for Windows security researchers who want a compact example of handle-table enumeration, cross-process handle duplication, and the practical mechanics behind handle hijacking.
