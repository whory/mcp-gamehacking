---
name: ags-direct-x11hook
description: "This project is a DirectX 11 hook library in C++ that intercepts IDXGISwapChain::Present and ID3D11DeviceContext methods to render custom overlays within D3D11 applications. It locates the D3D11 vtabl"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-direct-x11hook
---

# DirectX11Hook

**Author:** niemand-sec
**Source:** mcp-gamehacking/skills/ags-direct-x11hook

## Description

This project is a DirectX 11 hook library in C++ that intercepts IDXGISwapChain::Present and ID3D11DeviceContext methods to render custom overlays within D3D11 applications. It locates the D3D11 vtable through a dummy device, installs function hooks, and renders ImGui menus inside the hooked render loop. The library serves as a base for building internal game overlays and cheat menus. It is aimed at game hackers and security researchers studying D3D11 hook-based overlay rendering techniques.
