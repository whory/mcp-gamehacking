---
name: ags-edbgserver
description: "edbgserver is an eBPF-powered debugger server for Android and Linux that avoids the traditional ptrace path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-edbgserver
---

# edbgserver

**Author:** Satar07
**Source:** mcp-gamehacking/skills/ags-edbgserver

## Description

edbgserver is an eBPF-powered debugger server for Android and Linux that avoids the traditional ptrace path.
The project is written in Rust as a multi-crate workspace with separate CLI, shared logic, and eBPF program components for Arm64 and x86_64.
It provides breakpoints, stepping, memory and register operations, signal handling, and process library information in a low-intrusion model.
Its main audience is low-level debugging and security researchers who need alternative instrumentation methods in monitored or restricted environments.
