---
name: hidden-process-detection
description: Detect hidden processes via PID gap analysis, DKOM unlink detection, API hook scanning (E9/FF25 patterns), Levenshtein name similarity, and artifact-vs-live PID cross-reference.
metadata:
  type: detection
---

# Hidden Process Detection

Rootkits hide processes from user-mode enumeration by unlinking them from the kernel's
`ActiveProcessLinks` doubly-linked list (DKOM -- Direct Kernel Object Manipulation) or by
hooking the APIs that enumerate processes. This skill covers detection from both user-mode
and kernel-mode perspectives.

## DKOM: How Processes Hide

The kernel maintains a circular doubly-linked list through `EPROCESS.ActiveProcessLinks`.
Every `NtQuerySystemInformation(SystemProcessInformation)` call walks this list. A rootkit
that unlinks an `EPROCESS` node makes the process invisible to Task Manager, Process Explorer,
and every user-mode tool that uses the same API.

```
Before DKOM:
  System ↔ smss ↔ csrss ↔ malware.exe ↔ explorer ↔ ...

After DKOM (unlink malware.exe):
  System ↔ smss ↔ csrss ↔ explorer ↔ ...
  malware.exe still runs (scheduler uses a different list) but is invisible to enumeration.
```

The process still runs because the Windows scheduler uses `KiProcessListHead` / per-processor
ready queues, not `ActiveProcessLinks`.

## Detection Techniques

### 1. PID Gap Analysis

Windows allocates PIDs in multiples of 4, generally incrementing. Enumerate all visible PIDs
and look for suspicious gaps:

```
Visible PIDs: 4, 88, 92, 396, 404, 520, 2048, 2052, 2060, ...

Gap analysis:
  2052 → 2060: gap of 8 (2 missing slots: 2054, 2058 -- but PID 2056 skipped)
  Normal gaps exist, but a gap where OpenProcess(pid) SUCCEEDS for a non-listed PID
  is a confirmed hidden process.
```

Brute-force PID scan:

```cpp
for (DWORD pid = 4; pid < 65536; pid += 4) {
    HANDLE h = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, FALSE, pid);
    if (h) {
        if (!is_in_enumerated_list(pid))
            alert("Hidden process: PID %d", pid);
        CloseHandle(h);
    }
}
```

This catches DKOM-hidden processes because `OpenProcess` uses `PsLookupProcessByProcessId`
which searches the PID table (handle table), not `ActiveProcessLinks`.

### 2. API Hook Scanning

Rootkits that hook `NtQuerySystemInformation` in ntdll filter results in user-mode rather
than unlinking in kernel. Detect these hooks:

```cpp
// Read first 16 bytes of ntdll!NtQuerySystemInformation
uint8_t* fn = (uint8_t*)GetProcAddress(GetModuleHandle("ntdll"), "NtQuerySystemInformation");

// Check for inline hook signatures:
if (fn[0] == 0xE9)                    // near jmp rel32
    alert("Inline hook (E9 jmp) on NtQuerySystemInformation");
if (fn[0] == 0xFF && fn[1] == 0x25)   // jmp [rip+disp32] (x64)
    alert("Inline hook (FF 25 jmp) on NtQuerySystemInformation");
if (fn[0] == 0x68)                    // push imm32 (x86 hook pattern)
    alert("Push-ret hook on NtQuerySystemInformation");

// Compare against clean copy from disk:
// Map a fresh ntdll.dll from C:\Windows\System32\ntdll.dll
// Byte-compare the .text section -- any mismatch = hook
```

Also check: `NtQuerySystemInformation`, `NtQueryInformationProcess`,
`NtOpenProcess`, `EnumProcesses`, `CreateToolhelp32Snapshot`.

### 3. Cross-Source Enumeration

Compare process lists from multiple independent sources:

