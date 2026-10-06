---
name: windows-smb-eternalblue-ms17-010
description: Pointer index for MS17-010 / EternalBlue SMBv1 RCE -- affected versions, patch, Metasploit module names, defender checklist. No exploit details; use the official MSRC advisory for research.
---

# MS17-010 / EternalBlue -- Reference Only

## What It Is

Family of SMBv1 vulnerabilities in Microsoft `srv.sys` disclosed by the ShadowBrokers leak (April 2017).
Enables unauthenticated remote code execution against any Windows host with SMBv1 reachable.
Weaponised in WannaCry and NotPetya. Patched by Microsoft on **14 March 2017** -- six weeks before
WannaCry hit.

## CVE / Advisory

- Microsoft Security Bulletin MS17-010
- CVE-2017-0143, 0144, 0145, 0146, 0148
- Advisory: <https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010>

## Scope

Vulnerable without the March 2017 cumulative update:

- Windows XP, Vista, 7, 8.1, 10 (pre-1607)
- Windows Server 2003, 2008, 2008 R2, 2012, 2012 R2, 2016

Windows 10 1709+ and Server 2019 **ship with SMBv1 disabled by default** -- not vulnerable out of the box.

## Public Research Pointers

- Metasploit modules: `exploit/windows/smb/ms17_010_eternalblue`,
  `auxiliary/scanner/smb/smb_ms17_010` (detection only).
- Public PoC index: <https://www.exploit-db.com/exploits/42315>.
- Vendor patch guidance: KB4012598 and later cumulative updates.
- No implementation details are maintained in this skill -- consult the primary sources above for
  controlled research purposes.

## Defender Checklist

1. **Confirm patch**: `wmic qfe list | find "KB4012598"` or Get-HotFix on the affected OS line.
2. **Disable SMBv1 entirely**:
   ```powershell
   Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
   Set-SmbServerConfiguration -EnableSMB1Protocol $false -Force
   ```
3. **Block TCP 445** at perimeter and between network segments where SMB is not required.
4. **Scan** with `smb_ms17_010` auxiliary module or any vulnerability scanner's MS17-010 check.
5. **Hunt for DoublePulsar backdoor** -- the implant typically paired with EternalBlue. Detection:
   SMB `Multiplex ID 65` response anomaly; multiple open-source scripts exist (Countercept, Luke Jennings).
6. **Monitor** Windows Event ID 5156 for SMB connections from unexpected sources; EDR coverage for
   `srv.sys` crashes and unexpected kernel pool allocations.

## Why This Skill Is a Stub

EternalBlue is one of the most-weaponised exploits in modern history (WannaCry, NotPetya, EternalRocks,
Adylkuzz). Working exploit details are kept out of this skill on purpose; the links above point to
primary sources suited to a controlled pentest / research environment. Use them in a lab, with
written authorisation.
