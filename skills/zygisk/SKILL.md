---
name: zygisk
description: "Magisk **Zygisk** API for native modules that hook the Android app specialization path—code runs inside `zygote`/`app_process` during fork before the target app's Java bootstrap completes. Primary i"
metadata:
  type: game-security
  source: awesome-game-security/wiki
  topics: [mobile-security, game-hacking]
---


# Zygisk

Magisk **Zygisk** API for native modules that hook the Android app specialization path—code runs inside `zygote`/`app_process` during fork before the target app's Java bootstrap completes. Primary injection surface for early native load, DEX extraction, and GLES overlay menus on rooted devices.

## Module lifecycle

1. **`onLoad`** — receive `zygisk::Api` + `JNIEnv`; stash handles for later hooks.
2. **`preAppSpecialize`** — runs before the app process specializes (package name / UID known); filter target packages here.
3. **`postAppSpecialize`** — runs after specialization; inject native agents, hook `dlopen`, or attach render/input hooks before `Application.onCreate` / static class init.

Modules compile as `.so` loaded by Magisk's Zygisk loader ([[magisk]] DenyList / Shamiko may hide root from apps that also scan Zygisk artifacts).

## Root-hide modules

- **[[zygisk-magiskhide]]** — Zygisk Magisk module recreating MagiskHide-style concealment; native code hides Magisk mounts and patches sensitive system properties root checks probe.
- **[[nohello]]** — Zygisk module hiding root and Zygisk artifacts; blacklist/whitelist modes and mount-rule unmount logic; Magisk/KernelSU/APatch; root-detection resistance research.

## Standalone runtimes

- **[[rezygisk]]** — open-source C reimplementation of the Zygisk API stack; Magisk/KernelSU/APatch; lighter binaries, module packaging, and operational tooling for transparent Zygisk-compatible injection.
- **[[zygisk-on-kernelsu]]** — standalone Zygisk runtime with API compatibility for KernelSU; can replace Magisk built-in Zygisk; documents KernelSU/Magisk/APatch requirements and compatibility notes.
- **[[zygisk-mod]]** — standalone Zygisk runtime interface (Kotlin + native); KernelSU/APatch/Magisk; alternative module-loading path when built-in or closed Zygisk stacks are unavailable; flexible process injection and module experimentation for security/modding research.

## Game-security uses

- **DEX/metadata extraction** — [[zygisk-dump-dex]] hooks `libdexfile.so` on Android 14/15.
- **Overlay menus** — [[zygisk-imgui-menu]] (fedes1to; ImGui + cURL; `hook.cpp`; cheat / render-draw); in-dev [[zygisk-imgui-mod-menu]] and hobby [[zygisk-imgui-modmenu]]; complements non-Zygisk GLES templates ([[imgui-native-modmenu]], [[imgui-unity]]).
- **Stealth Frida gadget** — [[ksurusda]] (Zygisk `postAppSpecialize`; Rusda anti-detection Frida kernel; library remapping, ptrace/startup anti-debug evasion; WebUI/JSON; TCP listen + offline script modes; KernelSU/Magisk/APatch).
- **Kernel + Zygisk RE stack** — [[integrated-kernel-module]] (Dispa1r; lsdriver LKM + rfrida_zygisk; PTE-remap memory R/W, wxshadow W^X shadow-page stealth breakpoints, ptrace-less Frida agent via anonymous-mmap ELF linker; virtual touch/gyro/GNSS; rooted Android game RE).
- **Conflict management** — managed-instrumentation workflows may disable conflicting Zygisk modules, reboot for analysis, then restore.
- **Module distribution** — curated MMRL catalog [[zamr]] indexes Zygisk runtimes, Zygisk Assistant, HMA-OSS Zygisk, and related root-hide/integrity modules for Magisk/KernelSU/APatch with hourly JSON manifest refresh.

Pair with [[research-rigor]] when generalizing injection timing across OEM/Android versions.

## Related

[[magisk]] · [[kernelsu]] · [[rezygisk]] · [[zygisk-on-kernelsu]] · [[zygisk-mod]] · [[zygisk-magiskhide]] · [[nohello]] · [[magiskhide]] · [[frida]] · [[ksurusda]] · [[integrated-kernel-module]] · [[il2cpp]] · [[zygisk-dump-dex]] · [[zygisk-imgui-menu]] · [[zygisk-imgui-mod-menu]] · [[zygisk-imgui-modmenu]] · [[zamr]] · [[fox-magisk-module-manager]] · [[mobile-anti-cheat]] · [[overviews/mobile-security]] · [[overviews/game-hacking]]