| Source                        | API / Method                              | Hookable?   |
|-------------------------------|-------------------------------------------|-------------|
| `CreateToolhelp32Snapshot`    | Walks `ActiveProcessLinks`                | Yes (DKOM)  |
| `EnumProcesses` (psapi)      | Walks `ActiveProcessLinks`                | Yes (DKOM)  |
| `WMI Win32_Process`          | Uses `NtQuerySystemInformation`           | Yes         |
| `NtQuerySystemInformation`   | Direct syscall (bypass hooks)             | No (direct) |
| Handle table brute-force     | `OpenProcess` PID scan                    | Harder      |
| CSR process table            | `CsrGetProcessId` / csrss internal list   | Kernel only |
| ETW Process provider         | Kernel callback-based                     | Kernel only |
| `/proc` equivalent (WMI CIM) | Different code path                       | Partially   |

Mismatch between any two sources = hidden process or hook.

### 4. Levenshtein Name Similarity

Malware frequently masquerades as legitimate processes with near-identical names:

```
svchost.exe  vs  svch0st.exe   (Levenshtein distance = 1)
csrss.exe    vs  cssrs.exe     (distance = 2, transposition)
explorer.exe vs  exp1orer.exe  (distance = 1)
lsass.exe    vs  1sass.exe     (distance = 1)
```

For every running process, compute Levenshtein distance against the known system process list.
Distance <= 2 with a non-matching full path → masquerade attempt.

```cpp
int levenshtein(const wchar_t* s, const wchar_t* t) {
    int n = wcslen(s), m = wcslen(t);
    std::vector<int> prev(m+1), curr(m+1);
    std::iota(prev.begin(), prev.end(), 0);
    for (int i = 1; i <= n; ++i) {
        curr[0] = i;
        for (int j = 1; j <= m; ++j)
            curr[j] = std::min({prev[j]+1, curr[j-1]+1,
                                prev[j-1] + (s[i-1] != t[j-1])});
        std::swap(prev, curr);
    }
    return prev[m];
}
```

System process reference list with expected paths:

```
csrss.exe       → C:\Windows\System32\csrss.exe
lsass.exe       → C:\Windows\System32\lsass.exe
services.exe    → C:\Windows\System32\services.exe
svchost.exe     → C:\Windows\System32\svchost.exe
explorer.exe    → C:\Windows\explorer.exe
smss.exe        → C:\Windows\System32\smss.exe
wininit.exe     → C:\Windows\System32\wininit.exe
winlogon.exe    → C:\Windows\System32\winlogon.exe
```

### 5. Artifact-vs-Live Cross-Reference

Compare currently running processes against forensic artifacts that record historical execution:

- **Prefetch**: `C:\Windows\Prefetch\*.pf` -- if a prefetch file exists for a binary that
  doesn't appear in the live process list but whose `.pf` modification time is recent, it may
  be DKOM-hidden.
- **Amcache**: `C:\Windows\appcompat\Programs\Amcache.hve` -- execution records.
- **ShimCache**: Registry `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatCache`
  -- records last-modified timestamps of executed binaries.
- **USN Journal**: Recent file operations on executables that aren't in the process list.

## Kernel-Mode Detection

From a kernel driver, the most reliable approach:

```cpp
// Walk the handle table directly (PspCidTable)
// This is the PID→EPROCESS mapping used by PsLookupProcessByProcessId.
// A process unlinked from ActiveProcessLinks is still in this table.
//
// ExEnumHandleTable(PspCidTable, callback, context)
// In callback: if object type == PsProcessType, it's a process.
// Compare against ActiveProcessLinks walk -- mismatch = hidden.
```

Alternative: walk the scheduler's ready queues (`KiProcessorBlock` →
`KPRCB.ReadySummary` → `KPRCB.DispatcherReadyListHead[priority]`).
Thread objects in the ready queue reference their owning `EPROCESS`, catching
even processes unlinked from both `ActiveProcessLinks` and the handle table.

## Related Skills

- `process-hollowing-detection` -- different evasion, overlapping detection
- `stack-shellcode-detection` -- catches injected code in hidden process threads
- `yara-pe-artifact-scanner` -- memory scanning for known malware signatures
