---
name: ags-kernel-thread-driver
description: "This project is a Windows kernel-thread driver paired with a user-mode controller for memory operations."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-thread-driver
---

# Kernel Thread Driver

**Author:** Spuckwaffel
**Source:** mcp-gamehacking/skills/ags-kernel-thread-driver

## Description

This project is a Windows kernel-thread driver paired with a user-mode controller for memory operations.
It uses a status-code communication model between kernel and user mode to initialize, track connection state, and process commands.
The implementation focuses on practical tasks such as target process setup, memory reading, and module base retrieval.
It is intended for anti-cheat bypass research and kernel-user architecture experiments in protected games.
