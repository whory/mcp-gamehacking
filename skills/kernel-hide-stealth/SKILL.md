---
name: kernel-hide-stealth
description: Kernel-level hiding and stealth techniques -- hide drivers/threads/processes, trace cleaners, manual map into signed drivers, codecave injection, minifilter abuse, memory cloaking.
metadata:
  type: reference
  source: awesome-game-security/README
  topics: [hide-driver, hide-process, trace-cleaner, manual-map, codecave, minifilter, stealth]
---

# Kernel Hide & Stealth

Techniques to make kernel-mode code invisible to anti-cheat and forensics.

Related: [[kernel-hooks-ssdt-callbacks]], [[vulnerable-driver-exploits]], [[efi-driver-bootkit]]

---

## Hide Driver

| Technique | Tools | How |
|-----------|-------|-----|
| Flink/Blink unlink | nbqofficial/HideDriver | Remove from PsLoadedModuleList (DKOM) |
| MiProcessLoaderEntry | ExpLife0011/HideDriver | Kernel API-based removal |
| Manual map into signed driver | armvirus/SinMapper | Map code into legitimate driver's memory |
| Discarded section map | 0xf1a/DSMM | Map into driver's discarded sections |
| Large page map | VollRagm/lpmapper | Manual map to large page driver |
| Signed driver map | armvirus/CosMapper | Map as signed driver |
| EFI manual map | ekknod/sumap | Map from UEFI before OS |
| Session driver | gmh5225/Driver-SessionMapper | Load as session-space driver |
| Hijack existing driver | gmh5225/Driver-DriverNoImage | Replace existing driver image |
| Codecave injection | rogerxiii/kernel-codecave-poc | Find and use codecaves in loaded drivers |

---

## Hide Thread

| Tool | Technique |
|------|-----------|
| kitty8904/blanket | Hide kernel thread from enumeration |
| Rwkeith/Diglett | Hide kernel thread |
| gmh5225/Driver-HideKernelThread-IoCancelIrp | Hide via IoCancelIrp |
| Cracked5pider/KaynStrike | Spoof thread start address |

---

## Hide Process / File

| Tool | Technique |
|------|-----------|
| JKornev/hidden | Kernel-mode file/process/registry hiding framework |
| jxy-s/herpaderping | Process herpaderping (modify on-disk after mapping) |
| sina85/hide-file | Kernel file hiding |
| ch3rn0byl/ANTfs | Kernel file deletion |
| KANKOSHEV/NoScreen | Hide window from capture |
| gmh5225/WindowProtect | Window protection |
| gmh5225/Driver-Systemthread-from-PspCidTable-src | Hide process/thread/handle via PspCidTable |
| huntandhackett/process-cloning | Clone process |

---

## Driver Trace Cleaners

After loading, remove evidence of the driver ever being loaded.

| Tool | What it cleans |
|------|---------------|
| BadPlayer555/TraceCleaner | PiDDB, MmUnloadedDrivers, CI.dll BigPool |
| Sentient111/ClearDriverTraces | Driver load traces |
| CI.dll + BigPool analysis | Exploring CI.dll cache for driver artifacts |

---

## Minifilter Abuse

| Tool | Technique |
|------|-----------|
| Kudaes/Puzzle | Windows minifilter abuse PoCs for concealment |
| zensenzay/memfilter-fn-driver | Minifilter for file/registry hiding + handle stripping |
| wesmar/VaultGuard | FSFilter minifilter: hide, lock, read-only, block exec |

---

## Memory Hiding

| Tool | Technique |
|------|-----------|
| KelvinMsft/NoTruth | Hide memory regions via VT (hypervisor-based) |
| EBalloon/MapPage | Self-mapping driver (no loader traces) |
| gmh5225/memory-relocalloc | Use .reloc section instead of allocation calls |
| LloydLabs/shellcode-plain-sight | Hide shellcode in large memory regions |

---

## Callback Hiding

| Tool | What |
|------|------|
| nlepleux/MappedCallback | Hide kernel callbacks from enumeration |
| UCFoxi/NotifyRoutineHijackThread | Hijack PspCreateThreadNotifyRoutine |

---

## Android / Mobile

| Tool | Platform |
|------|----------|
| reveny/Android-Library-Remap-Hide | Remap library to evade detection (Android) |
| Anatdx/Kasumi | Kernel path manipulation/hiding (Android GKI/Linux) |
| longpoxin/hideroot | Hide Magisk root |

---

## Stealth Checklist

```
1. Driver loading:
   □ Use vulnerable driver or EFI mapper (no DSE violation)
   □ Clean PiDDB cache entry
   □ Clean MmUnloadedDrivers
   □ Clean CI.dll BigPool cache
   □ Remove service registry key

2. Runtime:
   □ Hide from PsLoadedModuleList (Flink/Blink)
   □ Hide kernel threads (blanket start address)
   □ Cloak memory allocations (VT or .reloc reuse)
   □ No minifilter registration (or hijack existing)

3. Communication:
   □ Use .data pointer swap (no new device objects)
   □ Or shared memory (no IOCTL)
   □ Or registry callbacks

4. Cleanup on unload:
   □ Restore all hooks
   □ Clean all traces
   □ Free mapped memory
```
