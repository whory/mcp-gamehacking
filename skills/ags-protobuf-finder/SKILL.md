---
name: ags-protobuf-finder
description: "This project is an IDA plugin that reconstructs original Protocol Buffer schema information from compiled binaries. It is written in Python and uses the Google protobuf runtime together with IDA APIs "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-protobuf-finder
---

# protobuf finder

**Author:** Accenture
**Source:** mcp-gamehacking/skills/ags-protobuf-finder

## Description

This project is an IDA plugin that reconstructs original Protocol Buffer schema information from compiled binaries. It is written in Python and uses the Google protobuf runtime together with IDA APIs to decode embedded descriptors and display recovered proto definitions. The plugin integrates into the disassembler workflow through a dedicated search action and custom result views for easier inspection. It is useful for reverse engineers who need to recover network or serialization formats during game security and binary analysis work.
