---
name: gh-anti-reversing
description: Ultimate Anti-Debugging Reference (Peter Ferrie 2011) -- comprehensive catalog of Windows anti-debug techniques covering PEB flags, heap artifacts, TLS callbacks, hardware breakpoints, timing, API detection, and execution escape.
---

# The Ultimate Anti-Debugging Reference (Peter Ferrie, 2011)

Windows x86/x64 anti-debugging techniques. Code snippets use 32-bit unless noted; 64-bit variants use GS:[60h] for PEB.

## 1. NtGlobalFlag (PEB+0x68 / x64 PEB+0xBC)

Debugger-created process sets FLG_HEAP_ENABLE_TAIL_CHECK(0x10)|FLG_HEAP_ENABLE_FREE_CHECK(0x20)|FLG_HEAP_VALIDATE_PARAMETERS(0x40).
Check: `mov eax,fs:[30h]; mov al,[eax+68h]; and al,70h; cmp al,70h; je debugged`
Defeat: set NtGlobalFlag=0 before resume; also check registry GlobalFlag key.
_NO_DEBUG_HEAP env var prevents the flags from being set.

## 2. Heap Flags

Heap+0x0C (xp 32bit) / Heap+0x40 (Vista+ 32bit) / Heap+0x70 (Vista+ 64bit) = Flags field.
Normal: HEAP_GROWABLE(2). Debug: also HEAP_TAIL_CHECKING_ENABLED(0x20)|HEAP_FREE_CHECKING_ENABLED(0x40)|HEAP_VALIDATE_PARAMETERS_ENABLED(0x40000000).
ForceFlags (Heap+0x10 xp / +0x44 Vista 32 / +0x74 Vista 64): normally 0, debug: 0x40000060.
Vista+ uses XOR key to encode block size (heap protection) -- decode before checking.

## 3. Heap Content

HEAP_TAIL_CHECKING: appends 0xABABABAB twice (32-bit) / four times (64-bit) at exact end of allocation.
HEAP_FREE_CHECKING: appends 0xFEEEFEEE in slack between allocations.
Check via HeapWalk() to get block pointer, then repe scasb for 0xAB.

## 4. Thread Local Storage (TLS) Callbacks

Run before debugger gains control (before OEP). Used to: check thread start addresses, remove OEP breakpoints, extend callback array.
Detect debugger thread: NtQueryInformationThread(ThreadQuerySetWin32StartAddress=9) -- debugger thread starts in kernel32.dll.
Extension: write new callback address to cbEnd slot in TLS array.
Vista+: dynamically loaded DLLs also run TLS callbacks regardless of imports.
Defense: debugger should break at first TLS callback, not OEP.

## 5. Anti-Step-Over (rep prefix abuse)

`rep; mov b [offset l1], 90h` -- if debugger steps over this, it places INT3 at l1+1, but rep stosb overwrites it, uncontrolled execution.
Variations: rep stosb, rep movsb, backward direction with std.
Detect breakpoint: copy byte at bp location, compare to 0xCC.

## 6. Hardware

A. Hardware Breakpoints: context DR0-DR3 != 0 in exception handler reveals debugger.
B. Instruction Counting: set HW breakpoints on 4 addresses, count EXCEPTION_SINGLE_STEP events; debugger interferes with count.
C. INT3: CC vs CD 03 -- exception address differs (Windows decrements for CC opcode assumption).
D. INT 0x2D: EIP incremented by 1 after exception; some debuggers skip instruction, others don't. `xor eax,eax; int 2dh; inc eax; je debugged`.
E. INT 0x41: DPL=0 normally (GP fault from ring3), some debuggers set DPL=3 allowing it -- detects kernel debugger.
F. MOV SS: disables interrupts for next instruction, T flag visible if single-stepping. `push ss; pop ss; pushfd; test b [esp+1],1; jne debugged`.

## 7. API Detection

**Timing**: RDTSC before/after suspicious region; difference > threshold = debugger. Also: GetTickCount, QueryPerformanceCounter, GetLocalTime+SystemTimeToFileTime.

**Heap functions**: RtlFreeHeap internally calls DbgPrint which raises DBG_PRINTEXCEPTION_C(0x40010006); VEH sees it before SEH; if debugger consumes it, VEH won't. Detect absence or value of exception.

