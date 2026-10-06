---
name: ags-intro-to-dx11-revisited
description: "This project revisits and modernizes the sample source code from Frank D. Luna's Introduction to 3D Game Programming with DirectX 11, updating it so the examples compile and run with current toolchain"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-intro-to-dx11-revisited
---

# intro to dx11 revisited

**Author:** yottaawesome
**Source:** mcp-gamehacking/skills/ags-intro-to-dx11-revisited

## Description

This project revisits and modernizes the sample source code from Frank D. Luna's Introduction to 3D Game Programming with DirectX 11, updating it so the examples compile and run with current toolchains while remaining faithful to the book's teaching progression. Written primarily in modern C++ using inline modules, it replaces deprecated DirectX dependencies such as D3DX11 and Effects11 with standard Direct3D 11 APIs, a custom ComPtr wrapper, and explicit HLSL shader compilation via D3DReadFileToBlob. The repository includes working demos covering DirectXMath fundamentals, Direct3D initialization, geometry rendering, and lighting, with ongoing work to convert legacy FX shaders to standard HLSL. It serves developers and security researchers who need a clear, up-to-date reference for DirectX 11 rendering pipelines, graphics programming concepts, and the low-level structures commonly encountered when analyzing or interacting with game engines and their graphics subsystems.
