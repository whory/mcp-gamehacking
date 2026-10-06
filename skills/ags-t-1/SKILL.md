---
name: ags-t-1
description: "This project is a C++ implementation of virtual machine detection logic derived from a machine learning model. Python scripts use scikit-learn to train and tune a decision tree classifier, then the re"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-t-1
---

# T 1

**Author:** 0xTriboulet
**Source:** mcp-gamehacking/skills/ags-t-1

## Description

This project is a C++ implementation of virtual machine detection logic derived from a machine learning model. Python scripts use scikit-learn to train and tune a decision tree classifier, then the resulting rules are translated into native C++ checks. Based on the detection outcome, the sample can execute alternate behaviors such as shellcode execution or self-removal. It is intended for research on sandbox awareness techniques and automation-assisted malware analysis concepts.
