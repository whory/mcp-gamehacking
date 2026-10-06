---
name: ags-qor-troller
description: "QorTroller is a hardware-rooted physical input trust and controller attestation stack for verifying that gamepad input comes from a real human player rather than scripts, macros, or spoofed devices. I"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-qor-troller
---

# QorTroller

**Author:** ConWan30
**Source:** mcp-gamehacking/skills/ags-qor-troller

## Description

QorTroller is a hardware-rooted physical input trust and controller attestation stack for verifying that gamepad input comes from a real human player rather than scripts, macros, or spoofed devices. It centers on the VAPI protocol, with a DualShock/controller bridge, presence challenges, biometric fusion, and Proof of Embodied Presence (PoEP) signals that feed session receipts and match scorecards. The codebase mixes Python agents and bridge services with Solidity smart contracts, Circom/Groth16 zero-knowledge circuits for replay and verified-human proofs, plus Rust w3bstream components and joypad firmware. Primary use cases are game security, anti-cheat research, and on-chain attestation of controller identity and live player presence.
