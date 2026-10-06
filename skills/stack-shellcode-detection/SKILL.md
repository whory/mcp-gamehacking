---
name: stack-shellcode-detection
description: Thread-stack walker that detects shellcode by validating every return address lands in a MEM_IMAGE / PE-backed region. Any unbacked executable return frame signals in-memory payload.
---

# Stack-Frame Shellcode Detection

Any thread running real code has a stack full of return addresses pointing back through legitimate
loaded modules. If a return frame lands inside **private, executable memory not backed by a
loaded PE on disk**, the thread is running (or returning into) shellcode.

This catches:
- Classic shellcode execution via `CreateRemoteThread` on a `VirtualAllocEx`'d RWX region.
- Reflective DLL loaders -- their internal functions ran from `MEM_PRIVATE`.
- Thread-hijack payloads that haven't yet reached a legitimate code island.
- Beacon main loops that sleep inside the private region.

## Walking a Thread's Stack

Use `dbghelp!StackWalk64`. Required inputs:
1. Thread handle with `THREAD_QUERY_INFORMATION | THREAD_GET_CONTEXT`.
2. Current `CONTEXT` captured via `GetThreadContext` (freeze the thread with `SuspendThread` first
   if you need stability).
3. Machine type (`IMAGE_FILE_MACHINE_AMD64` or `_I386`).

```cpp
std::vector<uintptr_t> walk_thread_stack(HANDLE process, uint32_t tid) {
    std::vector<uintptr_t> frames;
    HANDLE t = OpenThread(THREAD_QUERY_INFORMATION | THREAD_GET_CONTEXT, FALSE, tid);
    if (!t) return frames;

    CONTEXT ctx{}; ctx.ContextFlags = CONTEXT_CONTROL;
    if (!GetThreadContext(t, &ctx)) { CloseHandle(t); return frames; }

    STACKFRAME64 sf{};
#ifdef _M_X64
    sf.AddrPC   .Offset = ctx.Rip; sf.AddrPC   .Mode = AddrModeFlat;
    sf.AddrFrame.Offset = ctx.Rbp; sf.AddrFrame.Mode = AddrModeFlat;
    sf.AddrStack.Offset = ctx.Rsp; sf.AddrStack.Mode = AddrModeFlat;
    DWORD machine = IMAGE_FILE_MACHINE_AMD64;
#else
    sf.AddrPC   .Offset = ctx.Eip; sf.AddrPC   .Mode = AddrModeFlat;
    sf.AddrFrame.Offset = ctx.Ebp; sf.AddrFrame.Mode = AddrModeFlat;
    sf.AddrStack.Offset = ctx.Esp; sf.AddrStack.Mode = AddrModeFlat;
    DWORD machine = IMAGE_FILE_MACHINE_I386;
#endif

    for (uint32_t i = 0; i < 64; ++i) {
        if (!StackWalk64(machine, process, t, &sf, &ctx,
                         nullptr, SymFunctionTableAccess64, SymGetModuleBase64, nullptr))
            break;
        if (!sf.AddrReturn.Offset) break;
        frames.push_back(sf.AddrReturn.Offset);
    }
    CloseHandle(t);
    return frames;
}
```

Call `SymInitialize(process, nullptr, TRUE)` once at the start of your scanner and
`SymSetOptions(SYMOPT_UNDNAME | SYMOPT_DEFERRED_LOADS)` to avoid blocking on symbol downloads.

## Frame Analysis

For each return address `A`:

```cpp
bool is_backed_by_pe_on_disk(HANDLE p, uintptr_t a) {
    MEMORY_BASIC_INFORMATION mbi{};
    if (!VirtualQueryEx(p, (LPCVOID)a, &mbi, sizeof(mbi)))                  return false;
    if (mbi.Type != MEM_IMAGE)                                              return false;
    wchar_t name[MAX_PATH]{};
    return GetMappedFileNameW(p, (LPVOID)a, name, MAX_PATH) > 0;
}

bool analyze_frame(HANDLE p, uintptr_t a) {
    if (!a) return false;
    if (is_backed_by_pe_on_disk(p, a)) return false;    // normal
    MEMORY_BASIC_INFORMATION mbi{};
    if (!VirtualQueryEx(p, (LPCVOID)a, &mbi, sizeof(mbi))) return false;
    if (mbi.State != MEM_COMMIT) return false;
    constexpr uint32_t exec = PAGE_EXECUTE | PAGE_EXECUTE_READ |
                              PAGE_EXECUTE_READWRITE | PAGE_EXECUTE_WRITECOPY;
    return (mbi.Protect & exec) != 0;                   // RX private = shellcode
}
```

Rule: `MEM_PRIVATE | MEM_COMMIT | PAGE_EXECUTE_* AND no backing file` = **shellcode frame**.

## Full Scanner Skeleton

```cpp
namespace core {

class stack_scanner {
public:
    bool initialize(stack_detection_callback cb) {
        if (!cb) return false;
        callback_ = std::move(cb);
        SymSetOptions(SYMOPT_UNDNAME | SYMOPT_DEFERRED_LOADS);
        return true;
    }

    void scan() {
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

            for (auto tid : enumerate_threads(pe.th32ProcessID)) {
                for (auto fa : walk_thread_stack(p, tid)) {
                    if (analyze_frame(p, fa)) {
                        callback_({pe.th32ProcessID, tid, fa, image, /*unbacked=*/true});
                    }
                }
            }
            CloseHandle(p);
        } while (Process32NextW(snap, &pe));
        CloseHandle(snap);
    }
};

}  // namespace core
```

## System-Process Whitelist

Skip (PID ≤ 4) + the usual set so legitimate secure-kernel helpers don't flood the output:

```
system   smss    csrss    wininit  services
lsass    svchost explorer dwm       registry
```

## False Positive Sources

- **JIT compilers** -- .NET, Java, Chrome V8, LuaJIT all allocate RWX for JIT code and legitimately
  show unbacked RX frames.
- Add a per-process allowlist: `powershell.exe`, `w3wp.exe`, `chrome.exe`, `msedge.exe`,
  `java.exe`, `cl.exe`/`msbuild.exe`, `nvcc.exe`, etc.
- Alternatively, require that the unbacked region is **anonymous** (`GetMappedFileName` returns
  empty) rather than mapped to a MinSFC JIT view -- JIT engines usually name their heap sections.

- **DRM / anti-cheat scanners themselves** often place their anti-tamper code in private memory and
  leave return frames there.

## Combining with Other Signals

A single unbacked frame can be a JIT false positive. A high-confidence call requires any **two** of:

- Unbacked RX return frame AND
- Thread's start RIP is also unbacked (would be caught by `process-hollowing-detection` sibling), OR
- Private RX region surrounding the frame contains x86/x64 syscall stub pattern
  (`4C 8B D1 B8 ?? ?? 00 00 0F 05` -- the direct syscall idiom), OR
- The region is `PAGE_EXECUTE_READWRITE` (true RWX; even JIT normally flips to RX after write).

## Operational Notes

- Suspending threads for context capture is noisy; a race-tolerant alternative is to call
  `GetThreadContext` on live threads and tolerate the occasional incoherent frame.
- Kernel-mode variant: iterate `PsLoadedModuleList`, read each thread's KTRAP_FRAME via
  `PsGetContextThread`, same analysis in the kernel address space. Catches payloads inside
  protected processes that user-mode cannot read.
- Pairs well with `process-hollowing-detection` -- stack walking catches live beacons, hollowing
  check catches dormant payloads.
