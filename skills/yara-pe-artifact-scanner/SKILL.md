---
name: yara-pe-artifact-scanner
description: Combined YARA rule engine + PE artifact scanner -- 14 YARA rules (ReflectiveLoader, Meterpreter, CobaltStrike, ETWPatch, AMSIPatch, etc.) plus PE section entropy analysis and injection API import counting.
metadata:
  type: detection
---

# YARA + PE Artifact Scanner

Two-layer scanner: YARA signature matching for known offensive tooling patterns, plus
heuristic PE analysis (section entropy, import table profiling, overlay analysis) for
unknown/custom payloads.

## YARA Rules

### 1. ReflectiveLoader

Detects reflective DLL injection stub -- the loader that resolves its own imports without
`LoadLibrary`.

```yara
rule ReflectiveLoader {
    meta:
        description = "Reflective DLL loader stub"
    strings:
        $api1 = "VirtualAlloc" ascii
        $api2 = "GetProcAddress" ascii
        $api3 = "LoadLibraryA" ascii
        $reflective = { 4D 5A ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? }
        $peb_walk = { 64 A1 30 00 00 00 }          // x86 PEB via fs:[0x30]
        $peb_walk64 = { 65 48 8B 04 25 60 00 00 00 } // x64 PEB via gs:[0x60]
    condition:
        $reflective at 0 and ($peb_walk or $peb_walk64) and 2 of ($api*)
}
```

### 2. Meterpreter

```yara
rule Meterpreter_Reverse_TCP {
    meta:
        description = "Metasploit reverse TCP shellcode pattern"
    strings:
        $ws2 = "ws2_32" ascii nocase
        $connect = { FF D5 89 C6 }                  // call ebp (hash API) + mov esi,eax
        $recv_loop = { 8D 4E 10 51 56 FF D5 }       // recv loop pattern
        $stage = { BF 00 10 00 00 }                  // mov edi, 0x1000 (stage size)
    condition:
        $ws2 and ($connect or $recv_loop or $stage)
}
```

### 3. CobaltStrike Beacon

```yara
rule CobaltStrike_Beacon {
    meta:
        description = "CobaltStrike beacon config or shellcode"
    strings:
        $config = { 00 01 00 01 00 02 ?? ?? 00 02 00 01 00 02 ?? ?? }  // beacon config block
        $sleep_mask = "sleepMask" ascii
        $pipe = "\\\\.\\pipe\\msagent_" ascii
        $ua = "Mozilla/5.0 (compatible; MSIE" ascii
        $xor_key = { 69 68 69 68 }                   // common default XOR
    condition:
        2 of them
}
```

### 4. Classic Injection Pattern

```yara
rule ClassicInjection {
    meta:
        description = "VirtualAllocEx + WriteProcessMemory + CreateRemoteThread chain"
    strings:
        $alloc = "VirtualAllocEx" ascii
        $write = "WriteProcessMemory" ascii
        $thread = "CreateRemoteThread" ascii
        $open = "OpenProcess" ascii
    condition:
        3 of them
}
```

### 5. Process Hollowing

```yara
rule Hollowing_Pattern {
    meta:
        description = "Process hollowing API chain"
    strings:
        $unmap = "NtUnmapViewOfSection" ascii
        $ctx = "SetThreadContext" ascii
        $resume = "ResumeThread" ascii
        $suspended = "CREATE_SUSPENDED" ascii wide
    condition:
        $unmap and ($ctx or $resume)
}
```

### 6. ETW Patch

```yara
rule ETWPatch {
    meta:
        description = "ETW bypass via EtwEventWrite patch"
    strings:
        $etw = "EtwEventWrite" ascii
        $nttracevent = "NtTraceEvent" ascii
        $patch_ret = { C3 }                          // ret instruction
        $patch_xor = { 33 C0 C3 }                   // xor eax,eax; ret
    condition:
        ($etw or $nttracevent) and ($patch_ret or $patch_xor)
}
```

### 7. AMSI Patch

```yara
rule AMSIPatch {
    meta:
        description = "AMSI bypass via AmsiScanBuffer patch"
    strings:
        $amsi_dll = "amsi.dll" ascii nocase
        $amsi_scan = "AmsiScanBuffer" ascii
        $amsi_init = "AmsiInitialize" ascii
        $patch_bytes = { B8 57 00 07 80 C3 }         // mov eax, 0x80070057; ret (E_INVALIDARG)
    condition:
        $amsi_dll and ($amsi_scan or $amsi_init)
}
```

### 8. NTDLL Unhook

```yara
rule NTDLLUnhook {
    meta:
        description = "Unhooking ntdll.dll by remapping clean copy"
    strings:
        $ntdll = "\\ntdll.dll" ascii nocase wide
        $map = "NtMapViewOfSection" ascii
        $create_section = "NtCreateSection" ascii
        $knowndlls = "\\KnownDlls\\ntdll.dll" ascii wide
    condition:
        $ntdll and ($map or $create_section or $knowndlls)
}
```

### 9. Packed Binary

```yara
rule Packed_Binary {
    meta:
        description = "Common packer section names"
    strings:
        $upx0 = "UPX0" ascii
        $upx1 = "UPX1" ascii
        $themida = ".themida" ascii
        $vmp = ".vmp0" ascii
        $aspack = ".aspack" ascii
        $petite = ".petite" ascii
        $mpress = ".MPRESS1" ascii
    condition:
        any of them
}
```

