---
name: ags-ida-plugin-anti-debug-seeker
description: "AntiDebugSeeker is an IDA Pro plugin that automatically detects potential anti-debugging logic in analyzed binaries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-plugin-anti-debug-seeker
---

# IDA Plugin AntiDebugSeeker

**Author:** LAC-Japan
**Source:** mcp-gamehacking/skills/ags-ida-plugin-anti-debug-seeker

## Description

AntiDebugSeeker is an IDA Pro plugin that automatically detects potential anti-debugging logic in analyzed binaries.
It uses Python and PyQt5 to find suspicious Windows API usage and keyword-based anti-debug techniques from configurable rule files.
The tool highlights matches, annotates addresses, supports quick navigation to detections, and includes an in-IDE configuration editor.
It targets malware analysts and security researchers who need faster triage of anti-debug protections.
