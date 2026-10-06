---
name: ags-usugumo
description: "This project is a Windows kernel-mode proof-of-concept driver that proxies memory and input operations for user-mode clients. It uses C/C++ with some MASM and handles DIRECT_IO IRP requests for RPM/WP"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-usugumo
---

# Usugumo

**Author:** M3351AN
**Source:** mcp-gamehacking/skills/ags-usugumo

## Description

This project is a Windows kernel-mode proof-of-concept driver that proxies memory and input operations for user-mode clients. It uses C/C++ with some MASM and handles DIRECT_IO IRP requests for RPM/WPM, process lookup, module information, and mouse/keyboard injection. The repository also includes anti-capture and communication examples while clearly stating that it is not production-ready. Its primary use case is kernel communication and low-level game security experimentation on x64 Windows.
