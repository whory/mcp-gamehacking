---
name: efi-driver-bootkit
description: UEFI/EFI driver development and bootkit reference -- EFI manual mappers, runtime memory access, SMBIOS/HWID spoof at boot, NMI blocking, SMM backdoors, and Secure Boot bypass.
metadata:
  type: reference
  source: awesome-game-security/README
  topics: [uefi, efi-driver, bootkit, manual-map, smbios-spoof, smm, secure-boot]
---

# EFI Driver & Bootkit

UEFI-level persistence and memory access: code runs before the OS kernel loads,
making it invisible to kernel-mode anti-cheat and OS-level forensics.

Related: [[byovd]], [[vulnerable-driver-exploits]], [[vgk-secure-boot-spoof]]

---

## Development Frameworks

| Tool | What |
|------|------|
| SamuelTulach/EasyUefi | Visual Studio template for GNU-EFI |
| mrexodia/EfiCMake | CMake-based EFI build system |
| Th3Spl/SimpleUEFI | UEFI for MSVC, easy setup |
| Shtan7/VisualUEFI-2.0 | Debug with CLion + Clang + GDB |
| tandasat/MiniVisorPkg | Minimal hypervisor as UEFI package |

---

## EFI Manual Mappers

Load unsigned kernel drivers from UEFI before DSE/PatchGuard initialize.

| Mapper | Notes |
|--------|-------|
| btbd/umap | Original EFI manual mapper |
| ekknod/sumap | Simplified EFI mapper |
| xtremegamer1/xigmapper | Feature-rich EFI mapper |
| Valthrun/valthrun-uefi-mapper | Valthrun project's mapper |
| sa413x/UEFI-Bootloader | Simple mmapper using UEFI runtime driver |

---

## EFI Memory Access (RPM)

Read/write game memory from EFI runtime services -- survives OS boot,
invisible to kernel anti-cheat.

| Tool | Method |
|------|--------|
| SamuelTulach/efi-memory | EFI runtime service RPM |
| TheCruZ/EFI_Driver_Access | EFI-based process memory access |
| ekknod/SubGetVariable | RPM via GetVariable runtime service |

---

## HWID Spoofing at Boot

Modify SMBIOS/serial data before Windows reads it -- undetectable by OS-level checks.

| Tool | What |
|------|------|
| SamuelTulach/rainbow | EFI HWID spoofer |
| SamuelTulach/negativespoofer | Alternative EFI HWID approach |
| Th3Spl/PerfectSMBios | SMBIOS serial spoof before bootx64.efi |

---

## Bootkits & Persistence

| Tool | Technique |
|------|-----------|
| ajkhoury/UEFI-Bootkit | Generic UEFI bootkit |
| gmh5225/Driver-efi-bootkit | EFI bootkit driver |
| gmh5225/bootlicker | Generic UEFI bootkit for usermode execution |
| SamuelTulach/PwnedBoot | Uses Windows bootloader as shim to bypass Secure Boot |
| wesmar/EfiTool | NT AUTHORITY\SYSTEM before logon via gBS->ExitBootServices hook |
| iss4cf0ng/OpenPetya | MBR bootkit (Real->Protected mode, NTFS encryption) |

---

## SMM (System Management Mode)

Ring -2 execution. Runs below the hypervisor, invisible to everything.

| Tool | Notes |
|------|-------|
| ekknod/smm | SMM cheat -- memory access from SMM |
| Oliver-1-1/SmmInfect | SMM driver infection |
| Cr4sh/SmmBackdoorNg | UEFI SMM backdoor |

---

## Utility

| Tool | What |
|------|------|
| ekknod/Nmi | Block NMI interrupts from EFI |
| wesmar/NTFS_EFI | Native NTFS R/W UEFI driver |
| ekknod/efi-monitor | Hook MmCopyMemory PatchGuard-safe |
| ekknod/KiSystemStartupMeme | Custom KiSystemStartup from EFI |
| NoInitRD/Memory-Dump-UEFI | RAM dump from UEFI |
| gmh5225/OfflineCrashDumpUefi | Offline crash dump from UEFI |
| Oliver-1-1/UEFI-Graphic | Graphics rendering in UEFI |
| Jamesits/BGRTInjector | Boot screen image replacement |
| leap0x7b/luaboot | Scriptable UEFI bootloader (Lua) |
| wesmar/undervolter | UEFI CPU undervolting via MSR/MMIO |

---

## Attack Flow

```
1. Build UEFI DXE driver or runtime driver
2. Flash to ESP (EFI System Partition) or load via UEFI shell
3. Hook ExitBootServices or runtime services
4. At boot:
   - Spoof SMBIOS serials (before OS reads them)
   - Map unsigned driver into kernel space
   - Install runtime memory access service
   - Block NMI for anti-debug evasion
5. After OS boot:
   - Usermode communicates via EFI runtime services (GetVariable/SetVariable)
   - Memory R/W bypasses all kernel protections
```

---

## Detection Challenges

- UEFI code runs before any OS security initializes
- Secure Boot bypass (PwnedBoot, leaked keys) negates firmware validation
- SMM is invisible to hypervisors and kernel debuggers
- EFI runtime services persist across OS lifetime
- Only firmware-level attestation (TPM PCR, Secure Boot measurement) can detect
