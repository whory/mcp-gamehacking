---
name: windows-com-proxy-hijack-lpe
description: Local privilege escalation via COM proxy manifest hijack -- CoFilterPipeline in printfilterpipelinesvc.exe, side-by-side manifest redirect, LOCAL SERVICE + SeImpersonate = effectively admin.
---

# COM Proxy Hijack -- CoFilterPipeline / PrintFilterPipelineSvc

## Technique Summary

Several Microsoft-signed services instantiate out-of-process COM objects whose manifests point at a
side-by-side proxy DLL under a user-writable path. Querying one of the object's interfaces causes the
host service to **load the proxy DLL from disk** -- a path the attacker can plant into.

The side-by-side (SxS) assembly system looks for the proxy by relative path from the service binary's
directory. If that directory or any search-order fallback is writable, the attacker drops a crafted
DLL; the service loads it, invoking `DllMain` under the service's token.

## Target: printfilterpipelinesvc.exe + CoFilterPipeline

Binary: `C:\Windows\System32\printfilterpipelinesvc.exe`.
Service: Print Filter Pipeline Host.
Runs as: `NT AUTHORITY\LOCAL SERVICE`.

Despite the low SID, LOCAL SERVICE has:

- `SeImpersonatePrivilege`
- `SeAssignPrimaryTokenPrivilege`

That pair is sufficient to run the classic "Potato family" token theft chain (RottenPotato, JuicyPotato,
RoguePotato, PrintSpoofer, SharpEfsPotato, GodPotato) and emerge as SYSTEM.
From the attacker's perspective, hijacking printfilterpipelinesvc is **effectively a SYSTEM escalation**.

## Why This Target

Many obvious candidates (common COM classes) are permanently cached in the SxS activation cache
because the system uses them regularly, which blocks re-registration from a user's HKCU. The author
of the public PoC chose `CoFilterPipeline` precisely because:

- It is rarely used, so the SxS cache entry is often absent.
- Its manifest redirect points at a per-service `tasks\hijack\hijack.dll` relative path.
- `printfilterpipelinesvc.exe` is in `System32`, so the SxS loader resolves the redirected proxy
  relative to that directory -- a controlled DLL can land there via auxiliary primitives.

## Public PoC Layout

The published proof of concept ships as:

- A C# driver project that triggers `CoCreateInstance` of the `CoFilterPipeline` class and queries one of
  its interfaces (forces activation into `printfilterpipelinesvc.exe`).
- A C++ DLL built with the exported entrypoint expected by the proxy class.
- A `.manifest` fragment that redirects the proxy to `tasks\hijack\hijack.dll`.

When the service receives the activation, SxS resolves the manifest, loads `hijack.dll`, and `DllMain`
runs in `printfilterpipelinesvc.exe` as `LOCAL SERVICE` with impersonation primitives available.

## Chain to SYSTEM

```
Attacker user context (low priv)
    |
    v  CoCreateInstance(CoFilterPipeline) → QueryInterface
    v
printfilterpipelinesvc.exe (LOCAL SERVICE, SeImpersonatePrivilege)
    |
    v  loads attacker DLL via SxS manifest
    v
hijack.dll DllMain runs as LOCAL SERVICE
    |
    v  Potato-family named-pipe / RPC coercion
    v
Receives SYSTEM impersonation token → CreateProcessWithTokenW
    |
    v
SYSTEM shell
```

## Hunting Hijackable COM Proxies

General pattern:

1. Enumerate `HKLM\Software\Classes\CLSID\*\InprocServer32` and
   `HKLM\Software\Classes\CLSID\*\LocalServer32`. Shortlist out-of-process servers.
2. For each candidate: launch the service, use Process Monitor filtered on `Path contains .manifest`
   and `Result = NAME NOT FOUND`.
3. Any manifest reference the service tries to open but fails to find is a plantable site -- if the
   path is user-writable or the service directory is traversable with write access.
4. Prefer classes that are rarely instantiated (no cache clash), low frequency of use (admin won't
   notice a popped service), and services running as LOCAL SERVICE / NETWORK SERVICE (impersonate →
   SYSTEM via Potato).

## Detection

- Sysmon Event ID 7 (ImageLoad) on `printfilterpipelinesvc.exe` loading a non-`System32`,
  non-Microsoft-signed DLL.
- Alert on unexpected `CoCreateInstance` of print-pipeline classes from non-print user sessions.
- EDR behavioural rule: `LOCAL SERVICE` process opening named-pipe `\\.\pipe\spoolss` /
  `\\.\pipe\lsass` for impersonation -- Potato family tell.
- Attack Surface Reduction `Block credential stealing from the Windows local security authority
  subsystem` (`9e6c4e1f-7d60-472f-ba1a-a39ef669e4b2`) blocks the LSASS access path a Potato uses.

## Mitigations

- Remove `SeImpersonatePrivilege` from service accounts that do not require it (hard to do globally;
  most IIS / COM hosts need it).
- Restrict print spooler and auxiliary print filter services if the host is not a print server --
  stop and disable `Spooler` + `PrintNotify` + `PrintWorkflowUserSvc`.
- Keep LSA Protection (`RunAsPPL = 1`) enabled: closes several Potato variants that read lsass memory.
- Apply the June 2022 KB5014754 and later print spooler hardening patches that tightened manifest
  resolution paths.
- Audit `C:\Windows\System32` for user-writable subdirectories (shouldn't be any; if there are, a
  misconfigured installer added them -- fix the installer).
