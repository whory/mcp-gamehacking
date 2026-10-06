---
name: windows-process-internals
description: Windows process fundamentals and critical system processes -- EPROCESS, PEB, threads, handles; csrss, lsass, smss, dnscache roles for RE / anti-cheat / cheat-detection analysis.
---

# Windows Process Internals

## What a Process Is

A process is a running instance of a program. The kernel tracks it via the `EPROCESS` structure and
exposes a user-mode mirror via the `PEB` (Process Environment Block). Every process owns:

- Its own **virtual address space** (isolated from siblings).
- One or more **threads**, each with its own stack and register state.
- A **handle table** (files, events, mutexes, section objects).
- A **security context** -- an access token with user SID, groups, privileges.
- An **image** -- the `.exe` mapped from disk at a chosen base.

## Key Structures

| Structure        | Mode   | Contents                                                        |
|------------------|--------|-----------------------------------------------------------------|
| `EPROCESS`       | Kernel | PID, parent, token, VAD tree, handle table, thread list         |
| `KPROCESS`       | Kernel | Scheduler state (embedded at EPROCESS+0x00)                     |
| `PEB`            | User   | Loader data, image base, environment, process parameters        |
| `PEB_LDR_DATA`   | User   | Three doubly-linked lists of `LDR_DATA_TABLE_ENTRY` (InLoadOrder, InMemoryOrder, InInitializationOrder) |
| `TEB`            | User   | Per-thread: TLS slots, stack base/limit, last-error             |
| `TOKEN`          | Kernel | SID, groups, privileges, integrity level                        |

PEB offset in a 64-bit thread: `GS:[0x60]` (TEB → PEB).
`PEB->Ldr->InLoadOrderModuleList` is the classic DLL enumeration path.

## Thread vs Process

- Process owns resources. Thread executes code.
- Minimum one thread (the initial one, created by the loader).
- Threads share VA, handles, and token; each gets its own stack + context + TLS.

## Critical System Processes

### smss.exe -- Session Manager

First user-mode process (PID typically 4-digit low number).
Launches `csrss.exe` and `winlogon.exe` per session, mounts persistent dos devices, runs autochk.
Killing it = BSOD.

### csrss.exe -- Client/Server Runtime Subsystem

User-mode partner of the Win32 subsystem. One instance per session.
- Manages **console windows** (cmd.exe, PowerShell console I/O).
- Participates in thread lifetime management.
- Legacy (pre-Vista): created every user process -- now handled by `kernel32!CreateProcessInternal`.
- Modern: still arbitrates GUI subsystem message passing for console-mode apps.

Internal structures hold **live records of running `.exe` images and loaded `.dll` modules**
(path, handle, PID, module base). Can be queried from kernel-mode or privileged user-mode for:
- Path parsing (normalize, strip casing).
- Regex / pattern matching against known-bad module names.
- Cheat / injected-DLL detection in anti-cheat screenshare tooling (see `vgk-screenshare-pc-check`).

Access: requires either a **kernel driver with cross-process read** or a **user-mode exploit with
`SeDebugPrivilege` + PPL bypass**, since csrss runs as a protected system process.

### lsass.exe -- Local Security Authority Subsystem Service

Owns authentication and credential storage:
- Verifies passwords (NTLM, Kerberos, biometric providers).
- Issues **access tokens** on successful logon.
- Enforces password policy, lockout thresholds, SID generation.
- Houses the Kerberos KDC client, cached domain creds, LSA secrets.
- Classic target for `mimikatz` credential dumping -- modern defense: **LSA Protection (RunAsPPL)** +
  **Credential Guard (VBS-isolated LSAIso)**.

Terminating lsass forces an immediate reboot.

### dnscache -- DNS Client Service

Runs inside `svchost.exe -k NetworkService`. Responsibilities:
- Caches `A`, `AAAA`, `CNAME`, `MX`, `TXT` responses.
- Local resolver that intercepts `gethostbyname` / `GetAddrInfoW` before touching the wire.
- Integrates with LLMNR, NetBIOS name resolution, HOSTS file.
- Reduces latency; keeps apps working briefly when the external DNS is unreachable.

Low privilege (`LocalService`) but network-facing -- common target for DNS cache poisoning.

### Full "always-on" system process set (quick reference)

```
System (PID 4)       -- kernel threads
smss.exe             -- session manager
csrss.exe            -- Win32 user-mode subsystem (one per session)
wininit.exe          -- session-0 bootstrap
services.exe         -- SCM
lsass.exe            -- auth
svchost.exe          -- generic service host (many instances, grouped by -k)
winlogon.exe         -- interactive session logon
```

## Why This Matters for RE / Anti-Cheat

- Enumerating `PEB->Ldr` finds loaded DLLs **in the current process**.
- Enumerating csrss's internal `CSR_PROCESS` + `CSR_THREAD` lists finds **every process on the box**
  and their module paths -- the foundation of modern screenshare / PC-check cheat detection.
- Access tokens issued by lsass carry the SID set that drives every object-manager ACL check;
  stealing or forging a token (via NtDuplicateToken) impersonates another user.
- dnscache is where you'd intercept to redirect C2 or spoof update servers for bypasses.
