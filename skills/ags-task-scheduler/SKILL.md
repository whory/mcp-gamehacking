---
name: ags-task-scheduler
description: "This project is a cross-platform, fiber-based task scheduler designed for high-performance game workloads. It is a C++ library that provides multi-threaded job execution, task grouping, work-stealing "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-task-scheduler
---

# TaskScheduler

**Author:** SergeyMakeev
**Source:** mcp-gamehacking/skills/ags-task-scheduler

## Description

This project is a cross-platform, fiber-based task scheduler designed for high-performance game workloads. It is a C++ library that provides multi-threaded job execution, task grouping, work-stealing style scheduling behavior, and platform abstractions for Windows and POSIX targets. The repository includes extensive tests, examples, and third-party low-level context-switching components needed for fiber systems. It is primarily aimed at engine programmers who need a scalable job system for parallel game logic and rendering pipelines.
