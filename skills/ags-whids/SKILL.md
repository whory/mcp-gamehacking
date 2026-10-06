---
name: ags-whids
description: "This project is an open-source Windows EDR platform focused on detection-driven response."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-whids
---

# whids

**Author:** 0xrawsec
**Source:** mcp-gamehacking/skills/ags-whids

## Description

This project is an open-source Windows EDR platform focused on detection-driven response.
It is built largely in Go and relies on ETW and Sysmon telemetry, with rule evaluation powered by the Gene engine.
Alerts can trigger near real-time artifact collection such as files, registry data, and process memory, and the platform includes a manager service with an administrative API.
Its primary use case is incident response and enterprise endpoint monitoring with transparent, customizable detection logic.
