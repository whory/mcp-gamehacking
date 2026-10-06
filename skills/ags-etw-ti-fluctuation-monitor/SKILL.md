---
name: ags-etw-ti-fluctuation-monitor
description: "This project is a Windows tool that monitors ETW Threat Intelligence (EtwTi) provider registration fluctuations to detect when security products are being tampered with. It watches for changes in EtwT"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-etw-ti-fluctuation-monitor
---

# EtwTi FluctuationMonitor

**Author:** jdu2600
**Source:** mcp-gamehacking/skills/ags-etw-ti-fluctuation-monitor

## Description

This project is a Windows tool that monitors ETW Threat Intelligence (EtwTi) provider registration fluctuations to detect when security products are being tampered with. It watches for changes in EtwTi callback registrations that indicate an attacker is removing or patching ETW-based monitoring, which is a common EDR evasion technique. The C implementation provides real-time alerts on callback manipulation. It is aimed at defensive security researchers and EDR developers building tamper detection for ETW-based telemetry.
