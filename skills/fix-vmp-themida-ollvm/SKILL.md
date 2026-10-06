---
name: fix-vmp-themida-ollvm
description: Deobfuscation and unpacking tools for VMProtect, Themida/WinLicense, and OLLVM -- devirtualizers, unpackers, IAT fixers, and control flow deflatteners.
metadata:
  type: reference
  source: awesome-game-security/README
  topics: [vmprotect, themida, ollvm, devirtualization, unpacking, deobfuscation, control-flow-flattening]
---

# Fix VMP / Themida / OLLVM

Tools and techniques for reversing code protected by the three most common
commercial/open-source obfuscation systems in game anti-cheat.

Related: [[control-flow-flattening]], [[mixed-boolean-arithmetic]], [[obfus-h-cpp-obfuscation]]

---

## VMProtect

VM-based protection: x86/x64 code is lifted into a custom bytecode VM.
Devirtualization recovers the original instruction stream.

### Devirtualizers

| Tool | Approach |
|------|----------|
| can1357/NoVmp | Static x64 devirtualizer via VTIL (VMP 3.x) |
| wallds/NoVmpy | Python VMProtect devirtualizer |
| sexyiam/VMPLift | Emulation-first handler walker/lifter (VMP 3.8-3.10+) |
| JonathanSalwan/VMProtect-devirtualization | Symbolic execution + LLVM recovery |
| fare9/dragons-vs-vms | Lab: all 256 handler slots classified, LLVM IR recovery |
| archercreat/titan | VMProtect analysis framework |
| NaC-L/Mergen | VMProtect analysis |
| fjqisba/VmpHelper | IDA plugin for VMP analysis |
| xtremegamer1/vmdevirt-vtil | VTIL-based devirtualizer |

### Unpackers

| Tool | Type |
|------|------|
| oureveryday/VMPUnpacker | Generic unpacker |
| notsnakesilent/VMPStatic | Static unpacker (VMP 1.x-3.x) |
| milk-analyzer/vmpunpack | x64 unpacker via sogen emulation to OEP |
| Lucyferek-nunu/vmp-unpacker | C++ dynamic unpacker with anti-debug bypass |
| whoamicrash/VMProtectDumper | Memory dumper with OEP/IAT recovery |

### .NET Specific

| Tool | What |
|------|------|
| void-stack/VMUnprotect.Dumper | Dynamically untamper VMP .NET assemblies |
| void-stack/VMUnprotect | Log/manipulate VMP-virtualized .NET methods via Harmony |

### Import Fixers

| Tool | Notes |
|------|-------|
| mike1k/VMPImportFixer | Resolves VMP 3.x import protection via emulation (x86/x64) |

### Android/Mobile

| Tool | Notes |
|------|-------|
| tomhamidi97/vmp-devirtualization-lab | Android native-library VMP internals |
| tomhamidi97/frida-vmp-bypass | Frida boundary-hook for stacked VMP+OLLVM on Android |

---

## Themida / WinLicense

Oreans Technology. Combines VM protection (Code Virtualizer engine) with
anti-debug, anti-dump, import protection.

### Unpackers

| Tool | Approach |
|------|----------|
| ergrelet/unlicense | Dynamic unpacker + import fixer (2.x and 3.x) |
| Hendi48/Magicmida | Auto-unpacker with dump and section restore |
| guoxing2024/magicmida-rs | Rust reimplementation of Magicmida |
| bobalkkagi/bobalkkagi | Themida 3.x via API-hook emulation |
| DimaReverse/nuitka-themida-unpacker | Chains Themida unpack with Nuitka extraction |

### Deobfuscation

| Tool | Approach |
|------|----------|
| ergrelet/themida-unmutate | Code unmutation |
| sodareverse/TDE | Themida deobfuscation engine |
| Marisa-Chan/GhidrOrean | Ghidra Oreans VM (CISC/TIGER/RISC/FISH) devirtualizer |
| stuxnet147/Themida-Research | Themida 3.x research notes |

---

## OLLVM (Obfuscator-LLVM)

Open-source LLVM-based obfuscation. Three main passes:
- **FLA** -- Control Flow Flattening (switch-dispatch loop)
- **BCF** -- Bogus Control Flow (opaque predicates)
- **SUB** -- Instruction Substitution

### Deflatteners

| Tool | Platform |
|------|----------|
| cdong1012/ollvm-unflattener | Generic CFF unflattener |
| JbvrgtonYT/ollvm-unflattener | Fork |
| guheng-re/unflat | Alternative unflattener |
| IIIImmmyyy/AntiOllvm | Anti-OLLVM FLA with fake runtime |

### Deobfuscation Frameworks

| Tool | Approach |
|------|----------|
| w00tzenheimer/d810-ng | D-810 Next Gen: deobfuscate at IDA decompile time |
| obpo-project/obpo-plugin | OLLVM deobfuscation IDA plugin |
| R7flex/dll-ollvm | LLVM 18 pass plugin (sub/bcf/fla) for mapped DLLs |

### Game-Specific

| Tool | Target |
|------|--------|
| Mrack/DeObfBR | libtprt.so (Tencent) |
| zhuzhu-Top/deobf | libtprt.so (Tencent) |

---

## General Workflow

```
1. Identify protection:
   - VMP: look for .vmp0/.vmp1 sections, VM entry stub
   - Themida: look for .themida/.winlicense sections
   - OLLVM: flattened CFG in IDA/Ghidra, switch-dispatch pattern

2. Unpack outer layer:
   - Dynamic: run to OEP, dump, fix IAT
   - Static: use dedicated unpacker

3. Devirtualize / deobfuscate inner layer:
   - VMP: NoVmp/VMPLift for VM handlers
   - Themida: GhidrOrean for Oreans VM
   - OLLVM: d810-ng or manual deflattening

4. Reconstruct:
   - Fix imports (VMPImportFixer)
   - Rebuild PE sections
   - Rebase if needed
```
