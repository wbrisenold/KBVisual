---
name: handoff
description: >
  After every batch of tool calls that makes changes (edits, writes, deletes),
  update AGENTS.md with current state summary: objective, completed work,
  pending items, blocked items, next move, relevant files. Keeps context
  persistent across sessions.
trigger: auto (always active)
---

## Rules

1. After each batch of tool calls that modifies files, update AGENTS.md.
2. Format: objective line, completed list, pending list, blocked list, next move, relevant files.
3. Keep it concise — bullet points, no prose.
4. Only update AGENTS.md after actual changes, not after read-only operations.
5. Mark completed items with the timestamp or description of what was done.
6. Remove stale entries when superseded.
