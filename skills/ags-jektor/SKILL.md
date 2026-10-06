---
name: ags-jektor
description: "Windows shellcode injection toolkit demonstrating five execution techniques: CreateThread, CreateRemoteThread (into a hidden notepad process), QueueUserAPC with NtTestAlert APC queue flush, EnumTimeFo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-jektor
---

# Jektor

**Author:** gavz
**Source:** mcp-gamehacking/skills/ags-jektor

## Description

Windows shellcode injection toolkit demonstrating five execution techniques: CreateThread, CreateRemoteThread (into a hidden notepad process), QueueUserAPC with NtTestAlert APC queue flush, EnumTimeFormatsEx callback abuse, and CreateFiber scheduling. All API calls are dynamically resolved via GetProcAddress at runtime to avoid IAT entries, and payloads use XOR-encrypted msfvenom shellcode with NOP sled prepending to evade signature-based detection.
