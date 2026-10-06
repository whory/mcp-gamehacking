---
name: gh-ue4-dumper
description: GH Unreal Engine Dumper -- Cheat Engine plugin for UE4 games (4.11-4.27) enabling class enumeration, UFields/UFunctions browsing, object dumping, UE structure dissector, method invocation via Lua API, console unlock, CheatManager construction, and console commands.
---

# GH Unreal Engine Dumper (PeaceBeUponYou / Mewspaper)

Cheat Engine plugin (autorun folder) for UE4 games. Supports versions 4.11-4.27 officially.

## Installation

1. Install Cheat Engine 7.4.
2. Browse to `<CE install dir>\autorun\`.
3. Extract dumper contents there.
4. Launch CE, attach to UE4 game, use new "Unreal Engine Tool" dropdown.

## Initialization

Click "Init Unreal Engine Tool" -> injects pipe server into game.
Auto-detects UE version from base module, build info, crash report binary.
Manual fallback: enter version without dots (e.g. "426" for 4.26).

## Data Collector

"Scan Objects" -> retrieves all active instances. Set auto-scan interval for dynamic objects.
"Init Class List" -> populates left panel. Search bar filters classes (contains, case-insensitive).
Click class -> populates UFields and UFunctions tables.

UFields: offset | field name | type.
UFunctions: name | owner class | return type + params | address.
"Load Objects" -> lists live instances of selected class. Copy address for dissector.

## UE Structure Dissector

Enable: "Enable Structure Dissect" in main menu (choose to include inherited fields).
Memory View -> Tools -> Dissect Data/Structures.
Paste object address, Structures -> Define New Structure, enter class name.
Browse fully named fields, compare objects, auto-populated from engine reflection.

## UE Architecture

UObject = base class of all engine objects. Everything inherits from it.
AActor = UObject that exists physically in world (player, enemies, weapons, environment).
UGameEngine -> GameInstance -> LocalPlayer[0] -> PlayerController -> CheatManager.
GEngine: signature scanner auto-registers as "GEngine" Lua symbol.

## Lua API (key functions)

```lua
UE_GetAllObjectsOfClass("ClassName")     -- returns [{obj, name}]
UE_GetObjectData(obj)                    -- returns {Name, FullName}
UE_GetFieldsOfObject(obj, 1)            -- returns [{name, offset, type}]
UE_GetFunctionsOfObject(obj, 1)         -- returns [{name, ufunction, owner, params}]
UE_CheckAddressAsObject(addr)           -- 0 if invalid UObject
UE_InvokeActorEvent(actor, ufunction, args)  -- invoke on AActor descendant
UE_InvokeObjectEvent(obj, ufunction, args)   -- invoke on any UObject
UE_GetFunctionParameters(ufunction)     -- returns param table
UE_DumpConsoleFunctions()               -- dumps all console-callable functions to desktop txt
UE_DumpInheritanceOfClass("ClassName") -- dumps inheritance hierarchy
```

Args structure: `{{type=szPointer, size=8, value=ptr}, {type=szPointer, size=8, value=ptr}}`
Return value: byte table (use byteTableToQword for pointer types).

## Method Invocation Example

```lua
local player_controllers = UE_GetAllObjectsOfClass("OMDPlayerController")
for _, ctrl in ipairs(player_controllers) do
    local obj = ctrl.obj
    local funcs = UE_GetFunctionsOfObject(obj, 1)
    for _, f in ipairs(funcs) do
        if f.name == "EnableCheats" then
            UE_InvokeActorEvent(obj, f.ufunction, {})
        end
    end
end
```

## Unlocking Console (ViewportConsole construction)

UConsole object must be created and assigned to GameViewportClient.ViewportConsole.
Steps:
1. Get GEngine -> GameInstance -> LocalPlayer[0] -> ViewportClient.
2. Get UGameplayStatics default object, get SpawnObject UFunction.
3. Get ConsoleClass from GEngine.ConsoleClass OR find "Class /Script/Engine.Console" in objects.
4. Call SpawnObject(ConsoleClass, ViewportClient) -> get UConsole ptr.
5. Write UConsole ptr to ViewportClient.ViewportConsole address.
Console key: backtick (~) or tilde to open in-game.

## CheatManager Construction

CheatManager = member of PlayerController, contains Slomo/Teleport/Summon/etc.
If PlayerController.CheatManager is null:
1. Get CheatClass from PlayerController.CheatClass field.
2. Call SpawnObject(CheatClass, PlayerController).
3. Write result to PlayerController.CheatManager.
BlueprintGeneratedClass games: find class by full name (e.g. "BlueprintGeneratedClass /Game/.../BP_CheatManager.BP_CheatManager_C").

## Console Commands (UE_DumpConsoleFunctions)

Outputs `[GameName.exe] Console Functions.txt` to desktop.
Format: full function name including owner class.
To find params: search class in Data Collector, look at function row.
Executed via: in-game console (backtick), or UE_InvokeActorEvent/ObjectEvent in Lua.
Common commands: `slomo 10` (speed), `teleport`, `toggledebugcamera`, `summon`, `god`.

## Troubleshooting

Pipe disconnect: uncheck then recheck "Init Unreal Engine Tool".
Version not detected: enter manually (e.g. "427").
CheatManager null: construct manually (not all games ship CheatManager).
Multiple GameEngine instances: UE_GetAllSubObjectsOfClass("GameEngine") + filter out "Default" objects.

## Tested Games (confirmed working)

Borderlands 3 (4.20), Deep Rock Galactic (4.27), Grounded (4.27), Satisfactory (4.26), Stray (4.27), Maneater (4.25), Little Nightmares II (4.24), State of Decay 2 (4.13), among 20+ others.