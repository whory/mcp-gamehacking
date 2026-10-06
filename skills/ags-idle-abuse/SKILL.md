---
name: ags-idle-abuse
description: "This project is a proof of concept for injecting code when a Windows process becomes idle. It leverages the undocumented RegisterWaitForInputIdle behavior to trigger a callback after a spawned process"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-idle-abuse
---

# IDLE Abuse

**Author:** RixedLabs
**Source:** mcp-gamehacking/skills/ags-idle-abuse

## Description

This project is a proof of concept for injecting code when a Windows process becomes idle. It leverages the undocumented RegisterWaitForInputIdle behavior to trigger a callback after a spawned process reaches an idle state. The C++ examples demonstrate payload execution patterns such as shellcode delivery and process manipulation flows. It is mainly useful for offensive security experimentation and for studying process lifecycle abuse detections.
