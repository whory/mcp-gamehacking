---
name: gh-reverse-engineering
description: Guided Hacking reverse engineering fundamentals -- tools, x86/x64 registers, stack layout, calling conventions, and trampoline hooks.
---

# GH Reverse Engineering Fundamentals

## Tools

- Cheat Engine: memory scanner, pointer scanner, dissect structures, CE Lua scripting
- ReClass.NET: live struct layout viewer, ptr chain mapping
- x64dbg: usermode debugger, plugin ecosystem (xAnalyzer, ScyllaHide)
- IDA Pro: static disassembler and decompiler; industry standard for deep RE

## x86/x64 Registers

64-bit: RAX RBX RCX RDX RSI RDI RSP RBP R8-R15, RIP
Lower halves: EAX (32-bit) -> AX (16-bit) -> AH/AL (8-bit high/low)
RIP = instruction pointer; RSP = stack pointer; RBP = frame base pointer

## Stack Layout

- LIFO structure; grows downward (lower addresses)
- Function prologue: push rbp / mov rbp, rsp / sub rsp, N
- Function epilogue: leave / ret
- Local variables at negative RBP offsets; return address above saved RBP

## Calling Conventions

- cdecl: args pushed right-to-left, caller cleans stack
- stdcall: args pushed right-to-left, callee cleans stack
- thiscall (MSVC): this ptr in ECX, callee cleans (used for C++ member fns)
- fastcall / x64: first 4 args in RCX, RDX, R8, R9; rest on stack; shadow space required

## Trampoline Hook Pattern

    1. Save first N bytes of target function
    2. Write JMP to hook function at target (5 bytes on x86, 14 on x64)
    3. Hook function runs custom logic
    4. Jump to trampoline (saved bytes + JMP back past original patch)

## Workflow

1. Find entity list or object via Cheat Engine pointer scan
2. Map struct in ReClass.NET
3. Confirm offsets in x64dbg
4. Static analysis of complex functions in IDA