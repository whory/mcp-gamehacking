---
name: ags-ida-evm
description: "This project is an IDA Pro processor module for disassembling Ethereum Virtual Machine (EVM) bytecode. It adds EVM instruction decoding to IDA, displaying opcodes like PUSH, POP, SLOAD, SSTORE, CALL, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-evm
---

# ida evm

**Author:** crytic
**Source:** mcp-gamehacking/skills/ags-ida-evm

## Description

This project is an IDA Pro processor module for disassembling Ethereum Virtual Machine (EVM) bytecode. It adds EVM instruction decoding to IDA, displaying opcodes like PUSH, POP, SLOAD, SSTORE, CALL, and JUMPI with proper operand formatting and cross-reference generation. The Python plugin enables analysis of smart contract bytecodes within IDA's familiar disassembly environment. It is aimed at blockchain security auditors and smart contract researchers performing EVM bytecode reverse engineering.
