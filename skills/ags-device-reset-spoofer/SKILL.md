---
name: ags-device-reset-spoofer
description: "DeviceResetSpoofer is an Android LSPosed module that automatically assigns a fresh device identity to selected apps after their data is cleared. Written in Java with Xposed hooks, it spoofs identifier"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-device-reset-spoofer
---

# DeviceResetSpoofer

**Author:** GJR787878
**Source:** mcp-gamehacking/skills/ags-device-reset-spoofer

## Description

DeviceResetSpoofer is an Android LSPosed module that automatically assigns a fresh device identity to selected apps after their data is cleared. Written in Java with Xposed hooks, it spoofs identifiers such as Android ID, advertising ID, IMEI/MEID, Wi-Fi MAC, GSF ID, build fingerprint, and carrier metadata, with each hook type toggled independently. A hidden sentinel file in the app’s private directory detects data wipes without relying on system broadcasts, and users can also trigger manual identity resets from the module’s configuration UI. It targets rooted devices running LSPosed on Android 7 through 16 and is aimed at researchers and users studying or evading mobile device fingerprinting, anti-cheat checks, and app-level hardware bans.
