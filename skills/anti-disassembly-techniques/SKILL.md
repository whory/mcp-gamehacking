---
name: anti-disassembly-techniques
description: Classic anti-disassembly tricks -- jump with same target, SEH-based control flow obscuring, call trick (return-address rewrite), opcode obfuscation, linear-sweep desynchronization. For malware analysts recognising the patterns.
---

# Anti-Disassembly Techniques

Disassemblers come in two flavours:
- **Linear sweep** (objdump, Capstone default) -- decode byte-by-byte from entry, trip over any junk.
- **Recursive traversal** (IDA, Ghidra, Binary Ninja) -- follow calls / jumps, misled by fake control flow.

Every technique below targets at least one of those strategies.

## 1. Jump with Same Target

Two conditional jumps pointing at the same label. The result is **unconditional** at runtime,
but a disassembler shows two separate conditional branches and cannot prove the fall-through is dead.

```asm
mov  eax, 0x12345678
jz   loc_512
jnz  loc_512
; fall-through is unreachable -- IDA won't know
```

Equivalent C-level idea:

```c
if (eax == 0) my_function();
if (eax != 0) my_function();   // one of the two always fires → unconditional call
```

Analysts: look for back-to-back `Jcc` + inverse `Jcc` sharing a target.
Combine with junk bytes after the second jump to desynchronise linear sweep.

## 2. Obscuring Control Flow via SEH

Structured Exception Handling creates control-flow edges invisible to static disassembly: the handler
is reached by the OS raising an exception, not by any `jmp`/`call` the disassembler can follow.

```c
__try {
    RaiseException(0x12345678, 0, 0, NULL);
    /* dead-looking fall-through */
} __except (exception_handler(GetExceptionInformation())) {
    /* real logic lives here, reached opaquely */
}
```

The handler is registered via the `SafeSEH` table (x86) or the `.pdata` unwind info (x64).
Disassemblers that don't parse `.pdata` or the SEH chain miss the edge entirely.
IDA shows the handler as a cold island of unreachable code.

Variants:
- VEH (`AddVectoredExceptionHandler`) -- global, resolves at runtime.
- Int-3 / divide-by-zero as the trigger -- single-byte opcode, easy to hide inside junk.

## 3. Call Trick (Return-Address Rewrite)

Overwrite the saved return address on the stack so `ret` jumps somewhere unexpected. The disassembler
follows the fall-through after the `call`, but execution never returns there.

```c
void *orig = __builtin_return_address(0);
*(void**)&orig = (void*)0x123456;   // rewrite return slot
__asm__("nop\nnop\nnop\nnop");       // junk after the call site
```

In asm:

```asm
call  helper
db  0E8h, 0, 0, 0, 0    ; junk that looks like 'call rel32' to a sweep
...
helper:
    pop  rax
    add  rax, 5           ; skip the 5 junk bytes
    push rax
    ret
```

Linear sweep decodes the junk `0E8 00 00 00 00` as a real `call`, follows it, and loses alignment on
every real instruction after.

## 4. Opcode Obfuscation

Replace instructions with semantically equivalent but less obvious encodings:

| Clear          | Obfuscated                                   |
|----------------|----------------------------------------------|
| `xor eax, eax` | `sub eax, eax`, `and eax, 0`, `imul eax, 0`  |
| `nop`          | `xchg eax, eax`, `mov eax, eax`, `lea eax, [eax]` |
| `mov eax, 1`   | `push 1 ; pop eax`                           |
| `jmp label`    | `push label ; ret`                           |
| `call f`       | `push ret_addr ; jmp f`                      |

Also:
- Prefix spam -- `66 66 66 90` (three operand-size overrides on nop) decodes as `data16 data16 data16 nop`,
  looks weird in disassembly but runs as a nop on CPU.
- Rex prefix on a 32-bit op -- `48 90` is `xchg rax, rax` not `nop`.

Combined with code-flow obfuscation and junk bytes it bloats listings into unreadable noise.

## 5. Disassembly Desynchronization

Force the sweep to decode starting one byte off and inherit the wrong offset forever after.

```asm
mov eax, 0x12345678
db  0EBh, 0FFh         ; jmp -1 (back into itself)  -- actually one byte of junk + Jcc entry
mov ebx, 0x87654321
```

Specifically, inject a byte that *looks like* the start of a multi-byte instruction but is actually
followed by data the programmer never intended to execute. Linear sweep swallows the junk as an
instruction, offset drifts, every following "instruction" is garbage until the sweep accidentally
re-aligns -- often many bytes later.

Classic desync patterns:
- `EB FF` (jmp -1) -- IDA decodes as `jmp` into its own prefix byte, falls back on error, re-tries
  one byte further.
- `E8 ??` -- short near call with truncated displacement; recursive traversal follows the "target".
- Encoded jumps around a block of data bytes containing opcode-looking garbage.

## Analyst Workflow

1. Enable IDA's "Analyze source address of indirect code reference" and let auto-analysis run; look
   for red (undefined) regions.
2. Compare linear sweep (`objdump -d`) with recursive traversal (IDA). Regions where they disagree
   are usually desync + junk-byte combos.
3. Use emulation (Qiling, Unicorn) to run a small window and compare actual executed instructions
   against the static listing.
4. Patch out the junk bytes with `nop` + re-analyze (manual re-base of code refs often needed).
5. For SEH / VEH -- enumerate exception handlers via `pdata` or runtime walks (`SEH3Parser`,
   `.pdata` unwind decoder in IDA 7+).

## Combining Techniques

Modern packers (VMProtect, Themida, Enigma, ConfuserEx) stack all five:
- Virtualize original code into a custom VM bytecode.
- Interleave junk bytes between every real handler.
- Use SEH / VEH as the main dispatch mechanism.
- Encode constants and opcodes via multi-stage XOR + per-run polymorphism.

Static disassembly becomes useless; dynamic analysis (debugger + instrumentation) is the only path.
