---
name: ags-dx-inject-uc
description: "This project is a proof-of-concept for GPU-assisted process hollowing using DirectX 11 shared buffers and compute shaders."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dx-inject-uc
---

# DXInject UC

**Author:** a0yark
**Source:** mcp-gamehacking/skills/ags-dx-inject-uc

## Description

This project is a proof-of-concept for GPU-assisted process hollowing using DirectX 11 shared buffers and compute shaders.
The C++ codebase consists of an Injector that encodes shellcode and uploads it to a GPU shared buffer, and a Target that uses an HLSL compute shader to decode the payload on the GPU before executing it on the CPU.
Cross-process synchronization is handled through named events and shared memory with DXGI shared handles.
It is mainly useful for security researchers studying GPU-based payload transport, compute shader abuse, and novel code injection techniques.
