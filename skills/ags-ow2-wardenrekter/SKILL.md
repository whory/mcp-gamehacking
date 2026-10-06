---
name: ags-ow2-wardenrekter
description: "A DLL that disables Overwatch 2's Warden anti-cheat protections by patching multiple detection vectors at DLL_PROCESS_ATTACH: it overwrites KiUserExceptionDispatcher with a RET (0xC3) to kill Warden's"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ow2-wardenrekter
---

# OW2 wardenrekter

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ow2-wardenrekter

## Description

A DLL that disables Overwatch 2's Warden anti-cheat protections by patching multiple detection vectors at DLL_PROCESS_ATTACH: it overwrites KiUserExceptionDispatcher with a RET (0xC3) to kill Warden's VEH-based INT3 hook monitoring, NOPs DbgBreakPoint/DbgUserBreakPoint integrity checks, zeroes PEB.BeingDebugged and NtGlobalFlag to hide debugger presence, stubs GetTickCount64 to defeat timing checks, and patches NtQuerySystemInformation to block system information queries.
It also sets hardware debug register DR0 via SetThreadContext to demonstrate debug register manipulation against Warden's hardware breakpoint detection.
It is mainly useful for game security researchers studying Warden anti-cheat bypass techniques including VEH hook removal, PEB spoofing, and API patching in Overwatch 2.
