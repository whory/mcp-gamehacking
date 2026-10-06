---
name: ags-fibratus
description: "This project is a Windows kernel exploration and observability tool written in Go that captures and analyzes kernel event streams via ETW (Event Tracing for Windows). It monitors process creation, thr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-fibratus
---

# fibratus

**Author:** rabbitstack
**Source:** mcp-gamehacking/skills/ags-fibratus

## Description

This project is a Windows kernel exploration and observability tool written in Go that captures and analyzes kernel event streams via ETW (Event Tracing for Windows). It monitors process creation, thread activity, file I/O, registry operations, network connections, and driver loading in real time, with support for filtering rules, alerting, and output to various sinks including Elasticsearch. The tool includes a rule engine for detecting suspicious behavior patterns and can be used for threat hunting and endpoint telemetry. It is aimed at security analysts, threat hunters, and defenders building detection capabilities around Windows kernel-level activity.
