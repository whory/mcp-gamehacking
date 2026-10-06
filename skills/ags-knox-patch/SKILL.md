---
name: ags-knox-patch
description: "KnoxPatch is an LSPosed Xposed module that restores Samsung apps and Knox-protected features on rooted Samsung Galaxy devices. Written primarily in Kotlin for Android, it hooks target Samsung applicat"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-knox-patch
---

# KnoxPatch

**Author:** salvogiangri
**Source:** mcp-gamehacking/skills/ags-knox-patch

## Description

KnoxPatch is an LSPosed Xposed module that restores Samsung apps and Knox-protected features on rooted Samsung Galaxy devices. Written primarily in Kotlin for Android, it hooks target Samsung applications to bypass root detection, spoof critical system properties, disable Knox SDK and Samsung Attestation Key checks, and patch Samsung Keystore and Knox Matrix APIs. A companion KnoxPatch Enhancer Magisk or KernelSU module adds system-level patches for features that runtime hooks alone cannot fix, such as Secure Folder on legacy One UI devices. It supports One UI from Android 9 through 16 and enables apps including Samsung Health, Secure Folder, SmartThings, and Samsung Cloud. The project is aimed at mobile security research, reverse engineering Samsung Knox integrity mechanisms, and studying how OEM root and attestation checks behave on modified devices.
