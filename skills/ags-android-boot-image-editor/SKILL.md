---
name: ags-android-boot-image-editor
description: "This project is a tool for reverse engineering Android ROM images including boot.img, recovery, vendor_boot, and other partition images."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-android-boot-image-editor
---

# Android boot image editor

**Author:** cfig
**Source:** mcp-gamehacking/skills/ags-android-boot-image-editor

## Description

This project is a tool for reverse engineering Android ROM images including boot.img, recovery, vendor_boot, and other partition images.
It provides Gradle-based unpack and repack workflows that extract kernels, ramdisks, DTBs, and VBMeta images with full support for AVB signing, LZ4/XZ/GZIP compression, and EROFS/sparse image handling.
The Kotlin/Java codebase runs on Linux, macOS, and Windows with JDK 11+ and supports Android boot image formats from version 0 through 4 plus vendor boot images.
It is mainly useful for Android security researchers and ROM developers performing boot image analysis, modification, and repacking.
