---
name: handoff
description: >
  After every batch of tool calls that makes changes (edits, writes, deletes),
  update AGENTS.md with current state summary: objective, completed work,
  pending items, blocked items, next move, relevant files. Keeps context
  persistent across sessions AND across agent/tool switches.
trigger: auto (always active)
---

## Purpose

AGENTS.md is the single source of truth for any agent or coding tool
(Claude Code, opencode, Cursor, etc.) joining this project mid-stream.
It must contain enough context that a fresh agent can pick up work
without asking the user setup questions.

## Rules

1. After each batch of tool calls that modifies files, update AGENTS.md.
2. Format: objective line, completed list, pending list, blocked list, next move, relevant files.
3. Keep it concise — bullet points, no prose.
4. Only update AGENTS.md after actual changes, not after read-only operations.
5. Mark completed items with the description of what was done.
6. Remove stale entries when superseded.

## Cross-Agent Context (mandatory)

Include these sections in AGENTS.md so any agent/tool can resume seamlessly:

### Active Skills & Modes
List every skill that has been loaded and is active (e.g. ponytail full,
caveman off, rtk ready). Include trigger phrases so a new agent knows
how to invoke them.

### Tooling Preferences
- CLI proxy in use (e.g. rtk) and how to use it
- Package manager (npm/pnpm/yarn)
- Dev server command and URL
- Build/test/lint commands

### Design Decisions
- Brand gold = Tailwind `yellow-700` (#a16207)
- Animation style: snappy, no blur in scroll-in
- CSS over framer-motion for hover/tap where possible
- Any other non-obvious choices made during the session

### Conversation Style
- Preferred response length (terse, detailed, caveman, etc.)
- Communication mode (ponytail, etc.)
- Anything about how the user likes to receive information

### Last Session
- What was being worked on
- What was completed
- What was next
- Any pending questions or blockers
