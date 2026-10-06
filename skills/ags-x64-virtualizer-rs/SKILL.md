---
name: ags-x64-virtualizer-rs
description: "This project is a toy x86-64 virtualizing obfuscator written in Rust. It uses the iced-x86 crate to disassemble raw x86-64 byte arrays, translates native instructions into a custom stack-machine bytec"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-x64-virtualizer-rs
---

# x64 virtualizer rs

**Author:** cursey
**Source:** mcp-gamehacking/skills/ags-x64-virtualizer-rs

## Description

This project is a toy x86-64 virtualizing obfuscator written in Rust. It uses the iced-x86 crate to disassemble raw x86-64 byte arrays, translates native instructions into a custom stack-machine bytecode with opcodes such as Const, Load, Store, Add, and Mul, and JIT-assembles vmenter and vmexit bridge routines at runtime. The Machine struct maintains a full set of virtual registers and a stack pointer for executing the translated bytecode. It is aimed at security researchers studying the internals of VM-based code obfuscation engines and exploring Rust as a language for binary-transformation tooling.
