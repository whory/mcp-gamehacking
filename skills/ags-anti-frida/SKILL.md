---
name: ags-anti-frida
description: "This project is a write-up style collection of techniques for detecting Frida instrumentation on Android."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-frida
---

# Anti Frida

**Author:** apkunpacker
**Source:** mcp-gamehacking/skills/ags-anti-frida

## Description

This project is a write-up style collection of techniques for detecting Frida instrumentation on Android.
It demonstrates instruction-level hook detection by comparing expected libc prologue instructions before and after interception.
The examples are centered on JavaScript Frida scripts and practical checks against commonly hooked functions.
It is useful for mobile anti-tamper and game anti-cheat research focused on runtime instrumentation detection.
