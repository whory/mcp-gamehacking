---
name: ags-dx11-base-hook
description: "This project is a minimal DirectX 11 hooking base in C++ that intercepts the IDXGISwapChain::Present function to render custom overlays inside D3D11 applications. It demonstrates creating a dummy D3D1"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dx11-base-hook
---

# DX11 BaseHook

**Author:** rdbo
**Source:** mcp-gamehacking/skills/ags-dx11-base-hook

## Description

This project is a minimal DirectX 11 hooking base in C++ that intercepts the IDXGISwapChain::Present function to render custom overlays inside D3D11 applications. It demonstrates creating a dummy D3D11 device to locate the vtable, hooking Present with a trampoline, and rendering ImGui menus within the hooked frame. The project serves as a starting template for building internal game overlays. It is aimed at game hackers learning DirectX 11 hook-based overlay rendering and cheat menu development.
