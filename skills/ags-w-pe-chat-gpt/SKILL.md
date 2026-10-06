---
name: ags-w-pe-chat-gpt
description: "This project is an IDA Pro plugin that uses large language models to assist binary analysis workflows."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-w-pe-chat-gpt
---

# WPeChatGPT

**Author:** WPeace-HcH
**Source:** mcp-gamehacking/skills/ags-w-pe-chat-gpt

## Description

This project is an IDA Pro plugin that uses large language models to assist binary analysis workflows.
It can explain function behavior, rename variables, attempt Python reconstructions of small routines, and run vulnerability-oriented checks from decompiled views.
The plugin is written in Python and integrates with OpenAI-compatible APIs while providing an automated mode that traverses function trees and summarizes findings.
It targets reverse engineers and game security researchers who want AI-assisted triage inside IDA.
