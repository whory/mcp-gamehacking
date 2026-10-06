# Contributing

## Adding Skills

Place a new directory under `skills/` with a `SKILL.md` file:

```yaml
---
name: my-skill
description: One-line summary
metadata:
  topics: [injection, windows, kernel]
  games: [cs2]
  engines: [source2]
---

Detailed content here...
```

Optionally add a `source.txt` with the full source tree.

## Adding Agents / Subagents / Plugins / Prompts

Each is a `.md` file with YAML frontmatter (`name`, `description`, `metadata`) placed in the appropriate category subdirectory under `agents/`, `subagents/`, `plugins/`, or `prompts/`.

## Building

```bash
npm install
npm run build
```

## Testing

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```
