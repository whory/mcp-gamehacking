---
name: ags-root-app-detector
description: "This project is a small Android proof of concept that detects known root-management applications on a device. The app is written in Java and checks target package and activity pairs by attempting laun"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-root-app-detector
---

# RootAppDetector

**Author:** apkunpacker
**Source:** mcp-gamehacking/skills/ags-root-app-detector

## Description

This project is a small Android proof of concept that detects known root-management applications on a device. The app is written in Java and checks target package and activity pairs by attempting launches and interpreting security exceptions. It ships as a minimal Gradle-based Android project with a simple UI to rescan and display findings. It is useful for mobile anti-cheat and integrity teams validating app-presence based root detection.
