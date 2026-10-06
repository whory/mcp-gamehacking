---
name: vgk-monitor-wmi-edid-spoof
description: Spoofing monitor identifiers for Vanguard/EAC -- WMI IRP_MN_QUERY_ALL_DATA hook on \Driver\monitor for WmiMonitorID, plus registry EDID binary patch with valid checksum.
---

# Monitor WMI + EDID Spoof

ACs (EAC, BattlEye, VGK) cross-check monitor data from two sources:
- WMI `WmiMonitorID` (via `\Driver\monitor` WMI provider)
- Registry `HKLM\SYSTEM\CurrentControlSet\Enum\DISPLAY\{model}\{instance}\Device Parameters\EDID`

If sources do not match -> hardware flag.

## 1. WMI Dispatch Hook

Hook `IRP_MJ_SYSTEM_CONTROL` on `\Driver\monitor`:

```cpp
g_OriginalMonitorDispatch = drv->MajorFunction[IRP_MJ_SYSTEM_CONTROL];
drv->MajorFunction[IRP_MJ_SYSTEM_CONTROL] = HandleMonitor;
```

In `HandleMonitor`: pass to original, then on success with `IRP_MN_QUERY_ALL_DATA`:
- Parse `WNODE_ALL_DATA` (fixed vs variable instance layout)
- For each `WmiMonitorID` instance: overwrite `SerialNumberID`, `ManufacturerName`, `ProductCodeID`, `UserFriendlyName`

```c
// WNODE layout
PWNODE_ALL_DATA allData = (PWNODE_ALL_DATA)wmiBuffer;
BOOLEAN fixed = (allData->WnodeHeader.Flags & WNODE_FLAG_FIXED_INSTANCE_SIZE) != 0;
PUCHAR base = (PUCHAR)allData + allData->DataBlockOffset;

for (ULONG i = 0; i < allData->InstanceCount; i++) {
    PWmiMonitorID mon = fixed
        ? (PWmiMonitorID)(base + i * allData->FixedInstanceSize)
        : (PWmiMonitorID)((PUCHAR)allData + allData->OffsetInstanceDataAndLength[i].OffsetInstanceData);
    // Replace fields with spoofed values
    AnsiToWmiString(spoofSerial, mon->SerialNumberID, 16);
    AnsiToWmiString(g_SpoofedVendor, mon->ManufacturerName, 16);
    AnsiToWmiString(g_SpoofedName, mon->ProductCodeID, 16);
}
```

**Per-device caching**: use a static table `{PDEVICE_OBJECT -> serial}` (max 16 entries) so the same device always returns the same serial across queries (anti-analytics).

## 2. String Generation

Seeded from `hwid_seed ^ 0xDEADBEEF` using xorshift32 (`seed ^= seed<<13; seed ^= seed>>17; seed ^= seed<<5`).

Vendor pool: `AUS`, `SAM`, `DEL`, `LEN`, `AOC`, `BNQ`, `HWP`, `GSM`
Model pool: `VG279QM`, `VG27AQ`, `S24D330`, `P2419H`, `27GL850`, `Q27G2S`, `HP24mh`, etc.
Serial format: 4 uppercase + 2 digits + 3 alphanum + 2 digits + 2 uppercase (13 chars total).

## 3. Registry EDID Patch (PatchRegistryEdid)

Walk `HKLM\SYSTEM\CurrentControlSet\Enum\DISPLAY\{model}\{instance}\Device Parameters\EDID`:

For each device, read `EDID` binary blob, call `PatchEdidDescriptor` for:
- Descriptor type `0xFF` = serial number string
- Descriptor type `0xFC` = monitor name string
- Descriptor type `0xFE` = unspecified ASCII string (vendor info)

```cpp
void PatchEdidDescriptor(PUCHAR edid, ULONG edidLen, UCHAR type, const char* newStr) {
    for (ULONG off = 54; off <= 108; off += 18) {
        if (edid[off] || edid[off+1] || edid[off+2]) continue;
        if (edid[off+3] != type) continue;
        PUCHAR data = edid + off + 5;
        RtlZeroMemory(data, 13);
        SIZE_T len = min(strlen(newStr), 12);
        RtlCopyMemory(data, newStr, len);
        data[len] = 0x0A;  // line terminator
    }
    // Recompute checksum: sum bytes 0-126, store 2s-complement at byte 127
    UCHAR sum = 0;
    for (ULONG i = 0; i < 127; i++) sum += edid[i];
    edid[127] = (UCHAR)(0x100 - sum);
}
```

Write patched blob back with `ZwSetValueKey(REG_BINARY)`.
Per-device serial uses instance+model index XOR `hwid_seed` for deterministic uniqueness.

## 4. Initialization Order

```cpp
InitMonitorStrings();    // generate vendor/model/serial strings once
PatchRegistryEdid();     // patch EDID in registry
// Then hook dispatch table
ObReferenceObjectByName(L"\\Driver\\monitor", ..., &drv);
g_OriginalMonitorDispatch = drv->MajorFunction[IRP_MJ_SYSTEM_CONTROL];
drv->MajorFunction[IRP_MJ_SYSTEM_CONTROL] = HandleMonitor;
ObDereferenceObject(drv);
```

## Notes

- Call before WMI service queries; or restart Winmgmt to clear WMI cache after registry patch.
- Checksum MUST be valid or Windows monitor driver will reject EDID.
- EAC cross-checks WMI vs registry; if only one source is patched, discrepancy = flag.