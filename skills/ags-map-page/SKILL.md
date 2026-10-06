---
name: ags-map-page
description: "This project is a kernel proof of concept showing how to reduce mapped-driver memory traces after kdmapper-based loading. It is implemented in C++ and discusses freeing mapped pages with routines such"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-map-page
---

# MapPage

**Author:** EBalloon
**Source:** mcp-gamehacking/skills/ags-map-page

## Description

This project is a kernel proof of concept showing how to reduce mapped-driver memory traces after kdmapper-based loading. It is implemented in C++ and discusses freeing mapped pages with routines such as MmFreePagesFromMdl and pool cleanup. The sample also demonstrates a data-pointer communication approach via NtUserGetObjectInformation and notes possible alternatives. It is mainly aimed at low-level anti-cheat bypass research and driver-mapping stealth experiments.
