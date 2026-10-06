---
name: ags-etw-syscall-monitor
description: "This project is a Windows syscall monitoring tool that uses ETW Threat Intelligence events to log system call activity in real time. It captures syscall numbers, parameters, calling process/thread inf"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-etw-syscall-monitor
---

# Etw SyscallMonitor

**Author:** jdu2600
**Source:** mcp-gamehacking/skills/ags-etw-syscall-monitor

## Description

This project is a Windows syscall monitoring tool that uses ETW Threat Intelligence events to log system call activity in real time. It captures syscall numbers, parameters, calling process/thread information, and stack traces through the EtwTi provider without kernel hooking or driver installation. The C implementation demonstrates user-mode syscall monitoring for detecting suspicious API usage patterns. It is aimed at security researchers and anti-cheat developers building syscall-based behavioral detection.
