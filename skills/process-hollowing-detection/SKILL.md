---
name: process-hollowing-detection
description: Runtime process-hollowing detector -- enumerate processes, verify PE entry point is backed by MEM_IMAGE from disk, flag anomalous MEM_PRIVATE RWX regions with non-zero content. C++ hollow_detector class.
---

# Process Hollowing Detection

Process hollowing: `CREATE_SUSPENDED` → `NtUnmapViewOfSection` the legit image → `VirtualAllocEx` /
`WriteProcessMemory` payload at the same base → `SetThreadContext(rip = payload_entry)` →
`ResumeThread`. The resulting process looks like `notepad.exe` in Task Manager but executes something
completely different.

Detection surface:
1. **Entry point not backed by MEM_IMAGE** -- the thread's start RIP falls inside a
   `MEM_PRIVATE | PAGE_EXECUTE_*` region instead of a loaded module.
2. **Anomalous RWX private memory** -- unsigned, non-image, executable, non-zero content.
3. **Section backing mismatch** -- `GetMappedFileNameW` on the entry address returns a different
   file than the process image name.

## C++ Reference Detector

Based on the `hollow_detector` class supplied with this skill.

```cpp
namespace core {

enum class hollow_state { active, historical };

struct hollow_detection {
    hollow_state  state;
    uint32_t      pid;
    uintptr_t     entry_point;
    std::wstring  process_image;
    std::wstring  section_backing;
    bool          is_entry_unbacked;
    bool          is_section_anomalous;
};

using hollow_callback = std::function<void(const hollow_detection&)>;

class hollow_detector {
public:
    bool initialize(hollow_callback cb) {
        if (!cb) return false;
        callback_ = std::move(cb);
        return true;
    }

    void scan_active() {
        if (!callback_) return;
        HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
        if (snap == INVALID_HANDLE_VALUE) return;

        PROCESSENTRY32W pe{sizeof(pe)};
        if (!Process32FirstW(snap, &pe)) { CloseHandle(snap); return; }

        do {
            auto image = resolve_process_image(pe.th32ProcessID);
            if (is_system_process(pe.th32ProcessID, image)) continue;

            HANDLE p = OpenProcess(PROCESS_QUERY_INFORMATION | PROCESS_VM_READ, FALSE,
                                   pe.th32ProcessID);
            if (!p) continue;

            auto entry        = get_pe_entry_point(p);
            auto backed       = is_address_backed_by_image(p, entry);
            auto backing_name = get_section_backing_name(p, entry);
            auto anomalous    = has_anomalous_sections(p);

            hollow_detection d{
                hollow_state::active, pe.th32ProcessID, entry, image, backing_name,
                !backed, anomalous
            };
            emit_if_valid(std::move(d));
            CloseHandle(p);
        } while (Process32NextW(snap, &pe));
        CloseHandle(snap);
    }

private:
    bool is_address_backed_by_image(HANDLE p, uintptr_t a) const {
        MEMORY_BASIC_INFORMATION mbi{};
        if (!VirtualQueryEx(p, (LPCVOID)a, &mbi, sizeof(mbi)))         return false;
        if (mbi.Type != MEM_IMAGE)                                     return false;
        wchar_t name[MAX_PATH]{};
        return GetMappedFileNameW(p, (LPVOID)a, name, MAX_PATH) > 0;
    }

    bool has_anomalous_sections(HANDLE p) const {
        uintptr_t addr = 0;
        MEMORY_BASIC_INFORMATION mbi{};
        constexpr uint32_t exec = PAGE_EXECUTE | PAGE_EXECUTE_READ |
                                  PAGE_EXECUTE_READWRITE | PAGE_EXECUTE_WRITECOPY;

        while (VirtualQueryEx(p, (LPCVOID)addr, &mbi, sizeof(mbi))) {
            if (mbi.Type == MEM_PRIVATE && mbi.State == MEM_COMMIT &&
                (mbi.Protect & exec) && mbi.RegionSize >= 0x1000) {
                uint8_t probe[16]{};
                SIZE_T n = 0;
                if (ReadProcessMemory(p, mbi.BaseAddress, probe, 16, &n) && n == 16) {
                    bool all_zero = std::all_of(probe, probe + 16, [](uint8_t b){ return !b; });
                    if (!all_zero) return true;
                }
            }
            addr += mbi.RegionSize;
            if (addr < (uintptr_t)mbi.BaseAddress) break;
        }
        return false;
    }

    bool validate(const hollow_detection& d) const {
        if (!d.entry_point) return false;
        if (!d.is_entry_unbacked && !d.is_section_anomalous) return false;
        if (d.is_entry_unbacked && d.is_section_anomalous) return true;
        if (d.is_entry_unbacked) {
            auto s = d.section_backing; std::transform(s.begin(), s.end(), s.begin(), ::towlower);
            return s.find(L"\\windows\\") == std::wstring::npos;  // non-system backing path
        }
        return false;
    }

    void emit_if_valid(hollow_detection d) {
        if (d.state == hollow_state::active && !validate(d)) return;
        if (callback_) callback_(d);
    }

    hollow_callback callback_;
};

}  // namespace core
```

## Detection Rules

| Signal                                                        | Verdict        |
|---------------------------------------------------------------|----------------|
| Entry point in `MEM_PRIVATE` region                            | Highly suspicious -- near-certain hollow |
| Entry point in `MEM_IMAGE` but mapped file != process image   | Classic hollow -- unmapped + remapped different image |
| Anomalous `MEM_PRIVATE | RWX` region with non-zero content    | Shellcode / payload residue             |
| Both of the above                                             | Confirmed hollow |

The validator requires at least one strong signal (`is_entry_unbacked` OR `is_section_anomalous`),
and allows a legitimate exception when the entry is `MEM_IMAGE`-backed and the backing file is under
`C:\Windows\` -- some protected processes (Secure Kernel helpers, lsaiso) legitimately present as
unbacked due to section isolation.

## Historical Detection via Event Logs

Feed Sysmon / Security logs into `scan_logs()`. Look for `>= 2` occurrences in the same event
record of any of:

```
NtUnmapViewOfSection          NtSetContextThread
CreateProcessW.*CREATE_SUSPENDED
VirtualAllocEx.*MEM_COMMIT.*PAGE_EXECUTE_READWRITE
WriteProcessMemory            ImageLoad.*UNBACKED
```

The hollowing recipe fingerprint is unmistakable in Sysmon Event IDs 1 (process create),
8 (CreateRemoteThread), 10 (ProcessAccess), 25 (ProcessTampering).

## System Process Whitelist

PID ≤ 4 and the following image names are excluded (false-positive avoidance -- Secure Kernel
constructs legitimately violate the usual rules):

```
system   smss    csrss    wininit  services
lsass    svchost explorer dwm       registry
```

## Operational Notes

- Scanner needs `PROCESS_QUERY_INFORMATION | PROCESS_VM_READ`. For PPL / SYSTEM targets, run as
  SYSTEM via a service or driver.
- `GetMappedFileNameW` returns an NT device path (`\Device\HarddiskVolume3\Windows\System32\...`).
  Normalize to drive letter via `QueryDosDeviceW` before string compare if cross-referencing with
  user-facing paths.
- VAD walking inside the kernel driver (via `MmGetPhysicalAddress` + `MiFindVad`) catches hollowed
  processes that have intentionally rebased themselves after unmap -- user-mode scan would miss
  that case.
- Pair with `stack-shellcode-detection` to catch cases where hollowing is incomplete and the
  original thread stack still exists -- walking it reveals return addresses in payload memory.
