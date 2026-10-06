---
name: ags-common-registry
description: "This project is a proof of concept for communication between user mode and kernel mode through the Windows Registry. It is written in C++ and includes both a KMDF driver component and a paired user-mo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-common-registry
---

# Common Registry

**Author:** EBalloon
**Source:** mcp-gamehacking/skills/ags-common-registry

## Description

This project is a proof of concept for communication between user mode and kernel mode through the Windows Registry. It is written in C++ and includes both a KMDF driver component and a paired user-mode client application. The implementation explores techniques such as custom process attach handling and related low-level memory-management ideas noted by the author. It is mainly intended for Windows internals research and anti-cheat bypass experimentation.
