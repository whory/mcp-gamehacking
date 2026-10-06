---
name: ags-troll-store
description: "This project is TrollStore, a perma-signed jailed app installer for iOS that exploits CoreTrust and AMFI bugs to install IPA files with arbitrary entitlements without a jailbreak. Installed apps persi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-troll-store
---

# TrollStore

**Author:** opa334
**Source:** mcp-gamehacking/skills/ags-troll-store

## Description

This project is TrollStore, a perma-signed jailed app installer for iOS that exploits CoreTrust and AMFI bugs to install IPA files with arbitrary entitlements without a jailbreak. Installed apps persist through reboots and do not require re-signing. The Objective-C tool leverages a kernel vulnerability chain specific to certain iOS versions to bypass code signing enforcement while remaining in the jailed sandbox. It is aimed at iOS security researchers studying code signing bypass and users wanting to sideload apps without developer certificates.
