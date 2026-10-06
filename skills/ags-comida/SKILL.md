---
name: ags-comida
description: "comida is an IDA Pro plugin that improves analysis of Windows binaries using COM components. It scans for known COM GUID references and correlates them with registry metadata to help analysts identify"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-comida
---

# comida

**Author:** airbus-cert
**Source:** mcp-gamehacking/skills/ags-comida

## Description

comida is an IDA Pro plugin that improves analysis of Windows binaries using COM components. It scans for known COM GUID references and correlates them with registry metadata to help analysts identify related classes and interfaces. For Hex-Rays users, it also performs type inference around APIs like CoCreateInstance, CoGetCallContext, and QueryInterface to clean up decompiled output. The plugin targets malware analysts and reverse engineers who need faster COM-centric triage and deeper Windows internals visibility.
