---
name: ags-ntfs-linker
description: "This project is a C++ forensic tool for parsing and correlating NTFS filesystem metadata including $MFT, $UsnJrnl, and $LogFile records. It links change journal entries to MFT records to reconstruct f"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ntfs-linker
---

# ntfs linker

**Author:** strozfriedberg
**Source:** mcp-gamehacking/skills/ags-ntfs-linker

## Description

This project is a C++ forensic tool for parsing and correlating NTFS filesystem metadata including $MFT, $UsnJrnl, and $LogFile records. It links change journal entries to MFT records to reconstruct file system activity timelines, resolving full file paths and tracking file creation, modification, rename, and deletion events. It is aimed at digital forensics analysts investigating file system activity on Windows NTFS volumes.
