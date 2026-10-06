---
name: ags-bad-io-uring
description: "This project is an Android kernel exploitation proof of concept focused on io_uring-related privilege escalation."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bad-io-uring
---

# bad io uring

**Author:** Markakd
**Source:** mcp-gamehacking/skills/ags-bad-io-uring

## Description

This project is an Android kernel exploitation proof of concept focused on io_uring-related privilege escalation.
It is implemented mainly in C with Android NDK build scripts and separate exploit variants for different device and kernel targets.
The repository includes helper tooling to unpack boot images and extract kernel symbols so the exploit can be adapted to matching firmware builds.
Its primary use case is kernel security research, exploit reproduction, and root-cause study in authorized mobile test environments.
