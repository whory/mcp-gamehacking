---
name: ags-pool-party
description: "This project is a collection of Windows process injection techniques that abuse thread pool internals to execute code in remote processes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pool-party
---

# PoolParty

**Author:** SafeBreach-Labs
**Source:** mcp-gamehacking/skills/ags-pool-party

## Description

This project is a collection of Windows process injection techniques that abuse thread pool internals to execute code in remote processes.
It is written in C++ and implements multiple variants, including worker factory start-routine overwrite and insertion of TP_WORK, TP_WAIT, TP_IO, TP_ALPC, TP_JOB, TP_DIRECT, and TP_TIMER items.
The codebase includes native API wrappers, handle hijacking helpers, and structured implementations for each thread-pool primitive.
It is designed for red-team research and for testing anti-cheat or EDR visibility against low-detection injection tradecraft.
