---
name: ags-ida-pro-loadmap
description: "IDA Pro plugin that imports symbol names from VC, Borland, Dede, GCC, and IDA-format .MAP linker output files into the current database. Parses section:offset notation from various MAP file formats an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-pro-loadmap
---

# ida pro loadmap

**Author:** mefistotelis
**Source:** mcp-gamehacking/skills/ags-ida-pro-loadmap

## Description

IDA Pro plugin that imports symbol names from VC, Borland, Dede, GCC, and IDA-format .MAP linker output files into the current database. Parses section:offset notation from various MAP file formats and creates named functions/labels at corresponding addresses using the IDA SDK's kernwin and segment APIs.
