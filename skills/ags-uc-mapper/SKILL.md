---
name: ags-uc-mapper
description: "This project is a kernel driver manual mapper that abuses nvaudio.sys as the vulnerable transport and includes both the user-mode loader and the in-memory mapping logic."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-uc-mapper
---

# UCMapper

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-uc-mapper

## Description

This project is a kernel driver manual mapper that abuses nvaudio.sys as the vulnerable transport and includes both the user-mode loader and the in-memory mapping logic.
The loader enables SeLoadDriverPrivilege, installs and starts the vulnerable driver, opens its device, loads nvaudio.sys into user space to reuse an internal EncodePayLoad routine, and then removes the driver's runtime-list entry so the helper is less visible after use.
Its mapper code also contains explicit relocation, import-resolution, and image-loading routines, so the archive is not just a thin wrapper around an existing mapper but a fairly complete manual-map implementation adapted to the nvaudio path.
It is mainly useful for Windows kernel researchers studying BYOVD-based driver mapping, reuse of vendor helper routines, and post-load cleanup around runtime lists.
