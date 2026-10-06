---
name: ags-android-overlay-protection
description: "This project is an Android library for detecting and protecting against overlay attacks (tapjacking). It checks for visible overlay windows drawn on top of the application that could intercept user in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-android-overlay-protection
---

# android overlay protection

**Author:** geeksonsecurity
**Source:** mcp-gamehacking/skills/ags-android-overlay-protection

## Description

This project is an Android library for detecting and protecting against overlay attacks (tapjacking). It checks for visible overlay windows drawn on top of the application that could intercept user input or obscure UI elements, implementing Android's TYPE_APPLICATION_OVERLAY detection and filterTouchesWhenObscured flag handling. The Java library provides callback-based notification when overlays are detected. It is aimed at Android app developers and security engineers protecting sensitive UI flows from overlay-based attacks.
