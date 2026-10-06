---
name: ags-unity-im-gui-android
description: "This project is an Android Unity native template for rendering an ImGui menu through hooked graphics and input paths. It uses C++ with Dobby hooks to intercept eglSwapBuffers and Unity input injection"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-unity-im-gui-android
---

# Unity ImGUI Android

**Author:** Octowolve
**Source:** mcp-gamehacking/skills/ags-unity-im-gui-android

## Description

This project is an Android Unity native template for rendering an ImGui menu through hooked graphics and input paths. It uses C++ with Dobby hooks to intercept eglSwapBuffers and Unity input injection so overlays and touch or key handling can run inside the game process. The repository also includes a tutorial for finding nativeInjectEvent signatures in libunity with IDA and SigMaker. It targets mod-menu prototyping and mobile game reverse-engineering research.
