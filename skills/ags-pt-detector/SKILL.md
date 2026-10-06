---
name: ags-pt-detector
description: "This project is a Windows research prototype for detecting code-reuse exploits using Intel Processor Trace data. It combines kernel and user-mode components to collect trace packets, then decodes exec"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pt-detector
---

# pt detector

**Author:** DProvinciani
**Source:** mcp-gamehacking/skills/ags-pt-detector

## Description

This project is a Windows research prototype for detecting code-reuse exploits using Intel Processor Trace data. It combines kernel and user-mode components to collect trace packets, then decodes execution streams to identify suspicious control-flow behavior associated with techniques like ROP or JOP. The implementation uses C/C++ for capture infrastructure and Python tooling for interpretation and analysis support. It is targeted at exploit detection research and control-flow integrity experimentation.
