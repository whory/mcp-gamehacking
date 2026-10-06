---
name: ags-vmdevirt-vtil
description: "This project is the vtil compiler was ripped from and it is a broken demo that needs fixing."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vmdevirt-vtil
---

# vmdevirt vtil

**Author:** xtremegamer1
**Source:** mcp-gamehacking/skills/ags-vmdevirt-vtil

## Description

This project is the vtil compiler was ripped from and it is a broken demo that needs fixing.
Also, there are multiple vmenters per actual routine and most don't do that much so it would also be nice to stop treating vmenters as functions, instead inserting an unconditional jmp in place of a vmenter to the compiled vtil and then an unconditional jump back so IDA can display it better.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / fix vmp area.
