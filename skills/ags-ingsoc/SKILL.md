---
name: ags-ingsoc
description: "This project is a Windows Intel Processor Trace toolkit that combines a kernel driver, a user-mode controller, and a Python trace decoder. The driver configures Intel PT collection, while the client a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ingsoc
---

# ingsoc

**Author:** CristiNacu
**Source:** mcp-gamehacking/skills/ags-ingsoc

## Description

This project is a Windows Intel Processor Trace toolkit that combines a kernel driver, a user-mode controller, and a Python trace decoder. The driver configures Intel PT collection, while the client application sends control commands and can stream captured trace packets to Kafka. A companion decoder parses packet streams, reconstructs execution behavior, and generates visual analytics for trace timing and control-flow events. It is designed for exploit and malware behavior research, especially for studying low-level execution patterns and potential code-reuse activity.
