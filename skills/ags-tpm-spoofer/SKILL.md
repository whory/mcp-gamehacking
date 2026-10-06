---
name: ags-tpm-spoofer
description: "TPM Spoofer is a proof-of-concept project that explores manipulation of TPM-derived identifiers used in anti-cheat hardware tracking."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-tpm-spoofer
---

# tpm spoofer

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-tpm-spoofer

## Description

TPM Spoofer is a proof-of-concept project that explores manipulation of TPM-derived identifiers used in anti-cheat hardware tracking.
It contains a kernel-mode component that hooks TPM request handling paths and a user-mode utility for reading endorsement key related information.
The codebase is built with C and C++ on Visual Studio and WDK, and targets modern Windows TPM stack behavior.
Its primary use case is game security research focused on how TPM and EK-based signals can be inspected, intercepted, and validated.
