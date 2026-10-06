---
name: ags-spf-ghidra-pattern-helper
description: "SPF Ghidra Pattern Helper is a Java-based Ghidra script that generates and searches byte signatures directly inside a loaded binary. It provides a graphical interface with Pattern Generator and Patter"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-spf-ghidra-pattern-helper
---

# SPF GhidraPatternHelper

**Author:** TrackAndTruckDevs
**Source:** mcp-gamehacking/skills/ags-spf-ghidra-pattern-helper

## Description

SPF Ghidra Pattern Helper is a Java-based Ghidra script that generates and searches byte signatures directly inside a loaded binary. It provides a graphical interface with Pattern Generator and Pattern Finder tabs, turning selected instruction sequences into SPF-style template patterns, masked hex signatures, extended range-based patterns, and raw bytes compatible with the C++ PatternFinder in SPF-Framework. The built-in PatternEngine supports flexible search syntax including wildcards, byte ranges, optional bytes, alternation, and automatic displacement masking, plus optional auto-verification to check signature uniqueness. Written for reverse engineers and game mod developers, it streamlines signature prototyping and testing during plugin work for titles such as American Truck Simulator and Euro Truck Simulator 2.
