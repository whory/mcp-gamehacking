---
name: vgk-hwid-full-reference
description: Complete HWID tracking vector reference for EAC/BattlEye/Vanguard -- disk serials (IOCTL/SMART/SCSI/NVMe), MAC permanent/current, SMBIOS, GPU UUID, ARP/router, registry keys (40+ entries), filesystem UUIDs, EFI vars, monitor, USB cache, filetimes, USN journal, boot GUID.
---

# Complete HWID Tracking Vector Reference

## 1. Disk Serials

**IOCTL_STORAGE_QUERY_PROPERTY** -> `STORAGE_DEVICE_DESCRIPTOR.SerialNumber` (disk.sys)
**SMART_RCV_DRIVE_DATA** -> `SENDCMDOUTPARAMS.bBuffer` (disk.sys)
**IOCTL_SCSI_MINIPORT** (code `IOCTL_SCSI_MINIPORT_IDENTIFY`) on `\\.\scsiX:` -> `SENDCMDOUTPARAMS` at end of `SRB_IO_CONTROL`. Serial is encoded (byte-swap); use `ConvertToString`/`str_2_diskdata`.
**IOCTL_ATA_PASS_THROUGH** -> ATA IDENTIFY DEVICE
**WWN (World Wide Name)** -> mandatory since ATA8-ACS Rev 3b; in smartmontools output
**NVMe** -> `NVME_PASS_THROUGH_SRB_IO_CODE` (different IOCTL than ATA SMART)
**FDO extension** -> disk serial in device object FDO extension (kernel only)

Gotchas:
- Spoof both IRP hook AND n0Lin registry method to cover removable drives
- Check `BusType`: `BusTypeSata`/`BusTypeNvme` vs `BusTypeUsb` (removable = different path)
- SMART checksum will be invalid after spoof (`Warning! invalid SMART checksum`)
- `Get-PhysicalDisk` / `Get-Disk` use separate path; fix with `Reset-PhysicalDisk *`
- First 6-8 bytes of serial may contain vendor ID — spoofing them reveals spoof
- Disk serials cached in registry (see §6c)

## 2. NIC MAC Address

**Current MAC**: registry `HKLM\System\CurrentControlSet\Control\Class\{4D36E972...}\XXXX\NetworkAddress`; disable+enable NIC to apply.
**Permanent MAC**: open handle to `\\.\{NIC-GUID}` or device instance path; IOCTL returns permanent MAC. Spoof: return current MAC instead.
Drivers to hook: custom per-vendor NIC driver + ndis.sys.

NDIS miniport struct contains both current and permanent MAC at version-dependent offsets.
Pattern for `g_pMiniport` in ndis.sys: `40 8A F0 48 8B 05` (Win 7-10).
Also cached in `filter_block->Miniport->IfBlock`.
Adapter GUID itself is a tracking vector.

## 3. SMBIOS

**Usermode**: `GetSystemFirmwareTable` -> `MSSmBios_RawSMBiosTables_GUID`
**Kernelmode**: `IoWMIQueryAllData(MSSmBios_RawSMBiosTables_GUID)`
Contains: motherboard serial, manufacturer, UUID, RAM serials, etc.
Spoof via EPT shadow page over SMBIOS physical range (`0xF0000-0xFFFFF`).
Cached in registry: `HKLM\SYSTEM\CurrentControlSet\Services\mssmbios\Data\SMBiosData`
WMI service (Winmgmt) caches data — restart service after reg patch.

## 4. NVIDIA GPU UUID

`nvidia-smi -L` returns `GPU-<UUID>` from nvlddmkm.sys via IOCTL `0x8DE0008`, `irp->UserBuffer + 0x1AC`.
Spoof: hook IOCTL, check `memcmp(&buffer[0x1AC], "GPU-", 4)`, replace 4 bytes after prefix.
Newer GPUs also have a physical serial number (separate field).

## 5. ARP / Neighbor Table (Router MAC)

**SendARP**: NtDeviceIoControlFile with IOCTL `0x12000F` to nsiproxy.sys -> MAC in UserBuffer at `+0x128` (Win10 1803/1809).
**GetIpNetTable2**: IOCTL `0x0012001B` to nsiproxy.sys -> `NSI_PARAMS` struct with `NeighborTable` pointer.
Entry: `(PUCHAR)(nsi_params->NeighborTable + i * nsi_params->NeighborTableEntrySize)`.
Also: `IOCTL_TCP_QUERY_INFORMATION_EX` to `\Device\Tcp`.
**Fix**: change MAC on router (see skill vgk-network-mac-router) or hook nsiproxy.

## 6. Registry Keys

**Disk serials**: `HKLM\HARDWARE\DEVICEMAP\Scsi\Scsi Port X\Scsi Bus X\Target Id 0\Logical Unit Id 0\SerialNumber`

**SMBIOS**: `HKLM\SYSTEM\CurrentControlSet\Services\mssmbios\Data\SMBiosData`

**Monitor EDID**: `HKLM\SYSTEM\CurrentControlSet\Enum\DISPLAY\{model}\{instance}\Device Parameters\EDID`
Also: `HKLM\SYSTEM\CurrentControlSet\Control\GraphicsDrivers\Configuration\{id}\Timestamp`

