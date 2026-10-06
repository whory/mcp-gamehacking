---
name: ags-divert
description: "This project is WinDivert, a Windows packet capture and diversion library that allows user-mode applications to intercept, modify, drop, or inject network packets in real time. It operates through a k"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-divert
---

# Divert

**Author:** basil00
**Source:** mcp-gamehacking/skills/ags-divert

## Description

This project is WinDivert, a Windows packet capture and diversion library that allows user-mode applications to intercept, modify, drop, or inject network packets in real time. It operates through a kernel driver that hooks into the Windows network stack using WFP (Windows Filtering Platform), supporting layer-based filtering by IP addresses, ports, protocols, and packet direction. The C library provides both sniffing and active packet manipulation capabilities. It is aimed at network security developers building firewalls, NAT solutions, packet analyzers, and network tunneling tools on Windows.
