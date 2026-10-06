---
name: ags-past-dse
description: "This project is a Windows Driver Signature Enforcement bypass tool that temporarily changes the system date to before the certificate revocation period, signs a driver with leaked certificates, then r"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-past-dse
---

# PastDSE

**Author:** utoni
**Source:** mcp-gamehacking/skills/ags-past-dse

## Description

This project is a Windows Driver Signature Enforcement bypass tool that temporarily changes the system date to before the certificate revocation period, signs a driver with leaked certificates, then restores the date. It includes a kernel driver component using BlackBone for PE loading and relocation, a user-mode controller, and VeriSign certificate files. It is mainly useful for kernel security researchers studying DSE bypass techniques and driver signing certificate abuse.