**CloseHandle(invalid)**: raises EXCEPTION_INVALID_HANDLE(0xC0000008) if debugger present.
**CloseHandle(protected handle)**: raises EXCEPTION_HANDLE_NOT_CLOSABLE(0xC0000235) if debugger present.
**CreateFile(self)**: fails if debugger holds file handle open (didn't close hFile from CREATE_PROCESS_DEBUG_EVENT).
**LoadLibrary**: same -- LOAD_DLL_DEBUG_EVENT hFile not closed by many debuggers.
**ReadFile/WriteProcessMemory**: use to overwrite OEP or remove breakpoints.

**CheckRemoteDebuggerPresent**: calls NtQueryInformationProcess(ProcessDebugPort=7) -> 0xFFFFFFFF if debugged.
**IsDebuggerPresent**: reads PEB.BeingDebugged (offset +2). Bypass: set PEB+2=0.
**NtQueryInformationProcess**:
  - ProcessDebugPort(7): non-zero = debugged (kernel info, hard to spoof from usermode)
  - ProcessDebugObjectHandle(0x1E): non-null handle = debugged (Windows XP+)
  - ProcessDebugFlags(0x1F): zero = debugged (inverse of NoDebugInherit bit)
**Parent Process**: should be Explorer.exe; debugger = different parent. Check via NtQueryInformationProcess(ProcessBasicInformation) -> InheritedFromUniqueProcessId.
**CreateToolhelp32Snapshot**: enumerate processes, compare parent PID to Explorer.exe.
**NtQueryObject(ObjectAllTypesInformation)**: enumerate all object types, find DebugObject, TotalNumberOfObjects != 0 = debugger present (XP+).
**NtQuerySystemInformation(SystemKernelDebuggerInformation=0x23)**: KdDebuggerNotPresent in ah; also at KUSER_SHARED_DATA+0x7ffe02d4.
**OutputDebugString**: on NT/XP, GetLastError()=0 after call if debugger present; Vista+ behavior changed.
**UnhandledExceptionFilter**: not called if debugger present (exception passed to debugger instead).
**FindWindow**: "OLLYDBG", "WinDbgFrameClass", "ID" (Immunity), "ObsidianGUI" -- window class search.

## 8. TLS + DbgBreakPoint Patching

Patch ntdll!DbgBreakPoint (the INT3 that fires when debugger attaches) to RET -> prevents attach.
`VirtualProtect(DbgBreakPoint,1,PAGE_EXECUTE_READWRITE,...); *(BYTE*)DbgBreakPoint=0xC3;`

## 9. Selectors (DS/GS/SS volatility)

DS value set in one instruction reverts on exception/thread-switch in 64-bit. Detect single-step: `push fs; pop ds; [code]; mov ax,ds; cmp al,orig`.
GS selector in 0-3 range: single-step resets to 0 on 64-bit.
SS trick: `push fs; pop ss; pushfd; test b [esp+1],1` (T flag visible when single-stepping).

## 10. Execution Escape

**BlockInput**: blocks mouse/keyboard until process exits. Cannot be called twice in same direction (detects hook that always returns success).
**NtSetInformationThread(ThreadHideFromDebugger=0x11)**: hides thread from all debugger events including process exit.
**SuspendThread**: find debugger window, get thread ID, OpenThread+SuspendThread -> GUI locks.
**SwitchDesktop**: create new desktop, SwitchDesktop() -- hides all windows, severs keyboard/mouse.
**CreateProcess(self)+DebugActiveProcess**: self-debugging -- only one debugger can attach, second attach fails -> detects external debugger.
**CreateProcess(self) without debug**: second process not under debugger control even if first was.
**NtSetLdtEntries/NtSetInformationProcess(ProcessLdtInformation)**: create LDT selector for code, jmp far -- confuses most debuggers.
**QueueUserAPC**: transfer control to APC target before thread entrypoint.
**VirtualProtect + PAGE_GUARD**: guard page exception (EXCEPTION_GUARD_PAGE=0x80000001) consumed by OllyDbg -> execution escapes.
**Enum functions**: EnumDateFormatsA, EnumWindows, etc. -- callback runs without breakpoint.
**GenerateConsoleCtrlEvent**: raises DBG_CONTROL_C; consumed by some debuggers.
**Nanomites**: replace conditional jumps with INT3, use exception handler to emulate branches from lookup table. Requires self-debugging to process.

## 11. Intentional Exception SEH Pattern

```asm
xor eax,eax
push offset handler   ; step 1
push d fs:[eax]       ; step 2
mov fs:[eax], esp     ; step 3
[force exception]
; handler code
```
Obfuscation: use fs:[18h] to get FS base, indirect push, SS trick to hide the writes.