---
name: ags-blanket
description: "This project is Blanket, a Windows tool that hides the presence of a process by unlinking it from kernel process lists and manipulating process enumeration APIs. It removes the target process's EPROCE"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-blanket
---

# blanket

**Author:** kitty8904
**Source:** mcp-gamehacking/skills/ags-blanket

## Description

This project is Blanket, a Windows tool that hides the presence of a process by unlinking it from kernel process lists and manipulating process enumeration APIs. It removes the target process's EPROCESS entry from ActiveProcessLinks, patches PspCidTable entries, and hooks NtQuerySystemInformation to hide the process from Task Manager and other enumeration tools. It is aimed at kernel researchers studying process hiding rootkit techniques and their detection methods.
