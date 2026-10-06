---
name: gh-game-hacking-bible-2
description: GHB Part 2 -- intermediate RE guide covering registers, stack frames, calling conventions, IDA Pro, RTTI/ClassInformer, trampoline hooks, and entity-list reverse engineering.
---

# GH Game Hacking Bible Part 2 -- Intermediate Reverse Engineering

## Prerequisite

Complete GHB1 steps 1-11 before starting this guide.
Practice target: Assault Cube (x86, open source, tons of resources).

## Assembly: 10 Instructions Cover 75% of Game Hacking

mov, lea, cmp, test, push, pop, call, ret, jmp/jne/je, xor, add, sub
Learn by stepping through any game function in a debugger line by line.
Label every line with your hypothesis. By the last line, you understand the function.

## Registers

EAX=accumulator, EBX=base index, ECX=counter, EDX=data
EIP=instruction pointer, ESP=stack pointer, EBP=stack base pointer
ESI=source index, EDI=destination index (string ops)

Register size hierarchy (using RAX example):
RAX=64bit, EAX=lower32, AX=lower16, AH=high8 of AX, AL=low8 of AX

## Memory Layout (4 regions)

- Code: initialized at load, read-only static, resolve via relative offset from module base
- Data Segment: initialized at load, values can change
- Heap: "new" keyword, dynamic allocation, created/destroyed on demand
- Stack: function-local storage, last-in/first-out, LIFO

## Stack Frames

Each function has its own stack frame. Stack grows DOWN (higher addr = bottom, lower addr = top).
ESP = top of current stack frame (current position)
EBP = bottom of current stack frame (preserved from caller)

Function prologue (set up frame):
    push ebp        ; save caller's EBP
    mov  ebp, esp   ; EBP now = current ESP (frame base)
    sub  esp, n     ; allocate n bytes for locals

Function epilogue (tear down frame):
    mov  esp, ebp   ; restore ESP
    pop  ebp        ; restore caller's EBP
    ret             ; pop return address into EIP

## Calling Conventions

cdecl: CALLER unwinds stack. Most C functions. Arguments pushed right-to-left.
stdcall: CALLEE unwinds stack. WinAPI. Arguments pushed right-to-left.
thiscall: CALLEE unwinds. "this" pointer in ECX. Used for C++ member functions and vtable calls.
fastcall: First 2 args in ECX and EDX, rest on stack. Callee cleans with pops + ret.

## Relative Address Resolution

E8 = CALL instruction. Operand is relative offset from NEXT instruction, little-endian.
Formula: target = (addr_of_next_instruction) + rel32_operand

Example:
  004B8F65  E8 83220000  call  ...
  Next instr = 004B8F6A
  Operand = 0x00002283 (little-endian of 83 22 00 00)
  Target = 004B8F6A + 2283 = 004BB1ED

## Trampoline Hook (x86)

bool Hook(char* src, char* dst, const intptr_t len) {
    if (len < 5) return false;
    DWORD curProtection;
    VirtualProtect(src, len, PAGE_EXECUTE_READWRITE, &curProtection);
    intptr_t rel = (intptr_t)(dst - src) - 5;
    *src = 0xE9;  // JMP opcode
    *(intptr_t*)(src + 1) = rel;
    VirtualProtect(src, len, curProtection, &curProtection);
    return true;
}

char* TrampHook(char* src, char* dst, const intptr_t len) {
    if (len < 5) return 0;
    void* gateway = VirtualAlloc(0, len+5, MEM_COMMIT|MEM_RESERVE, PAGE_EXECUTE_READWRITE);
    memcpy(gateway, src, len);  // stolen bytes
    intptr_t gatewayRel = ((intptr_t)src - (intptr_t)gateway) - 5;
    *(char*)((intptr_t)gateway + len) = 0xE9;
    *(intptr_t*)((intptr_t)gateway + len + 1) = gatewayRel;
    Hook(src, dst, len);
    return (char*)gateway;
}

## IDA Pro Essential Facts

Free version: disassembler only. Paid version: Hex-Rays decompiler (C pseudocode).
Use version 7.5 or above. Install ClassInformer plugin for RTTI + vtable browsing.
Plugins: Downloads/IDA Plugins - Tuts 4You, xrkk/awesome-ida, onethawt/idaplugins-list

Key features: cross-references (xref), rename variables (propagates everywhere), struct definitions,
IDAPython scripts (automate tasks), function signatures.

## RTTI and ClassInformer

RTTI = Run-Time Type Information. Available only for polymorphic classes (have virtual methods).
ClassInformer IDA plugin: finds, fixes, and lists vftables from RTTI data.
Places struct defs, names, labels on vftable pointers. Lists all C++ classes in a browsable window.
If the game has RTTI compiled in, ClassInformer saves DAYS of manual reversing.

## Finding Entity List (CSGO Pattern)

1. Find health address via Cheat Engine "find what accesses"
2. Remove offset to get base entity object
3. Do "find what accesses" on entity object pointer
4. Look for client.dll + static_offset access -- that is the entity list
5. Verify by comparing local player struct and bot struct in ReClass (same class = same layout)

CSGO entity list: CBaseEntityList struct, entList[64] of clientInfo (each 0x10 bytes)
clientInfo: { ent* entptr; int N; clientInfo* blink; clientInfo* flink; }
Walk entity list: for each entList[i], check entptr != null, read ent->health

## bDormant

m_bDormant (offset 0xE9 in CSGO): server stops sending updates when true.
Always check !bDormant before reading entity position or drawing ESP.
If dormant is true, cached data may be stale.

## Learning Order (GHB2)

1. Assembly registers, calling conventions, stack (this guide)
2. Tutorial: Manually Resolve Relative Addresses
3. IDA Pro Beginner Guide + ClassInformer tutorial
4. CSGO NetVar offset tutorial (IDA)
5. Assault Cube recoil reversal (IDA + ReClass + CE)
6. Fly hack + noclip via MoveEntity function
7. CSGO entity list
8. Call game functions (Traxin videos)