---
name: ags-cve2po-c
description: "This project aggregates public PoCs and exploits for a given CVE ID from GitHub, ExploitDB, Nuclei, and Metasploit."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cve2po-c
---

# CVE2PoC

**Author:** 0liverFlow
**Source:** mcp-gamehacking/skills/ags-cve2po-c

## Description

This project aggregates public PoCs and exploits for a given CVE ID from GitHub, ExploitDB, Nuclei, and Metasploit.
It enriches results with CVSS, EPSS, and CISA KEV context, and can produce Docker labs, bug-bounty write-ups, CVE-to-CPE mapping, plus JSON or HTML reports.
It is primarily written in Python and is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / re tools area.
