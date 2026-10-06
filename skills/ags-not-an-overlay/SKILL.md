---
name: ags-not-an-overlay
description: "This project is a Windows proof of concept that renders a game view in a regular window instead of using a classic transparent always-on-top overlay. It is written in C++ with Win32 and GDI, using fun"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-not-an-overlay
---

# NotAnOverlay

**Author:** PierreCiholas
**Source:** mcp-gamehacking/skills/ags-not-an-overlay

## Description

This project is a Windows proof of concept that renders a game view in a regular window instead of using a classic transparent always-on-top overlay. It is written in C++ with Win32 and GDI, using functions like BitBlt and StretchBlt to clone screen regions and draw continuously. The accompanying explanation focuses on anti-cheat visibility of traditional external overlays and why a less suspicious window model may help experimentation. It is aimed at game security researchers studying external ESP rendering strategies and detection tradeoffs.
