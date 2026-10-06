---
name: ags-driver-systemthread-from-psp-cid-table-src
description: "This repository contains the source code accompanying a tutorial on removing a system thread or related process handles from `PspCidTable`."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-systemthread-from-psp-cid-table-src
---

# Driver Systemthread from PspCidTable src

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-systemthread-from-psp-cid-table-src

## Description

This repository contains the source code accompanying a tutorial on removing a system thread or related process handles from `PspCidTable`.
The implementation covers two linked approaches: removing a target process handle table via `ExRemoveHandleTable` and destroying process or thread handles from `PspCidTable` while also zeroing selected CID fields to avoid immediate bug checks.
It includes a large set of build-specific offsets for `EPROCESS`, `ETHREAD`, `PspCidTable`, and related routines, which makes the project more of an offset-driven research reference than a generic reusable library.
It is mainly useful for Windows kernel researchers studying handle-table and CID-table manipulation techniques for hiding processes or system threads across specific kernel builds.
