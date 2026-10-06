---
name: threadpool-wait-injection
description: Thread pool wait callback injection -- CreateThreadpoolWait in a remote process to execute shellcode when a wait object is signaled. Avoids CreateRemoteThread for execution.
metadata:
  type: offensive
---

# Thread Pool Wait Injection

Abuse the Windows thread pool API to execute shellcode in a remote process without directly
calling `CreateRemoteThread`. Instead, register a wait callback via `CreateThreadpoolWait`
that points to shellcode, then signal the wait object to trigger execution through the
system's thread pool.

## How Thread Pool Waits Work

```cpp
// Normal usage:
PTP_WAIT wait = CreateThreadpoolWait(WaitCallback, context, &callbackEnviron);
SetThreadpoolWait(wait, hEvent, NULL);  // associate with a waitable object
// When hEvent is signaled → thread pool calls WaitCallback
```

The callback runs on a thread pool worker thread managed by the system. The worker thread
already exists -- no new thread creation is visible.

## Attack Chain

```
1. OpenProcess(target) with PROCESS_ALL_ACCESS
2. VirtualAllocEx -- allocate RW memory in target
3. WriteProcessMemory -- write shellcode (conforming to PTP_WAIT_CALLBACK signature)
4. VirtualProtectEx -- flip to RX
5. In the target process, arrange for CreateThreadpoolWait + SetThreadpoolWait to be called
   with the shellcode address as the callback
6. Signal the wait object → thread pool executes shellcode
```

### The Challenge: Remote Thread Pool Registration

`CreateThreadpoolWait` must be called inside the target process (it registers in the
per-process thread pool). Two approaches:

**Approach A: Small stub via CreateRemoteThread**

```cpp
// Write a stub that:
// 1. Creates an event
// 2. CreateThreadpoolWait(shellcode_addr, NULL, NULL)
// 3. SetThreadpoolWait(wait, event, NULL)
// 4. SetEvent(event)  -- trigger immediately
// 5. Sleep(1000)       -- keep thread alive while callback runs

// This still uses CreateRemoteThread for the stub, but the actual
// payload executes on a pool thread, not the remote thread.
```

**Approach B: NtQueueApcThread to register the wait**

Queue an APC that calls the registration stub, avoiding `CreateRemoteThread` entirely.
Requires an alertable thread in the target (or Early Bird).

**Approach C: Hijack existing timer/wait**

If the target process already has thread pool waits registered, overwrite the callback
pointer in the `TP_WAIT` structure in memory. Requires reversing the internal structure.

### Reference: TP_WAIT Internal Structure (Undocumented)

```cpp
// Reverse-engineered from ntdll!TppWaitpCallbackFinish
// Offsets may vary by Windows version
struct TP_WAIT {
    TP_CALLBACK_ENVIRON_V3 CallbackEnviron;    // +0x00
    PTP_WAIT_CALLBACK      Callback;            // +0x58 (x64) -- THIS IS THE TARGET
    PVOID                  Context;             // +0x60
    HANDLE                 WaitObject;          // +0x68
    // ... more fields
};
```

Overwriting `Callback` at offset +0x58 redirects execution without any new registration.

## Shellcode Signature

The shellcode must match the `PTP_WAIT_CALLBACK` prototype:

```cpp
VOID CALLBACK WaitCallback(
    PTP_CALLBACK_INSTANCE Instance,   // rcx
    PVOID                 Context,    // rdx
    PTP_WAIT              Wait,       // r8
    TP_WAIT_RESULT        WaitResult  // r9
) {
    // payload
}
```

## Extended: Other Thread Pool Injection Variants

| API                       | Callback type           | Trigger                    |
|---------------------------|-------------------------|----------------------------|
| `CreateThreadpoolWait`    | Wait signaled           | `SetEvent` on wait object  |
| `CreateThreadpoolTimer`   | Timer expires           | `SetThreadpoolTimer` fire  |
| `CreateThreadpoolWork`    | Submitted               | `SubmitThreadpoolWork`     |
| `CreateThreadpoolIo`      | I/O completion          | Overlapped I/O completes   |
| `TrySubmitThreadpoolCallback` | Immediate          | Direct submission          |

All follow the same pattern: allocate shellcode, register it as a callback, trigger.
`CreateThreadpoolWork` + `SubmitThreadpoolWork` is the simplest (fires immediately without
needing a signal object).

## Advantages Over CreateRemoteThread

- Execution happens on an existing pool thread -- no `CreateRemoteThread` event
- Thread pool threads are legitimate system threads -- harder to distinguish from normal work
- Multiple trigger mechanisms (timer, wait, I/O completion, direct submit)
- Some EDRs don't monitor `CreateThreadpoolWait` cross-process as thoroughly

## Detection

- The registration stub still requires code injection (alloc + write + some execution trigger)
- `MEM_PRIVATE | PAGE_EXECUTE_*` regions in the target containing shellcode
- Unusual thread pool callback addresses (not in any loaded module's address range)
- ETW `Microsoft-Windows-Kernel-Process` thread start events from pool worker threads
  with anomalous start routines
- Monitor `TppWorkerThread` call stacks for unbacked return addresses

## Related Skills

- `apc-injection-detection` -- alternative injection, similar detection surface
- `early-bird-apc-ppid-spoof` -- APC-based injection for comparison
- `windows-process-injection-memory` -- umbrella reference
