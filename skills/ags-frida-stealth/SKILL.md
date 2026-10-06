---
name: ags-frida-stealth
description: "frida-stealth is a patch set that modifies Frida to reduce common runtime detection fingerprints on Android targets. The patches alter identifying traits such as default ports, socket names, thread na"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-frida-stealth
---

# frida stealth

**Author:** AsenOsen
**Source:** mcp-gamehacking/skills/ags-frida-stealth

## Description

frida-stealth is a patch set that modifies Frida to reduce common runtime detection fingerprints on Android targets. The patches alter identifying traits such as default ports, socket names, thread names, loop labels, and related Frida markers in frida-core and frida-gum. The repository provides patch files and build instructions for producing custom instrumented binaries. It is mainly used in mobile reverse engineering and anti-instrumentation bypass research.
