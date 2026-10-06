---
name: indirect-memory-writing-evasion
description: Indirect memory writing -- using benign Windows API output pointers (WriteFile lpNumberOfBytesWritten, ReadProcessMemory lpNumberOfBytesRead) to land bytes in attacker-controlled memory without an explicit WriteProcessMemory, as an AMSI / EDR bypass technique.
---

# Indirect Memory Writing

## The Primitive

Many Win32 APIs accept **caller-supplied output pointers** that the OS writes to on completion
(status codes, byte counts, filled structures). An attacker who controls that pointer can cause
the kernel or a system library to deposit chosen bytes at a chosen address -- without ever calling
`WriteProcessMemory`, `memcpy`, or any obvious memory-write primitive from the attacker's own code.

From the OS point of view it looks like a legitimate API call. From the attacker's point of view
the API becomes a tiny write primitive.

## Why It Matters for Evasion

Defender / AMSI / userland EDR hooks commonly flag:
- `VirtualAlloc(..., PAGE_EXECUTE_READWRITE)` followed by a memory copy from the caller's buffer.
- Direct `WriteProcessMemory` cross-process writes.
- Direct `NtWriteVirtualMemory` syscalls.

The copy step is where signatures and behavioural rules fire -- "a payload-sized buffer is about to
land in an RX region". If the attacker never calls a memory-copy API in their own code and instead
walks the payload byte-by-byte through completion-pointer writes from legitimate APIs, the
behavioural fingerprint changes dramatically.

## Classic Example: WriteFile Byte Count

```c
BOOL WriteFile(
    HANDLE       hFile,
    LPCVOID      lpBuffer,
    DWORD        nNumberOfBytesToWrite,
    LPDWORD      lpNumberOfBytesWritten,  // <-- OS writes a DWORD here on success
    LPOVERLAPPED lpOverlapped
);
```

On successful synchronous completion the kernel writes the **actual bytes written** into the memory
at `lpNumberOfBytesWritten` -- which is attacker-supplied.

Point `lpNumberOfBytesWritten` at a page the attacker wants to initialise. Pass `nNumberOfBytesToWrite`
= `0x41` (the byte the attacker wants to land). On success the kernel stores `0x41` as a DWORD at
the output address. Repeat for every byte of the payload.

```c
DWORD target_rx = (DWORD)rx_page;
for (size_t i = 0; i < payload_len; ++i) {
    WriteFile(
        hFile,
        dummy,                     // read-only source, ignored for our purposes
        payload[i],                // this value is what lands at *target
        (LPDWORD)(rx_page + i*4),  // kernel writes here
        NULL);
}
```

Each loop iteration causes a kernel-mode write of up to 4 bytes into the attacker's target region.
No `WriteProcessMemory` / `memcpy` from the attacker's binary.

### Caveats

- Only writes up to 4 bytes per call (`DWORD` output slot).
- Each write holds the "total written" value -- so you cannot write arbitrary bytes without walking
  one byte at a time. For a byte-granular primitive you must constrain the input count so the output
  low byte is the one you want and overlap writes so the high bytes you don't care about are later
  overwritten.
- Needs a valid writable handle for `hFile` (anonymous pipe, NUL device, temp file, ...).

## Related APIs with Output Pointers

| API                            | Output param                                   | Granularity         |
|--------------------------------|------------------------------------------------|---------------------|
| `WriteFile`                    | `lpNumberOfBytesWritten`                       | DWORD               |
| `ReadFile`                     | `lpNumberOfBytesRead`                          | DWORD               |
| `ReadProcessMemory`            | `lpNumberOfBytesRead`                          | SIZE_T              |
| `GetAdaptersAddresses`         | `pOutBufLen`                                   | ULONG               |
| `RegQueryValueEx`              | `lpcbData` (actual byte size written)          | DWORD               |
| `CryptGenRandom`               | fills `pbBuffer` -- straight memory write      | arbitrary length    |
| `NtQuerySystemInformation`     | `ReturnLength`                                 | ULONG               |
| `GetTempFileNameW`             | fills `lpTempFileName`                         | wchar buffer        |

Each one is a legitimate productive API. Each one is also a memory-write primitive if its output
pointer is attacker-controlled.

## AMSI / EDR Context (why the technique exists)

The brief this skill is distilled from frames it specifically as an AMSI-bypass tactic:

> When scripting local shellcode loaders in VBA or PowerShell, some antimalware engines, including
> Microsoft Defender, may flag the payload at the moment it is copied into a newly allocated
> executable memory region. Relying on indirect memory writing techniques via `ReadProcessMemory` or
> `ReadFile` depending on the strategy, can avoid existing signatures until they are updated.

The loader allocates RX memory, then populates it via `ReadFile` from a prepared file / pipe --
AMSI's scan-on-write hooks are tuned for the direct VBA / PowerShell copy pattern (`Marshal.Copy`,
`[Runtime.InteropServices.Marshal]::Copy`) and miss the indirect route for a window of time until the
behavioural signature is updated.

## Detection Angles for Defenders

- Instrument `WriteFile` / `ReadFile` wrappers in `kernel32` so repeated calls to the same handle with
  tiny byte counts (`1-4` bytes) raise a telemetry event. Legitimate code almost never does this.
- Monitor completion-pointer address patterns. A `lpNumberOfBytesWritten` pointing into a
  freshly-allocated RX region of the caller is a strong anomaly signal.
- EDR behavioural rule: "RX allocation is followed by `nNumberOfCalls > 100` to any file / registry
  API without the caller writing to the region via `memcpy` / `WriteProcessMemory`" -- the indirect
  pattern leaves exactly that fingerprint.
- Hook at the syscall layer where attacker-chosen bytes end up in attacker RX memory via
  `NtWriteFile` output: the syscall still crosses the user/kernel boundary and can be observed by
  minifilters / Minifilter-ETW providers.

## Why It's Interesting

Indirect memory writing illustrates a design principle: any system API with a caller-supplied output
pointer is a latent write primitive. The attacker is not calling anything AV would classify as
malicious -- they're calling `WriteFile`. The signatures catch up eventually, but the pattern can be
reused with the next output-pointer API, and the next one, and so on.

Related reading:
- "WriteProcessMemory alternatives" (Red Team Notes, Rastamouse)
- Microsoft's own AMSI documentation on `AmsiScanBuffer` scan hooks.
- The VoidGuard project (`app/src/protect/lazy_importer.hpp`) already uses PEB walks + hashed imports
  for a different leg of the same evasion story.
