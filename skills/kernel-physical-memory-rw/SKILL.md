---
name: kernel-physical-memory-rw
description: Kernel physical memory read/write via CR3 page table walk. See kernel-cr3-physmem-write-csrss for the full driver reference.
metadata:
  type: redirect
---

# Kernel Physical Memory R/W

This topic is covered in:
**[[kernel-cr3-physmem-write-csrss]]** -- kernel driver that writes into any process by
walking CR3 page tables (PML4→PDPT→PD→PT), translating VA→PA, and writing via
MmMapIoSpaceEx. Includes IOCTL communication pattern and csrss cleaner example.
