---
name: ags-shared-flush-file-buffers-communication
description: "This project presents a kernel-to-user communication method based on shared buffers and FlushFileBuffers-triggered IRP handling. It demonstrates hooking IRP_MJ_FLUSH_BUFFERS to process commands withou"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shared-flush-file-buffers-communication
---

# Shared FlushFileBuffers Communication

**Author:** UCFoxi
**Source:** mcp-gamehacking/skills/ags-shared-flush-file-buffers-communication

## Description

This project presents a kernel-to-user communication method based on shared buffers and FlushFileBuffers-triggered IRP handling. It demonstrates hooking IRP_MJ_FLUSH_BUFFERS to process commands without relying on a persistent worker thread. The code is split into C++ kernel and user-mode components built with Visual Studio. It is useful for researching stealthier driver communication patterns in game security and anti-cheat bypass experiments.
