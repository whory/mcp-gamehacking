---
name: vgk-network-protocol
description: VGC (Vanguard client usermode) network heartbeat protocol -- AES-128-CBC key rotation per 0.25s heartbeat, 9 MSG types, RSA X509 public key, session emulation for analysis.
---

# VGC Network Protocol

VGC (vgc.exe / vgc.dll) communicates with Riot authentication servers via an encrypted heartbeat. Understanding this is necessary to emulate the VGC pipe on systems without an internet connection or to analyze what data VGC sends.

## Transport

- Custom binary protocol over TCP (Riot internal service, not HTTPS).
- Port: typically 2099 (not fixed; changes per patch).
- VGC pipe (named pipe `\\.\pipe\vgc`) used for kernel<->usermode: separate from network protocol.

## Heartbeat Cadence

- Heartbeat interval: **250ms** (0.25 seconds).
- Response window: **250ms** (VGK expects ACK within one heartbeat).
- Session TTL: **5 minutes** (300 000ms). Session considered dead after no heartbeat.

## AES Key Rotation

AES-128-CBC. Key changes every heartbeat:

```
new_key = AES_ECB_decrypt(prev_key, session_master_key)
```

Session master key is established at handshake via RSA (see below).
Each heartbeat payload is encrypted with `new_key`. After decryption, key advances for the next packet.
IV is either sent in the packet header (first 16 bytes) or derived from sequence number -- verify per patch.

## RSA Handshake

Client sends a challenge; server signs with private key.
Client verifies against embedded X509 public key (DER-encoded in vgc.exe/.dll, not PEM).

Extracting:
1. Search vgc.exe bytes for `0x30 0x82` (ASN.1 SEQUENCE header for 1024/2048-bit RSA key).
2. Dump 294 or 550 bytes (depends on key size).
3. Parse with `mbedtls_x509_crt_parse_der` or OpenSSL `d2i_X509`.
4. Public key: `mbedtls_rsa_public` / `RSA_public_decrypt`.

## Message Types (MSG)

9 distinct message type codes:

| Code | Direction | Purpose |
|---|---|---|
| 0x01 | C->S | Hello / Session init |
| 0x02 | S->C | Session parameters (AES master key RSA-encrypted) |
| 0x03 | C->S | Heartbeat ping |
| 0x04 | S->C | Heartbeat ack |
| 0x05 | C->S | Attestation data (TPM/SecureBoot/HWID digest) |
| 0x06 | S->C | Attestation response (allow/deny/challenge) |
| 0x07 | C->S | Anti-cheat report (suspicious process detection, etc.) |
| 0x08 | S->C | Ban or session terminate |
| 0x09 | C->S | Session close |

Exact codes change per patch — reverse the heartbeat handler in vgc.exe to confirm.

## Attestation Payload (MSG 0x05)

Contains a digest of system state collected by VGK + VGC:
- TPM PCR values (or hashed proxy if no TPM)
- Secure Boot state flag
- System timestamp (used to prevent replay)
- HWID composite (hashed, not plaintext): disk serial, MAC, SMBIOS UUID, GPU UUID
- CI.dll integrity check result
- Driver list hash (sorted PsLoadedModuleList names XOR'd)

The server (0x06) either ACKs or issues a ban (0x08). The digest is timestamped and keyed -- replaying old payloads fails.

## Emulating the VGC Pipe (Local Only)

For offline analysis (not for bypassing live ban checks):

```cpp
HANDLE pipe = CreateNamedPipeW(L"\\\\.\\pipe\\vgc",
    PIPE_ACCESS_DUPLEX, PIPE_TYPE_BYTE | PIPE_READMODE_BYTE | PIPE_WAIT,
    1, 4096, 4096, 0, NULL);
ConnectNamedPipe(pipe, NULL);  // wait for vgk.sys IOCTL driver open
```

VGK sends `IOCTL_VGC_HEARTBEAT` -> pipe receives; emulator ACKs.
Without a real VGC attestation response, vgk.sys will eventually terminate the session with `STATUS_ACCESS_DENIED`.

Full emulation requires:
1. Faking the RSA handshake (need private key or offline mode).
2. Generating valid heartbeat responses with correct AES rotation.
3. Satisfying attestation checks locally (cannot work against live servers).

Offline mode (testing only): patch vgc.exe to skip the `ConnectToServer` call and use a loopback pipe with a self-signed cert.