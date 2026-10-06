---
name: ags-workflow-objc
description: "This project is an Objective-C analysis workflow plugin for Binary Ninja, now migrated into the main API repository."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-workflow-objc
---

# workflow objc

**Author:** Vector35
**Source:** mcp-gamehacking/skills/ags-workflow-objc

## Description

This project is an Objective-C analysis workflow plugin for Binary Ninja, now migrated into the main API repository.
It is implemented in C++ and extends analysis by cleaning up Objective-C call patterns around dynamic dispatch.
A key feature is rewriting many objc_msgSend-style calls into clearer direct-call representations when targets can be inferred.
It is intended for reverse engineers analyzing macOS and iOS binaries that rely heavily on Objective-C runtime behavior.
