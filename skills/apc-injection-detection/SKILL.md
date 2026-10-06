---
name: apc-injection-detection
description: Detect APC-based process injection by scanning for the alloc/write/queue API chain, memory string artifacts, and cross-referencing Amcache/UserAssist/ShimCache for corroborating evidence.
metadata:
  type: detection
---

# APC Injection Detection

APC (Asynchronous Procedure Call) injection queues a user-mode callback into a remote thread via
`QueueUserAPC`. The thread executes the callback next time it enters an alertable wait
(`SleepEx`, `WaitForSingleObjectEx`, `NtTestAlert`). Unlike `CreateRemoteThread`, no new thread
is created -- the payload runs inside an existing thread's context.

## Attack Pattern

```
1. OpenProcess(target)
2. VirtualAllocEx(MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE)
3. WriteProcessMemory(shellcode)
4. VirtualProtectEx(PAGE_EXECUTE_READ)        -- or skip, leave RWX
5. OpenThread / enumerate threads of target
6. QueueUserAPC(alloc_addr, hThread, 0)
7. Wait for thread to enter alertable state    -- or CREATE_SUSPENDED + ResumeThread
```

Variant: **Early Bird** (see `early-bird-apc-ppid-spoof`) queues APC on the initial thread of a
suspended child process before it executes any user code.

## Detection Approach

### 1. Import Chain Analysis

Scan loaded modules and process memory for the characteristic API call sequence:

| Stage      | APIs                                                    |
|------------|---------------------------------------------------------|
| Allocate   | `VirtualAllocEx`, `NtAllocateVirtualMemory`             |
| Write      | `WriteProcessMemory`, `NtWriteVirtualMemory`            |
| Queue      | `QueueUserAPC`, `NtQueueApcThread`, `NtQueueApcThreadEx`|
| Trigger    | `ResumeThread`, `NtAlertThread`, `NtTestAlert`          |

A process importing or dynamically resolving >= 3 of the 4 stages is suspicious. Weight increases
if the target PID differs from the caller's PID (`OpenProcess` with `PROCESS_ALL_ACCESS`).

### 2. Memory Artifact Scan

After injection, artifacts persist in the target process:

```
- MEM_PRIVATE regions with PAGE_EXECUTE_* protection (shellcode landing zone)
- Strings: "VirtualAllocEx", "QueueUserAPC", "NtQueueApcThread" in process memory
  (from the injector if it hasn't cleaned up, or from a reflective stub)
- PE headers (MZ/PE signature) inside MEM_PRIVATE regions (injected DLL)
- Entropy > 7.0 in executable private regions (packed/encrypted payload)
```

### 3. Cross-Reference Corroboration

Correlate live findings with historical execution artifacts:

| Source              | What to check                                            |
|---------------------|----------------------------------------------------------|
| **Amcache**         | `InventoryApplicationFile` entries for unknown binaries  |
| **UserAssist**      | ROT13-encoded execution records for the injector process |
| **ShimCache**       | AppCompatCache entries showing execution timestamps      |
| **Prefetch**        | `.pf` files for the injector binary                      |
| **Sysmon Event 8**  | `CreateRemoteThread` (parallel technique, same actor)    |
| **Sysmon Event 10** | `ProcessAccess` with `PROCESS_ALL_ACCESS` mask           |

A process that appears in Amcache but not in the standard install path, combined with
Sysmon Event 10 showing cross-process access, is high-confidence injection activity.

### 4. Thread APC Queue Inspection

From kernel mode or with a debug handle:

```cpp
// NtQueryInformationThread(ThreadIsIoPending) won't reveal APCs directly.
// Instead: suspend all threads, check if any thread's APC queue contains
// entries pointing to MEM_PRIVATE executable regions.
//
// User-mode approach: StackWalk64 on each thread after APC fires --
// return addresses in unbacked memory indicate injected code.
// See: stack-shellcode-detection
```

## Sysmon Rules for APC Detection

```xml
<RuleGroup groupRelation="and">
  <!-- Process accessing another process with write + execute rights -->
  <ProcessAccess onmatch="include">
    <GrantedAccess condition="is">0x1FFFFF</GrantedAccess>  <!-- PROCESS_ALL_ACCESS -->
  </ProcessAccess>
</RuleGroup>
```

Event ID 10 (`ProcessAccess`) with `GrantedAccess` containing `0x0020` (VM_WRITE) +
`0x0010` (VM_OPERATION) from an untrusted source process is the primary Sysmon signal.

## Evasion vs Detection Matrix

| Evasion technique                              | Detection counter                          |
|------------------------------------------------|--------------------------------------------|
| `NtQueueApcThreadEx` (undocumented)            | Hook `ntdll!NtQueueApcThreadEx` in ETW     |
| Encrypt shellcode, decrypt in APC callback     | Entropy scan + delayed memory re-scan      |
| Use `NtTestAlert` self-injection               | Self-APC still shows unbacked exec memory  |
| Stack string API resolution (no imports)       | Memory string scan catches resolved addrs  |
| Early Bird on suspended child                  | Sysmon Event 1 `CREATE_SUSPENDED` flag     |

## Related Skills

- `early-bird-apc-ppid-spoof` -- offensive PoC using APC on suspended process
- `stack-shellcode-detection` -- thread-stack validation catches post-injection execution
- `process-hollowing-detection` -- different injection vector, overlapping detection surface
- `windows-process-injection-memory` -- umbrella injection reference
