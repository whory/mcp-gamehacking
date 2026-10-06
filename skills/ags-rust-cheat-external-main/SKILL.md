---
name: ags-rust-cheat-external-main
description: "This repository is an external cheat framework targeting the game Rust with separate kernel and user-mode components. The Windows driver handles process memory read and write requests through IOCTLs, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rust-cheat-external-main
---

# Rust Cheat External main

**Author:** Disline1337
**Source:** mcp-gamehacking/skills/ags-rust-cheat-external-main

## Description

This repository is an external cheat framework targeting the game Rust with separate kernel and user-mode components. The Windows driver handles process memory read and write requests through IOCTLs, while the client side includes overlay rendering and gameplay SDK helpers. The code references UnityPlayer and GameAssembly module handling, indicating Unity-based game memory interaction. It is mainly used for cheat development experiments and anti-cheat research into external driver-assisted attack patterns.