### 10. Mimikatz

```yara
rule Mimikatz_Strings {
    meta:
        description = "Mimikatz credential dumper"
    strings:
        $s1 = "sekurlsa::logonPasswords" ascii wide
        $s2 = "kerberos::golden" ascii wide
        $s3 = "lsadump::sam" ascii wide
        $s4 = "privilege::debug" ascii wide
        $s5 = "mimikatz" ascii wide nocase
    condition:
        2 of them
}
```

### 11. Entry Point Anomaly

```yara
rule EntryAnomaly {
    meta:
        description = "PE entry point outside .text section"
    condition:
        uint16(0) == 0x5A4D and
        for any i in (0..pe.number_of_sections - 1):
            (pe.sections[i].name == ".text" and
             (pe.entry_point < pe.sections[i].raw_data_offset or
              pe.entry_point > pe.sections[i].raw_data_offset + pe.sections[i].raw_data_size))
}
```

### 12. Big Overlay

```yara
rule BigOverlay {
    meta:
        description = "PE with suspiciously large overlay (appended data)"
    condition:
        uint16(0) == 0x5A4D and
        filesize > 10MB and
        pe.overlay.size > pe.overlay.offset  // overlay > PE itself
}
```

### 13. DLL Sideload Candidate

```yara
rule Sideload_Candidate {
    meta:
        description = "Known DLL sideloading target names"
    strings:
        $d1 = "version.dll" ascii nocase
        $d2 = "dbghelp.dll" ascii nocase
        $d3 = "winmm.dll" ascii nocase
        $d4 = "wer.dll" ascii nocase
        $d5 = "profapi.dll" ascii nocase
    condition:
        any of them and uint16(0) == 0x5A4D and filesize < 500KB
}
```

### 14. Syscall Stub (Direct Syscall)

```yara
rule DirectSyscall {
    meta:
        description = "Hand-rolled syscall stub (Hell's Gate / SysWhispers pattern)"
    strings:
        $mov_r10_rcx = { 4C 8B D1 }                 // mov r10, rcx
        $mov_eax_ssn = { B8 ?? 00 00 00 }           // mov eax, SSN
        $syscall = { 0F 05 }                         // syscall
        $int2e = { CD 2E }                           // int 0x2E (wow64 fallback)
    condition:
        $mov_r10_rcx and $mov_eax_ssn and ($syscall or $int2e)
}
```

## PE Heuristic Analysis

### Section Entropy Profiling

```cpp
double shannon_entropy(const uint8_t* data, size_t len) {
    if (len == 0) return 0.0;
    size_t freq[256] = {};
    for (size_t i = 0; i < len; ++i) freq[data[i]]++;
    double e = 0.0;
    for (int i = 0; i < 256; ++i) {
        if (freq[i] == 0) continue;
        double p = (double)freq[i] / len;
        e -= p * log2(p);
    }
    return e;
}

// Per-section analysis:
for (auto& sec : pe.sections) {
    double e = shannon_entropy(sec.data, sec.size);
    if (e > 7.2 && sec.is_executable())
        flag("packed/encrypted code section: %s entropy=%.2f", sec.name, e);
    if (e < 1.0 && sec.size > 4096 && sec.is_executable())
        flag("suspicious low-entropy executable section: %s", sec.name);
}
```

### Injection Import Counter

Count APIs in categorized buckets:

```
INJECTION = { VirtualAllocEx, WriteProcessMemory, CreateRemoteThread,
              NtMapViewOfSection, QueueUserAPC, NtQueueApcThread,
              RtlCreateUserThread, NtCreateThreadEx }

EVASION = { VirtualProtectEx, NtProtectVirtualMemory, NtWriteVirtualMemory,
            NtAllocateVirtualMemory }

CREDENTIAL = { CredEnumerate, LsaRetrievePrivateData, SamConnect,
               CryptUnprotectData, OpenProcessToken, AdjustTokenPrivileges }

ANTI_ANALYSIS = { IsDebuggerPresent, CheckRemoteDebuggerPresent,
                  NtQueryInformationProcess, GetTickCount, QueryPerformanceCounter }

Score:
  injection_count >= 3    → HIGH
  evasion_count >= 2      → MEDIUM
  credential_count >= 1   → HIGH (if unsigned PE)
  anti_analysis >= 2      → MEDIUM
```

### Overlay Analysis

Data appended after the last PE section (overlay) is commonly used to store:
- Encrypted payloads (high entropy overlay + small PE loader = dropper)
- Configuration data (CobaltStrike beacon config, RAT C2 addresses)
- Polyglot files (PE + ZIP, PE + PDF)

```
overlay_ratio = overlay_size / total_file_size
if overlay_ratio > 0.5:
    flag("majority of file is overlay data -- likely dropper or polyglot")
```

## Combined Scoring

```
yara_hits × 20 + entropy_flags × 15 + import_flags × 25 + overlay_flag × 10

>= 60 → MALICIOUS (high confidence)
>= 30 → SUSPICIOUS (investigate)
<  30 → CLEAN (or novel)
```

## Related Skills

- `suspicious-files-detection` -- filesystem-level file inspection
- `hidden-process-detection` -- finding processes that evade enumeration
- `process-hollowing-detection` -- runtime hollow detection
