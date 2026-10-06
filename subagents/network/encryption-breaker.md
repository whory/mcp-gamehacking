---
name: encryption-breaker
description: Break game packet/data encryption (XOR, RC4, AES key recovery).
type: subagent
---

# Subagent: encryption-breaker

Break game packet/data encryption (XOR, RC4, AES key recovery).

## Usage

Dispatched by parent agents for focused subtasks. Returns structured results.
## Detailed Specification

### Purpose
This subagent handles a focused subtask: break game packet/data encryption (xor, rc4, aes key recovery). It is dispatched by parent agents when this specific capability is needed, and returns structured results that the parent agent incorporates into its broader analysis.

### Input Requirements
The subagent accepts structured input describing the specific task. Required fields vary by use case but typically include: the target game or engine, the specific artifact to analyze (binary path, offset value, pattern string, struct name), and any constraints (version requirements, anti-cheat compatibility, performance budgets). Optional fields include output format preferences and detail level.

### Processing Pipeline
1. **Input validation** -- verify all required fields are present and well-formed
2. **Context gathering** -- search the skill library for relevant reference material using search_skills with domain-appropriate keywords
3. **Core analysis** -- perform the specialized analysis this subagent is designed for, cross-referencing multiple archived sources when available
4. **Verification** -- cross-check results against known-good values from trusted sources in the archive
5. **Output formatting** -- structure results with confidence levels, source attribution, and version annotations

### Output Format
Results are returned as structured data with the following fields: primary result (the answer to the query), confidence level (high, medium, low based on source count and agreement), sources (list of skill names and line numbers referenced), caveats (version-specific notes, staleness warnings, known limitations), and related results (additional findings discovered during analysis).

### Integration with Parent Agents
Any of the 50 available agents can dispatch this subagent. The subagent operates independently, searching the full skill library (4,161 skills) as needed. It does not maintain state between invocations -- each call is self-contained. Multiple subagents can run in parallel for different aspects of a larger analysis.

### Error Handling
When the subagent cannot find sufficient information to provide a confident answer, it reports what it did find along with suggestions for alternative approaches. It never fabricates data or provides unverified offsets. If the skill library lacks coverage for the requested topic, it reports the gap explicitly.

### Performance Characteristics
The subagent is optimized for focused queries. It searches only the relevant subset of the skill library rather than scanning all 4,161 skills. For offset lookups, it prioritizes game-specific skills before falling back to engine-generic skills. Source code searches use keyword filtering before full-text analysis to minimize latency.