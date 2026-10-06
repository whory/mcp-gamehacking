---
name: ags-driver-base
description: "This project is a starter template for building Windows kernel-mode drivers with CMake and KMDF. It is primarily C++ and includes scaffolding for driver entry, WDK integration through FindWDK, and opt"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-base
---

# DriverBase

**Author:** SecondNewtonLaw
**Source:** mcp-gamehacking/skills/ags-driver-base

## Description

This project is a starter template for building Windows kernel-mode drivers with CMake and KMDF. It is primarily C++ and includes scaffolding for driver entry, WDK integration through FindWDK, and optional compile-time obfuscation helpers. The setup is designed to simplify toolchain configuration across Windows target versions while keeping the code close to real kernel constraints. It is useful for security researchers and low-level developers who need a clean baseline for driver prototyping.
