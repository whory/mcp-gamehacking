---
name: ags-ap-ki-d
description: "This project is APKiD, an Android application identifier that detects compilers, packers, obfuscators, and anti-analysis techniques used in APK and DEX files. It uses YARA rules to fingerprint known p"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ap-ki-d
---

# APKiD

**Author:** rednaga
**Source:** mcp-gamehacking/skills/ags-ap-ki-d

## Description

This project is APKiD, an Android application identifier that detects compilers, packers, obfuscators, and anti-analysis techniques used in APK and DEX files. It uses YARA rules to fingerprint known protection tools including ProGuard, DexGuard, Bangcle, Ijiami, and dozens of other commercial and custom protectors. The Python tool outputs detected protections and their versions. It is aimed at mobile security analysts, malware researchers, and reverse engineers performing initial triage on Android samples to identify applied protections before deeper analysis.
