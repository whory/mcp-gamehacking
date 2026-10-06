---
name: ags-ring-reaper
description: "This project is a Linux post-exploitation agent designed to minimize detection by relying heavily on io_uring operations."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ring-reaper
---

# RingReaper

**Author:** MatheuZSecurity
**Source:** mcp-gamehacking/skills/ags-ring-reaper

## Description

This project is a Linux post-exploitation agent designed to minimize detection by relying heavily on io_uring operations.
It is primarily written in C with a Python control server, replacing many traditional read, write, send, and receive paths with asynchronous kernel I/O primitives.
The agent provides command features for file transfer, process and user enumeration, network inspection, and session control while keeping most data flow on io_uring backends.
It is intended for offensive security research and EDR evasion testing in controlled and authorized environments.
