---
name: ags-apatchy
description: "This project is a fuzzing framework for the Apache HTTPD server that replaces Apache's socket layer with custom I/O filters, feeding raw bytes directly into the same code paths that handle real HTTP t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-apatchy
---

# apatchy

**Author:** 0xbigshaq
**Source:** mcp-gamehacking/skills/ags-apatchy

## Description

This project is a fuzzing framework for the Apache HTTPD server that replaces Apache's socket layer with custom I/O filters, feeding raw bytes directly into the same code paths that handle real HTTP traffic. The Python-based framework includes reproducers for known CVEs and detailed documentation on Apache internals such as memory pools, hooks, filters, buckets, and the request pipeline. It is mainly useful for vulnerability researchers and security engineers studying server-side fuzzing techniques and HTTP parsing attack surfaces.
