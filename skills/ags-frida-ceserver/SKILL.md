---
name: ags-frida-ceserver
description: "This project is a Cheat Engine server implemented through Frida instrumentation. It uses Frida to read and write process memory on mobile and desktop platforms, exposing the ceserver network protocol "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-frida-ceserver
---

# frida ceserver

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-frida-ceserver

## Description

This project is a Cheat Engine server implemented through Frida instrumentation. It uses Frida to read and write process memory on mobile and desktop platforms, exposing the ceserver network protocol so that a desktop Cheat Engine client can connect and scan memory remotely. This approach works on non-rooted Android devices where Frida can attach. It is aimed at mobile game security researchers using Cheat Engine through Frida's cross-platform instrumentation.
