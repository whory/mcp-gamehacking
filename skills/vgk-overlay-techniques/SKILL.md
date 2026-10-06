---
name: vgk-overlay-techniques
description: ESP overlay delivery methods for Vanguard -- OpenGL hook (opengl32.dll), DX11/12 Present hook, overlay hijacking (Discord/Steam/NVIDIA), DMA with FPGA/PCIe device, WS_EX_LAYERED desktop window.
---

# ESP Overlay Techniques

## 1. DX Present Hook (vg_client.dll approach)

Hook `IDXGISwapChain::Present` (or `Present1`) vtable:
1. Use `CreateDXGIFactory` -> `CreateSwapChain` with dummy HWND to get swap chain.
2. Read vtable slot 8 (Present) or 11 (Present1).
3. Hook via VMT shadow or trampoline.
4. In hook: acquire `pDevice`, create `ID2D1RenderTarget` from backbuffer, draw overlay, call original Present.

Detection surface: IAT/vtable check of d3d11.dll by VGK integrity check.
Mitigation: shadow VMT copy (shadow_vmt.h in VoidGuard).

## 2. OpenGL Hook (opengl32.dll)

Alternative to DX; works if game uses OpenGL pipeline (rare for Valorant but general technique):
1. Load `opengl32.dll`, find `wglSwapBuffers` export.
2. Hook with trampoline (5-byte JMP). Own code draws with OpenGL calls on shared context.
3. Call original. Restore bound VAO/program after draw to avoid state leak.

Lower stealth on modern Valorant (uses UE5/DX12). Only useful for games that support OpenGL.

## 3. Overlay Window Hijacking

Instead of creating a new transparent window (detected by window enumeration hooks), hijack an existing overlay window from a trusted process:
- **Discord**: `DiscordOverlay` HWND, class `DiscordOverlay`. Already WS_EX_LAYERED + WS_EX_TRANSPARENT + WS_EX_TOPMOST.
- **Steam**: `GameOverlayUI` HWND, class `vguiPopupWindow`.
- **NVIDIA GeForce Experience**: overlay window for ShadowPlay/Highlights.
- **OBS Game Capture**: uses a dedicated overlay window.

Steps:
1. Enumerate windows with `EnumWindows`, match classname or process.
2. `GetWindowDC(hwnd)` -> create D3D11 device on same monitor.
3. Draw ESP on the DC.
4. Restore DC.

Pros: window already trusted, no new overlay window to detect.
Cons: breaks if target program not running; overlay may disappear when game goes fullscreen exclusive.

## 4. WS_EX_LAYERED Desktop Overlay

Classic approach — new transparent topmost window over game:
```cpp
HWND overlay = CreateWindowExW(
    WS_EX_LAYERED | WS_EX_TRANSPARENT | WS_EX_NOACTIVATE | WS_EX_TOPMOST,
    L"STATIC", L"", WS_POPUP | WS_VISIBLE, x, y, w, h, NULL, NULL, hInst, NULL);
SetLayeredWindowAttributes(overlay, RGB(0,0,0), 0, LWA_COLORKEY);
```
Draw with GDI+ or D2D into the overlay HWND.

Detection: `NtUserBuildHwndList` (EPT hook in VoidGuard) or `FindWindowEx` by AC.
Detection: window style check -- WS_EX_LAYERED + TOPMOST is unusual.
Detection: DwmGetWindowAttribute / DwmEnableComposition calls.

Mitigation VoidGuard uses: HWND hook (hwnd_hook.h) filters the overlay from `NtUserBuildHwndList` via EPT shadow page.

## 5. DMA (PCIe / FPGA)

External device approach: PCIe FPGA card (Squirrel, Enigma-X1) sniffs memory bus:
- Card reads GPU framebuffer or game process memory over PCIe without ring-0 on target.
- Renders ESP on a second monitor connected to the FPGA card.
- Zero kernel driver on game system -> kernel ACs (VGK, EAC) cannot detect in-kernel.
- Detection vector: PCIe Bus IDs, `EnumPciDevices` anomaly, FPGA vendor ID visible in Device Manager.
- Mitigation: use a card with spoofed PCIe DeviceID/VendorID.

DMA is the most stealthy approach but requires hardware investment (~$100-400).

## 6. UE5 Canvas Hook (VoidGuard's Approach)

Not a window overlay at all — hooks directly into UE5's rendering:
- `install_render_hook()` VMT-hooks `UGameViewportClient::PostRender`.
- `DrawFrame(k2Canvas)` called every frame, draws via `K2_DrawLine`/`K2_DrawText` ProcessEvent calls.
- No window, no DX hook, no separate process.

Detection: vtable integrity check on `UGameViewportClient`, ProcessEvent call signature analysis.