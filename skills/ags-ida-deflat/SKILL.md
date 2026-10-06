---
name: ags-ida-deflat
description: "This project is an IDA Pro plugin for semi-automated removal of control flow flattening obfuscation. The Python-based plugin uses angr as its symbolic execution backend to identify real basic blocks, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-deflat
---

# IDADeflat

**Author:** za233
**Source:** mcp-gamehacking/skills/ags-ida-deflat

## Description

This project is an IDA Pro plugin for semi-automated removal of control flow flattening obfuscation. The Python-based plugin uses angr as its symbolic execution backend to identify real basic blocks, recover the original control flow graph, and patch the flattened function back to its deobfuscated form. It is mainly useful for reverse engineers and malware analysts dealing with OLLVM-style control flow flattening in protected binaries.
