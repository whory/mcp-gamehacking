---
name: ags-ts-fucker
description: "This project is a proof of concept for toggling Windows TestSigning mode at runtime by abusing the Dell dbutil_2_3.sys vulnerable driver for kernel read-write access."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ts-fucker
---

# TS Fucker

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ts-fucker

## Description

This project is a proof of concept for toggling Windows TestSigning mode at runtime by abusing the Dell dbutil_2_3.sys vulnerable driver for kernel read-write access.
The archived README emphasizes that it changes the machine's test-signing state without a reboot, downloads symbol files for the current Windows build to locate the required fields, and expects the vulnerable driver to already be loaded.
As a result, the repository is less a generic BYOVD toolkit and more a focused utility showing how a kernel memory primitive can live-patch security-relevant system state.
It is mainly useful for Windows kernel researchers studying runtime test-signing manipulation, symbol-assisted offset discovery, and the practical impact of dbutil_2_3.sys.
