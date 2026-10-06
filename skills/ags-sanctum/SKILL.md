---
name: ags-sanctum
description: "This project is an experimental Windows endpoint detection and response platform built primarily in Rust."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sanctum
---

# Sanctum

**Author:** 0xflux
**Source:** mcp-gamehacking/skills/ags-sanctum

## Description

This project is an experimental Windows endpoint detection and response platform built primarily in Rust.
It combines a kernel driver, a user-mode engine, and a Tauri-based interface to monitor process, thread, file system, and system-call activity.
The codebase includes components such as ETW consumers, a file-system minifilter, and kernel-side hooking and containment logic for telemetry and response.
Its main use case is low-level security research and prototyping of defensive tooling on modern Windows systems.
