---
name: etw-threat-intelligence
description: "Event Tracing for Windows (ETW) provider/consumer architecture used by EDR and anti-cheat for kernel and user-mode telemetry. The **Microsoft-Windows-Threat-Intelligence** provider is the PPL-gated la"
metadata:
  type: game-security
  source: awesome-game-security/wiki
  topics: [windows-kernel, anti-cheat]
---


# ETW Threat Intelligence

Event Tracing for Windows (ETW) provider/consumer architecture used by EDR and anti-cheat for kernel and user-mode telemetry. The **Microsoft-Windows-Threat-Intelligence** provider is the PPL-gated lane for detecting cross-process memory access to protected games and security software.

## Architecture

- **Providers** emit events (manifest-based, TraceLogging self-describing, or legacy MOF/WMI).
- **Consumers** subscribe in real time (ETW sessions) or from `.etl` log files.
- **Controllers** manage sessions (`xperf`, `tracelog`, `logman`).

Key kernel providers include process/thread lifecycle, file I/O, and audit-API call streams. Schema exploration tools such as [[etw-explorer]] help map manifest fields before writing detectors. Live debug-string capture tools such as [[dbgprint]] subscribe via ETW to `OutputDebugString` and kernel `DbgPrint`/`DbgPrintEx` without custom drivers — useful when correlating driver IOCTL traces or AC telemetry with application debug output during kernel RE.

Consumer-side **stack trace** fields can expose **kernel pointers** when providers emit call stacks — PoCs such as [[etwleakkernel]] start an ETW session, request provider stack data, and parse events to recover addresses for KASLR-bypass and exploit-development research.

## Threat Intelligence provider

- Provider name: `Microsoft-Windows-Threat-Intelligence`
- Availability: Protected Process Light (PPL) and above
- Lab PPL spawn tooling such as [[createprocessasppl]] (2x7EQ13; C++ CLI; WinTCB/Windows/Antimalware/LSA launch modes; synthetic protected targets for cross-process telemetry and tooling compatibility tests)
- Typical events: `NtReadVirtualMemory`, `NtWriteVirtualMemory`, `NtMapViewOfSection` targeting protected processes
- Defensive consumers: [[tietwagent]] (krabsetw/Yara; ELAM/PPL agent lane)
- Research consumers without driver/PPL: [[threat-intelligence-consumer]] (Win11 24H2/25H2)
- Syscall-return instrumentation samples such as [[etwti-syscall-hook]] extend the same TI / Instrumentation Callback research surface.
- User-mode EtwTi syscall monitors such as [[etw-syscall-monitor]] log SSNs, parameters, process/thread context, and stack traces in real time without kernel hooks or drivers — a syscall-behavioral detection reference for AC/EDR research.
- Offensive ETW infrastructure manipulation for syscall interception — the original [[infinityhook]] library patches the ETW syscall trace callback pointer for transparent interception without SSDT or `ntoskrnl` inline hooks, operating through a legitimate ETW path that avoids typical PatchGuard triggers. C++ wrappers such as [[etwhook-infinityhookclass]] package the same technique for reuse. Successors such as [[infinityhook-promax]] extend the lineage with driver-oriented hook management, instruction disassembly, and multi-version Windows compatibility for kernel security and AC monitoring research. [[infinityhook-latest]] (Oxygen1a1) adapts the same InfinityHook-style ETW syscall interception to newer builds via HalPrivateDispatchTable callbacks and PMC/trace configuration without direct `Nt*` patches. [[infinityhook-pro]] (FiYHer) modernizes InfinityHook kernel hooking across Win7–Win11 with version-specific offset maintenance and heavily commented low-level internals for AC and EDR reverse engineering research. [[infinityhookpro-main]] (DearXiaoGui) extends the same InfinityHook lineage with physical-machine support, ETW/CKCL syscall interception, SSDT context handling, and kernel pattern-scanning helpers for callback-based dispatch monitoring on Win7–Win11.

## Common bypass patterns

Attackers with sufficient privilege may attempt to blind TI telemetry:

| Target | Effect |
|--------|--------|
| `EtwEventWrite` in `ntdll.dll` | User-mode ETW silencing |
| AMSI scan branch logic + ETW trace short-circuit | Minimal in-memory byte patches blind script/content scanning and telemetry (see [[amsi-etw-patch]]) |
| `nt!EtwpEventWriteFull` | Kernel-mode ETW silencing |
| `EtwThreatIntProvRegHandle` / registration list walks | Remove or redirect provider registration |
| `NtSetInformationThread(ThreadHideFromDebugger)` | Hide thread from some ETW consumers |

Stress-testing samples such as [[disable-threat-tracing]] sit on the disable/blind side of this lane. Minimal AMSI + ETW byte-patch PoCs such as [[amsi-etw-patch]] (Mr-Un1k0d3r; C/PowerShell/C#; branch patches in AMSI paths + telemetry short-circuit; red-team / defensive in-memory tampering detection validation) document the same user-mode blind surface from the offensive side. Kernel-memory ETW-TI provider state toggling such as [[kernel-callback-removal]] (V-i-x-x; C++; locate kernel structures/offsets and patch enable flags via an existing R/W primitive; WinDbg/IDA RE notes; educational EDR bypass research) documents the same registration/enable-flag blind surface from the offensive side.

## Defensive countermeasures

- **EPT-based protection:** hypervisor second-stage permissions can trap unauthorized writes to ETW globals and registration structures — guest kernel R/W alone cannot silently patch them when policy remains trustworthy. See [[hvci]] / hypervisor defense in [[overviews/windows-kernel]].
- **Registration tamper monitors:** real-time EtwTi callback registration fluctuation detectors such as [[etwti-fluctuation-monitor]] alert when provider registrations are removed or patched — the defensive counterpart to registration-walk bypasses.
- **Kernel-vs-ETW correlation:** ETW process monitors such as [[eyyoetwwhereyouat]] (0xjbb; kernel driver + krabs user-mode engine; thread/image/memory events; correlate kernel notifications with missing ETW output to detect ETW patching; injection/hollowing heuristics) expose blinded telemetry when callbacks fire but expected provider events never arrive.
- **Cross-checks:** combine TI ETW with [[kernel-callbacks]], handle stripping, and [[kernel-pool-scanning]] for layered detection.

## Related

[[kernel-callbacks]] · [[hvci]] · [[dbgprint]] · [[etw-explorer]] · [[etw-watcher]] · [[etwleakkernel]] · [[etwti-fluctuation-monitor]] · [[eyyoetwwhereyouat]] · [[etw-syscall-monitor]] · [[etw-syscall]] · [[infinityhook]] · [[etwhook-infinityhookclass]] · [[infinityhook-promax]] · [[infinityhook-latest]] · [[infinityhook-pro]] · [[infinityhookpro-main]] · [[tietwagent]] · [[threat-intelligence-consumer]] · [[etwti-syscall-hook]] · [[disable-threat-tracing]] · [[amsi-etw-patch]] · [[kernel-callback-removal]] · [[createprocessasppl]] · [[overviews/windows-kernel]] · [[overviews/anti-cheat]]
