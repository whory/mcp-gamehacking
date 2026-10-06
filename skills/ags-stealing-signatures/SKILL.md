---
name: ags-stealing-signatures
description: "This project is a small utility for copying certificate data from one PE file to another executable. It is written in C++ and parses PE headers to locate and duplicate the Authenticode security direct"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-stealing-signatures
---

# StealingSignatures

**Author:** Sentient111
**Source:** mcp-gamehacking/skills/ags-stealing-signatures

## Description

This project is a small utility for copying certificate data from one PE file to another executable. It is written in C++ and parses PE headers to locate and duplicate the Authenticode security directory blob. The resulting file carries copied certificate metadata but does not become a valid trusted signature, which is useful for testing verifier behavior. It is intended for Windows security research on signature handling, tampering detection, and trust pipeline edge cases.
