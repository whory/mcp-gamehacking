---
name: ags-process-killer-byovd
description: "This project is a Windows tool that terminates protected processes by exploiting a vulnerable signed driver (BYOVD). It loads a vulnerable driver to gain kernel-level access and uses it to forcefully "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-process-killer-byovd
---

# ProcessKiller BYOVD

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-process-killer-byovd

## Description

This project is a Windows tool that terminates protected processes by exploiting a vulnerable signed driver (BYOVD). It loads a vulnerable driver to gain kernel-level access and uses it to forcefully terminate processes that are otherwise protected from user-mode termination, such as anti-cheat services, EDR agents, or antivirus processes. It is aimed at red team operators and security researchers studying BYOVD-based process termination.
