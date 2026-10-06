---
name: ags-delete-self-poc
description: "delete-self-poc is a C proof of concept that shows how a running or locked executable can delete itself from disk on Windows."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-delete-self-poc
---

# delete self poc

**Author:** LloydLabs
**Source:** mcp-gamehacking/skills/ags-delete-self-poc

## Description

delete-self-poc is a C proof of concept that shows how a running or locked executable can delete itself from disk on Windows.
The technique renames the file primary data stream and then sets file disposition flags through SetFileInformationByHandle APIs.
It demonstrates handle sequencing, deletion semantics, and practical edge cases around locked file removal.
Its primary use case is low-level Windows internals research relevant to anti-forensics, secure cleanup, and defensive detection engineering.
