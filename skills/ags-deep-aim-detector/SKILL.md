---
name: ags-deep-aim-detector
description: "This project is a prototype machine-learning detector that classifies whether a gunfight was assisted by a legit aimbot. It uses Go tooling to parse SourceTV demo data into training features, and Pyth"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-deep-aim-detector
---

# DeepAimDetector

**Author:** 87andrewh
**Source:** mcp-gamehacking/skills/ags-deep-aim-detector

## Description

This project is a prototype machine-learning detector that classifies whether a gunfight was assisted by a legit aimbot. It uses Go tooling to parse SourceTV demo data into training features, and Python notebooks with an LSTM model for training and evaluation. Core signals include view-angle deltas and crosshair-to-target angular relationships sampled around attack events. It is intended as an anti-cheat research experiment rather than a production-ready detector.
