---
name: gh-kernel-dumper
description: Kernel-mode process dumping with KsDumper (Capcom driver), KDMapper (Intel CVE-2015-2291), Scylla IAT reconstruction, and PE-Sieve for dumping packed/protected processes.
---

# Kernel Mode Process Dumper

## Problem

Packed or obfuscated game binaries can't be statically analyzed -- IDA shows garbage. Dynamic analysis is blocked by anticheat. Solution: dump the unpacked process from kernel.

## KsDumper (EquiFox)

Uses Capcom.sys vulnerability to load unsigned KsDumperDriver.sys.
Components: LoadCapcom.bat, Capcom.sys, drvmap.exe (maps driver via Capcom exploit), KsDumperClient.exe (C# GUI), KsDumperDriver.sys (kernel read/reconstruct).

Steps:
1. Execute LoadCapcom.bat as admin (loads Capcom.sys service).
2. Execute LoadUnsignedDriver.bat as admin (runs drvmap.exe which exploits Capcom to map KsDumperDriver).
3. Run KsDumperClient.exe.
4. Click "Show System Processes", select target, right-click "Dump Main Module".
5. Load dump in IDA Pro or Ghidra.

Limitation: detected by EAC/BE/Vanguard (Capcom is blacklisted). May get a dump before kick depending on AC. Replace Capcom with another vulnerable driver (see hfiref0x/KDU list) to evade detection.

Windows 11 update: use mastercodeon314/KsDumper-11.

## KDMapper (Intel CVE-2015-2291)

Vulnerable driver: iqvw64e.sys (Intel NIC diagnostic, signed Nov 2013, not revoked).
Exploit: IOCTL 0x80862007 provides arbitrary kernel code execution via METHOD_NEITHER with no size validation.
KDMapper uses this to manually map your unsigned .sys driver into kernel memory.

Signed by Intel Corporation, SHA1, counter-signed by Symantec timestamp (valid until Dec 2020 -- but Microsoft continues loading it as cert not revoked).

Usage: `kdmapper.exe yourdriver.sys`

After mapping, clear traces:
- PiDDBCacheTable: stores (timestamp, driverName) pairs for blacklist checking
- MmUnloadedDrivers: ring buffer of recently unloaded drivers
- System thread detection: threads not belonging to loaded modules are suspicious
- System pool detection: pool allocations with no associated module

Source: TheCruZ/kdmapper (most maintained fork).

## Scylla (IAT Reconstruction)

When IDA shows a packed .exe as garbage, dump + fix with Scylla (built into x64dbg).
Steps:
1. Attach x64dbg to game, let it unpack in memory.
2. Open Scylla (plugin menu).
3. Select process, click "IAT AutoSearch", then "Get Imports".
4. Click "Dump" (saves .exe from memory).
5. Click "Fix Dump", select the dumped .exe.
6. Output: `*_SCY.exe` with reconstructed imports.
7. Drop in IDA Pro -- now decompilable.

Bug: use strlen(mask) not strlen(pattern) for null-byte patterns.

## PE-Sieve (hasherezade)

Automated dump + IAT reconstruction, also dumps shellcode and manually mapped code.
Command: `pe-sieve32.exe /imp 3 /shellc /pid <PID>`
- `/imp 3` = most advanced import reconstruction
- `/shellc` = dump shellcode/manually-mapped code too

Highest quality dump available. Recommended for serious RE work.

## Static vs Dynamic Analysis

Static: view file on disk (IDA on packed .exe = useless).
Dynamic: attach debugger to running process, dump after unpack.
Kernel dump: bypass usermode AC that blocks debugger attach.

## PE File Structure (for dump understanding)

DOS Header (MZ signature at +0, e_lfanew at +0x3C points to PE header).
NT Headers (PE\0\0 signature, COFF header, Optional header with ImageBase/EntryPoint/SizeOfImage).
Section Table: array of IMAGE_SECTION_HEADER (.text, .data, .rdata, .rsrc).
Import table (IAT): after dump, forward references need reconstruction via Scylla.