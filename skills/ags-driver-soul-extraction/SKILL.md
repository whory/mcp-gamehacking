---
name: ags-driver-soul-extraction
description: "This project is a kernel-oriented certificate extraction toolkit that parses PE Authenticode data and pulls out the main signing certificate's subject and validity window."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-soul-extraction
---

# Driver SoulExtraction

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-soul-extraction

## Description

This project is a kernel-oriented certificate extraction toolkit that parses PE Authenticode data and pulls out the main signing certificate's subject and validity window.
Its archive is split into a driver project and a reusable `Lib-SoulExtraction` library, with the library embedding adapted Linux PKCS#7, ASN.1, and X.509 parsing code alongside Windows-specific wrappers for kernel file access and string conversion.
The core routine walks the PE signature directory, parses the PKCS#7 message, chooses the likely primary certificate, and returns fields such as the signer name and validity timestamps rather than merely checking whether a file is signed.
It is mainly useful for Windows kernel developers and reverse engineers who need in-kernel certificate metadata extraction from PE files for telemetry, trust analysis, or triage tooling.
