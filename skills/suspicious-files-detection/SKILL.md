---
name: suspicious-files-detection
description: Detect suspicious files via danger-zone path matching, PE certificate validation, double extension detection, compile-time stomp analysis, and Zone.Identifier ADS inspection.
metadata:
  type: detection
---

# Suspicious File Detection

Automated scanner that flags files exhibiting malware-associated traits without relying on
signature databases. Combines filesystem metadata analysis, PE header inspection, and Windows
artifact cross-referencing.

## Detection Signals

### 1. Danger Zone Paths

Files in attacker-favored drop locations warrant immediate scrutiny:

```
%TEMP%\*.exe, *.dll, *.scr, *.bat, *.ps1, *.vbs, *.js, *.hta
%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\*
%PUBLIC%\*.exe
%PROGRAMDATA%\<random-looking-folder>\*.exe
C:\PerfLogs\*.exe
C:\Windows\Temp\*.exe
<any-recycle-bin>\*.exe
%USERPROFILE%\Downloads\*.exe   (unsigned, no Zone.Identifier)
```

Weight: location alone is low-signal. Combined with any other indicator below, confidence rises
to medium-high.

### 2. Double Extension Detection

```
document.pdf.exe          report.docx.scr
invoice.xlsx.js           photo.jpg.exe.bat
```

Pattern: `filename.{benign_ext}.{executable_ext}` where executable extensions include:
`exe dll scr bat cmd ps1 vbs js hta wsf msi com pif cpl`.

Unicode override characters (U+202E Right-to-Left Override) in filenames are an instant flag --
they visually reverse the displayed extension: `exe.fdp` displays as `pdf.exe`.

### 3. PE Certificate Validation

For every PE file found:

```
1. WinVerifyTrust(WINTRUST_ACTION_GENERIC_VERIFY_V2)
   - Valid signature from trusted CA → lower suspicion
   - Self-signed → medium suspicion
   - Expired certificate → medium suspicion
   - Revoked certificate → high suspicion
   - No signature at all → weight by location

2. Check certificate subject against known-abused signers:
   - Certificates with CN matching known stolen certs
   - Certificates issued by CAs with poor validation (e.g. old Comodo RA)
   - Certificate valid-from date significantly after compile timestamp
```

### 4. Compile-Time Stomp Detection

PE `IMAGE_FILE_HEADER::TimeDateStamp` contains the compilation timestamp (UTC epoch).

Anomalies:
- **Future timestamp**: compile date > current date → stomped or clock-skewed
- **Ancient timestamp**: compile date < 2005 for a PE importing modern APIs → stomped
- **Round timestamp**: exact midnight UTC or exactly 0x00000000 → zeroed
- **Mismatch with debug directory**: `IMAGE_DEBUG_DIRECTORY::TimeDateStamp` != file header
  timestamp and both are non-zero → selective stomp (attacker zeroed one but not both)
- **Mismatch with resource timestamps**: `VS_FIXEDFILEINFO` dates vs compile time off by years

```cpp
DWORD compileTime = ntHeaders->FileHeader.TimeDateStamp;
time_t now = time(nullptr);
if (compileTime == 0)                          flag("zeroed compile timestamp");
if (compileTime > (DWORD)now + 86400)          flag("future compile timestamp");
if (compileTime < 1104537600 && importsModernAPIs) flag("implausible old timestamp");
```

### 5. Zone.Identifier ADS Check

Windows NTFS stores a `Zone.Identifier` alternate data stream on files downloaded from the
internet (Mark of the Web). Its absence on an executable in `Downloads` is suspicious:

```
:Zone.Identifier contents:
[ZoneTransfer]
ZoneId=3              ← Internet zone
ReferrerUrl=https://...
HostUrl=https://...
```

Detection logic:
- Executable in Downloads folder + no Zone.Identifier → manually created or ADS stripped
- Zone.Identifier with `ZoneId=3` or `ZoneId=4` + unsigned PE → internet-sourced untrusted binary
- Zone.Identifier recently deleted (check USN journal) → deliberate MotW bypass

### 6. Entropy Analysis

High entropy in the PE's `.text` or `.data` section suggests packing or encryption:

```
Shannon entropy > 7.2 on any section → likely packed (UPX, Themida, VMProtect)
Shannon entropy > 7.8 on the entire file → encrypted payload or compressed archive
Entropy < 1.0 on .text section → padding / null-sled (unusual but not inherently malicious)
```

### 7. Import Table Red Flags

Count imports from these categories:

| Category           | APIs                                                          | Threshold |
|--------------------|---------------------------------------------------------------|-----------|
| Process injection  | `VirtualAllocEx`, `WriteProcessMemory`, `CreateRemoteThread`  | >= 2      |
| Privilege          | `AdjustTokenPrivileges`, `OpenProcessToken`                   | >= 1      |
| Anti-debug         | `IsDebuggerPresent`, `CheckRemoteDebuggerPresent`             | >= 1      |
| Credential access  | `CredEnumerate`, `LsaRetrievePrivateData`                     | >= 1      |
| Registry persist   | `RegSetValueEx` on Run/RunOnce keys                           | context   |

A PE importing from 3+ categories with no valid signature is high-confidence suspicious.

## Scoring Model

```
score = 0
if danger_zone_path:       score += 15
if double_extension:       score += 40
if unicode_override:       score += 80
if no_signature:           score += 20
if revoked_cert:           score += 50
if compile_stomp:          score += 25
if no_zone_identifier:     score += 10
if high_entropy:           score += 20
if injection_imports >= 2: score += 30

verdict:
  score >= 60 → ALERT
  score >= 30 → SUSPICIOUS
  score < 30  → LOW RISK
```

## Related Skills

- `yara-pe-artifact-scanner` -- YARA rule-based detection for known malware families
- `process-hollowing-detection` -- runtime detection of hollowed processes
- `evtx-tamper-detection` -- log integrity checking
