---
name: ags-sig-thief
description: "This project focuses on stealing signatures from pe files."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sig-thief
---

# SigThief

**Author:** secretsquirrel
**Source:** mcp-gamehacking/skills/ags-sig-thief

## Description

This project focuses on stealing signatures from pe files.
There are some Anti-Virus vendors that give priority to certain certificate authorities without checking that the signature is actually valid, and there are those that just check to see that the certTable is populated with some value.
It is mainly useful for low-level Windows, Linux, and mobile researchers working in the some tricks / windows ring3 area.
