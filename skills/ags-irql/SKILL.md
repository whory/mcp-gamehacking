---
name: ags-irql
description: "This project is a Rust crate that provides IRQL-aware memory allocation and data structure primitives for Windows kernel development. The workspace includes irql core abstractions, an irql_alloc crate"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-irql
---

# irql

**Author:** naorhaziz
**Source:** mcp-gamehacking/skills/ags-irql

## Description

This project is a Rust crate that provides IRQL-aware memory allocation and data structure primitives for Windows kernel development. The workspace includes irql core abstractions, an irql_alloc crate with pool-backed Box and Vec types, and utilities for writing IRQL-safe kernel code in Rust. It is mainly useful for kernel developers and security researchers building Windows kernel drivers in Rust with proper IRQL-level memory management.
