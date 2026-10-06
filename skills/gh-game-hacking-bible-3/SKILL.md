---
name: gh-game-hacking-bible-3
description: GHB Part 3 -- intermediate CSGO hack guide covering bhop, triggerbot, glow, RCS, aimbot, entity list RE, pattern scanning, SwapBuffers/EndScene hooks, SDK/NetVars, view matrix, traceline, and OpenGL/D3D9 ESP.
---

# GH Game Hacking Bible Part 3 -- Intermediate Hacking

Prereqs: 95% of GHB1+2 completed. Skills: CE Guru, intermediate C++/C#, intermediate RE.
Target game: CSGO. Build for x64, use uintptr_t for addresses (not DWORD).

## Bunnyhop (external + internal)

External: read m_fFlags via ReadProcessMemory, check FL_ONGROUND (1<<0), write dwForceJump=6.
dwForceJump is kbutton_t.state; bit2=impulse up (always set=decimal 4 ground state).
Writing 6 (0110) passes the JNE at the test al,01 check, then `or eax,3` gives 7 -- triggers jump.
Better: write decimal 2 (bit1 = impulse down) directly.

Internal: same logic but direct pointer dereference, DllMain + CreateThread.
isPlayerMoving: check velocity (offset 0x110) before allowing bhop to avoid ground-stick.

## bSpotted 2D Radar

Loop entity list (64 entries, stride 0x10), write true to m_bSpotted (0x93D) on each.
Entities show as red dots on minimap.

## Anti-Flash (external)

Read m_flFlashDuration (0xA32C) from localPlayer, write 0 if > 0.

## Glow Hack (external)

GlowStruct (stride 0x38): base[4], float red/green/blue/alpha, buffer[16], bool renderWhenOccluded/Unoccluded/fullBloom, buffer[5], int glowStyle.
Read glowIndex from entity + m_iGlowIndex, write GlowStruct to glowObject + (glowIndex*0x38).
Use health-based color: red = health*-0.01+1, green = health*0.01.
One WriteProcessMemory call with full GlowStruct is faster than 6 individual writes.

## RCS -- Recoil Control System (internal DLL)

Vec3 class with +/-/* operators and Normalize() (clamp pitch to -89..89, wrap yaw 360).
Offsets: dwLocalPlayer, dwClientState+0x4D88=viewAngles, m_iShotsFired=0xA380, m_aimPunchAngle=0x302C.
Algorithm: punchAngle = *aimPunchAngle * 2.0f; if shotsFired>1: newAngle = viewAngles + oPunch - punchAngle; set viewAngles = newAngle; oPunch = punchAngle.

## CSGO Aimbot + CalcAngle

CalcAngle uses atan2 from player eye pos to enemy head:
delta = target - origin; pitch = -atan2f(delta.z, sqrtf(delta.x*delta.x+delta.y*delta.y))*RAD2DEG; yaw = atan2f(delta.y, delta.x)*RAD2DEG.
Then Normalize(), subtract recoil (aimPunchAngle*2), write to viewAngles.

## Pattern Scanning (external)

Pattern::Ex::Scan iterates committed memory regions (VirtualQueryEx), reads each page (ReadProcessMemory+VirtualProtectEx), runs internal scan against mask.
Bug notes: use strlen(mask) not strlen(pattern) (0x00 terminates early); use PAGE_EXECUTE_READWRITE not PROCESS_VMREAD; last VirtualProtectEx arg must be &oldprotect not NULL.

## SwapBuffers Hook (x86 Trampoline)

Hook: write E9 + relative offset at src; TrampHook: VirtualAlloc gateway, copy stolen bytes, write jmp back.
typedef BOOL(__stdcall* twglSwapBuffers)(HDC hDc); owglSwapBuffers = TrampHook32(...);

## OpenGL ESP (internal)

GL::SetupOrtho() sets up 2D ortho; GL::DrawOutline(x,y,w,h,thickness,color); GL::Font + Print for text.
W2S function: matrix multiplication, perspective divide, viewport scale.
entity->vTable check (0x4E4A98 or 0x4E4AC0) to validate entity.
Box scale: GAME_UNIT_MAGIC / distance * (viewport_w / VIRTUAL_SCREEN_WIDTH).

## CSGO SDK / NetVar Manager

CreateInterface: call GetProcAddress(dll,"CreateInterface"), returns interface ptr.
NetVar manager: walk ClientClass linked list (dwGetAllClasses), for each RecvTable recursively find prop by name, return m_Offset.
Usage: GetNetVarOffset("DT_BasePlayer","m_hActiveWeapon", dwGetAllClasses).

## View Matrix

View matrix = 4x4 floats (Right/Up/Forward axes + position), aka MVP matrix.
Find: scan for float values between -1 and 1 while looking straight up/down (up-axis).
W2S: multiply 3D point by matrix, perspective divide by w, scale to screen coords.
CSGO: use dwViewMatrix offset from hazedumper.

## TraceRay / Traceline

IEngineTrace interface via CreateInterface("EngineTraceClient004").
Ray_t(start, end), CTraceFilter(pSkip=localPlayer), CGameTrace result.
Call EngineTrace->TraceRay(ray, MASK_SHOT|CONTENTS_GRATE, &filter, &trace).
If trace.hit_entity == enemy -> entity is visible.
Ray_t is Vec4 (VAC4, not VAC3) -- includes W component.

## Direct3D9 EndScene Hook

Dummy device method: create D3D device, get vtable, copy entries.
EndScene is vtable index 42.
Hook typedef: HRESULT(__stdcall* tEndScene)(IDirect3DDevice9*).
Draw after EndScene: ID3DXFont, ID3DXLine, D3DXCreateTextureFromFileInMemory.
D3D9 ESP: snaplines from screen center, 2D boxes from W2S, health bars.

## Learning Order (GHB3)

1. CSGO Bhop external + internal
2. bSpotted radar, anti-flash, glow
3. RCS hack
4. Entity list RE (Cheat Engine + Reclass)
5. Aimbot + CalcAngle
6. Pattern scanning
7. SwapBuffers trampoline hook
8. OpenGL hooking + drawing + ESP
9. CSGO SDK: CreateInterface + NetVars
10. View matrix + WorldToScreen
11. TraceRay / traceline
12. D3D9 EndScene + ESP
13. Skyrim hack series (ESP, entity list, NoClip)
14. PE File Format + Windows Loader