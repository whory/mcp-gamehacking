---
name: ags-neac-safe-analysis
description: "This project is a small user-mode probe plus saved notes for analyzing NetEase's NeacSafe anti-cheat communication interface."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-neac-safe-analysis
---

# NeacSafe Analysis

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-neac-safe-analysis

## Description

This project is a small user-mode probe plus saved notes for analyzing NetEase's NeacSafe anti-cheat communication interface.
The C++ sample defines a 0x28-byte NeacSafeConnectContext, connects to \NeacSafePort with FilterConnectCommunicationPort, and then sends encoded request buffers to query data through the minifilter communication channel.
The archive also includes a saved Pediy forum article on NeacSafe interface analysis, so the repository acts as a practical reproduction of the port protocol alongside the original writeup material.
It is mainly useful for reverse engineers studying NeacSafe client-driver IPC, filter-manager communication ports, and the buffer encoding used around its command messages.
