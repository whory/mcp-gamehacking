---
name: ags-inject-fix
description: "This project is a Unity logic hotfix framework that lets teams patch C# gameplay code without rebuilding the whole client."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-inject-fix
---

# InjectFix

**Author:** Tencent
**Source:** mcp-gamehacking/skills/ags-inject-fix

## Description

This project is a Unity logic hotfix framework that lets teams patch C# gameplay code without rebuilding the whole client.
It targets broad Unity version and platform coverage and is designed to work even with older projects that cannot be heavily refactored.
The codebase is mainly C# and uses IL tooling to inject and route patched logic at runtime, with docs and sample Unity projects included.
Its primary use case is fast bug fixing and controlled hot updates for live Unity games.
