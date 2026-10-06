---
name: ags-comm-im-miraclela
description: "This project is a paired user-mode and kernel-mode Escape From Tarkov overlay framework that communicates through a hook on dxgkrnl's NtDxgkGetTrackedWorkloadStatistics."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-comm-im-miraclela
---

# Comm ImMiraclela

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-comm-im-miraclela

## Description

This project is a paired user-mode and kernel-mode Escape From Tarkov overlay framework that communicates through a hook on dxgkrnl's NtDxgkGetTrackedWorkloadStatistics.
The kernel component patches the export with a small jump stub, handles requests for module-base lookup and process memory reads or writes, and also resolves win32k drawing exports so it can render boxes and text from kernel space.
The user-mode side wraps the same syscall from win32u.dll, sends request structures into the hooked path, and layers an ImGui-based overlay and game-specific visuals on top of that communication channel.
It is mainly useful for reverse engineers studying dxgkrnl-based driver communication, kernel-assisted drawing paths, and mixed user or kernel overlay designs for Tarkov-style tooling.
