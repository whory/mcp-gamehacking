---
name: evtx-tamper-detection
description: Detect Sysmon / Windows evtx log tampering -- parse ElfFile header + ElfChnk chunk CRCs, verify chunk event CRC, cross-check chunk record-ID sequence, flag truncation / gaps.
---

# EVTX Tamper Detection (Sysmon Log Integrity Check)

Attackers often clear or edit Sysmon logs (`Microsoft-Windows-Sysmon%4Operational.evtx`) to hide
their tracks. The EVTX binary format has multiple built-in CRC checksums an attacker rarely bothers
to recompute. A standalone integrity checker can flag tampering offline, without relying on the
Event Log service.

## EVTX Format Primer

```
Offset 0        : ElfFile Header (4096 bytes)
    "ElfFile\0"           at +0x00  (8 bytes signature)
    oldest_chunk          at +0x18  (uint64)
    current_chunk         at +0x20  (uint64)
    next_record_id        at +0x28  (uint64)
    chunk_count           at +0x2A  (uint16)
    checksum              at +0x7C  (CRC32 of first 120 bytes)

Offset 4096 ..  : N × ElfChnk (65536 bytes each)
    "ElfChnk\0"           at +0x00  (8 bytes signature)
    first_event_id        at +0x08  (uint64)
    last_event_id         at +0x10  (uint64)
    header_size           at +0x28  (uint32)  -- always 128 or 512
    free_space_offset     at +0x2C  (uint32)
    event_data_crc        at +0x30  (uint32)  -- CRC32 of records after header
    header_crc            at +0x7C  (uint32)  -- CRC32 of first 120 bytes
```

## Detection Rules

1. **File too small** -- `file_size < 4096` means the ElfFile header is incomplete. Instant flag.
2. **Bad file-header signature** -- first 8 bytes must be `"ElfFile\0"`.
3. **File header CRC mismatch** -- `crc32(first 120 bytes) != checksum_field`.
4. **Chunk base not at 4096** -- scan the first 1 MB; first `"ElfChnk\0"` with valid header-CRC
   must be at offset 4096. Non-standard base = truncation / insertion.
5. **Chunk signature mismatch** at expected 65536-byte stride.
6. **Chunk header CRC mismatch** -- same CRC check per chunk at offset 0x7C.
7. **Chunk event-data CRC mismatch** -- `crc32(bytes 512..free_space_offset)` must equal
   `event_data_crc`. Attackers who overwrite events but leave the header intact fail this check.
8. **Record ID gap between chunks** -- `chunk[i+1].first_event_id > chunk[i].last_event_id + 1` =
   missing records.

## Reference Implementation

Based on the `check_anomaly_2()` function supplied with this skill:

