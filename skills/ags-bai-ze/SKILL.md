---
name: ags-bai-ze
description: "BaiZe is a rooted Android storage cleanup system delivered as a Magisk, KernelSU, or APatch module with a companion app for scanning and removing cache, logs, and other junk files. It is built primari"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bai-ze
---

# BaiZe

**Author:** xgl34222220-ops
**Source:** mcp-gamehacking/skills/ags-bai-ze

## Description

BaiZe is a rooted Android storage cleanup system delivered as a Magisk, KernelSU, or APatch module with a companion app for scanning and removing cache, logs, and other junk files. It is built primarily in Kotlin and C, with shell module scripts and a libsu RootService that drives a native scanning engine against thousands of curated deep-clean rules. Key capabilities include app cache and uninstall-residue cleanup, APK retention scanning, file organization, scheduled tasks with thermal and idle constraints, and quarantine with audit history. Safety is central: four-tier risk classification, path whitelists, scan-before-delete snapshots, symlink-safe deletion, and hard limits that keep high-risk targets scan-only during automated runs. It is aimed at rooted Android users and security-minded operators who need accurate, policy-controlled cleanup without risking downloads, databases, or other protected user data.
