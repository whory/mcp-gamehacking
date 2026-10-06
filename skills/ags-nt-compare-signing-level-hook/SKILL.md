---
name: ags-nt-compare-signing-level-hook
description: "This project is a kernel and user-mode proof of concept that swaps a function pointer inside NtCompareSigningLevels to build covert driver communication. It is implemented in C and C++ as a paired Win"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nt-compare-signing-level-hook
---

# NtCompareSigningLevel hook

**Author:** ExpLife0011
**Source:** mcp-gamehacking/skills/ags-nt-compare-signing-level-hook

## Description

This project is a kernel and user-mode proof of concept that swaps a function pointer inside NtCompareSigningLevels to build covert driver communication. It is implemented in C and C++ as a paired Windows driver and userland controller. The repository explicitly marks the approach as abandoned because PatchGuard makes it unstable for practical use. It is most useful as historical anti-cheat bypass research on signing-level hook surfaces and their limitations.
