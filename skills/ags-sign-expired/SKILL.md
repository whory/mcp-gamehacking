---
name: ags-sign-expired
description: "DLL side-loading exploit for Microsoft's signtool.exe that hijacks XmlLite.dll to patch CertVerifyTimeValidity (crypt32.dll) and GetSystemTimeAsFileTime (KernelBase.dll) in-memory using WriteProcessMe"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sign-expired
---

# sign expired

**Author:** mathisvickie
**Source:** mcp-gamehacking/skills/ags-sign-expired

## Description

DLL side-loading exploit for Microsoft's signtool.exe that hijacks XmlLite.dll to patch CertVerifyTimeValidity (crypt32.dll) and GetSystemTimeAsFileTime (KernelBase.dll) in-memory using WriteProcessMemory, effectively zeroing return values to bypass certificate expiration checks during Authenticode signing.
