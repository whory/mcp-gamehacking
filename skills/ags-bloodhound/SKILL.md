---
name: ags-bloodhound
description: "This project is an experimental C++ library for detecting EPT-based memory hooks from user mode. It combines vectored exception handling, CPU intrinsics, and a VPGATHER-based accessibility technique t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bloodhound
---

# Bloodhound

**Author:** Skeletal-Group
**Source:** mcp-gamehacking/skills/ags-bloodhound

## Description

This project is an experimental C++ library for detecting EPT-based memory hooks from user mode. It combines vectored exception handling, CPU intrinsics, and a VPGATHER-based accessibility technique to probe whether pages are being manipulated by a hypervisor. The implementation is presented as a proof of concept and focuses on stealthier checks for executable and readable page state transitions. Its main audience is anti-cheat and virtualization security researchers studying hypervisor hook detection.
