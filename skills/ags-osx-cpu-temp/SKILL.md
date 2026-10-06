---
name: ags-osx-cpu-temp
description: "This project is a command-line tool for reading CPU temperature on macOS through the SMC (System Management Controller) interface. It queries the Apple SMC for thermal sensor readings and displays the"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-osx-cpu-temp
---

# osx cpu temp

**Author:** lavoiesl
**Source:** mcp-gamehacking/skills/ags-osx-cpu-temp

## Description

This project is a command-line tool for reading CPU temperature on macOS through the SMC (System Management Controller) interface. It queries the Apple SMC for thermal sensor readings and displays the current CPU temperature in Celsius or Fahrenheit. The C implementation accesses IOKit's AppleSMC service directly. It is aimed at macOS developers and system monitoring tool builders who need programmatic access to hardware temperature data.
