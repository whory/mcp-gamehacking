---
name: vgk-reverse-engineering
description: Reversing vgk.sys with Unicorn CPU emulator -- DriverEntry seed computation, xorshift state extraction, emulator setup for Windows kernel syscalls. GWorld sigscan vs heap walk tradeoffs.
---

# Reversing vgk.sys with Unicorn + GWorld Scanning

## vgk.sys DriverEntry Seed Computation

vgk.sys computes a seed at DriverEntry that initializes its integrity check state. Knowing the seed allows predicting validation values or spoofing the check.

### Unicorn Emulation Setup

Unicorn Engine (C/Python) emulates x86-64 code without running it on real hardware:

```python
from unicorn import Uc, UC_ARCH_X86, UC_MODE_64
from unicorn.x86_const import *

mu = Uc(UC_ARCH_X86, UC_MODE_64)

# Map memory regions
DRIVER_BASE = 0x140000000
mu.mem_map(DRIVER_BASE, 0x1000000)           # driver image
mu.mem_map(0xFFFFF80000000000, 0x10000000)   # kernel stub region
mu.mem_map(0x7FFE0000, 0x1000)               # KUSER_SHARED_DATA
mu.mem_map(0x20000, 0x10000)                 # stack

# Write driver bytes
with open("vgk.sys", "rb") as f:
    driver = f.read()
mu.mem_write(DRIVER_BASE, driver)

# Set up RSP, RIP
mu.reg_write(UC_X86_REG_RSP, 0x2FF00)
mu.reg_write(UC_X86_REG_RIP, DRIVER_BASE + entry_offset)
```

### Hooking Kernel Calls

vgk.sys calls `ExAllocatePool`, `RtlZeroMemory`, `KeQuerySystemTimePrecise`, etc.
Hook them in Unicorn to return controlled values:

```python
def hook_code(mu, address, size, user_data):
    # Check if at a CALL to ExAllocatePool
    if address == stub_ExAllocatePool:
        mu.reg_write(UC_X86_REG_RAX, 0x200000)   # fake pool address
        mu.reg_write(UC_X86_REG_RIP, mu.mem_read(mu.reg_read(UC_X86_REG_RSP), 8))  # fake ret
        mu.reg_write(UC_X86_REG_RSP, mu.reg_read(UC_X86_REG_RSP) + 8)

mu.hook_add(UC_HOOK_CODE, hook_code)
```

### Extracting the Seed

After emulating through DriverEntry:
1. Read the seed global from the driver's data section.
2. The seed is often stored as a QWORD at a known offset from the driver base.
3. Seed often based on: `KeQuerySystemTimePrecise` result XOR hardware serial XOR build number.

```python
# After emulation completes or at seed-write hook point:
seed = struct.unpack("<Q", bytes(mu.mem_read(DRIVER_BASE + seed_offset, 8)))[0]
print(f"Seed: {seed:#x}")
```

### Finding Seed Offset

In IDA/Ghidra:
1. Search for `KeQuerySystemTimePrecise` import.
2. Find all XREFs. The first in DriverEntry is seed init.
3. Trace backwards from that call to the global write.
4. Note the `.data` section offset.

## GWorld: Sigscan vs Heap Walk

### Sigscan (Fast, Brittle on Patches)

Pattern-scan the `.text` section for: `48 8D 05 ?? ?? ?? ?? 48 85 C0`
This is the `lea rax, [GWorld]` + `test rax, rax` pattern near GWorld usage.
Resolve RIP-relative: `target = addr + 3 + 4 + *(int32*)(addr+3)`.

Pro: < 10ms. Con: pattern changes after Valorant patches.
Mitigation: maintain 2-3 fallback patterns; auto-test all on each launch.

### Heap Walk (Slow, Robust)

Walk committed memory of the Valorant process looking for `UWorld` object signature:
1. `VirtualQueryEx` iterate from base -> `MEM_COMMIT, MEM_PRIVATE|MEM_IMAGE`.
2. For each page: look for `UObject` magic bytes (usually class pointer chain: `UWorld->UObject magic = 0x0000000100000000` pattern in header).
3. Validate candidate: check `UWorld->GameInstance` (offset 0x1D8) is non-null and points to committed memory.
4. Scan data segment for a pointer equal to the validated UWorld address.

Pro: works across patches without pattern updates. Con: 100-500ms, must run async.

### Hybrid (VoidGuard approach)

1. Try sigscan first.
2. If pattern fails (returns 0): fall back to heap walk.
3. Cache successful result in `vgc::GWorld`, set `vg_scan::s_ran = true`.
4. On next Valorant restart: s_ran is reset, rescans.

## Bluetooth MAC Spoofing (Firmware Level)

Bluetooth MAC can be spoofed at firmware level via HCI commands (some adapters):
```
# Linux (hciconfig / btmgmt)
sudo btmgmt power off
sudo btmgmt public-addr <new_mac>
sudo btmgmt power on
```
Windows: adapter-specific; Intel adapters have a vendor HCI command `0xFC05` that sets the BD_ADDR. Intel BT firmware exposes this via `\\.\BTHLEDevice` or via USB control transfer to the BT USB endpoint.
Registry: `HKLM\SYSTEM\CurrentControlSet\Enum\USB\VID_8087&PID_0026\...\DeviceParameters\LocalBdAddr` (per-adapter, Intel).

Note: AC detection of BT MAC is uncommon but exists in some implementations that collect all adapter addresses.