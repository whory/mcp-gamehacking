---
name: ags-nodejs-tracer
description: "This project is a Node.js tracing script that instruments core module calls at runtime. It can log API usage, spoof selected behaviors to bypass anti-analysis checks, and preserve artifacts such as fi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nodejs-tracer
---

# Nodejs Tracer

**Author:** CheckPointSW
**Source:** mcp-gamehacking/skills/ags-nodejs-tracer

## Description

This project is a Node.js tracing script that instruments core module calls at runtime. It can log API usage, spoof selected behaviors to bypass anti-analysis checks, and preserve artifacts such as files written by the target process. The implementation is lightweight and launched through Node's preload mechanism, making it easy to attach to obfuscated scripts without major setup. It is intended for malware analysts and security researchers performing dynamic JavaScript behavior analysis.
