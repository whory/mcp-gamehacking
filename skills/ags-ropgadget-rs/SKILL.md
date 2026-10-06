---
name: ags-ropgadget-rs
description: "This project is a ROP gadget finder written in Rust for discovering Return-Oriented Programming gadgets in binary executables. It scans PE, ELF, and Mach-O binaries for instruction sequences ending in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ropgadget-rs
---

# ropgadget rs

**Author:** hugsy
**Source:** mcp-gamehacking/skills/ags-ropgadget-rs

## Description

This project is a ROP gadget finder written in Rust for discovering Return-Oriented Programming gadgets in binary executables. It scans PE, ELF, and Mach-O binaries for instruction sequences ending in return instructions that can be chained for exploitation. The Rust implementation provides fast parallel scanning across large binaries. It is aimed at exploit developers and vulnerability researchers building ROP chains for binary exploitation.
