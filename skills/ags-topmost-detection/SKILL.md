---
name: ags-topmost-detection
description: "This project is a small Windows C++ utility that detects topmost windows on the desktop. It enumerates visible windows with Win32 APIs and checks extended styles such as WS_EX_TOPMOST to flag always-o"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-topmost-detection
---

# TOPMOST Detection

**Author:** Oliver-1-1
**Source:** mcp-gamehacking/skills/ags-topmost-detection

## Description

This project is a small Windows C++ utility that detects topmost windows on the desktop. It enumerates visible windows with Win32 APIs and checks extended styles such as WS_EX_TOPMOST to flag always-on-top overlays. The solution also includes a companion console app that marks itself as topmost using SetWindowPos for testing. It is mainly useful for anti-cheat prototyping and game security experiments that need basic overlay detection logic.
