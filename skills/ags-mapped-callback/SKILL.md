---
name: ags-mapped-callback
description: "This project focuses on hide Callback."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mapped-callback
---

# MappedCallback

**Author:** nlepleux
**Source:** mcp-gamehacking/skills/ags-mapped-callback

## Description

This project focuses on hide Callback.
By finding a codecave in a legit module in the kernel (here we take APCI driver, which is not protected by PatchGuard), we can write a JMP to our routines so that the start address of the registered function for the callback is in a valid module.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / hide area.
