---
name: ags-libipt-rs
description: "This project is a Rust library for interacting with the Windows built-in Intel Processor Trace (IPT) driver from user mode."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-libipt-rs
---

# libipt rs

**Author:** australeo
**Source:** mcp-gamehacking/skills/ags-libipt-rs

## Description

This project is a Rust library for interacting with the Windows built-in Intel Processor Trace (IPT) driver from user mode.
It provides APIs to start, stop, and retrieve IPT traces through DeviceIoControl calls to the ipt.sys driver, based on reverse engineering of the current Windows IPT driver interface.
The library focuses on driver interaction only and does not include IPT trace parsing or coverage analysis functionality.
It is mainly useful for security researchers and anti-cheat analysts studying hardware-assisted code tracing on Windows via Intel PT.
