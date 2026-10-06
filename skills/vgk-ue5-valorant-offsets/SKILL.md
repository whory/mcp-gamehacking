---
name: vgk-ue5-valorant-offsets
description: Valorant-specific UE5 offsets and game data -- ComponentToWorld, bAbsoluteTransformDirty, Callout region names, weapon ObjIDs (Vandal/Phantom/Knife/etc.), GWorld sigscan vs heap scan.
---

# Valorant UE5 Game Data & Offsets

## ComponentToWorld (Bone Position Bug Fix)

`USkeletalMeshComponent` inherits from `USceneComponent`.
Field: `ComponentToWorld` (transform matrix used to convert component-space bones to world-space).

**Common mistake**: reading at old offset 0x1C0 or using `USceneComponent::GetComponentToWorld()`.

### bAbsoluteTransformDirty

`USkeletalMeshComponent` has `bAbsoluteTransformDirty` at offset `0x2A0` (bit flag).
If this bit is set, `ComponentToWorld` is stale -- bone positions will be wrong.

**Fix**: check the flag before using the transform:
```cpp
BYTE flags = R<BYTE>(mesh + 0x2A0);
bool dirty = (flags & 0x01) != 0;
if (dirty) continue;  // skip until transform is updated
FTransform ctw = R<FTransform>(mesh + 0x290);  // ComponentToWorld
```

## Callout Region Names

`AShooterCharacter` has `CalloutRegionTrackingComponent` at offset `0xA80`.
This component's `CurrentRegion` field at `0xF8` is a `FName` representing the callout region.

Resolve `FName` -> string via `FNamePool`:
```cpp
uintptr_t callout_comp = R<uintptr_t>(pawn + 0xA80);
uint32_t region_name_idx = R<uint32_t>(callout_comp + 0xF8);
std::string region = GetFNameString(region_name_idx);
// e.g. "A_Site", "Heaven", "CT_Spawn", "Mid", "B_Lobby"
```

Callout names are map-specific. Use them for ESP label overlay ("A Site", "B Lobby").

## Weapon ObjIDs (UObject OuterIndex)

Weapon types identified by `UObject.InternalIndex` (ObjID). Read from GObjects.

| Weapon | ObjID |
|---|---|
| Classic | 14282108 |
| Shorty | 14282110 |
| Frenzy | 14282109 |
| Ghost | 14282107 |
| Sheriff | 14282106 |
| Stinger | 14282104 |
| Spectre | 14282103 |
| Bucky | 14282102 |
| Judge | 14282101 |
| Bulldog | 14282099 |
| Guardian | 14282098 |
| Phantom | 14282115 |
| Vandal | 14282114 |
| Marshal | 14282097 |
| Operator | 14282096 |
| Ares | 14282095 |
| Odin | 14282094 |
| Knife (melee) | 14391538 |

Usage:
```cpp
uintptr_t inv_mgr = R<uintptr_t>(pawn + vgc::Inventory);  // 0xBF8
uintptr_t weapon  = R<uintptr_t>(inv_mgr + vgc::CurrentEquippable);  // 0x278
int32_t obj_id    = R<int32_t>(weapon + 0x18);  // UObject.InternalIndex
```

## GWorld Scanning

Two approaches to find GWorld without a pattern scanner:

### 1. Signature Scan (vg_scan)

Pattern: `48 8D 05 ?? ?? ?? ?? 48 85 C0`
Scan `.text` section page-by-page (ReadRaw, 4KB + 64-byte overlap).
RIP-relative resolve: `target = addr + rip_off + 4 + *(int32*)(addr + rip_off)`.
One-shot: cache result in `vgc::GWorld` global.

### 2. Heap Scan (Alternative)

1. Get game base: `GetModuleHandleW(L"VALORANT-Win64-Shipping.exe")`.
2. Walk committed pages via `VirtualQueryEx` from base.
3. For each page: search for `UWorld` signature (magic bytes in UObject header, `0x00000000 00000000` padding + `Class = UWorld`).
4. Then scan data segment for pointer to that UWorld address.

Heap scan is slower (100-500ms vs <10ms for sigscan) but works when patterns change mid-patch.

## ZoomManager (Scope State)

`ZoomManager` at offset `0xD00` from `AAresEquippable` (sniper/rifle with scope).
Read scope state to filter aimbot FOV when scoped vs unscoped.