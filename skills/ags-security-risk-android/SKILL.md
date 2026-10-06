---
name: ags-security-risk-android
description: "SecurityRiskAndroid is an Android sample application that implements a layered runtime risk detector for spotting tampering, hooking, and root-related threats on devices. It combines a Java UI with a "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-security-risk-android
---

# SecurityRiskAndroid

**Author:** radito
**Source:** mcp-gamehacking/skills/ags-security-risk-android

## Description

SecurityRiskAndroid is an Android sample application that implements a layered runtime risk detector for spotting tampering, hooking, and root-related threats on devices. It combines a Java UI with a JNI native library written in C that runs fast synchronous checks, asynchronous deep scans, optional root-assisted diagnostics, and isolated-process comparisons via a Messenger-backed service. The checker covers a wide range of signals including Frida and Xposed artifacts, debugger attachment, suspicious memory mappings, ART and package visibility inconsistencies, KernelSU probes, mock-location indicators, and native code integrity checks such as GOT/PLT, PHDR, and disk-versus-memory hash verification. Built with Gradle, Android Gradle Plugin 8.x, and CMake/NDK, it exposes scored verdicts and detailed field results to help developers study mobile anti-tamper and anti-cheat techniques for games and other security-sensitive Android apps.
