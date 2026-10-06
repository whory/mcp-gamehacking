---
name: ags-meowna-detector
description: "This project is a proof-of-concept Android detector for root-hiding modules that disrupt logging services."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-meowna-detector
---

# meowna detector

**Author:** Rem01Gaming
**Source:** mcp-gamehacking/skills/ags-meowna-detector

## Description

This project is a proof-of-concept Android detector for root-hiding modules that disrupt logging services.
It checks indicators such as missing logd sockets and package traces to flag suspicious environment tampering behavior.
The implementation is a small C program built with Android NDK makefiles.
It is intended for mobile security testing and for studying how fragile root-hiding techniques can become detectable.
