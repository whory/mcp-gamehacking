---
name: ags-hidden-thread-finder
description: "This project is a proof-of-concept detector for manipulated or hidden system threads, built around comparing what APC and NMI callbacks can still recover after key KTHREAD fields are tampered with."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hidden-thread-finder
---

# Hidden Thread Finder

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-hidden-thread-finder

## Description

This project is a proof-of-concept detector for manipulated or hidden system threads, built around comparing what APC and NMI callbacks can still recover after key KTHREAD fields are tampered with.
The demo creates a system thread, deliberately clears fields such as SystemThread, ApcQueueable, StackBase, and InitialStack on a Windows 20H2-specific KTHREAD layout, and then inspects the thread through both a queued APC callback and a registered NMI callback.
Its logging code shows whether each mechanism can still observe stack metadata or system-thread state, so the archive reads more like an experiment in what thread-hiding tricks break simple inspection than a polished scanner.
It is mainly useful for anti-cheat and kernel researchers studying hidden-thread detection, KTHREAD field spoofing, and the limits of APC- versus NMI-based validation.
