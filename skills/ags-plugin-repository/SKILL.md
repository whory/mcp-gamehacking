---
name: ags-plugin-repository
description: "This is the official curated index for discovering, installing, and sharing plugins for IDA Pro, powering the public plugin catalog and the built-in IDA Plugin Manager. It maintains machine-readable J"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-plugin-repository
---

# plugin repository

**Author:** HexRaysSA
**Source:** mcp-gamehacking/skills/ags-plugin-repository

## Description

This is the official curated index for discovering, installing, and sharing plugins for IDA Pro, powering the public plugin catalog and the built-in IDA Plugin Manager. It maintains machine-readable JSON manifests of discovered plugins along with metadata such as versions, categories, licenses, and release information, updated automatically by a periodic GitHub Actions sync job. Python tooling merges plugin data, mirrors archives, generates documentation sites, and produces indexer logs and change summaries for maintainers. The repository tracks explicitly known and ignored plugin sources and supports authors with packaging standards and linting via the Hex-Rays CLI. It is aimed at reverse engineers, malware analysts, and security researchers who extend IDA for disassembly, decompilation, automation, and third-party analysis workflows.
