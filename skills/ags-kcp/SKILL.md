---
name: ags-kcp
description: "This project is KCP, a fast and reliable ARQ (Automatic Repeat reQuest) protocol implementation in C that provides TCP-like reliability over UDP. It trades 10-20% more bandwidth for 30-40% lower laten"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kcp
---

# kcp

**Author:** skywind3000
**Source:** mcp-gamehacking/skills/ags-kcp

## Description

This project is KCP, a fast and reliable ARQ (Automatic Repeat reQuest) protocol implementation in C that provides TCP-like reliability over UDP. It trades 10-20% more bandwidth for 30-40% lower latency compared to TCP by implementing aggressive retransmission, selective ACK, and fast recovery without the overhead of TCP's congestion control. The single-file C library is protocol-agnostic and works over any transport layer. It is aimed at game developers and network programmers building low-latency real-time multiplayer networking.
