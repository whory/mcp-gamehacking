---
name: ags-kernel-build-scripts
description: "This project is a collection of Bash automation scripts for building Android kernels across GKI and non-GKI targets."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-build-scripts
---

# kernel build scripts

**Author:** TheWildJames
**Source:** mcp-gamehacking/skills/ags-kernel-build-scripts

## Description

This project is a collection of Bash automation scripts for building Android kernels across GKI and non-GKI targets.
The scripts orchestrate repo sync, patch application, defconfig changes, packaging, and release publishing for multiple device families and kernel branches.
They heavily integrate KernelSU and SUSFS patch flows and include vendor-specific build variants for Pixel, OnePlus, Xiaomi, and others.
The main audience is advanced Android kernel modders and mobile security researchers, with a note that some scripts may now be outdated.
