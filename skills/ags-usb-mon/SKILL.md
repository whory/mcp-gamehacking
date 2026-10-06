---
name: ags-usb-mon
description: "This project is a kernel-mode USB and HID monitoring framework for tracing device data flows into consumer processes. It contains driver components that hook IRP and internal IOCTL or URB paths, parse"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-usb-mon
---

# UsbMon

**Author:** KelvinMsft
**Source:** mcp-gamehacking/skills/ags-usb-mon

## Description

This project is a kernel-mode USB and HID monitoring framework for tracing device data flows into consumer processes. It contains driver components that hook IRP and internal IOCTL or URB paths, parse HID reports, and coordinate capture or mapping control through custom device control codes. The implementation is mostly C with some C++ project scaffolding, focused on Windows driver development and low-level input stack analysis. It is useful for reverse engineering USB input behavior in game security contexts, including studies of HID-based attack or detection surfaces.
