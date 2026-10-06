---
name: vgk-tpm-spoof
description: Bypassing Vanguard TPM tracking -- kernel-level EK hash replacement in tpm.sys/tbs.sys/ACPI device extensions plus IRP_MJ_DEVICE_CONTROL dispatch hook for PCR_Read, Quote, ReadPublic, GetRandom, CreatePrimary, NV_Read.
---

# VGK TPM Spoof

Vanguard queries TPM via three channels:
- TBS API (TbsiGetDeviceInfo) -> tbs.sys -> tpm.sys
- WMI Win32_Tpm -> tpm.sys WMI provider
- Registry `TPM\WMI`: EndorsementKeyHash, WindowsAIKHash

## Method 1: Device Extension Memory Patch (SpoofTpm)

Read original EK hash from registry, scan device extensions of `\Driver\TPM`, `\Driver\tbs`, `\Driver\ACPI` and replace all occurrences with random bytes.

```cpp
// 1. Read original EK hash
RegGetBin(L"\\Registry\\Machine\\SYSTEM\\CurrentControlSet\\Services\\TPM\\WMI",
    L"EndorsementKeyHash", origEkHash, sizeof(origEkHash), &ekLen);

// 2. Walk driver object -> device object -> DeviceExtension (0x3000 bytes)
//    Also walk IoGetLowerDeviceObject chain (depth <= 8)
ObReferenceObjectByName(&name, ..., *IoDriverObjectType, ..., &drv);
PDEVICE_OBJECT dev = drv->DeviceObject;
while (dev) {
    MemReplace(dev->DeviceExtension, 0x3000, origEkHash, ekLen, spfEkHash, ekLen);
    // walk lower devices...
    dev = dev->NextDevice;
}

// 3. Registry layer: overwrite WMI values with random bytes
RegSetBin(wmi, L"EndorsementKeyHash", spfEkHash, 32);
RegSetBin(wmi, L"WindowsAIKHash",     spfAik,    32);
RegSetDw(wmi,  L"ManufacturerId",     RandDword());
RegSetDw(wmi,  L"ManufacturerVersion", RandDword() & 0xFFFF);
```

Map the driver as early as possible — VGK caches TPM data at Boot Start.
Does NOT create anomalies in driver structures that PatchGuard monitors.

## Method 2: IRP_MJ_DEVICE_CONTROL Hook (IRP dispatch override)

Intercept `IOCTL_TPM_SUBMIT_COMMAND` in `\Driver\TPM`'s dispatch table. Filter by `TPM_CC_*` command codes, swap in random/seeded data before completion.

```cpp
originalDispatch = driverObject->MajorFunction[IRP_MJ_DEVICE_CONTROL];
driverObject->MajorFunction[IRP_MJ_DEVICE_CONTROL] = &Dispatch;

// In Dispatch: filter IOCTL_TPM_SUBMIT_COMMAND, parse TPM2_COMMAND_HEADER
// Switch on command code, set IRP completion routine to handler
case TPM_CC_ReadPublic:    emulated_utils::change_ioc(ioc, irp, HandleReadPublic);
case TPM_CC_GetRandom:     emulated_utils::change_ioc(ioc, irp, HandleGetRandom);
case TPM_CC_ReadClock:     emulated_utils::change_ioc(ioc, irp, HandleReadClock);
case TPM_CC_PCR_Read:      emulated_utils::change_ioc(ioc, irp, HandlePCRRead);
case TPM_CC_CreatePrimary: emulated_utils::change_ioc(ioc, irp, HandleCreatePrimary);
case TPM_CC_NV_Read:       emulated_utils::change_ioc(ioc, irp, HandleNVRead);
case TPM_CC_Quote:         emulated_utils::change_ioc(ioc, irp, HandleQuote);
```

### Key handlers

**HandleReadPublic / HandleCreatePrimary**: replace RSA public key buffer with a seeded 256-byte key (generated once per session via xorshift from `hwid_seed`).

**HandlePCRRead**: randomize each PCR digest. Count capped at 8. Sizes validated before write.

**HandleQuote**: randomize `TPM2B_ATTEST.attestationData` and the signature blob. Both use `FillRandom`.

**HandleReadClock**: randomize `resetCount` and `restartCount` fields.

**HandleNVRead**: fill NV data buffer with `FillRandom`.

### Endianness

All TPM fields are big-endian. Use `SwapU32` / `SwapU16` before comparing or writing sizes/codes.

```cpp
static UINT32 SwapU32(UINT32 v) {
    return ((v>>24)&0xFF)|((v>>8)&0xFF00)|((v<<8)&0xFF0000)|((v<<24)&0xFF000000);
}
```

### RSA Key Generation

Seeded xorshift32 from `emulated_utils::hwid_seed`:
```cpp
void GenerateKey() {
    UINT32 s = emulated_utils::hwid_seed;
    for (UINT16 i = 0; i < MAX_RSA_KEY_BYTES; i++) {
        s ^= s<<13; s ^= s>>17; s ^= s<<5;
        generatedKey.buffer[i] = (UCHAR)((s >> 16) & 0xFF);
    }
    generatedKey.size = MAX_RSA_KEY_BYTES;
}
```

## Notes

- TPM alone does not prevent a perm ban — combine with MAC, SMBIOS, GPU UUID, and disk serial spoof.
- EAC/BE/Ricochet use the same TPM channels; same technique applies.
- Without a clean mapper + driver trace cleanup, the driver itself is the detection vector.