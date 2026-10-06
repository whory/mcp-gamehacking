---
name: ags-mem-detection
description: "This project is an Android anti-tampering demo that detects abnormal runtime environments by comparing in-memory and on-disk checksums of critical system libraries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mem-detection
---

# MemDetection

**Author:** Mrack
**Source:** mcp-gamehacking/skills/ags-mem-detection

## Description

This project is an Android anti-tampering demo that detects abnormal runtime environments by comparing in-memory and on-disk checksums of critical system libraries.
It combines a Java Android app with a Rust native component integrated through Gradle and JNI.
The checks target signs of instrumentation or modification frameworks such as Frida, Xposed, and cloning environments.
Its main use case is mobile security hardening and runtime integrity validation for Android applications, including games.
