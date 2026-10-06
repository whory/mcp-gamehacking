---
name: ags-5ec1cff-tricky-store
description: "This project is an Android module that modifies the certificate chain returned by Android key attestation. It targets Android 10+ devices and supports per-app targeting through configuration files, in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-5ec1cff-tricky-store
---

# TrickyStore

**Author:** 5ec1cff
**Source:** mcp-gamehacking/skills/ags-5ec1cff-tricky-store

## Description

This project is an Android module that modifies the certificate chain returned by Android key attestation. It targets Android 10+ devices and supports per-app targeting through configuration files, including package lists and optional hardware keybox data. It can switch between leaf-certificate patching and generated-certificate modes to handle devices with different TEE behavior, and it also supports security patch level spoofing in attestation results. The primary use case is mobile security research around integrity checks, attestation flows, and anti-tamper validation.
