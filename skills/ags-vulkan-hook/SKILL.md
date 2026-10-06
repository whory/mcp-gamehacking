---
name: ags-vulkan-hook
description: "This project is a Vulkan API hooking framework that intercepts Vulkan rendering calls for overlay rendering inside Vulkan-based games. It hooks vkQueuePresentKHR and other Vulkan functions to inject c"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vulkan-hook
---

# Vulkan Hook

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-vulkan-hook

## Description

This project is a Vulkan API hooking framework that intercepts Vulkan rendering calls for overlay rendering inside Vulkan-based games. It hooks vkQueuePresentKHR and other Vulkan functions to inject custom rendering commands, enabling ImGui overlay menus and ESP drawing within Vulkan games. The C++ implementation demonstrates Vulkan-specific hooking patterns distinct from DirectX approaches. It is aimed at game security researchers studying Vulkan rendering pipeline hooking and overlay techniques.
