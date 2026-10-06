---
name: source-netvars
description: "Valve **Source 1** and **Source 2** games expose replicated entity state through **ClientClass → RecvTable → RecvProp** chains and **CreateInterface**-exported engine interfaces. Cheat SDK and off"
metadata:
  type: game-security
  source: awesome-game-security/wiki
  topics: [game-engine, game-hacking, reverse-engineering]
---


# Source NetVars

Valve **Source 1** and **Source 2** games expose replicated entity state through **ClientClass → RecvTable → RecvProp** chains and **CreateInterface**-exported engine interfaces. Cheat SDK and offset tooling walks these structures to map class names to network property offsets.

## Source availability vs license

Distinguish **open-source engines**, **licensed engine source**, **SDK game code**, and **reference-source subsets** when choosing ground truth. Official [[source-sdk-2013]] (ValveSoftware) and community SDK trees carry non-commercial or mod-specific license terms—repository visibility in the collection does not imply unrestricted reuse or parity with shipped game binaries. NetVar offsets derived from a leaked or SDK tree still require verification against the target game build on the [[engine-trust-boundaries]] artifact axis.

## NetVar parsing workflow (Source 1)

1. Locate `CHLClient` and walk the **ClientClass** linked list
2. For each class, enumerate **RecvTable → RecvProp** entries
3. Build offset map: `class name → property name → offset` (e.g. `CCSPlayer → m_iHealth → 0x100`)
4. Tools: auto-updating CS:GO signature/offset dumps such as [[hazedumper]] (frk1; JSON/TOML/YAML/C++/C#/VB; `config.json` byte patterns for `dwClientState`, `dwEntityList`, netvars; cheat / game:csgo [Offset]), maintained CS:GO offset databases such as [[blazedumper]] (Akandesh; JSON + C++/C# defs; signature patterns + companion updater; cheat / game:csgo [Offset]), runtime signature/netvar dumpers such as [[gh-offset-dumper]] (pattern scan → headers/JSON; Source engine), title-specific Apex Legends live-process dumpers such as [[apex-legends-offset-dumper]] (dhanax26; interfaces, netvars, SwapChain pointers; cheat / game:apex legends `[Offset]`), maintained headers such as [[offsets]], patch-updated CS:GO offset feeds such as [[csgo-offsets]] (gmh5225; netvar dumps, interface pointers, signature patterns; cheat / game:csgo [Offset]), automated SDK generators such as [[valvegen]] (CallumCVM; C++; networked class/data-table parse from client metadata → class definitions and offsets; [SDK Generator]), generated SDKs such as [[sdk]] and [[csgo-sdk]] (gmh5225 + bloesway forks; C++; netvar structures / interfaces / signatures plus SDK generation + hooking; bloesway fork emphasizes rendering / networking / animation; cheat / game:csgo [SDK]), corrected header trees such as [[csgo-sdk-improved]] (gmh5225; fixed classes, extra interfaces, fuller netvar coverage vs leaked SDKs; cheat / game:csgo [Internal]), and live offset **streaming** to cheat clients via [[offset-streaming]] (gmh5225; C/C++; Some Tricks / Windows Ring3), plus dynamic value resolution tables such as [[dvrt]] (gmh5225; maintain/update offsets at runtime on module load/relocation; cheat [Offset])

Source 2 extends the model with schema-driven layouts; generators such as [[source2gen]] and multi-game dumps such as [[source2sdk]] produce C++ class/enum headers from exposed schema. Pre-generated multi-game reference dumps such as [[source2dumps]] (anarh1st47; netvars, interfaces, class IDs; Dota 2, Artifact, HL:Alyx, Sandbox; `[Dump]`) provide static layout listings for offset tracking without running generators. Live-process schema + RTTI tools such as [[dezlock-dump]] (Deadlock/CS2/Dota 2; class hierarchies, netvars, interfaces, protobuf, singletons; WebSocket live bridge) extract the same layout artifacts at runtime without offline source2gen. CS2-specific live offset/interface dumpers such as [[cs2-dumper]] (a2x; Rust; memflow on Windows/Linux; C#/C++/Rust/JSON output; cheat / game:cs2 `[Dump]`) automate the same per-patch refresh for CS2 externals and analysts. CS2 DMA externals such as [[hoozi-cs2-dma]] resolve offsets at attach via pattern scanning plus Source 2 schema traversal, with hourly signature sync and per-build caching so no manual offset files are required.

## Key interfaces (CreateInterface export)

| Interface | Typical use |
|-----------|-------------|
| `IVEngineClient` | Engine client services |
| `IClientEntityList` | `GetClientEntity(index)` entity list; live-process entity-list discovery tools such as [[gh-entity-list-finder]] (x64/x86 scan for likely list addresses) complement signature dumpers |
| `IEngineTrace` | Ray/world traces |
| `ICvar` | `FindVar("sv_cheats")` and console variables |
| `ISurface` / `IPanel` | Overlay rendering (Source 1 HUD/ESP lane); internal bases such as [[csgo-cheat-base]] wrap these interfaces for DirectX surface drawing and glow ESP; full-source learning frameworks such as [[deadcell-csgo]] (EternityX; aiming, visuals, config, menu modules; build-from-source CS:GO cheat architecture study) illustrate modular internal feature layout beside scaffold bases; modular scaffolds such as [[digital-sdk]] pair dedicated netvars/rendering modules with CreateMove and Direct3D reset hooks for ESP, chams, and autowall features |

Interface vtables and netvar tables drift per game build—verify against the target binary. Pair with [[research-rigor]] when porting offsets across patches.

## Ground-truth sources

UE4 movement plugins such as [[pbcharactermovement]] (ProjectBorealis; recreates HL2/Source bunnyhopping, surfing, strafe boosting, wall strafing, and advanced crouch on `UCharacterMovementComponent`; source + prebuilt binaries) show how classic Source movement mechanics translate to Unreal integration rather than RecvTable offset workflows. Open or leaked trees such as [[source-engine]], AlliedModders HL2 SDK references such as [[hl2sdk]] (alliedmodders; C/C++; client/server/game logic headers + mod/plugin build infrastructure; Half-Life 2 era Source 1 SDK), official Valve **Source SDK 2013** such as [[source-sdk-2013]] (ValveSoftware; HL2/HL2DM/TF2 game+engine code; VS + Steam Runtime Linux builds; non-commercial mods), Orange Box SDK trees such as [[source-sdk-orangebox]] (gmh5225; shader/render/driver-oriented Source 1 SDK), [[cstrike15-src]], and CS:GO mod source trees such as [[csso-src]] (gmh5225; client/server logic, weapons, movement, engine interfaces; CSGO Mod) help validate ClientClass/RecvTable layouts. CS2 offset dumps such as [[cs2-offsets]] and Dota 2 layout dumps such as [[dota2dumped]] (netvar offsets, interface pointers, class headers after patches) illustrate the Source 2 netvar/entity-layout lane; CS2 research collections such as [[cs2-things]] (gmh5225; VScript; RE structures / offset dumps / SDK snippets / entity layouts / netvars / engine interfaces; cheat / game:cs2) document the same layout artifacts for Source 2 RE; CS2 SDK headers such as [[cs2-sdk]] (gmh5225/cs2_sdk and cs2-sdk forks; C/C++; SDK generation / simplified Source 2 layout; driver / rendering / networking; DX11 + Vulkan; cheat / game:cs2 [SDK]) supply the foundational type system for that lane; reverse-engineered internal SDK headers such as [[cs2-internal-sdk]] (clouddss; C++; class defs, interface pointers, netvar offsets, schema structures; cheat / game:cs2 [Internal]) extend it for in-process hooking; browser radar clients such as [[cs2-webradar]] (gmh5225 and clauadv forks; entity positions via memory analysis for web display; cheat / game:cs2) consume the same artifacts as overlay cheats; CS2 FOV changer samples such as [[cs2-fov-changer]] (gmh5225; hooking / memory analysis; cheat / game:cs2 [FOV changer]) illustrate camera-state manipulation in the same Source 2 layout lane.

## Related

[[engine-trust-boundaries]] · [[unreal-object-model]] · [[il2cpp]] · [[valvegen]] · [[sdk]] · [[csgo-sdk]] · [[csgo-sdk-improved]] · [[csgo-offsets]] · [[hazedumper]] · [[blazedumper]] · [[offsets]] · [[offset-streaming]] · [[dvrt]] · [[gh-offset-dumper]] · [[apex-legends-offset-dumper]] · [[gh-entity-list-finder]] · [[source2gen]] · [[source2sdk]] · [[source2dumps]] · [[dezlock-dump]] · [[cs2-dumper]] · [[dota2dumped]] · [[cs2-offsets]] · [[cs2-sdk]] · [[cs2-internal-sdk]] · [[cs2-things]] · [[cs2-webradar]] · [[cs2-fov-changer]] · [[source-engine]] · [[hl2sdk]] · [[source-sdk-2013]] · [[pbcharactermovement]] · [[source-sdk-orangebox]] · [[cstrike15-src]] · [[csso-src]] · [[csgo-cheat-base]] · [[deadcell-csgo]] · [[csgo-internal-base]] · [[research-rigor]] · [[overviews/game-engine]] · [[overviews/game-hacking]]
