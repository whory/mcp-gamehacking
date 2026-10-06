---
name: ags-android-il2cpp-modspeed
description: "This project is an Android IL2CPP game speed hack tool that modifies Unity IL2CPP game timing to speed up or slow down gameplay. It hooks into Unity's Time class methods to manipulate deltaTime, timeS"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-android-il2cpp-modspeed
---

# android il2cpp modspeed

**Author:** oobbb
**Source:** mcp-gamehacking/skills/ags-android-il2cpp-modspeed

## Description

This project is an Android IL2CPP game speed hack tool that modifies Unity IL2CPP game timing to speed up or slow down gameplay. It hooks into Unity's Time class methods to manipulate deltaTime, timeScale, and fixed timestep values, allowing game speed control without modifying game logic. The C++ native library uses IL2CPP method hooking on Android. It is aimed at Android game modders and security researchers studying time manipulation attacks on IL2CPP Unity games.
