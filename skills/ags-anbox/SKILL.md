---
name: ags-anbox
description: "Anbox is a container-based runtime that runs a full Android system on Linux without relying on heavyweight virtualization. It uses Linux namespaces and a host-side daemon to broker hardware access, in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anbox
---

# anbox

**Author:** anbox
**Source:** mcp-gamehacking/skills/ags-anbox

## Description

Anbox is a container-based runtime that runs a full Android system on Linux without relying on heavyweight virtualization. It uses Linux namespaces and a host-side daemon to broker hardware access, including OpenGL ES rendering paths adapted from Android emulator components. The codebase is primarily C++ with CMake and integrates dependencies such as LXC, D-Bus, and protobuf. It targets desktop and cloud-style Android application use cases and remains valuable as a reference project despite archived maintenance status.
