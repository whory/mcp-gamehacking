---
name: gh-game-hacking-bible-1
description: GuidedHacking Game Hacking Bible Part 1 -- structured beginner curriculum: Cheat Engine, C++ external/internal trainers, DLL injection, detour hooks, debugging workflow.
---

# GH Game Hacking Bible Part 1

## Learning Order (Mandatory)

Practice game: Assault Cube v1.2.0.2 (x86, open source, no engine, tons of resources)
After AC: CSGO, COD4, Sauerbraten x64, then any game you want.
NEVER start on a new complex game -- 99% of beginners fail because they skip this.

Timeline: CE basics (1 month) -> C++ basics (2 months) -> basic trainers (3-6 months) -> aimbot/ESP without AC (6-12 months) -> start reversing AC (18 months+)

## CS420 Foundation (Must Watch)

8-video lecture series covering:
Memory editing basics, hex/decimal/binary, virtual memory, multilevel pointers, assembly editing.
Key concepts: Locate-Edit-Verify loop, DWORD/float/double types, VirtualQuery address space.

## Cheat Engine Skills Required

1. Find health address (float scan, "unknown initial value")
2. Find what accesses/writes to learn offsets
3. Structure Dissector (use ReClass.NET instead -- much better)
4. Pointer scan with pointermaps (restart game multiple times)
5. Assembly injection scripts

## C++ Required Functions

GetProcId() -- ToolHelp32Snapshot + Process32First/Next (NEVER use GetWindowThreadProcessId)
GetModuleBaseAddress() -- ToolHelp32Snapshot + Module32First/Next, returns uintptr_t
FindDMAAddy(hProc, ptr, {offsets}) -- ReadProcessMemory loop for pointer chains
ReadProcessMemory / WriteProcessMemory -- external R/W
GetAsyncKeyState() -- hotkeys in hack loop
GetExitCodeProcess() -- detect game still running (while loop gate)

## External Trainer Pattern

    DWORD procId = GetProcId(L"game.exe");
    HANDLE hProc = OpenProcess(PROCESS_ALL_ACCESS, NULL, procId);
    uintptr_t base = GetModuleBaseAddress(procId, L"game.exe");
    uintptr_t addr = FindDMAAddy(hProc, base + 0x10f4f4, {0xF8});
    while (GetExitCodeProcess(hProc, &exit) && exit == STILL_ACTIVE) {
        if (GetAsyncKeyState(VK_NUMPAD1) & 1) bHealth = !bHealth;
        if (bHealth) WriteProcessMemory(hProc, (BYTE*)addr, &val, sizeof(val), 0);
        Sleep(10);
    }

mem::NopEx() -- write 0x90 NOP bytes via WPM
mem::PatchEx() -- write specific bytes via WPM

## Internal DLL Pattern

DllMain DLL_PROCESS_ATTACH -> CreateThread -> HackThread
AllocConsole + freopen_s for debug output
GetModuleHandle(NULL) for base address (no WPM needed)
*(int*)(*localPlayerPtr + 0xF8) = 1337 -- direct pointer deref
FreeLibraryAndExitThread on hotkey to eject

Simple DLL injection: VirtualAllocEx + WriteProcessMemory(path) + CreateRemoteThread(LoadLibraryA)

## Detour / Hook

5-byte relative JMP (0xE9 + 4-byte offset) at hook site
Must NOP stolen bytes, execute them in __declspec(naked) function, jump back to src+len
VirtualProtect before + after to change page permissions
Anti-cheat note: hooking byte 0 of a function is trivially detected; use mid-function hook

## VS Debugger Workflow

Run as Admin (manifest UAC = requireAdministrator)
x86 project for x86 game, x64 for x64
Breakpoints + Watch window + Autos window
Attach to Process for internal DLL debugging
GetLastError() in Watch window for WinAPI error codes

## Core Rule: Stop Pasting

Never copy-paste code you don't understand.
Learn each piece from scratch -- you need RE + coding skills independently before combining them.