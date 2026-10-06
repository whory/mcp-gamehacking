---
name: ags-mount-system-partition
description: "This project demonstrates how to programmatically mount the hidden EFI system partition on Windows using only the Windows API."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mount-system-partition
---

# MountSystemPartition

**Author:** brew02
**Source:** mcp-gamehacking/skills/ags-mount-system-partition

## Description

This project demonstrates how to programmatically mount the hidden EFI system partition on Windows using only the Windows API.
It provides a clean C++ example of partition enumeration and mounting without requiring external tools or elevated command-line utilities.
The implementation serves as a reference for accessing the system partition from user-mode code on Windows systems.
It is mainly useful for UEFI security researchers and system-level developers who need programmatic access to the EFI system partition.
