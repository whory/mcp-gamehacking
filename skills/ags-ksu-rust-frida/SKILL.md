---
name: ags-ksu-rust-frida
description: "A KernelSU module written in Rust that loads Frida gadget into target Android applications at startup, combining KernelSU's kernel-level app modification with Frida's dynamic instrumentation capabilit"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ksu-rust-frida
---

# KSU Rust Frida

**Author:** dreamland-blog
**Source:** mcp-gamehacking/skills/ags-ksu-rust-frida

## Description

A KernelSU module written in Rust that loads Frida gadget into target Android applications at startup, combining KernelSU's kernel-level app modification with Frida's dynamic instrumentation capabilities.
It injects the Frida shared library into the Zygote-forked process before the app's own code executes, enabling runtime hooking without requiring root detection bypass.
It is mainly useful for mobile security researchers performing dynamic analysis and instrumentation of Android games and apps using KernelSU and Frida.
