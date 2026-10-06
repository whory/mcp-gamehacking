---
name: gh-vulnerable-drivers
description: BYOVD (Bring Your Own Vulnerable Driver) reference -- Capcom driver, KDMapper, KDU, and the full list of vulnerable signed kernel drivers for manual mapping.
---

# GH Vulnerable Kernel Drivers (BYOVD)

## Concept

Legitimate signed drivers often expose dangerous kernel capabilities to usermode.
Buffer overflows or arbitrary kernel write/execute IOCTLs can be exploited.
Load the vulnerable signed driver, exploit it to execute your own unsigned driver code.
Microsoft/CAs can revoke certs but this is rare for old signed binaries.

## Capcom.sys (Historical Reference)

Shipped with Street Fighter V. IOCTL accepts usermode buffer and executes it as kernel code.
Easiest arbitrary kernel execute ever shipped as a game driver.
Now fully detected by all ACs; do not use in any real bypass.
Still useful as a learning tool in isolated test environments.

## KDMapper

By z175. Embeds iqvw64e.sys (Intel NIC, CVE-2015-2291).
Simple CLI: KDMapper.exe yourdriver.sys
Widely known -- detected by all serious ACs. Use only as learning tool or starting point.
After use: driver binary embedded in KDMapper is also signatured.

## KDU (hfiref0x/Kernel Driver Utility)

Plug-and-play framework supporting multiple vulnerable driver backends.
Better than KDMapper for production (can swap to less-known drivers).
Features: Protected Process hijacking, DSE override, driver loading.

KDU supported providers:
- Intel NIC iqvw64e.sys (v1.03.0.7)
- RTCore64 from MSI Afterburner (v4.6.2 build 15658 and below)
- Gdrv from Gigabyte TOOLS
- ATSZIO64 from ASUS WinFlash
- MsIo (WinIo) from Patriot Viper RGB (v1.0)
- GLCKIO2 (WinIo) from ASRock Polychrome RGB (v1.0.4)
- EneIo (WinIo) from G.SKILL Trident Z (v1.00.08)
- WinRing0x64 from EVGA Precision X1 (v1.0.2.0)
- EneTechIo (WinIo) from Thermaltake TOUGHRAM (v1.0.3)

## Full Vulnerable Driver List

iqvw64e.sys, gpcidrv64.sys, AsUpIO64.sys, AsrDrv10/101/102/103.sys,
BSMEMx64.sys, BSMIXP64.sys, BSMIx64.sys, BS_Flash64.sys, BS_HWMIO64_W10.sys,
BS_HWMIo64.sys, BS_I2c64.sys, Capcom.sys, GLCKIO2.sys, GVCIDrv64.sys,
HwOs2Ec10x64.sys, HwOs2Ec7x64.sys, MsIo64.sys, NBIOLib_X64.sys,
NCHGBIOS2x64.SYS, NTIOLib_X64.sys, PhlashNT.sys, Phymemx64.sys,
UCOREW64.SYS, WinFlash64.sys, WinRing0x64.sys, amifldrv64.sys, atillk64.sys,
dbk64.sys (Cheat Engine -- wormhole by design), mtcBSv64.sys, nvflash.sys,
nvflsh64.sys, phymem64.sys, rtkio64.sys, rtkiow10x64.sys, rtkiow8x64.sys,
segwindrvx64.sys, superbmc.sys, semav6msr.sys, piddrv64.sys, RTCore64, Gdrv,
ATSZIO64, MICSYS, EneIo, EneTechIo

Full list with SHA256 hashes: eclypsium/Screwed-Drivers on GitHub.

## Strategy

Well-known drivers (any on public lists): detected and blocked immediately by ACs.
For production bypass: find your OWN undisclosed vulnerable driver.
Search for drivers that:
  1. Have a valid Authenticode signature (signed by any trusted CA)
  2. Expose a memory read/write IOCTL from usermode
  3. Are NOT on any public vulnerable-driver blocklist (loldrivers.io)

Using Battleye to load via EAC or vice-versa (xerox/badeye technique):
one AC can be weaponized to bypass another, leveraging its pre-existing signed loader.

## Resources

- eclypsium/Screwed-Drivers: canonical research database
- hfiref0x/KDU, hfiref0x/TDL, hfiref0x/DSEFix: hFiref0x tools
- loldrivers.io: community vulnerable-driver blocklist (what ACs check)
- Adrianyy vulnerable driver scanner: automated detection tool