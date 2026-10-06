---
name: ags-driver-watch-owl
description: "This project is a defensive Windows driver that watches user-mode image loads and thread creation to identify suspicious mapping activity through stack-trace inspection."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-watch-owl
---

# Driver WatchOwl

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-watch-owl

## Description

This project is a defensive Windows driver that watches user-mode image loads and thread creation to identify suspicious mapping activity through stack-trace inspection.
Its implementation registers `PsSetLoadImageNotifyRoutine` and `PsSetCreateThreadNotifyRoutine` callbacks, resolves expected user-mode frames such as `NtMapViewOfSection` and `RtlUserThreadStart` from `csrss.exe`, and then validates whether image-load callbacks originated from legitimate module text ranges.
When the observed stack does not match the expected mapping path, the driver logs the event and highlights lower-signing-level images, making the project a compact example of callback-based injection detection rather than an offensive hook set.
It is mainly useful for anti-cheat engineers and defensive kernel researchers studying stack-based validation of image mapping and suspicious user-mode code injection paths.
