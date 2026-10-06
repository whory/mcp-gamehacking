---
name: ags-im-gui-zygisk-unity
description: "This project is a Zygisk module template for injecting ImGui overlays into Unity-based Android games. It uses Zygisk (Magisk's Zygote injection framework) to load native code into the game process at "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-im-gui-zygisk-unity
---

# ImGUI Zygisk Unity

**Author:** lbertitoyt
**Source:** mcp-gamehacking/skills/ags-im-gui-zygisk-unity

## Description

This project is a Zygisk module template for injecting ImGui overlays into Unity-based Android games. It uses Zygisk (Magisk's Zygote injection framework) to load native code into the game process at startup, hooks the Unity rendering pipeline, and renders an ImGui-based mod menu overlay. The C++ module handles OpenGL ES context sharing and touch input translation. It is aimed at Android game modders building visual mod menus for rooted devices running Unity games.
