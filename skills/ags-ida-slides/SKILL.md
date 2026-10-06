---
name: ags-ida-slides
description: "ida-slides is an IDA Pro plugin (IDA 9.2+, Python) that renders Marp or Slidev slide decks inside a dockable IDA tab for live reverse-engineering presentations. Slides and the IDB are linked both ways"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-slides
---

# ida slides

**Author:** hyuunnn
**Source:** mcp-gamehacking/skills/ags-ida-slides

## Description

ida-slides is an IDA Pro plugin (IDA 9.2+, Python) that renders Marp or Slidev slide decks inside a dockable IDA tab for live reverse-engineering presentations. Slides and the IDB are linked both ways: @name and @0xADDR tokens jump to disassembly or Hex-Rays pseudocode, and range syntax can embed live decompiled lines into the deck on each save. It supports hover previews of decompiled excerpts, a right-click action that copies @reference tokens from IDA views, deck lint for unresolved references, and live reload via a file watcher. Rendering uses native OS webviews (WKWebView on macOS, WebView2 on Windows) with the Marp or Slidev CLI, keeping the deck beside disassembly rather than in an external browser. The primary audience is reverse engineers who want to present or walk through analysis while staying inside IDA.
