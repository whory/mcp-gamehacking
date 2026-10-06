---
name: gh-il2cpp
description: IL2CPP Unity game hacking -- IL2CPP Dumper for symbol extraction, MelonLoader for runtime mod injection, IDA/Ghidra import scripts, and HarmonyX patching.
---

# GH IL2CPP Game Hacking

## What Is IL2CPP

Unity IL2CPP compiles C# to native C++ code at build time.
No Assembly-CSharp.dll readable in DnSpy directly -- GameAssembly.dll is native binary.
Harder than Mono, easier than pure native: all symbol metadata is preserved in global-metadata.dat.

## Tools

- IL2CPP Dumper (Perfare/Il2CppDumper on GitHub): extracts symbols from metadata + binary
- DnSpy: browse generated dummy DLLs (no code, but class/method/field names intact)
- IDA Pro or Ghidra: for actual instruction-level reverse engineering with imported symbols
- MelonLoader: universal mod loader for Unity (Mono + IL2CPP); run C# mods at runtime
- Unity Explorer (melon/mod): live runtime inspector for the game scene

## IL2CPP Dumper Usage

Inputs required:
1. GameAssembly.dll (native binary in game root)
2. global-metadata.dat (at GameName_Data/il2cpp_data/Metadata/)

Run: il2cppdumper GameAssembly.dll global-metadata.dat output_dir

Output:
- DummyDll/: stub DLLs readable in DnSpy (classes, fields, methods -- no code)
- script.json + il2cpp.h: import scripts for IDA/Ghidra
- ida_with_struct.py / ghidra.py: import scripts

Importing into IDA: File > Script Files > select ida_with_struct.py, point at script.json + il2cpp.h
Importing into Ghidra: parse il2cpp_ghidra.h, then run ghidra.py script, point at script.json

## MelonLoader Mod Setup

Install: MelonLoader installer, select game .exe, click Install.
Run game once to generate MelonLoader/Managed/ dummy DLLs.

Project type: Class Library (.NET 6.0)
References: MelonLoader.dll from game install dir

AssemblyInfo.cs:
    [assembly: MelonInfo(typeof(MyMod), "My Mod Name", "1.0.0", "Author")]
    [assembly: MelonGame("Developer", "GameName")]

Mod class:
    public class MyMod : MelonMod {
        public override void OnInitializeMelon() {
            // runs after MelonLoader registers mod; safe to call game code here
        }
    }

Place compiled DLL in game/Mods/ directory.
Dependencies go in game/UserLibs/.

## HarmonyX Method Patching

MelonLoader includes HarmonyX for runtime method patching:
prefix patch: runs before original method (can skip original)
postfix patch: runs after original method
transpiler: modifies IL instructions

This allows patching any game method without modifying game files.

## Workflow

1. Run IL2CPP Dumper to get dummy DLLs and import scripts
2. Browse dummy DLLs in DnSpy to find target classes and methods
3. Import symbols into IDA/Ghidra for code-level analysis when needed
4. Use MelonLoader + Unity Explorer for live runtime inspection
5. Write MelonMod class accessing game classes directly (dummy DLLs as references)