**Motherboard UUID**: `HKLM\SYSTEM\HardwareConfig\LastConfig` + subkeys with UUID
`HKCU\Software\Microsoft\Office\Common\ClientTelemetry\MotherboardUUID`

**NVIDIA**: `HKLM\SOFTWARE\NVIDIA Corporation\Global\ClientUUID`, `PersistenceIdentifier`

**TPM**: `HKLM\SYSTEM\CurrentControlSet\Services\TPM\WMI\EndorsementKeyHash`, `WindowsAIKHash`
`HKLM\SYSTEM\CurrentControlSet\Services\TPM\ODUID\RandomSeed` (OfflineUniqueIDRandomSeed)

**Volume GUIDs**: `HKLM\SYSTEM\MountedDevices` (delete), `HKCU\...\MountPoints2` (delete)

**Identity/fingerprint keys to clean**:
```
HKLM\SOFTWARE\Microsoft\Cryptography\MachineGuid
HKLM\SYSTEM\CurrentControlSet\Control\IDConfigDB\Hardware Profiles\0001\HwProfileGuid
HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\SusClientId
HKLM\SYSTEM\CurrentControlSet\Control\SystemInformation\ComputerHardwareId
HKLM\SOFTWARE\Microsoft\SQMClient\MachineId
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\InstallTime (QWORD)
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\DigitalProductId
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows Activation Technologies\...\MachineId
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\BackupProductKeyDefault
HKLM\SYSTEM\CurrentControlSet\Services\TPM\WMI\ManufacturerId
HKLM\HARDWARE\DESCRIPTION\System\MultifunctionAdapter\0\DiskController\0\DiskPeripheral\X\Identifier
```

## 7. Filesystem UUIDs

**Volume GUID**: `IOCTL_MOUNTMGR_QUERY_POINTS`/`IOCTL_MOUNTDEV_QUERY_UNIQUE_ID` -> `MOUNTDEV_UNIQUE_ID.UniqueId`
**Partition GUID**: `IOCTL_DISK_GET_PARTITION_INFO_EX` -> if `PARTITION_STYLE_GPT`, spoof `Gpt.PartitionId`
**Drive layout**: `IOCTL_DISK_GET_DRIVE_LAYOUT_EX` -> each partition entry
**Volume serial**: `vol C:` -> GetVolumeInformation -> FSCTL_XXX. Spoof via boot sector write:
NTFS: serial at offset `0x48`; FAT32: `0x43`; FAT: `0x27`. XOR with random DWORD.
Note: send `IOCTL_DISK_UPDATE_PROPERTIES` after spoof for it to show.

## 8. EFI UUIDs

`ZwQuerySystemEnvironmentValueEx` -> `OfflineUniqueIDRandomSeed` UEFI variable.
Routes to: IOCTL `0x568004` (IRP_MJ_DEVICE_CONTROL) or `0x520004` (IRP_MJ_INTERNAL_DEVICE_CONTROL) or `HalGetEnvironmentVariableEx`.
Registry mirror: `HKLM\SYSTEM\CurrentControlSet\Services\TPM\ODUID\RandomSeed`.

## 9. Monitor Serials

EDID data (I2C) or registry at `HKLM\SYSTEM\CurrentControlSet\Enum\DISPLAY\...`.
WMI `WmiMonitorID`: `ProductCodeID`, `SerialNumberID`, `ManufacturerName`, `UserFriendlyName`.
See skill: vgk-monitor-wmi-edid-spoof.

## 10. Cached USB Serials

SetupAPI caches USB device serials in registry even after disconnect.
Instance IDs via `SetupDiGetDeviceInstanceIdW`.
Logs: `%windir%\INF\setupapi.dev.log`, `setupapi.setup.log` (parse for serial strings).
Clean registry: `HKLM\SYSTEM\CurrentControlSet\Enum\USBSTOR\...` subkeys.

## 11. Filetimes

ACs take filetimes of system and game files (creation/last-written).
Spoof with `SetFileTime`.
System files owned by TrustedInstaller: take temporary ownership (TakeOwnership + grant write), spoof, restore.

## 12. Files with Serials

`C:\Windows\System32\restore\MachineGuid.txt` — UUID used by ACs.
`X:\$Recycle.Bin` — may contain account SIDs.
`%windir%\INF\setupapi.dev.log` — may contain USB serials.

## 13. USN Journal IDs

`FSCTL_QUERY_USN_JOURNAL` on `\\.\X:` -> `USN_JOURNAL_DATA.UsnJournalID`.
Reset:
```
fsutil usn deletejournal /n C:
fsutil usn deletejournal /n D:
```

## 14. Boot UUID

`ZwQuerySystemInformation(SystemBootEnvironmentInformation=0x5A)` -> `SYSTEM_BOOT_ENVIRONMENT_INFORMATION.BootIdentifier` (GUID).
Also in `bcdedit` output: identifier, resumeobject, displayorder.
Spoof: hook ZwQuerySystemInformation or patch the GUID in memory.

## 15. UPnP / SSDP USNs

Router UPnP exposes USN URIs. AC could log them to fingerprint network.
Fix: disable UPnP on router.

## 16. Non-unique but queried

GPU name, CPU name, disk names, NIC name, BIOS vendor, `ntoskrnl!ExIsProcessorFeaturePresent` output, LLMNR hostnames on local network.