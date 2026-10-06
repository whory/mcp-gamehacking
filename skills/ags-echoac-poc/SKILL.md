---
name: ags-echoac-poc
description: "This project is a writeup-backed proof of concept for vulnerabilities in echo.ac's echo_driver.sys, with the bundled example focused on privilege escalation to NT AUTHORITY\SYSTEM."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-echoac-poc
---

# echoac poc

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-echoac-poc

## Description

This project is a writeup-backed proof of concept for vulnerabilities in echo.ac's echo_driver.sys, with the bundled example focused on privilege escalation to NT AUTHORITY\SYSTEM.
The PoC uses the driver's read-memory IOCTL to leak PsInitialSystemProcess, walk ActiveProcessLinks, recover the SYSTEM token from EPROCESS, and then overwrite the token of a newly spawned cmd.exe process.
Its archive also keeps the surrounding context that echo.ac is a commercial screensharing tool used in competitive communities, so the repository doubles as a case study in how an anti-cheat-adjacent driver can become an exploitation surface.
It is mainly useful for Windows kernel researchers studying vulnerable-driver token theft, kernel read primitives, and real-world privilege escalation chains built on third-party anti-cheat software.
