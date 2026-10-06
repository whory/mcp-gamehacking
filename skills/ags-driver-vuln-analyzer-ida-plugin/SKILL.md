---
name: ags-driver-vuln-analyzer-ida-plugin
description: "This project is a static analysis plugin for triaging potentially vulnerable Windows kernel drivers inside IDA. It automatically extracts IOCTL values, decodes CTL_CODE fields, highlights risky METHOD"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-vuln-analyzer-ida-plugin
---

# DriverVuln Analyzer IDA Plugin

**Author:** CyberSecurityUP
**Source:** mcp-gamehacking/skills/ags-driver-vuln-analyzer-ida-plugin

## Description

This project is a static analysis plugin for triaging potentially vulnerable Windows kernel drivers inside IDA. It automatically extracts IOCTL values, decodes CTL_CODE fields, highlights risky METHOD_NEITHER usage, and flags sensitive kernel API patterns. The tooling is written in Python and can export consolidated JSON findings for downstream analysis pipelines. It is mainly used by reverse engineers and vulnerability researchers working on driver attack surface assessment.
