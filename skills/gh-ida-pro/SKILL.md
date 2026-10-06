---
name: gh-ida-pro
description: IDA Pro learning resources curated by Guided Hacking -- YouTube playlists, tuts4you, hex-rays blog, and the IDA Pro Book.
---

# GH IDA Pro Resources

This tutorial is a resource list only, no original content.

## Key Resources

- YouTube: search "IDA Pro tutorial" -- idasteam channel and AlliterativeAlice are recommended
- tuts4you.com: cracking and RE tutorial archive with IDA-specific guides
- GitHub: onethawt/idaplugins-list (curated plugin list)
- GitHub: EiNSTeiN-/idapython-cheatsheet
- Hex-Rays blog: hex-rays.com/blog -- official tips and SDK updates
- IDA Pro Book (Chris Eagle, 2nd ed.): the canonical reference text

## Starting Points

1. Open binary, let auto-analysis finish
2. Functions window: navigate to main/WinMain or game module entry
3. Names window: find exported symbols and globals
4. Strings window: locate interesting string references to pivot from
5. xrefs (X key): trace callers of any function or data reference
6. Decompiler (F5): get C pseudocode -- fastest path for understanding logic