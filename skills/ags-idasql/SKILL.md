---
name: ags-idasql
description: "IDASQL exposes IDA databases as SQL tables and adds an AI-assisted interface for natural-language reverse-engineering queries. It can run as a standalone CLI against .i64 files or as an in-IDA plugin,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-idasql
---

# idasql

**Author:** allthingsida
**Source:** mcp-gamehacking/skills/ags-idasql

## Description

IDASQL exposes IDA databases as SQL tables and adds an AI-assisted interface for natural-language reverse-engineering queries. It can run as a standalone CLI against .i64 files or as an in-IDA plugin, and it supports querying functions, strings, xrefs, types, and more without writing IDAPython scripts. The system also provides remote query capabilities so external tools or agents can interact with an active analysis session. It is built for reverse engineers who want fast, query-driven binary analysis workflows.
