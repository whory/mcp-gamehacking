---
name: static-runtime-evidence
description: "Discipline for separating **static inference** (disassembly, decompilation, diffing, symbolic reachability) from **runtime evidence** (breakpoints, traces, hooks, observed calls) and labeling **protec"
metadata:
  type: game-security
  source: awesome-game-security/wiki
  topics: [reverse-engineering, anti-cheat]
---


# Static–Runtime Evidence

Discipline for separating **static inference** (disassembly, decompilation, diffing, symbolic reachability) from **runtime evidence** (breakpoints, traces, hooks, observed calls) and labeling **protection-induced uncertainty** before drawing security conclusions. Pair with [[binary-evidence]] for question classification and [[research-rigor]] when README tool claims are generalized.

## Baseline before interpretation

| Dimension | Why it matters |
|-----------|----------------|
| Artifact hash and provenance | Same filename ≠ same build; diff and offset claims require matched inputs |
| Format and architecture | PE/ELF/Mach-O, bitness, and ABI change calling conventions and layout |
| Tool and analysis configuration | Disassembler version, scripts, and decompiler settings alter recovered structure |
| Environment | OS build, integrity level, debugger presence, and VM/sandbox state affect anti-analysis paths |
| Observed addresses | File offset, RVA, and runtime VA must stay distinct—including relocation assumptions |

Record these fields on every report. A static graph or decompiled function is not proof the path executes under the tested environment.

## Static vs runtime findings

| Evidence kind | Typical sources | Limit to state |
|---------------|-------------------|----------------|
| Static structure | Imports, strings, CFG, decompiler output, diff matches | Reachable or present in image ≠ invoked or security-relevant at runtime |
| Runtime observation | Breakpoint hit, trace, hook callback, memory snapshot | Coverage may be partial; instrumentation can alter timing and behavior |
| Protection interaction | Packer stub, VM handler, anti-debug branch | Recovered logic may be incomplete; label uncertainty explicitly |

Decompiler output is a **reconstruction**—validate types, names, prototypes, and boundaries against instructions and ABI constraints before treating pseudocode as ground truth.

## Protection-induced uncertainty

Packing, virtualization, control-flow obfuscation, and anti-analysis checks change what static and dynamic tools can observe:

- Unpack/devirt stages may leave handler gaps or synthetic control flow.
- Anti-debug and environment checks can gate code behind conditions not met in the lab.
- Timing, integrity scans, and self-modifying regions can invalidate naive trace interpretation.

State which protections were identified, which recovery steps were applied, and which paths remain unexecuted or unrecovered. Obfuscation or anti-analysis behavior alone does not establish maliciousness or bypass feasibility—pair with [[binary-evidence]] question tables and corroboration rules.

## Reference-trace validation

Static recompilation projects such as [[jsrf-recomp]] (OG Xbox XBE→native macOS ARM64 via xboxrecomp) pair translated C output with an extensive diagnostics harness that validates behavior against reference emulator traces—illustrating how static translation claims should be corroborated with runtime or trace-aligned evidence before treating recompiled builds as faithful. [[saturnkit]] (vs-sr-dev; Python SH-2 analysis + static recomp to C++ with a C++20 Saturn hardware runtime for native PC ports) splits the same static/runtime boundary across analysis tooling and an embedded per-title port submodule model.

## Behavioral capability from TTD traces

Full-process **Time Travel Debugging (TTD)** recordings capture executed API calls and unpacked/runtime-generated code paths that static PE analysis may miss. [[ttd-capa-cpp]] replays `.run` traces through the TTD SDK, decodes Win32/native call arguments, and matches observed behavior against capa rules—including optional code-region scanning and capability timelines—so analysts can label **observed calls** vs static import/reachability claims.

## Related

[[binary-evidence]] · [[binary-diffing]] · [[dynamic-binary-instrumentation]] · [[jsrf-recomp]] · [[saturnkit]] · [[ttd-capa-cpp]] · [[mixed-boolean-arithmetic]] · [[control-flow-flattening]] · [[research-rigor]] · [[overviews/reverse-engineering]] · [[overviews/windows-kernel]] · [[overviews/game-engine]]
