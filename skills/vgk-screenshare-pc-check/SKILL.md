---
name: vgk-screenshare-pc-check
description: Screenshare / PC-check forensic artifacts -- Prefetch, Amcache, RecentDocs, Jump Lists, Temp / AppData, Event Log, csrss module scanning. What checkers look at and how deleted cheats leave traces.
---

# Screenshare / PC Check Forensics

## What a Screenshare Is

Admin or moderator takes remote control (AnyDesk / Discord screen share / in-person) to look for
traces of cheats, bypasses, and prohibited software on a suspected player's machine.
Even if the cheat executable was deleted, the OS leaves artifacts of the past execution.
This skill maps every artifact a checker inspects.

## Artifact 1 -- Prefetch

Location: `C:\Windows\Prefetch\*.pf`

Purpose: speed up subsequent launches by preloading pages into standby cache.

Contains per executable:
- Hashed executable name (`NOTEPAD.EXE-32E1CA2A.pf`)
- Last 8 run timestamps (Win10+)
- Run count
- Paths of all files/DLLs touched during the first 10 seconds of execution

Checker uses: `PECmd.exe -d C:\Windows\Prefetch --csv out.csv`.
Even if the exe is deleted, the `.pf` typically remains.

Defender settings that affect it:
- `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters\EnablePrefetcher`
- 0 = disabled, 3 = app + boot (default on SSD-less installs).

Many cheat users wipe `C:\Windows\Prefetch` -- an empty folder on a 6-month-old install is itself suspicious.

## Artifact 2 -- Amcache

Location: `C:\Windows\appcompat\Programs\Amcache.hve` (registry hive).

Contains:
- Full path of every executed PE
- SHA-1 hash of the file
- Compile timestamp
- First-executed / last-modified times
- Publisher / product version metadata

Even uninstalled / deleted programs stay. Parsed with `AmcacheParser.exe`.

## Artifact 3 -- Recent / Jump Lists

- `%AppData%\Microsoft\Windows\Recent\*.lnk` -- recently opened file shortcuts
- `%AppData%\Microsoft\Windows\Recent\AutomaticDestinations\*.automaticDestinations-ms` -- jump lists per app
- `%AppData%\Microsoft\Windows\Recent\CustomDestinations\*.customDestinations-ms`

Parsed with `JLECmd` (jump lists) + `LECmd` (shortcut files).
Shows what files/folders were opened per application -- a `.exe` shortcut in Explorer's jump list
proves it was launched.

## Artifact 4 -- Temp and AppData

Locations:
- `%LOCALAPPDATA%\Temp\`
- `%TEMP%\` (usually same)
- `%APPDATA%\<AppName>\`
- `%LOCALAPPDATA%\<AppName>\`

Even after uninstall, cheats leave:
- Config files (`settings.json`, `.cfg`, `.ini`)
- Logs with timestamps + session data
- Named folders -- `vgclient\`, `phantom\`, `interversal\` etc.
- Dropped payloads before cheat loaded them to memory

## Artifact 5 -- System / Application Event Log

Location: `%SystemRoot%\System32\winevt\Logs\*.evtx`

Relevant channels:
- `Security.evtx` -- 4688 (process creation) if auditing enabled
- `System.evtx` -- 7045 (service install), 7036 (service state)
- `Application.evtx` -- app-reported errors
- `Microsoft-Windows-Sysmon/Operational` if Sysmon installed -- full process + network + registry audit

Parsed with `EvtxECmd.exe` or Event Viewer. Hard to wipe without `Event Log` service kill (noisy).

## Artifact 6 -- UserAssist / BAM / DAM

- `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist\{GUID}\Count` -- GUI-launched programs,
  ROT-13 encoded, with run counts and last-run timestamp.
- `HKLM\SYSTEM\CurrentControlSet\Services\bam\State\UserSettings\{SID}` -- Background Activity Moderator;
  last-execution time of every per-user process.
- `HKLM\SYSTEM\CurrentControlSet\Services\dam\State\UserSettings\{SID}` -- Desktop Activity Moderator.

Checkers specifically open BAM / DAM: it tracks exes even if Prefetch is cleared.

## Artifact 7 -- MUI Cache / ShimCache / AppCompatCache

- `HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell\MuiCache` -- PE launches record file descriptions
- `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatCache\AppCompatCache` (REG_BINARY) --
  stores last 1024 PE paths + mod times (parsed with `AppCompatCacheParser.exe`).
  Updated at **shutdown only** on Win10+. Will miss anything launched since last reboot.

## Artifact 8 -- NTFS USN Journal / $MFT

`$Extend\$UsnJrnl:$J` -- every create / modify / delete logged with filename + timestamps.
Can prove a file **existed** and when it was deleted even if no other artifact survives.
Parsed with `MFTECmd.exe --csv`.

Wiping USN Journal requires reformatting the volume -- rarely done.

## Artifact 9 -- Browser / Discord History

- Browser downloads SQLite (`History` -- Chrome, Edge).
- Discord IndexedDB cache -- messages mentioning cheat sites, download URLs.
- Steam `app_log.txt` for game launch patterns.

## Artifact 10 -- Live Process / Service / Driver Snapshot

Checker also runs **live** inspection:
- `tasklist /v`, Process Explorer, Process Hacker -- running processes
- `sc query` or Autoruns -- services, scheduled tasks, drivers
- `driverquery` -- loaded kernel modules
- `wmic process get name, executablepath, commandline` -- full paths

Modern cheats hide processes via kernel driver (hiding from `NtQuerySystemInformation`),
but artifacts above still prove past execution.

## csrss-Backed Live Module Scanning

csrss.exe internally mirrors loaded module tables for every process on the system.
With a signed kernel driver (read-only on `EPROCESS`), a cheat-detection tool can:

1. Query csrss' internal `CSR_PROCESS` + `CSR_THREAD` lists.
2. For each, enumerate the module list -- full path, base, size.
3. Normalize paths (lowercase, resolve `\\?\`, strip ADS).
4. Match against regexes:
   ```
   .*cheat.*\.dll
   .*injector.*\.exe
   %TEMP%\\.*\.exe
   C:\\Users\\[^\\]+\\AppData\\Local\\Temp\\.*
   ```
5. Flag unsigned modules in trusted system processes.

Requirements:
- Kernel-mode driver with cross-process read privileges, **or**
- User-mode exploit granting `PROCESS_VM_READ` to a PPL process (rare on patched systems).

## Anti-Forensic Cheat Workflow (what cheats try)

- Run from memory only (manual map, no disk write) -- defeats Prefetch, Amcache (for cheat image), BAM.
- Spoof PE compile timestamp (defeats Amcache cross-check).
- Clear Prefetch, UserAssist, BAM, RecentDocs on exit.
- Mount cheat from USB that is disconnected before screenshare starts.
- Rename cheat to look like `svchost.exe` in a non-system path (defeats casual Process Explorer scan).

## Checker Counter-Workflow

1. Boot normally -- do not reboot (shutdown writes AppCompatCache; also fresh boot clears BAM running state).
2. Run `KAPE` with the triage target -- grabs all above artifacts.
3. Parse with Eric Zimmerman's tools (`PECmd`, `AmcacheParser`, `JLECmd`, `LECmd`, `MFTECmd`, `EvtxECmd`,
   `AppCompatCacheParser`, `RBCmd`, `RecentFileCacheParser`).
4. Timeline with `MFTECmd --csvl2t` + Autopsy / Timeline Explorer.
5. Cross-reference every artifact for the same file -- a cheat caught in Prefetch + Amcache + BAM +
   USN journal is nearly impossible to deny.
