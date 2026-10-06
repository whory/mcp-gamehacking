---
name: ags-ppl-killer
description: "This project is PPLKiller, a tool for disabling Windows Protected Process Light (PPL) protection on processes. It exploits a vulnerable signed driver or kernel access primitive to modify the EPROCESS "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ppl-killer
---

# PPLKiller

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ppl-killer

## Description

This project is PPLKiller, a tool for disabling Windows Protected Process Light (PPL) protection on processes. It exploits a vulnerable signed driver or kernel access primitive to modify the EPROCESS protection level field, downgrading PPL-protected processes (like antimalware services) to unprotected status for debugging or termination. It is aimed at kernel researchers studying PPL protection and its bypass methods.
