---
name: windows-memory-architecture
description: Windows virtual-memory architecture -- user/kernel split, page tables, process regions (image/heap/stack), page states, NX/DEP, memory-mapped files, copy-on-write.
---

# Windows Memory Architecture

## Virtual Address Space Model

Each Windows process runs in its own private virtual address space; it never touches physical RAM directly.
64-bit user mode: ~128 TB of theoretical VA. Only a fraction is backed by physical pages at any moment.
Translation: CPU MMU walks page tables maintained by the Memory Manager, mapping VA → PFN (physical frame number).

## User Mode vs. Kernel Mode

User mode: owned by the process, isolated per-process. Cannot be read/written by other user-mode processes without an opened handle.
Kernel mode: shared by the OS; drivers, kernel subsystems, system structures. CPU privilege-level enforcement (CPL=0 vs CPL=3).

## Process Region Layout

- **Image region** -- code/static data loaded from the PE file (`.text`, `.data`, `.rdata`, `.rsrc`).
- **Heap** -- dynamic allocations via `HeapAlloc` / `malloc`.
- **Stack** -- one per thread; locals, args, return addresses.
- **Memory-mapped files** -- views over disk-backed sections.
- **Shared sections** -- physical pages mapped into multiple processes.
- **Reserved / committed** -- VirtualAlloc / NtAllocateVirtualMemory regions.

## Pages and States

Page size: 4 KB on x86-64 (large pages 2 MB / 1 GB optional).
Page states:
- Free -- never allocated.
- Reserved -- VA range reserved but no backing yet.
- Committed -- backed by RAM or pagefile. Guaranteed to resolve on access.
- Paged out -- committed but residing in `pagefile.sys` until next access.

## Page Protection Attributes

Set per page via `VirtualProtect` / `NtProtectVirtualMemory`:
`PAGE_NOACCESS`, `PAGE_READONLY`, `PAGE_READWRITE`, `PAGE_EXECUTE`, `PAGE_EXECUTE_READ`, `PAGE_EXECUTE_READWRITE`, `PAGE_WRITECOPY`, `PAGE_GUARD`.
Hardware NX bit prevents execution of non-executable pages (foundation of DEP).

## Memory-Mapped Files

`CreateFileMapping` + `MapViewOfFile` -- share a file-backed region, auto-paged by MM.
Pagefile-backed sections (hFile = INVALID_HANDLE_VALUE) give shared memory across processes without a disk file.

## Copy-On-Write

`PAGE_WRITECOPY` -- shared read-only page becomes private on first write.
Used for forked DLL `.data` sections and section-mapped file views so one process's writes don't affect siblings.

## Shared Sections

Multiple processes can map identical physical pages into different virtual addresses.
Used by: KnownDlls (ntdll, kernel32), `\BaseNamedObjects` sections, lots of CLR/COM infrastructure.

## Internal Kernel Structures

Memory Manager tracks pages via:
- **PFN database** -- array indexed by physical frame number; records state (active, standby, modified, free, zeroed).
- **Working sets** -- per-process set of pages currently in RAM.
- **PTE / PDE** -- actual hardware page-table entries built from these structures.

## Why This Matters for RE / Game Hacking

- Injected code must land in a committed, executable (NX-cleared) page.
- Manual mapping bypasses the loader; pages are allocated and sections copied manually.
- Anti-cheat scans working sets and `MEM_PRIVATE` executable regions outside module ranges.
- Memory-mapped files leave artifacts in `\Device\PhysicalMemory` and section objects even after process exit.