---
name: ags-vvb2060-key-attestation
description: "This project is an Android application that performs hardware-backed key attestation to verify device integrity and bootloader status. It interacts with the Android Keymaster and KeyMint HAL interface"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vvb2060-key-attestation
---

# KeyAttestation

**Author:** vvb2060
**Source:** mcp-gamehacking/skills/ags-vvb2060-key-attestation

## Description

This project is an Android application that performs hardware-backed key attestation to verify device integrity and bootloader status. It interacts with the Android Keymaster and KeyMint HAL interfaces through AIDL bindings to retrieve and validate attestation certificates, checking for locked bootloaders, verified boot states, and provisioned key properties. It is mainly useful for Android security researchers and anti-cheat engineers studying hardware attestation mechanisms and device integrity verification on Android.
