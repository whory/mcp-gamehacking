---
name: ags-h-xor-packer
description: "hXOR Packer is a Windows PE packer and unpacker that compresses and encrypts executables before rebuilding them as self-unpacking files. It is written in C++ and combines Huffman compression with simp"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-h-xor-packer
---

# hXOR Packer

**Author:** akuafif
**Source:** mcp-gamehacking/skills/ags-h-xor-packer

## Description

hXOR Packer is a Windows PE packer and unpacker that compresses and encrypts executables before rebuilding them as self-unpacking files. It is written in C++ and combines Huffman compression with simple XOR encryption, with command-line options for compression only, encryption only, or both. The unpacking stub restores the payload and executes it directly from memory instead of writing an unpacked file to disk. This project is mainly useful for learning PE internals, runtime loading techniques, and packer behavior in malware and anti-malware research.
