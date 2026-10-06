---
name: ags-ce-detector
description: "A detection tool that identifies running instances of Cheat Engine by scanning for its known window classes, process names, driver presence, and debug artifacts using Windows API calls like FindWindow"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ce-detector
---

# CEDetector

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-ce-detector

## Description

A detection tool that identifies running instances of Cheat Engine by scanning for its known window classes, process names, driver presence, and debug artifacts using Windows API calls like FindWindow, CreateToolhelp32Snapshot, and service enumeration.
The ce_detection module implements multiple detection vectors to reliably identify Cheat Engine even when it has been renamed or is running with anti-detection features enabled.
It is mainly useful for anti-cheat developers studying Cheat Engine detection techniques and game security researchers testing CE stealth configurations.