```cpp
bool check_sysmon_tamper() {
    const wchar_t* path =
        L"C:\\Windows\\System32\\winevt\\Logs\\"
        L"Microsoft-Windows-Sysmon%4Operational.evtx";

    HANDLE h = CreateFileW(path, GENERIC_READ,
        FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE,
        nullptr, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, nullptr);
    if (h == INVALID_HANDLE_VALUE) return false;

    LARGE_INTEGER li;
    GetFileSizeEx(h, &li);
    if (li.QuadPart < 4096) { CloseHandle(h); return true; }  // too small

    // 1. Read + validate ElfFile header
    uint8_t fh[4096];
    DWORD br = 0; ReadFile(h, fh, 4096, &br, nullptr);
    auto efh = (EvtxFileHdr*)fh;
    if (memcmp(efh->signature, "ElfFile\0", 8) != 0) { CloseHandle(h); return true; }
    if (crc32_buf(fh, 120) != efh->checksum)         { CloseHandle(h); return true; }

    // 2. Locate first chunk (should be at offset 4096)
    uint64_t base = 4096;
    uint8_t scan[1024 * 1024];
    SetFilePointerEx(h, {0}, nullptr, FILE_BEGIN);
    ReadFile(h, scan, sizeof(scan), &br, nullptr);
    for (size_t off = 0; off + 512 <= br; ++off) {
        if (memcmp(scan + off, "ElfChnk\0", 8) != 0) continue;
        if (r32(scan + off + CH_HDR_SZ) != 512 && r32(scan + off + CH_HDR_SZ) != 128) continue;
        if (crc32_chunk_hdr(scan + off) != r32(scan + off + CH_HDR_CRC)) continue;
        base = off; break;
    }

    // 3. Walk every chunk
    uint64_t nChunks = std::min<uint64_t>(efh->chunk_count,
                                         (uint64_t)((li.QuadPart - base) / 65536));
    std::vector<std::pair<uint64_t,uint64_t>> ranges(nChunks);
    for (uint64_t i = 0; i < nChunks; ++i) {
        LARGE_INTEGER off; off.QuadPart = base + i * 65536;
        SetFilePointerEx(h, off, nullptr, FILE_BEGIN);
        uint8_t cbuf[512]; ReadFile(h, cbuf, 512, &br, nullptr);
        if (memcmp(cbuf, "ElfChnk\0", 8) != 0)                        { CloseHandle(h); return true; }
        if (crc32_chunk_hdr(cbuf) != r32(cbuf + CH_HDR_CRC))          { CloseHandle(h); return true; }
        ranges[i].first  = r64(cbuf + CH_FIRST_ID);
        ranges[i].second = r64(cbuf + CH_LAST_ID);
    }

    // 4. Verify event-data CRC on recent and oldest chunks (bounded cost)
    auto validate = [&](uint64_t idx) -> bool {
        LARGE_INTEGER off; off.QuadPart = base + idx * 65536;
        SetFilePointerEx(h, off, nullptr, FILE_BEGIN);
        uint8_t full[65536]; DWORD n = 0;
        ReadFile(h, full, 65536, &n, nullptr);
        if (n != 65536 || memcmp(full, "ElfChnk\0", 8) != 0) return false;
        uint32_t end = std::clamp<uint32_t>(r32(full + CH_FREE_SPC), 512, 65536);
        uint32_t calc = ~crc32_update(0xFFFFFFFF, full + 512, end - 512);
        return calc == r32(full + CH_EV_CRC);
    };
    for (uint64_t i = 0; i < std::min<uint64_t>(nChunks, 256); ++i)
        if (!validate((efh->current_chunk + nChunks - i) % nChunks))
            { CloseHandle(h); return true; }

    // 5. Record-ID monotonicity
    uint64_t lastId = 0; bool set = false;
    for (uint64_t step = 0; step < nChunks; ++step) {
        auto [first, last] = ranges[(efh->oldest_chunk + step) % nChunks];
        if (!first || !last || first > last) continue;
        if (!set) { lastId = last; set = true; continue; }
        if (first > lastId + 1) { CloseHandle(h); return true; }  // gap
        if (last > lastId) lastId = last;
    }

    CloseHandle(h);
    return false;  // clean
}
```

## What Each Signal Catches

| Signal                                | Attacker move it catches                              |
|---------------------------------------|-------------------------------------------------------|
| Too-small file                        | `del` / `fsutil file setzerodata` partial wipe        |
| Bad ElfFile sig / CRC                 | Header surgery to point at empty chunk                |
| Chunk sig / header CRC fail           | Bulk zero of a chunk, leaving stride intact           |
| Event-data CRC fail                   | Record surgery -- modified event without fixing CRC   |
| Record-ID gap between chunks          | Clean removal of entire chunk from middle             |

Attackers who use `Clear-EventLog` or SEC MIP's own tools get recognised at a higher layer (System
log Event ID 104). The CRC-level checks are for the quieter write-to-file tamperings.

## Operational Notes

- Run from a kernel driver or SYSTEM-level service that still has read access while the Event Log
  service holds a shared lock.
- Use `FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE` to coexist with the live writer.
- CRC budget: validating event-data for every chunk on a 1 GB log is slow. Limit to the last N
  chunks (code uses 256) plus the oldest-chain to catch head/tail truncation at reasonable cost.
- Combine with Event Log forwarding (WEF) or SIEM so even a complete local wipe leaves the remote
  copy intact.
