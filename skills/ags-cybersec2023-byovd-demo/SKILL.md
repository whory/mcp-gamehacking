---
name: ags-cybersec2023-byovd-demo
description: "A Bring Your Own Vulnerable Driver (BYOVD) demonstration from CYBERSEC 2023 Taiwan."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cybersec2023-byovd-demo
---

# CYBERSEC2023 BYOVD Demo

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-cybersec2023-byovd-demo

## Description

A Bring Your Own Vulnerable Driver (BYOVD) demonstration from CYBERSEC 2023 Taiwan.
Abuses MSI's RTCore64.sys to nullify the DSE flag and load an unsigned malicious driver, then disables 360 Total Security's ObRegisterCallbacks and notify callbacks to enable arbitrary process manipulation.
