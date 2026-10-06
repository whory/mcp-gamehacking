---
name: ags-shellcode-plain-sight
description: "shellcode-plain-sight is a C demonstration of hiding shellcode inside a large randomized memory region before execution."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shellcode-plain-sight
---

# shellcode plain sight

**Author:** LloydLabs
**Source:** mcp-gamehacking/skills/ags-shellcode-plain-sight

## Description

shellcode-plain-sight is a C demonstration of hiding shellcode inside a large randomized memory region before execution.
The method allocates oversized read-write memory, fills it with random bytes, places payload data at a random offset, and then flips protection to executable.
It also includes cleanup logic to zero memory before freeing so artifacts are reduced after runtime.
Its primary use case is evasion research and testing memory-analysis or anti-cheat detection strategies against concealed payload placement.
