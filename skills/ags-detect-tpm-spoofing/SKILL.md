---
name: ags-detect-tpm-spoofing
description: "DetectTpmSpoofing is a small Windows kernel driver that detects whether TPM 2.0 responses have been spoofed by hooks on the TPM device stack. Written in C/C++ as a KMDF driver built with CMake and the"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detect-tpm-spoofing
---

# DetectTpmSpoofing

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-detect-tpm-spoofing

## Description

DetectTpmSpoofing is a small Windows kernel driver that detects whether TPM 2.0 responses have been spoofed by hooks on the TPM device stack. Written in C/C++ as a KMDF driver built with CMake and the Windows Driver Kit, it compares a TPM2_ReadPublic result obtained via the normal IOCTL path against the same data read from TPM.sys's internal cached response buffers. Mismatched FNV-1a hashes indicate a filter or DeviceIoControl hook forging public keys or endorsement keys used for hardware identity. It is aimed at anti-cheat and game-security researchers who need to spot HWID spoofers that fake TPM attestation without touching the real TPM.
