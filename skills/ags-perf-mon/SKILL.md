---
name: ags-perf-mon
description: "This project is a Windows kernel research driver that uses hardware performance monitoring mechanisms for low-level control and observation. It works with PMU and PMI flows, APIC handling, and related"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-perf-mon
---

# PerfMon

**Author:** KelvinMsft
**Source:** mcp-gamehacking/skills/ags-perf-mon

## Description

This project is a Windows kernel research driver that uses hardware performance monitoring mechanisms for low-level control and observation. It works with PMU and PMI flows, APIC handling, and related interrupt paths to explore techniques connected to SSDT monitoring and hook-style interception on modern Windows systems. The implementation is mainly C and C++, and the repository includes reference papers and a small test program for experimentation. It is intended for kernel security and anti-cheat researchers studying hardware-assisted monitoring on Windows 10 era platforms.
