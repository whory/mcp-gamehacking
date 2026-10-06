---
name: ags-forensia
description: "This project is a Windows anti-forensics utility for post-exploitation trace reduction. It includes capabilities such as file shredding, event-log and prefetch suppression, USN journal handling, times"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-forensia
---

# Forensia

**Author:** PaulNorman01
**Source:** mcp-gamehacking/skills/ags-forensia

## Description

This project is a Windows anti-forensics utility for post-exploitation trace reduction. It includes capabilities such as file shredding, event-log and prefetch suppression, USN journal handling, timestamp-related cleanup, and removal of multiple shell and cache artifacts. The implementation is primarily in C++ with direct Windows API interaction and also includes options to clear defender quarantine artifacts and perform file self-removal behaviors. It is mainly intended for red-team simulation and defensive validation of incident response and forensic workflows.
