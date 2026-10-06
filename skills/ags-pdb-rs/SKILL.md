---
name: ags-pdb-rs
description: "Rust implementation of a PDB (Program Database) reader/writer with full support for the MSF container format, CodeView symbol and type records, DBI stream parsing, TPI/IPI streams, and COFF image meta"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pdb-rs
---

# pdb rs

**Author:** microsoft
**Source:** mcp-gamehacking/skills/ags-pdb-rs

## Description

Rust implementation of a PDB (Program Database) reader/writer with full support for the MSF container format, CodeView symbol and type records, DBI stream parsing, TPI/IPI streams, and COFF image metadata. Includes a codeview crate for encoding/decoding symbol kinds (S_PUB, S_PROC, S_LOCAL) and type records (LF_CLASS, LF_POINTER, LF_PROCEDURE) with architecture-specific register mappings for x86, AMD64, and ARM64.
