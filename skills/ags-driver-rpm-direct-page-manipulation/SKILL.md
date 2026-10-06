---
name: ags-driver-rpm-direct-page-manipulation
description: "This project is a minimal Windows kernel example showing how to read and write another process's memory by directly manipulating paging structures."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-rpm-direct-page-manipulation
---

# Driver RPM DirectPageManipulation

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-rpm-direct-page-manipulation

## Description

This project is a minimal Windows kernel example showing how to read and write another process's memory by directly manipulating paging structures.
Its README frames the code as a bare-minimum demonstration, and the implementation does exactly that by allocating a contiguous page, locating its own PTE, overwriting the page-frame number to remap arbitrary physical pages, and then using manual virtual-to-physical translation to implement process memory copy routines.
The sample driver entry uses the technique against a target process to read module data without relying on the standard documented copy helpers, while explicitly leaving out paged-out memory handling and multithreading concerns to keep the logic simple.
It is mainly useful for Windows kernel researchers who want a compact reference for PTE rewriting, manual address translation, and page-table-based process memory access.
