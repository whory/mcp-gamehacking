---
name: ags-makin
description: "This project is a Windows anti-debugging detection tool written in C that checks for over 30 debugger detection techniques. It tests for API-based checks (IsDebuggerPresent, CheckRemoteDebuggerPresent"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-makin
---

# makin

**Author:** secrary
**Source:** mcp-gamehacking/skills/ags-makin

## Description

This project is a Windows anti-debugging detection tool written in C that checks for over 30 debugger detection techniques. It tests for API-based checks (IsDebuggerPresent, CheckRemoteDebuggerPresent), NtQueryInformationProcess flags, PEB fields, hardware breakpoints, timing attacks, TLS callbacks, and various other anti-debug indicators. The results are displayed in a console with pass/fail status for each check. It is aimed at security researchers and malware analysts studying anti-debugging techniques and their effectiveness.
