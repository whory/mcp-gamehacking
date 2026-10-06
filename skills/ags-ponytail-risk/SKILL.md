---
name: ags-ponytail-risk
description: "Ponytail Risk is an open-source behavioral risk control and evidence review platform for private game servers. Built primarily in Rust with a Node.js web control layer, it unifies read-only database a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ponytail-risk
---

# Ponytail Risk 

**Author:** xihedun-2026
**Source:** mcp-gamehacking/skills/ags-ponytail-risk

## Description

Ponytail Risk is an open-source behavioral risk control and evidence review platform for private game servers. Built primarily in Rust with a Node.js web control layer, it unifies read-only database analysis, real-time game plugin events, asset provenance tracing, rule-based scoring, and AI-assisted investigation in a single console. A local risk agent ingests authoritative plugin events through a C ABI SDK (Windows DLL and Linux shared library), while the Rust engine handles data extraction and rule evaluation with SQLite-backed persistence, idempotent deduplication, and retry queues. The platform supports shadow mode by default, keeping bans, deductions, and database mutations behind human review rather than automated enforcement. It targets game operators and security teams who need cheat detection, fraud analysis, and case review workflows without wiring AI or statistics directly into punitive actions.
