---
name: ags-an-tfs
description: "This project is an anti-forensics tool that recovers deleted NTFS files and permanently wipes file records and their contents from the filesystem."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-an-tfs
---

# ANTfs

**Author:** ch3rn0byl
**Source:** mcp-gamehacking/skills/ags-an-tfs

## Description

This project is an anti-forensics tool that recovers deleted NTFS files and permanently wipes file records and their contents from the filesystem.
The user-mode application recovers deleted files by parsing NTFS MFT entries and outputs them to a specified directory, while the kernel driver overwrites file records and file content data to make recovery impossible.
The C++ codebase includes both a Visual Studio 2019 solution with WDK driver and a user-mode console application for NTFS filesystem manipulation.
It is mainly useful for digital forensics researchers and security analysts studying NTFS anti-forensic techniques and secure file deletion at the filesystem driver level.
