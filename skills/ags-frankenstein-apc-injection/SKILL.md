---
name: ags-frankenstein-apc-injection
description: "This project is a Windows process injection proof of concept that executes payloads by combining existing system resources instead of creating new ones."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-frankenstein-apc-injection
---

# FrankensteinAPCInjection

**Author:** S12cybersecurity
**Source:** mcp-gamehacking/skills/ags-frankenstein-apc-injection

## Description

This project is a Windows process injection proof of concept that executes payloads by combining existing system resources instead of creating new ones.
It is implemented in C++ and focuses on finding leaked process and thread handles, locating pre-existing RWX memory, and queuing special user APCs through NtQueueApcThreadEx2.
The workflow avoids common high-noise APIs such as VirtualAllocEx, VirtualProtectEx, and CreateRemoteThread, and also includes optional shellcode encryption components.
It is intended for offensive security research and for evaluating how EDR or anti-cheat products detect low-footprint injection paths.
