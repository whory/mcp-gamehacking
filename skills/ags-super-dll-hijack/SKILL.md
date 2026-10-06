---
name: ags-super-dll-hijack
description: "This project is a generic DLL hijacking helper for Windows that simplifies proxy-DLL style interception."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-super-dll-hijack
---

# SuperDllHijack

**Author:** anhkgg
**Source:** mcp-gamehacking/skills/ags-super-dll-hijack

## Description

This project is a generic DLL hijacking helper for Windows that simplifies proxy-DLL style interception.
It provides C/C++ code and examples to forward exports without manually recreating every original function signature.
The approach uses a renamed original module and a replacement DLL that invokes a helper routine in DllMain to pass through behavior.
It is useful for loader experimentation, red-team style research, and studying module-loading abuse in game security environments.
