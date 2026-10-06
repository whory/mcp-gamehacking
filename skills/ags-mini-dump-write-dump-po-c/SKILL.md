---
name: ags-mini-dump-write-dump-po-c
description: "This project is a proof of concept that hooks MiniDumpWriteDump to intercept dump data before it is written to disk. It is implemented mainly in C++ with auxiliary Python scripts for receiving and dec"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mini-dump-write-dump-po-c
---

# MiniDumpWriteDumpPoC

**Author:** Adepts-Of-0xCC
**Source:** mcp-gamehacking/skills/ags-mini-dump-write-dump-po-c

## Description

This project is a proof of concept that hooks MiniDumpWriteDump to intercept dump data before it is written to disk. It is implemented mainly in C++ with auxiliary Python scripts for receiving and decrypting transferred dump content. The workflow can optionally encrypt the captured buffer and exfiltrate it over a socket to a remote host, demonstrating how dump pipelines can be modified in memory. It is intended for security research on credential dumping tradecraft, detection engineering, and defensive validation.
