---
name: ags-winafl
description: "This project is WinAFL, a Windows port of the AFL (American Fuzzy Lop) coverage-guided fuzzer. It uses DynamoRIO or Intel PT for binary instrumentation to track code coverage during fuzzing, supports "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-winafl
---

# winafl

**Author:** googleprojectzero
**Source:** mcp-gamehacking/skills/ags-winafl

## Description

This project is WinAFL, a Windows port of the AFL (American Fuzzy Lop) coverage-guided fuzzer. It uses DynamoRIO or Intel PT for binary instrumentation to track code coverage during fuzzing, supports persistent mode for fast in-process fuzzing, and includes corpus minimization and crash triage utilities. The C tool can fuzz closed-source Windows binaries without source code by hooking target functions and mutating input. It is aimed at vulnerability researchers fuzzing Windows applications, drivers, and parsers for security bugs.
