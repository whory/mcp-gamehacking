---
name: ags-ci-dll-demo
description: "CiDllDemo is a kernel driver demonstration of using ci.dll APIs to validate executable signatures. It hooks process-creation notifications, invokes CiValidateFileObject and CiCheckSignedFile, and insp"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ci-dll-demo
---

# CiDllDemo

**Author:** Ido-Moshe-Github
**Source:** mcp-gamehacking/skills/ags-ci-dll-demo

## Description

CiDllDemo is a kernel driver demonstration of using ci.dll APIs to validate executable signatures. It hooks process-creation notifications, invokes CiValidateFileObject and CiCheckSignedFile, and inspects returned policy information to extract certificate details. The project is implemented in C/C++ for Windows driver development and supports both x86 and x64 builds. It is aimed at security researchers exploring Windows Code Integrity behavior in kernel mode.
