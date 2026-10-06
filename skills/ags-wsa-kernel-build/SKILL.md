---
name: ags-wsa-kernel-build
description: "This project provides a Docker-based environment for building the Windows Subsystem for Android kernel."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wsa-kernel-build
---

# wsa kernel build

**Author:** KiruyaMomochi
**Source:** mcp-gamehacking/skills/ags-wsa-kernel-build

## Description

This project provides a Docker-based environment for building the Windows Subsystem for Android kernel.
It packages the required build tools and cross-compilation dependencies for both x86_64 and arm64 targets.
The workflow is designed for reproducible local builds and can also be used in CI pipelines.
Primary technologies are Docker and Linux kernel build tooling.
It is mainly aimed at developers and security researchers who need custom WSA kernels for testing or instrumentation.
