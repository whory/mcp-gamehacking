---
name: ags-easy-handles
description: "This project is a driver-plus-DLL technique for obtaining process handles while bypassing kernel handle callbacks. It is implemented in C and C++ and uses ObOpenPointerToObject in kernel mode, with a "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-easy-handles
---

# EasyHandles

**Author:** AlSch092
**Source:** mcp-gamehacking/skills/ags-easy-handles

## Description

This project is a driver-plus-DLL technique for obtaining process handles while bypassing kernel handle callbacks. It is implemented in C and C++ and uses ObOpenPointerToObject in kernel mode, with a user-mode OpenProcess hook forwarding requests through IOCTLs. This allows tools like debuggers to attach to callback-protected processes where normal handle creation paths are blocked, while still noting limitations such as PPL targets. It is mainly for Windows security research on anti-cheat or EDR handle protection mechanisms.
