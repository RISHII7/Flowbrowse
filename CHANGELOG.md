<!-- markdownlint-disable MD001 MD033 MD041 -->

<div align="center">

# 📓 Flowbrowse — Changelog

_All notable changes to this project, documented with care._

[![Keep a Changelog](https://img.shields.io/badge/Keep%20a%20Changelog-1.1.0-E05735?style=flat-square&logo=keepachangelog&logoColor=white)](https://keepachangelog.com/en/1.1.0/)
[![Semantic Versioning](https://img.shields.io/badge/SemVer-2.0.0-3F51B5?style=flat-square&logo=semver&logoColor=white)](https://semver.org/spec/v2.0.0.html)
[![Latest Release](https://img.shields.io/badge/latest-v0.29.2-2EA043?style=flat-square&logo=github&logoColor=white)](https://github.com/RISHII7/Flowbrowse/releases/tag/v0.29.2)

</div>

---

This changelog is written to be **read by humans**. Every release lists exactly what changed, in which file, and _why_ — not just _what_. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Conventions

| Label | Meaning |
| :-- | :-- |
| ✨ **Added** | New features, files, components, or dependencies. |
| ♻️ **Changed** | Behavior or implementation of existing code was modified. |
| 🗑️ **Removed** | Features or files that were taken out. |
| 🐛 **Fixed** | Bug fixes. |
| ⚠️ **Deprecated** | Soon-to-be-removed features still present for now. |
| 🔒 **Security** | Vulnerability fixes and hardening. |

> **Reading tips** — Large enumerations are collapsed inside `▸ details` blocks; click to expand. `inline code` marks files, symbols, and commands. Version headers link to their full `git` diff.

### 🗂️ Version index

| Version | Date | Headline |
| :-- | :-- | :-- |
| [**0.29.2**](#0292--2026-07-31) | 2026-07-31 | 📄 Session-replay spec — watch a run's Browserbase session |
| [**0.29.1**](#0291--2026-07-31) | 2026-07-31 | 📄 Console-panel spec — recorded its own fixes |
| [**0.29.0**](#0290--2026-07-31) | 2026-07-31 | 🖥️ Run console — logs list + output inspector |
| [**0.28.5**](#0285--2026-07-31) | 2026-07-31 | 📄 Console-panel spec — step data + failed state + JSON output detail |
| [**0.28.4**](#0284--2026-07-31) | 2026-07-31 | 📄 Console-panel spec — shorter paragraphs |
| [**0.28.3**](#0283--2026-07-31) | 2026-07-31 | 📄 Console-panel spec — `@file` references |
| [**0.28.2**](#0282--2026-07-31) | 2026-07-31 | 📄 Console-panel spec — prompts point at their target files |
| [**0.28.1**](#0281--2026-07-31) | 2026-07-31 | 📄 Console-panel spec — run logs + output inspector |
| [**0.28.0**](#0280--2026-07-31) | 2026-07-31 | 📧 Send Email node — Resend-powered email step |
| [**0.27.1**](#0271--2026-07-31) | 2026-07-31 | 🧩 Resend agent skill |
| [**0.27.0**](#0270--2026-07-30) | 2026-07-30 | 🧩 `act` / `extract` / `observe` / `agent` nodes — Stagehand-powered browser actions |
| [**0.26.1**](#0261--2026-07-30) | 2026-07-30 | 📄 Remaining-nodes spec — `act` / `extract` / `observe` / `agent` |
| [**0.26.0**](#0260--2026-07-30) | 2026-07-30 | 📡 Live run status — spinner + failure border on the canvas |
| [**0.25.1**](#0251--2026-07-30) | 2026-07-30 | 📡 Live-run-status spec |
| [**0.25.0**](#0250--2026-07-25) | 2026-07-25 | 🔗 Data passthrough — `{{nodeId.path}}` interpolation + connection chips |
| [**0.24.2**](#0242--2026-07-25) | 2026-07-25 | 📄 Data-passthrough spec — `{{nodeId.path}}` field interpolation |
| [**0.24.1**](#0241--2026-07-25) | 2026-07-25 | 🔑 Document Browserbase key in `.env.example` |
| [**0.24.0**](#0240--2026-07-25) | 2026-07-25 | 🖱️ Open URL node executor — workflows drive a real browser |
| [**0.23.0**](#0230--2026-07-25) | 2026-07-25 | 🌐 Browserbase + Stagehand initialized |
| [**0.22.0**](#0220--2026-07-24) | 2026-07-24 | ▶️ Run button triggers the real run-workflow task |
| [**0.21.0**](#0210--2026-07-24) | 2026-07-24 | ✅ Graph validation and persistence for workflow runs |
| [**0.20.0**](#0200--2026-07-24) | 2026-07-24 | 🗑️ Delete workflow — DB row + Liveblocks room cleanup |
| [**0.19.0**](#0190--2026-07-24) | 2026-07-24 | 📝 Editor auto-switch, multiline fields, required-field marker |
| [**0.18.0**](#0180--2026-07-24) | 2026-07-24 | 💾 Node field edits persist and render on the canvas · 🐛 dark-mode hotkey crash fix |
| [**0.17.1**](#0171--2026-07-24) | 2026-07-24 | 🎯 Editor tab reflects the selected canvas node |
| [**0.17.0**](#0170--2026-07-24) | 2026-07-24 | ➕ Toolbar add-to-canvas — click a node type to add it to the graph |
| [**0.16.0**](#0160--2026-07-24) | 2026-07-24 | 🧰 Real inspector/toolbar sidebar, live in the workflow editor |
| [**0.15.1**](#0151--2026-07-24) | 2026-07-24 | 🧰 Right-sidebar inspector/toolbar template + tabs underline tweak |
| [**0.15.0**](#0150--2026-07-24) | 2026-07-24 | 🧑‍🤝‍🧑 Names and avatars in the Liveblocks room |
| [**0.14.1**](#0141--2026-07-24) | 2026-07-24 | 🏢 Liveblocks org compartmentalization + room loading spinner |
| [**0.14.0**](#0140--2026-07-23) | 2026-07-23 | 🔒 Liveblocks ID-token auth — org-scoped private rooms |
| [**0.13.0**](#0130--2026-07-23) | 2026-07-23 | 👥 Liveblocks realtime collaborative canvas |
| [**0.12.1**](#0121--2026-07-23) | 2026-07-23 | 🧩 Liveblocks best-practices agent skill |
| [**0.12.0**](#0120--2026-07-23) | 2026-07-23 | 🗃️ `getWorkflow` data function (org-scoped single fetch) |
| [**0.11.0**](#0110--2026-07-22) | 2026-07-22 | 🧩 Registry-driven step nodes on the canvas |
| [**0.10.1**](#0101--2026-07-20) | 2026-07-20 | 📄 Node registry spec + step-node templates |
| [**0.10.0**](#0100--2026-07-20) | 2026-07-20 | 🎨 React Flow canvas in the workflow editor |
| [**0.9.1**](#091--2026-07-20) | 2026-07-20 | 📄 Canvas-theme spec + spec heading lint fix |
| [**0.9.0**](#090--2026-07-20) | 2026-07-20 | ▶️ Right-sidebar Run button — trigger a task with realtime status |
| [**0.8.0**](#080--2026-07-20) | 2026-07-20 | ⏱️ Trigger.dev — background task infrastructure |
| [**0.7.0**](#070--2026-07-20) | 2026-07-20 | 🧱 WorkflowShell — resizable editor layout (canvas / logs / inspector) |
| [**0.6.1**](#061--2026-07-20) | 2026-07-20 | 📄 Workflow-shell spec |
| [**0.6.0**](#060--2026-07-20) | 2026-07-20 | 🧭 Individual workflow detail route (`/workflows/[id]`) |
| [**0.5.1**](#051--2026-07-19) | 2026-07-19 | 🔑 Document Neon database vars in `.env.example` |
| [**0.5.0**](#050--2026-07-19) | 2026-07-19 | ⚙️ Workflows — schema, data layer, and server actions wired to the sidebar |
| [**0.4.0**](#040--2026-07-19) | 2026-07-19 | 🗄️ Neon Postgres + Drizzle ORM database layer |
| [**0.3.1**](#031--2026-07-16) | 2026-07-16 | 🧭 WorkflowNav extracted · always-visible sidebar · hidden-Unicode fix |
| [**0.3.0**](#030--2026-07-16) | 2026-07-16 | 🗂️ Dashboard shell — collapsible app sidebar, workflow empty state |
| [**0.2.2**](#022--2026-07-16) | 2026-07-16 | 🎨 4 more design mockups synced from upstream |
| [**0.2.1**](#021--2026-07-16) | 2026-07-16 | 🎨 Reference design mockups · global theme polish |
| [**0.2.0**](#020--2026-07-16) | 2026-07-16 | 🏢 Clerk Organizations — choose-organization task + switcher |
| [**0.1.3**](#013--2026-07-16) | 2026-07-16 | 🤖 Clerk agent-skills bundle for AI coding tools |
| [**0.1.2**](#012--2026-07-16) | 2026-07-16 | 🔐 Auth reorganized into an `(auth)` route group · protected home |
| [**0.1.1**](#011--2026-07-16) | 2026-07-16 | 📝 World-class changelog overhaul |
| [**0.1.0**](#010--2026-07-15) | 2026-07-15 | 🔐 Clerk authentication · 🔔 Sonner toasts · 🧩 Full shadcn/ui + AI chat-kit |
| [**0.0.1**](#001--2026-07-15) | 2026-07-15 | 🌱 Initial Next.js + shadcn/ui scaffold |

---

## [Unreleased]

> _Nothing yet — the working tree is in sync with `v0.29.2`._

---

## [0.29.2] — 2026-07-31

> **Highlights** 📄 A spec for watching a run's Browserbase session back inside the console. Spec only, no implementation.

### ✨ Added

- **`specs/session-replay.md`** — a three-part plan: capture the Browserbase session id when a run opens its session and surface it once the run finishes (the recording lags the session close, so it's read from the run's final output, not live metadata); add a server-proxied `app/api/replays/[sessionId]` route plus a `SessionReplay` component that polls until the recording is ready and plays it with `hls.js`; then add a selectable "Replay" row per finished run in the logs list, extending the console's selection to be either a step or a run's replay, only one active at a time. Also documents where Browserbase's observability and session-replay docs live in `AGENTS.md`, so the prompts don't have to carry the URL.

---

## [0.29.1] — 2026-07-31

> **Highlights** 📄 Recorded the console-panel implementation's own fixes back into its spec — a paper trail of what the agent got wrong the first time and the one-line prompt that corrected each.

### ✨ Added

- **`specs/console-panel.md`** — a "Fixes" section documenting three corrections the implementation needed: marking the executor-less start node `"done"` instead of leaving it `"pending"` forever, extracting `NodeIcon` into its own file with a running-spinner prop, and swapping the console's fixed logs/inspector split for a resizable panel group. All three already shipped in `v0.29.0` — this only adds the record of how they were prompted.

---

## [0.29.0] — 2026-07-31

> **Highlights** 🖥️ A run console below the canvas — a logs list of every run and its steps, and an output inspector for whichever step you click. Implements [`specs/console-panel.md`](specs/console-panel.md).

### ✨ Added

- **`features/workflows/components/node-icon.tsx`** — `NodeIcon` pulled out of `right-sidebar.tsx` into its own component so the console can reuse it, with a `running` prop that swaps the node's icon for a spinner in the same accent chip. Falls back to a neutral `CircleHelp` chip when a step's type isn't a known node type — realtime run history isn't guaranteed to match the current code's `RunStep` shape (confirmed against this project's own run history: steps recorded before `type` existed on `RunStep`, and an older run whose output predates steps being an array at all).
- **`features/workflows/components/logs-panel.tsx`** — `LogsPanel` lists every run and its steps: each step shows its icon, title, and `pretty-ms`-formatted duration once known; it spins while running (only if its run is still live), reads red on failure, and dims if it never ran. Clicking a step reports the selection up to `ConsolePanel`.
- **`features/workflows/components/inspector-panel.tsx`** — `InspectorPanel` shows the selected step's output as formatted JSON, its error if it failed, or a note for the pending/running/no-output cases. Re-reads the shared run history so a still-running step's output appears the moment it lands, without needing a re-select.
- **`features/workflows/components/console-panel.tsx`** — `ConsolePanel` owns the selection: `LogsPanel` on the left is always shown, `InspectorPanel` on the right shows only while a step is selected; clicking the selected step again clears it.

### ♻️ Changed

- **`features/workflows/components/workflow-runs-provider.tsx`** — adds `useConsoleRuns()`, flattening every subscribed run (newest first) into `{ id, status, createdAt, isLive, steps }`, and factors the "is this run still live" / "which steps does it have" logic (shared with `useLatestRunSteps`) into `isRunLive`/`stepsForRun` helpers.
- **`features/workflows/tasks/run-workflow.ts`** — `RunStep` gains `type`/`title` (denormalized from the graph, so the console can render a step without it), `durationMs`, `output`, and `error`. A node with no executor (the start trigger) is marked `"done"` immediately rather than left `"pending"` forever. Executors are timed on both the success and failure paths, and the failure path now records the thrown error's message before flushing.
- **`features/workflows/components/workflow-shell.tsx`** — mounts `ConsolePanel` where the "Logs" placeholder was.

Adds the `pretty-ms` dependency.

---

## [0.28.5] — 2026-07-31

> **Highlights** 📄 Fleshed out `specs/console-panel.md`'s data and rendering detail: what a step tracks, a failed/red state in the logs list, and formatted-JSON output in the inspector.

### ♻️ Changed

- **`specs/console-panel.md`** — Prompt 1 now spells out exactly what each step should track (node id, status pending/running/done/failed, duration, output, error) instead of leaving "what the panel will need" implicit. Prompt 2 adds a failed state to the logs list — a step turns red when it failed, alongside the existing spinning/inactive states. Prompt 3 specifies that a step's output renders as formatted JSON in the inspector.

---

## [0.28.4] — 2026-07-31

> **Highlights** 📄 Split `specs/console-panel.md`'s run-on prompt paragraphs so the setup, the ask, and any handoff notes each stand on their own line.

### ♻️ Changed

- **`specs/console-panel.md`** — each prompt's single run-on paragraph is now several short ones, one thought per line (e.g. Prompt 1's "don't build the UI yet" now reads as its own closing note instead of trailing the data-capture sentence).

---

## [0.28.3] — 2026-07-31

> **Highlights** 📄 Marked each file path in `specs/console-panel.md`'s prompts as an explicit `@`-reference, matching the convention used across the other specs.

### ♻️ Changed

- **`specs/console-panel.md`** — `run-workflow.ts`, `workflow-runs-provider.tsx`, `right-sidebar.tsx`, `workflow-shell.tsx`, and `console-panel.tsx` are now written as `@file` references.

---

## [0.28.2] — 2026-07-31

> **Highlights** 📄 Tightened up `specs/console-panel.md` so each prompt names the exact file it touches or creates, instead of describing it only by role.

### ♻️ Changed

- **`specs/console-panel.md`** — Prompt 1 now names `features/workflows/tasks/run-workflow.ts` and `features/workflows/components/workflow-runs-provider.tsx`; Prompt 2 names `features/workflows/components/right-sidebar.tsx` (for `NodeIcon`) and `features/workflows/components/workflow-shell.tsx` (for the "Logs" placeholder); Prompt 3 names `features/workflows/components/console-panel.tsx`.

---

## [0.28.1] — 2026-07-31

> **Highlights** 📄 A spec for a bottom console panel — a logs list of every run's steps plus an output inspector for the selected one. Spec only, no implementation.

### ✨ Added

- **`specs/console-panel.md`** — a three-part plan: capture each step's output/error/duration as the run walks its steps and expose it from the workflow runs provider; build a `LogsPanel` (reusing the right sidebar's `NodeIcon`) wrapped in a `ConsolePanel` that lists every run and its steps — icon, title, `pretty-ms`-formatted duration, a live spinner while running, inactive styling for steps that never ran, and click-to-select/deselect — mounted where the workflow shell's "Logs" placeholder currently sits; then an `InspectorPanel` rendered inside the `ConsolePanel` showing the selected step's output, error, or a placeholder note.

---

## [0.28.0] — 2026-07-31

> **Highlights** 📧 A fifth action node — **Send Email** — lets a workflow send an email as a run step, powered by a shared Resend client.

### ✨ Added

- **`lib/resend.ts`** — a shared `Resend` client constructed from `RESEND_API_KEY`.
- **`features/workflows/nodes/send-email.ts`** — `sendEmail({ to, subject, body })`: sends via `resend.emails.send`, treating `body` as the email's HTML content, and returns `{ id }`. The Resend SDK returns `{ data, error }` instead of throwing on API failures, so this throws explicitly when either is missing/set — otherwise the run would mark the step done even though no email went out.

### ♻️ Changed

- **`features/workflows/nodes/node-executors.ts`** — registers the `send-email` executor.
- **`features/workflows/nodes/node-registry.ts`** — adds its manifest entry: required `To`, `Subject`, and multiline `Body` fields, and an `id` output (the sent email's id).
- **`.env.example`** — documents `RESEND_API_KEY` alongside the other server-side integration keys.

Adds the `resend` dependency.

---

## [0.27.1] — 2026-07-31

> **Highlights** 🧩 Installed the Resend agent skill, ahead of adding transactional email to the workflow app.

### ✨ Added

- **Resend agent skill** — installed from `resend/resend-skills` into `.agents/skills/resend/` and `.claude/skills/resend/`, with `skills-lock.json` recording its source and content hash. The skill is a `SKILL.md` plus reference docs covering sending (single/batch), receiving via webhooks, templates, domains, contacts, broadcasts, automations, API keys, events, and logs. As with the earlier Clerk, Neon, Trigger.dev, and Liveblocks bundles, the `.claude/skills/*` symlink was committed as a duplicate copy because `core.symlinks` is `false` here.

---

## [0.27.0] — 2026-07-30

> **Highlights** 🧩 Four new Stagehand-powered action nodes — `act`, `extract`, `observe`, and `agent` — round out the workflow's browser automation toolkit. Implements [`specs/remaining-nodes.md`](specs/remaining-nodes.md).

### ✨ Added

- **`features/workflows/nodes/act.ts`** — `act({ stagehand, instruction })`: runs `stagehand.act(instruction)` and returns `{ success, message, url }` (the resulting page's URL).
- **`features/workflows/nodes/extract.ts`** — `extract({ stagehand, instruction })`: runs `stagehand.extract(instruction)` and returns `{ extraction }`.
- **`features/workflows/nodes/observe.ts`** — `observe({ stagehand, instruction })`: runs `stagehand.observe(instruction)` and returns `{ matches }`, each a `{ selector, description }` pair.
- **`features/workflows/nodes/agent.ts`** — `agent({ stagehand, instruction })`: runs `stagehand.agent().execute(instruction)` and returns `{ success, message, completed }`.

### ♻️ Changed

- **`features/workflows/nodes/node-executors.ts`** — registers all four executors against their node types.
- **`features/workflows/nodes/node-registry.ts`** — adds manifest entries for all four: each a required multiline `instruction` field, plus outputs downstream nodes can reference (`act` → success/message/url, `extract` → extraction, `observe` → matches\[0\].selector/description, `agent` → success/message/completed).
- **`AGENTS.md`** — documents the three-edit convention for adding a workflow node (executor impl, `node-executors.ts` registration, `node-registry.ts` manifest entry).

---

## [0.26.1] — 2026-07-30

> **Highlights** 📄 A spec for the four Stagehand-powered action nodes still missing from the registry — `act`, `extract`, `observe`, `agent` — plus documenting the node-adding convention in `AGENTS.md`. Spec only, no implementation.

### ✨ Added

- **`specs/remaining-nodes.md`** — a five-part plan: document the three-edit convention for adding a workflow node (executor impl, `node-executors.ts` registration, `node-registry.ts` manifest entry) in `AGENTS.md`, then one prompt per remaining node — `act` (Stagehand `act`, surfacing success/message/URL), `extract` (Stagehand `extract`, surfacing the extracted result), `observe` (Stagehand `observe`, surfacing matched elements with selector + description), and `agent` (Stagehand's autonomous multi-step agent, surfacing success/message/completion).

---

## [0.26.0] — 2026-07-30

> **Highlights** 📡 The canvas now shows a workflow's progress live — a spinner and blue border on the node currently running, a red border on the one that failed — with no reload required. Implements [`specs/live-run-status.md`](specs/live-run-status.md).

### ✨ Added

- **`features/workflows/components/workflow-runs-provider.tsx`** — `WorkflowRunsProvider`, a client provider subscribing to a workflow's runs in realtime by their `workflow:<id>` tag via `useRealtimeRunsWithTag`, given a scoped public access token as a prop. Exposes `useLatestRunSteps()`, which resolves the most recent run's steps — preferring the run's finished `output.steps`, falling back to the live `metadata.steps` while it's still going — plus `isLive` (true while that run is queued or executing).

### ♻️ Changed

- **`features/workflows/tasks/run-workflow.ts`** — exports a new `RunStep` type (`{ nodeId, status }`, status one of `pending` / `running` / `done` / `failed`) and, before executing anything, seeds the run's metadata with every step `pending`. Each node is marked `running` right before its executor and `done` right after, with the metadata re-published on every change; marking `running` forces an immediate flush, otherwise that state gets overwritten by `done` before it's ever pushed and the spinner never appears. If an executor throws, the node is marked `failed`, the metadata is flushed again (a thrown run returns no output, so this is the only way the canvas ever learns the run failed), the Browserbase session is closed, and the error is rethrown. Returns the finished `steps` from the task so a successful run's output carries the guaranteed final state.
- **`app/(dashboard)/workflows/[id]/page.tsx`** — mints a read-only public access token scoped to the workflow's `workflow:<id>` run tag, good for about an hour, and wraps the canvas shell in `WorkflowRunsProvider` with the workflow id and that token.
- **`features/workflows/components/step-node.tsx`** — reads `useLatestRunSteps()` and looks up the current node's status by id. While that node is running (and the run is still live), its icon is replaced with a spinner and it gets a blue border; if it failed, it gets a destructive border. A node left marked `running` by a run that has since ended is no longer treated as running, so it stops spinning.

---

## [0.25.1] — 2026-07-30

> **Highlights** 📡 A spec for showing each node's live run status on the canvas — spinner while running, red border on failure — powered by Trigger.dev Realtime. Spec only, no implementation.

### ✨ Added

- **`specs/live-run-status.md`** — a four-part plan: streaming per-step status (`RunStep`) from `run-workflow.ts` via run metadata, with a forced flush right after marking a step `"running"` (so the spinner isn't overwritten before it's ever pushed) and again right after marking one `"failed"` (since a thrown run returns no output, the flushed metadata is the only way that failed state reaches the canvas); a `WorkflowRunsProvider` + `useLatestRunSteps` hook subscribing to the workflow's runs by tag; wiring a scoped public token and the provider into the workflow page; and painting each canvas node from the latest run's steps.

---

## [0.25.0] — 2026-07-25

> **Highlights** 🔗 Workflow fields can now reference an upstream node's output via `{{nodeId.path}}` placeholders, resolved at run time — with clickable "Connections" chips in the inspector so you never have to type a token by hand. Implements [`specs/data-passthrough.md`](specs/data-passthrough.md).

### ✨ Added

- **`features/workflows/lib/interpolate.ts`** — `interpolate({ text, outputs })`: replaces every `{{ nodeId.path }}` placeholder in `text` with the value found by walking a dotted/bracketed path (e.g. `items[0].name`) off the `outputs` map, treating the first segment as the node id. A placeholder resolving to nothing becomes `""`; one resolving to an object/array drops in its JSON. Pure — the caller supplies the outputs map.
- **`features/workflows/hooks/use-upstream-connections.ts`** — `useUpstreamConnections()`: for the currently selected node, breadth-first walks `getIncomers` back through the graph (not just direct parents) to collect every ancestor once, then flat-maps each ancestor's registry outputs into a ready-to-insert `{ token, label, nodeType }` entry. Reads live graph state via `useStore`, so it re-computes as edges connect/disconnect and as the selection changes.

### ♻️ Changed

- **`features/workflows/nodes/node-registry.ts`** — added `NodeOutput` (`{ path, label }`) and an `outputs: NodeOutput[]` field on `NodeDefinition`. `start` exposes nothing; `open-url` exposes `url` and `title`.
- **`features/workflows/tasks/run-workflow.ts`** — tracks each node's result in an `outputs` map keyed by id as the run walks the graph in dependency order, so later nodes can reference earlier ones. Before running a node, interpolates `{{ }}` placeholders in its field values against the outputs collected so far, then passes the interpolated values to its executor.
- **`features/workflows/components/right-sidebar.tsx`** — `Field` now takes an `onFocus` prop so `Inspector` can track which field was last focused (`activeFieldKey`, falling back to the first field). `Inspector` calls `useUpstreamConnections` and renders a "Connections" section of clickable chips (icon + label) below the fields whenever any exist; clicking one appends its token onto the target field's value. `<Inspector key={selected?.id} .../>` so per-node focus state resets when the selection changes.

---

## [0.24.2] — 2026-07-25

> **Highlights** 📄 A spec for letting workflow fields reference upstream node output via `{{nodeId.path}}` placeholders, with clickable connection chips in the inspector to insert them. Spec only — no implementation.

### ✨ Added

- **`specs/data-passthrough.md`** — a five-part plan: a pure `interpolate` helper (nested-path placeholder substitution), threading each node's output through `run-workflow.ts` and interpolating field values before a node runs, declaring each node's available outputs in the registry, a `useUpstreamConnections` hook that walks the graph to find every reachable upstream output, and a "Connections" chip section in the right-sidebar inspector.

---

## [0.24.1] — 2026-07-25

> **Highlights** 🔑 The `.env.example` template now documents the Browserbase key, so a fresh clone knows exactly which env vars the `run-workflow` task needs.

### ✨ Added

- **`.env.example`** — added `BROWSERBASE_API_KEY` (empty placeholder; real value lives only in the gitignored `.env.local`), used server-side by the `run-workflow` task to open a Stagehand session (`env: "BROWSERBASE"`) for node executors.

---

## [0.24.0] — 2026-07-25

> **Highlights** 🖱️ Running a workflow now actually drives a browser — the `run-workflow` task opens a Browserbase/Stagehand session and executes each step's node, starting with an `open-url` executor.

### ✨ Added

- **`features/workflows/nodes/open-url.ts`** — `openUrl({ stagehand, url })`: navigates the run's first page to `url` (`waitUntil: "load"`, 30s timeout) and returns `{ url, title }` from the loaded page.
- **`features/workflows/nodes/node-executors.ts`** — `NodeContext` (`{ values, getStagehand }`) and `NodeExecutor` types, and `nodeExecutors: Partial<Record<NodeType, NodeExecutor>>`, currently wiring `"open-url"` to the `openUrl` executor. `satisfies Record<ActionNodeType, NodeExecutor>` enforces every action node type has an entry at compile time.

### ♻️ Changed

- **`features/workflows/nodes/node-registry.ts`** — added `ActionNodeType`: a mapped type extracting only the node types whose registry `kind` is `"action"` (excludes triggers).
- **`features/workflows/tasks/run-workflow.ts`** — added a lazy `getStagehand()`: creates one Stagehand session per run on the first browser step and reuses it for every later one, so a run's recording spans the whole flow. `env: "BROWSERBASE"`, routed through Browserbase's Model Gateway via `BROWSERBASE_API_KEY` (no separate provider key needed). `disablePino: true` works around Pino's thread-stream worker not resolving inside Trigger.dev's bundled output. Each step now looks up and awaits its executor instead of only logging, and the Stagehand session is closed after the run.

---

## [0.23.0] — 2026-07-25

> **Highlights** 🌐 Browserbase (cloud browser infrastructure) and Stagehand V3 (AI-powered browser automation) are wired into the project, ahead of building real per-node execution for workflow runs.

### ✨ Added

- **Dependencies** — `@browserbasehq/sdk` (`^2.15.0`, the Browserbase API client) and `@browserbasehq/stagehand` (`^3.6.0`, Stagehand V3, providing `act`/`extract`/`observe`/`agent` methods on top of a managed or local browser).
- **`AGENTS.md`** — a "Stagehand Project" section: how to import and initialize Stagehand (`LOCAL` or `BROWSERBASE` env, model, verbose level), the `act`/`extract`/`observe`/`agent` APIs with atomic-instruction guidance and the observe-then-act caching pattern, schema- and selector-targeted extraction, the two agent modes (standard and Computer Use Agent) with model/integration configuration, and advanced features (`DeepLocator` XPath targeting across shadow DOM/iframes, multi-page workflows).

Setup was verified end-to-end via the `browse` CLI (`npx browse`, v0.9.5): `browse doctor` reported a healthy runtime, `browse open`/`browse snapshot` confirmed local browsing against a live page, and `browse cloud projects list` confirmed the `BROWSERBASE_API_KEY` credential against the account's Production project.

---

## [0.22.0] — 2026-07-24

> **Highlights** ▶️ The Run button is fully wired — it validates the current canvas, triggers a real `run-workflow` Trigger.dev task, and that task actually loads and orders the saved graph. The workflow editor is now functionally complete end-to-end: create, edit, save, delete, run.

### ✨ Added

- **`features/workflows/tasks/run-workflow.ts`** — `runWorkflowTask`: loads the workflow's saved graph via `getWorkflow`, throwing if it's missing. Builds the set of connected node ids (anything touching an edge — orphans dropped on the canvas are skipped), then orders them with `toposort.array` (throws on a cycle). Logs the workflow name and step count, then logs each step as it's visited in order. Real per-node execution (executors, live progress, browser sessions) is left as a `TODO` to layer on from here.

### ♻️ Changed

- **`trigger.config.ts`** — `dirs: ["trigger"]` → `["features"]`, since the task now lives under `features/workflows/tasks/` instead of the top-level `trigger/` dir.
- **`features/workflows/actions.ts`** — `runWorkflowAction` triggers `"run-workflow"` (typed via `runWorkflowTask`, imported from its new path) with `{ workflowId: id, orgId }` and `tags: [`workflow:${id}`]`, replacing the `hello-world` trigger call.
- **`features/workflows/components/right-sidebar.tsx`** — `RunButton` now takes `workflowId`, reads the current nodes/edges via `useReactFlow`, and validates them with `validateGraph` before doing anything — toasting the first problem and returning early if there are any. Otherwise it calls `runWorkflowAction({ id: workflowId, graph })` in a transition, with the button disabled while pending. Implements the "TODO: validate the graph and run the workflow" placeholder.

### 🗑️ Removed

- **`trigger/example.ts`** — the `hello-world` example task is no longer used now that a real task exists; the now-empty `trigger/` directory is dropped.

---

## [0.21.0] — 2026-07-24

> **Highlights** ✅ The workflow graph is now typed, validated, and persisted before a run — laying the groundwork for wiring the Run button up to real, current canvas state.

### ✨ Added

- **`features/workflows/lib/validate-graph.ts`** — `validateGraph({ nodes, edges })`: structural checks knowable before a run, returning an array of problem strings (empty = runnable). Requires exactly one Start trigger, requires at least one edge (the runner only executes nodes touching an edge), and detects cycles via `toposort` (which throws on one, since the run would otherwise fail mid-sort). Pure — no `db` import — so the client can pre-flight the in-hand graph and toast, while the server reuses it as the save-time backstop.
- **`features/workflows/actions.ts`** — `cancelWorkflowRunAction(runId)`: auth + org check, then `runs.cancel(runId)` (from `@trigger.dev/sdk`) to stop an in-progress run.
- **Dependencies** — `toposort` (`^2.0.2`) and `@types/toposort` (`^2.0.7`).

### ♻️ Changed

- **`lib/db/schema.ts`** — the `graph` jsonb column is now typed as `WorkflowGraph` via `.$type<WorkflowGraph>()` (`$inferSelect`/`$inferInsert` flow the shape through). TypeScript-only change — confirmed no DB drift via `npm run db:push` ("No changes detected").
- **`features/workflows/data.ts`** — `saveWorkflowGraph({ orgId, id, graph })`: runs `validateGraph` first and throws (joining the problems) if it finds any, otherwise updates the workflow's `graph` and `updatedAt`, scoped to both `id` and `orgId`.
- **`features/workflows/actions.ts`** — `runWorkflowAction` now takes `{ id, graph: WorkflowGraph }` instead of no arguments: it saves the graph via `saveWorkflowGraph` before triggering the `hello-world` task, so the run reflects the current canvas state.

---

## [0.20.0] — 2026-07-24

> **Highlights** 🗑️ Workflows can be deleted — the "…" menu's delete action now removes the workflow's database row and cleans up its Liveblocks room, then redirects home.

### ✨ Added

- **`features/workflows/data.ts`** — `deleteWorkflow(orgId, id)`: deletes the workflow row scoped to both `id` and `orgId` (via `and(...)`), returning the deleted row or `undefined` when it didn't exist or belonged to another org.
- **`features/workflows/actions.ts`** — `deleteWorkflowAction(id)`: resolves the active org via `auth()`, calls `deleteWorkflow`, and throws if no matching row was found. The workflow's id doubles as its Liveblocks room id, so the room is deleted too via `liveblocks.deleteRoom(id)`. Revalidates the workflows layout and redirects home.

### ♻️ Changed

- **`features/workflows/components/right-sidebar.tsx`** — `ActionsMenu` now takes a `workflowId` prop and uses `useTransition` to run the delete: `onSelect` calls `preventDefault()` (keeping the menu mounted so its disabled state stays visible) and starts a transition that awaits `deleteWorkflowAction(workflowId)`, letting the router handle the action's redirect on success. The delete menu item is disabled while pending. `RightSidebar` now takes `workflowId` and threads it down to `ActionsMenu`, replacing the "TODO: delete the workflow, then navigate away" placeholder.
- **`features/workflows/components/workflow-shell.tsx`** — passes `workflowId` through to `<RightSidebar workflowId={workflowId} />`.

---

## [0.19.0] — 2026-07-24

> **Highlights** 📝 The Editor tab now auto-switches in when you select a node, fields can opt into a multi-line textarea, and required fields are marked in the inspector.

### ✨ Added

- **`features/workflows/nodes/node-registry.ts`** — `NodeField` gains `multiline?: boolean` (render as a textarea instead of a single-line input) and `required?: boolean`. The `open-url` node's `url` field is now `required: true`.

### ♻️ Changed

- **`features/workflows/components/right-sidebar.tsx`**:
  - `FieldInput` renamed to `Field`; it now renders a `Textarea` when `field.multiline` is set, otherwise the existing `Input`.
  - `Inspector`'s field `Label` shows a destructive-colored `*` when `field.required`.
  - `RightSidebar` tracks `prevSelectedId` and, when the selected node's id changes, switches the tab to `"editor"` during render — implements the "TODO: auto-switch to the Editor tab when the selection changes" from `v0.17.1`.

---

## [0.18.0] — 2026-07-24

> **Highlights** 💾 Editing a node's fields in the Editor tab now actually persists — and the canvas node itself renders a live summary of its configured values. Also fixes a crash in the dark-mode hotkey triggered by synthetic keyboard events.

### ✨ Added

- **`features/workflows/components/step-node.tsx`** — when a node has filled-in fields, the canvas card now renders a bordered section below its header listing each field's label and value (truncated), so a glance at the canvas shows a node's configured state without opening the inspector.

### ♻️ Changed

- **`features/workflows/components/right-sidebar.tsx`** — `Inspector`'s `FieldInput.onChange` now calls `updateNodeData(node.id, { values: { ...values, [field.key]: value } })` (via `useReactFlow`), replacing the "TODO: save the edit back onto the selected node" placeholder — Editor tab edits persist onto the node.

### 🐛 Fixed

- **Dark-mode hotkey crash on synthetic `keydown` events** — the global "press `d` to toggle dark mode" listener in `components/theme-provider.tsx` called `event.key.toLowerCase()` unconditionally. Since it listens on `window`, it receives every keydown on the page — including synthetic ones dispatched by some browser extensions (password managers, Grammarly, automation tooling) that construct a bare `KeyboardEvent` without a `key`, which threw `Cannot read properties of undefined (reading 'toLowerCase')`. Changed to `event.key?.toLowerCase()`: identical behavior for real key presses, safely ignored otherwise.

---

## [0.17.1] — 2026-07-24

> **Highlights** 🎯 The Editor tab now reflects whatever node is actually selected on the canvas, instead of always showing the empty state.

### ♻️ Changed

- **`features/workflows/components/right-sidebar.tsx`** — `const selected` now comes from `useStore((s) => s.nodes.find((n) => n.selected))`, cast to `StepNodeType | undefined`, replacing the "TODO: read the currently selected node from React Flow" placeholder. `Inspector` (already wired to `selected`) now reflects the actual canvas selection.

---

## [0.17.0] — 2026-07-24

> **Highlights** ➕ The Toolbar tab is wired up — clicking a node type now actually adds it to the canvas, centered in the current view, with single-trigger enforcement and auto-numbered duplicate titles.

### ✨ Added

- **`app/(dashboard)/workflows/[id]/page.tsx`** — wraps `WorkflowShell` in a `<ReactFlowProvider>`. The canvas and the sidebar's node palette live in separate components, so a single provider above both gives them one shared React Flow store.

### ♻️ Changed

- **`features/workflows/components/right-sidebar.tsx`** — `Palette`'s `add(type)` action is implemented (previously a `TODO`), using `useReactFlow` (`getNodes`/`getViewport`/`addNodes`) and `useStore` (pane width/height):
  - Enforces a single trigger per workflow, toasting an error (via `sonner`) and bailing out if a trigger already exists on the canvas.
  - Auto-numbers duplicate node titles (e.g. "Open URL 1", "Open URL 2") by counting existing nodes of the same type.
  - Computes the pane's center in flow coordinates from the current viewport transform (`position * zoom + offset`) and drops the new node there, so it lands in view regardless of pan/zoom.
  - Calls `addNodes` with a fresh id, `type: "step"`, the computed position, and the node's initial `data` (`values: {}`).

---

## [0.16.0] — 2026-07-24

> **Highlights** 🧰 The workflow editor's right sidebar is real — the inspector/toolbar UI from `templates/right-sidebar.tsx` now drives the live editor, replacing the placeholder Run button.

### ♻️ Changed

- **`features/workflows/components/right-sidebar.tsx`** — replaced the bare Run-button `RightSidebar` with the full inspector/toolbar sidebar built on the real node registry:
  - **Header** — workflow-level actions: a "…" menu (destructive delete-workflow entry) and a Run button, above two tabs.
  - **Toolbar tab** — an accordion palette of node types grouped by kind (Triggers/Actions), each entry adding that node type to the canvas.
  - **Editor tab** — renders one input per field on the selected node, or an empty state ("No node selected" / "No properties") when nothing's selected or the node has no editable fields.
  - **`NodeIcon`** — the accent-colored icon chip resolved from the registry, defined as a local helper so the file stays self-contained.
  - Selection state, field edits, add-node, delete-workflow, and run are left as `TODO`s — wiring them up depends on the canvas exposing the selected node and the corresponding server actions existing.
  - `templates/right-sidebar.tsx` is left in place as the reference scaffold this was built from.

---

## [0.15.1] — 2026-07-24

> **Highlights** 🧰 Scaffolding for the real workflow inspector/toolbar sidebar, plus a small tabs polish. Template only — nothing imports it yet and the live `components/right-sidebar.tsx` is unchanged.

### ✨ Added

- **`templates/right-sidebar.tsx`** — a fleshed-out `RightSidebar` built on the real node registry: a header with workflow actions (a "…" menu with delete, and a Run button) above two tabs — **Toolbar** (an accordion palette of node types grouped by kind, trigger/action, each adding to the canvas) and **Editor** (renders one input per field on the selected node, or an empty state when nothing's selected). `NodeIcon`, the accent-colored icon chip resolved from the registry, is defined as a local helper directly in this file so the sidebar stays a single-file template. Internal helpers (`Section`, `FieldInput`, `Inspector`, `Palette`, `ActionsMenu`, `RunButton`) are defined bottom-up toward the exported component. Selection state, field edits, add-node, delete-workflow, and run are all left as `TODO`s for when the canvas exposes selection and the server actions exist.

### ♻️ Changed

- **`components/ui/tabs.tsx`** — adjusted the active-tab underline offset in the horizontal "line" variant from `bottom-[-5px]` to `-bottom-1.25`, tightening the gap between the tab label and its active-state underline.

---

## [0.15.0] — 2026-07-24

> **Highlights** 🧑‍🤝‍🧑 Real names and avatars now show up in the collaborative canvas — cursors, presence, and a new `AvatarStack` — instead of Liveblocks' anonymous placeholders.

### ✨ Added

- **`app/api/liveblocks/users/route.ts`** — the backend for Liveblocks' `resolveUsers`: validates the caller is authenticated with an active org, parses `{ userIds: string[] }` from the body (400 on invalid JSON or shape), and returns `[]` early for an empty list. Looks users up via Clerk's `clerkClient().users.getUserList`, scoped to `organizationId: [orgId]` so display info can't be harvested for users outside the caller's organization. Returns one entry per requested ID, in the same order, with `name` (full name, falling back to username, then email, then `"Anonymous"`) and `avatar`, or `null` for an unknown/out-of-org id.

### ♻️ Changed

- **`features/workflows/components/room.tsx`** — added a `resolveUsers` callback to `LiveblocksProvider` that `POST`s to `/api/liveblocks/users` and returns the resolved user info, swallowing network/non-OK responses as `undefined` so Liveblocks falls back gracefully.
- **`features/workflows/components/canvas.tsx`** — renders Liveblocks' `<AvatarStack />` (from `@liveblocks/react-ui`) over the canvas so everyone currently in the room is visible at a glance.
- **Dependencies** — `@trigger.dev/sdk`, `@trigger.dev/react-hooks`, and `@trigger.dev/build` bumped `4.5.5` → `4.5.7`.

---

## [0.14.1] — 2026-07-24

> **Highlights** 🏢 Liveblocks resources (identified users and rooms) are now compartmentalized by Clerk organization instead of sharing the `"default"` organization, and the room's loading state got a proper spinner.

### ♻️ Changed

- **`app/api/liveblocks/auth/route.ts`** — pass `organizationId: orgId` alongside `groupIds` in `liveblocks.identifyUser`, so the identified user is compartmentalized to their Clerk organization.
- **`app/(dashboard)/workflows/[id]/page.tsx`** — pass `organizationId: orgId` in `liveblocks.getOrCreateRoom`, so the room is created under the owning org rather than the `"default"` organization.
- **`components/app-sidebar.tsx`** — added `afterCreateOrganizationUrl`, `afterSelectOrganizationUrl`, and `afterLeaveOrganizationUrl` (all `"/"`) to `OrganizationSwitcher`, so creating, switching, or leaving an organization returns the user to the workflows home instead of Clerk's default redirect.
- **`features/workflows/components/room.tsx`** — replaced the plain "Loading…" text fallback with a centered `Spinner`, matching the app's loading UI elsewhere.

---

## [0.14.0] — 2026-07-23

> **Highlights** 🔒 Replaced the public-key Liveblocks connection with proper **ID-token auth** — workflow rooms are now private by default, with access scoped to the Clerk organization that owns the workflow.

### ✨ Added

- **`lib/liveblocks.ts`** — a shared server-side Liveblocks client built from `LIVEBLOCKS_SECRET_KEY`, for Route Handlers / Server Components that call the Liveblocks REST API (room creation, permissions, etc.).
- **`app/api/liveblocks/auth/route.ts`** — `POST` handler backing Liveblocks' `authEndpoint`. Resolves the current Clerk user and org via `auth()`/`currentUser()` (401 if either is missing), then calls `liveblocks.identifyUser` with an ID token: the user's Clerk `orgId` becomes their Liveblocks `groupId`, and `userInfo` (name, avatar) comes from the Clerk profile. Room permissions now resolve per-room from group membership instead of a shared public key.
- **Dependency** — `@liveblocks/node` (`^3.22.0`), the server-side SDK backing the client above and the auth route.

### ♻️ Changed

- **`features/workflows/components/room.tsx`** — swapped `LiveblocksProvider`'s `publicApiKey` prop for `authEndpoint="/api/liveblocks/auth"`, so every client authenticates through the new route.
- **`app/(dashboard)/workflows/[id]/page.tsx`** — resolves `orgId` via `auth()` and the workflow via `getWorkflow(orgId, id)`, calling `notFound()` when either is missing (no active org, or the workflow doesn't exist / isn't in this org). Ensures the Liveblocks room exists via `liveblocks.getOrCreateRoom`, with `defaultAccesses: []` (private by default) and `groupsAccesses` granting `"room:write"` to the owning org's group — matching the `groupIds` issued by the auth endpoint — plus `metadata.title` set to the workflow's name.
- **`.env.example`** — replaced the now-unused `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` with `LIVEBLOCKS_SECRET_KEY` (the real value lives only in the gitignored `.env.local`).

---

## [0.13.0] — 2026-07-23

> **Highlights** 👥 The workflow canvas is now realtime-collaborative — wrapped in a Liveblocks Room, with React Flow's nodes and edges driven from shared Liveblocks storage so edits sync live across clients.

### ✨ Added

- **Liveblocks realtime collaboration** for the workflow canvas.
  - **Dependencies** — `@liveblocks/client`, `@liveblocks/react`, `@liveblocks/react-flow`, `@liveblocks/react-ui` (all `^3.22.0`).
  - **`liveblocks.config.ts`** — global Liveblocks type declaration (`UserMeta`: `id` + `info` with `name`/optional `avatar`), typing presence/user data across the app.
  - **`features/workflows/components/room.tsx`** — `Room` component wrapping children in `LiveblocksProvider` (throttle 16, authed via `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY`) + `RoomProvider` (id = `roomId`) + `ClientSideSuspense` with a loading fallback.
  - **`.env.example`** — documents `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` (public `pk_dev_*` key, used client-side; the real value lives only in the gitignored `.env.local`).

### ♻️ Changed

- **`features/workflows/components/canvas.tsx`** — replaced the local `useNodesState`/`useEdgesState` with `useLiveblocksFlow` (suspense) from `@liveblocks/react-flow`, seeded from the existing initial nodes/edges so the graph lives in shared storage; wired `onDelete` and imported the Liveblocks React UI / React Flow stylesheets. Keeps `proOptions={{ hideAttribution: true }}`.
- **`app/(dashboard)/workflows/[id]/page.tsx`** — wraps the `WorkflowShell` in `<Room roomId={…}>` so the canvas joins the workflow's realtime room.

---

## [0.12.1] — 2026-07-23

> **Highlights** 🧩 Installed the Liveblocks best-practices agent skill, ahead of adding realtime collaboration to the workflow canvas.

### ✨ Added

- **Liveblocks best-practices agent skill** — installed from `liveblocks/skills` into `.agents/skills/liveblocks-best-practices/` and `.claude/skills/liveblocks-best-practices/`, with `skills-lock.json` recording its source and content hash. The skill is a `SKILL.md` plus ~45 reference docs covering auth (ID vs access tokens), rooms/organizations, storage and presence hooks, comments/threads, text editors (Tiptap/Yjs/Lexical), the multiplayer React Flow integration, and error/loading handling. As with the earlier Clerk, Neon, and Trigger.dev bundles, the `.claude/skills/*` symlinks were committed as duplicate copies because `core.symlinks` is `false` here.

---

## [0.12.0] — 2026-07-23

> **Highlights** 🗃️ Data-layer groundwork for the workflow detail page — a `getWorkflow` function that loads a single workflow, scoped to the organization.

### ✨ Added

- **`features/workflows/data.ts`** — `getWorkflow(orgId, id)`: fetches a single workflow by id, scoped to the organization so one org can't read another's workflow (filters on both `workflows.id` and `workflows.orgId` via `and(...)`), returning the row or `undefined` when not found. Imports `and` from `drizzle-orm` alongside the existing `desc`/`eq`.

---

## [0.11.0] — 2026-07-22

> **Highlights** 🧩 The canvas now renders real, registry-driven **step nodes** instead of React Flow's default placeholders — the node registry and `StepNode` component graduated from `templates/` into the codebase, and the canvas seeds a proper `Start` trigger node.

### ✨ Added

- **`features/workflows/nodes/node-registry.ts`** — the node manifest, promoted from `templates/`: `NodeDefinition` / `NodeField` / `StepNodeKind` types plus a `nodeRegistry` with the first two entries (`start` trigger, `open-url` action), each carrying a label, lucide icon, Tailwind accent classes, and the editable fields the inspector will render. Also exports `NodeType`, the plain-JSON `StepNodeData` shape (`type`/`kind`/`title` denormalized so the server can read a node without the registry), and `StepNodeType`.
- **`features/workflows/components/step-node.tsx`** — the `StepNode` component, promoted from `templates/` and repointed at `@/features/workflows/nodes/node-registry` now that the registry lives at its real path. A memoized card that looks its definition up in the registry, renders the accent icon chip and title, and draws source/target handles — omitting the target handle for trigger nodes, which start the flow and take no input.

### ♻️ Changed

- **`features/workflows/components/canvas.tsx`** (implements [`specs/wire-nodes-into-canvas.md`](specs/wire-nodes-into-canvas.md)):
  - Registers `StepNode` as the `"step"` node type via a **module-scope** `nodeTypes` map, so its reference stays stable across renders as React Flow requires, and passes it to `<ReactFlow nodeTypes={nodeTypes} />`.
  - Seeds the canvas with a single fixed-id `start` node (`type: "step"`; data `type: "start"`, `kind: "trigger"`, `title: "Start"`, empty `values`), written as a plain object so it renders identically every time.
  - Clears `initialEdges` — the only edge referenced the placeholder nodes that are now gone. Swaps the `Node` type import for `NodeTypes`.
- **`AGENTS.md`** — added a "ReactFlow — don't trust training data" rule: consult <https://reactflow.dev/llms.txt> before writing or changing ReactFlow code, since its APIs, props, and hook signatures shift across versions.

---

## [0.10.1] — 2026-07-20

> **Highlights** 📄 Scaffolding for registry-driven canvas nodes — a spec plus the node-registry and StepNode templates. Templates and spec only; nothing imports them yet and the Canvas still renders its placeholder graph.

### ✨ Added

- **`specs/wire-nodes-into-canvas.md`** — spec for making the Canvas render real registry-driven step nodes instead of the placeholder ones: register `StepNode` as the `"step"` node type via a module-scope `nodeTypes` map (stable reference, as React Flow requires), seed a single fixed-id start node (`type: "step"`; data `type: "start"`, `kind: "trigger"`, `title: "Start"`, empty `values`), and clear the initial edges that referenced the removed placeholder nodes.
- **`templates/node-registry.ts`** — the node manifest: `NodeDefinition` / `NodeField` / `StepNodeKind` types and a `nodeRegistry` with the first two entries (`start` trigger, `open-url` action), each carrying a label, lucide icon, Tailwind accent classes, and editable fields for the inspector. Also exports `NodeType`, the plain-JSON `StepNodeData` shape (`type`/`kind`/`title` denormalized so the server can read a node without the registry), and `StepNodeType`.
- **`templates/step-node.tsx`** — the `StepNode` React Flow component: a memoized card that looks its definition up in the registry, renders the accent icon chip and title, and draws source/target handles — omitting the target handle for trigger nodes, which start the flow and take no input.

### ♻️ Changed

- **`features/workflows/components/canvas.tsx`** — import reordering only (no behavior change), plus Prettier normalization.

> **Note:** `templates/step-node.tsx` imports the registry from `@/templates/node-registry` so the template typechecks in place. When the files move to the locations the spec describes (`features/workflows/nodes/node-registry.ts` and `features/workflows/components/step-node.tsx`), that import becomes `@/features/workflows/nodes/node-registry`.

---

## [0.10.0] — 2026-07-20

> **Highlights** 🎨 The workflow editor's canvas is real — an interactive **React Flow** graph now fills the shell's canvas panel, with hydration-safe theming and no attribution watermark.

### ✨ Added

- **`features/workflows/components/canvas.tsx`** — a `Canvas` built on `@xyflow/react` (React Flow): a small two-node / one-edge starter graph with node/edge change handlers and connect support (smoothstep edges styled with the theme border color), plus `Controls`. CSS-variable overrides map React Flow's background/edge styling onto the app's theme tokens, and `proOptions={{ hideAttribution: true }}` hides the attribution watermark.
- **Dependency** — `@xyflow/react` (`^12.11.2`).

### ♻️ Changed

- **`features/workflows/components/workflow-shell.tsx`** — renders `<Canvas />` in the top-left resizable panel, replacing the "Canvas" placeholder label.

### 🐛 Fixed

- **Canvas theme hydration mismatch** (implementing [`specs/canvas-theme.md`](specs/canvas-theme.md)) — a `useMounted()` flag built on `useSyncExternalStore` stays `false` during server render and initial hydration and `true` after mount; `colorMode` uses `"light"` until mounted, then switches to `next-themes`' `resolvedTheme`. This keeps the server and first client render identical, avoiding the light/dark React Flow hydration error.

---

## [0.9.1] — 2026-07-20

> **Highlights** 📄 A spec for the upcoming Canvas theme/hydration fix, plus a markdownlint cleanup of the spec files.

### ✨ Added

- **`specs/canvas-theme.md`** — specification for fixing the Canvas component's hydration mismatch: `next-themes` has no theme on the server, so React Flow renders light on the server and dark on the client. The fix — a hydration-safe `mounted` flag via `useSyncExternalStore`, switching to `resolvedTheme`, and using `"light"` as the `colorMode` until mounted. Spec only; no implementation.

### 🐛 Fixed

- **`specs/workflow-shell.md`** — prepended a top-level heading so the file satisfies markdownlint `MD041` (first line should be an `h1`).

---

## [0.9.0] — 2026-07-20

> **Highlights** ▶️ The workflow editor's inspector gets a **Run** button that fires a Trigger.dev task and streams its status live — the first end-to-end task trigger from the app.

### ✨ Added

- **`features/workflows/components/right-sidebar.tsx`** — `RightSidebar` with a **Run** button that calls the trigger action in a transition (spinner while pending) and stores the returned run handle. A nested `RunStatus` subscribes to the run in realtime via `useRealtimeRun` (from `@trigger.dev/react-hooks`), authorized by the run's `publicAccessToken`, showing the live status and the task's output message on completion.
- **Dependency** — `@trigger.dev/react-hooks` (`^4.5.5`) for the realtime run hook.

### ♻️ Changed

- **`features/workflows/actions.ts`** — added `runWorkflowAction()`: resolves the active org via Clerk `auth()` and triggers the `hello-world` task with `tasks.trigger`, returning the run handle (`id` + `publicAccessToken`). Uses the type-only import of `helloWorldTask` (`import type … from "@/trigger/example"`) so task code isn't bundled into the app.
- **`features/workflows/components/workflow-shell.tsx`** — renders `<RightSidebar />` in the inspector panel.

---

## [0.8.0] — 2026-07-20

> **Highlights** ⏱️ Background-job infrastructure — **Trigger.dev** (v4) is wired in with a Hello World task, its MCP server, and agent skills, ready for durable async work (workflow runs, scheduled jobs, long-running automation).

### ✨ Added

- **Trigger.dev (v4) setup** for background/async task execution.
  - **Dependencies** — `@trigger.dev/sdk` (`^4.5.5`, the task SDK) and `@trigger.dev/build` (`^4.5.5`, build extensions for deploys).
  - **`trigger.config.ts`** — `defineConfig` from `@trigger.dev/sdk` (the v4 entry, not the deprecated `/v3` subpath): the `trigger` task dir, node runtime, 3600s max duration, and a default retry policy (enabled in dev).
  - **`trigger/example.ts`** — the Hello World example task (`id: "hello-world"`) using the v4 `task()` API, with a typed `unknown` payload.
  - **`tsconfig.json`** — includes `trigger.config.ts` for type-checking.
  - **`.gitignore`** — ignores the `.trigger` build/dev artifacts directory.
  - **`.env.example`** — documents `TRIGGER_SECRET_KEY` (the real `tr_dev_*` key lives only in the gitignored `.env.local`, from the dashboard API Keys page).
- **MCP server + agent skills** — `.mcp.json` registers the Trigger.dev MCP server (docs, deploys, run monitoring from the agent), and `.agents/skills/` + `.claude/skills/` add six Trigger.dev skills (`authoring-tasks`, `authoring-chat-agent`, `chat-agent-advanced`, `cost-savings`, `getting-started`, `realtime-and-frontend`), with `AGENTS.md`/`CLAUDE.md` noting them. As with earlier skill bundles, the `.claude/skills/*` symlinks were committed as duplicate copies because `core.symlinks` is `false` here.

---

## [0.7.0] — 2026-07-20

> **Highlights** 🧱 The workflow editor gets its shell — a resizable three-region layout (canvas + logs stacked on the left, an inspector on the right), rendered on the workflow detail page.

### ✨ Added

- **`features/workflows/components/workflow-shell.tsx`** — the `WorkflowShell` layout component built per [`specs/workflow-shell.md`](specs/workflow-shell.md): a horizontal `ResizablePanelGroup` (`size-full`) using this project's rem-based Resizable sizing.
  - **Left column** (`minSize 30rem`) — a vertical split into a **canvas** placeholder (top, `minSize 18rem`) and a **logs** placeholder (bottom, `defaultSize 8rem` / `minSize 6rem`).
  - **Right column** — an **inspector** placeholder (`defaultSize 16rem`, `minSize 14rem`, `maxSize 36rem`).
  - Placeholder labels only (Canvas / Logs / Inspector); no sub-components or data fetching yet. `workflowId` is accepted as the component's API for the wiring to come.

### ♻️ Changed

- **`app/(dashboard)/workflows/[id]/page.tsx`** — renders `<WorkflowShell workflowId={id} />` in place of the previous id placeholder.

---

## [0.6.1] — 2026-07-20

> **Highlights** 📄 A written spec for the upcoming workflow editor shell — no implementation yet.

### ✨ Added

- **`specs/workflow-shell.md`** — specification for a `WorkflowShell` layout component: a rem-sized `Resizable` panel layout (canvas + logs stacked on the left, an inspector on the right) to be rendered from the `/workflows/[id]` page. Spec only; the component is not built in this release.

---

## [0.6.0] — 2026-07-20

> **Highlights** 🧭 Workflows are now navigable — selecting one in the sidebar opens its own `/workflows/[id]` page, with the active workflow highlighted and full loading/error/not-found states.

### ✨ Added

- **`app/(dashboard)/workflows/[id]/` route** (under the `(dashboard)` group):
  - `page.tsx` — async page that awaits the route params and renders the workflow id (placeholder for the node editor to come).
  - `loading.tsx` — route-level loading UI while the segment streams in.
  - `error.tsx` — error boundary with a reset action.
  - `not-found.tsx` — UI for missing/invalid workflow ids.

### ♻️ Changed

- **`features/workflows/components/workflow-nav.tsx`** — each workflow now renders as a `<Link>` to `/workflows/[id]` (`SidebarMenuButton asChild`), with the active workflow highlighted via `usePathname()` (`isActive`).
- **`AGENTS.md`** — added a "JSX text escaping" rule: escape apostrophes/quotes in JSX text content (`&apos;` / `&quot;`) to satisfy `react/no-unescaped-entities`.

---

## [0.5.1] — 2026-07-19

> **Highlights** 🔑 The `.env.example` template now documents the Neon Postgres variables, so a fresh clone knows exactly which database env vars to provide.

### ✨ Added

- **`.env.example`** — added the Neon Postgres variables (empty placeholders; real values live only in the gitignored `.env.local`, pulled via `neon env pull`):
  - `DATABASE_URL` — pooled connection used by the app at runtime.
  - `DATABASE_URL_UNPOOLED` — direct/unpooled connection used for migrations and DDL (`drizzle-kit`).
  - `NEON_BRANCH` — the Neon branch the local env is pulled from.

---

## [0.5.0] — 2026-07-19

> **Highlights** ⚙️ The first real domain feature — **workflows**. The placeholder `users` schema is replaced by an organization-scoped `workflows` model, with a data layer, a "create workflow" server action, and the sidebar wired to list and create workflows backed by Neon Postgres.

### ✨ Added

- **`features/workflows/data.ts`** — the workflows data layer: `listWorkflows(orgId)` (the org's workflows, newest first) and `createWorkflow(orgId, name)` (insert and return the row).
- **`features/workflows/actions.ts`** — `createWorkflowAction(name)`, a `"use server"` action that resolves the active org via Clerk `auth()`, creates the workflow, revalidates the workflows layout, and redirects to the new workflow's page.
- **`features/workflows/lib/generate-slug.ts`** — `generateSlug()`, an adjective-animal name generator (via `unique-names-generator`) used as the default workflow name.
- **Dependency** — `unique-names-generator` (`^4.7.1`).

### ♻️ Changed

- **`lib/db/schema.ts`** — replaced the starter `users` table with a `workflows` table: `uuid` id, `org_id` (Clerk organization), `name`, `graph` (`jsonb`, for the node editor to come), and `created_at`/`updated_at`. Exports the inferred `Workflow` row type.
- **`features/workflows/components/workflow-nav.tsx`** — now takes `workflows` and `onCreateWorkflow` as props instead of a hardcoded list; "New workflow" calls the server action with a generated slug inside a `useTransition` (disabled while pending), in both the expanded and icon-collapsed (popover) layouts.
- **`components/app-sidebar.tsx`** — became an async server component: resolves `orgId` via `auth()`, fetches the org's workflows with `listWorkflows`, and passes them plus `createWorkflowAction` down to `WorkflowNav`.
- **`AGENTS.md`** — added a "Database types" rule: derive row types from the Drizzle schema (`typeof table.$inferSelect` / `$inferInsert` from `lib/db/schema.ts`), narrowing with `Pick`/`Omit` rather than hand-writing shapes.

### 🗑️ Removed

- **`lib/db/migrations/` (initial `users` migration)** — dropped the generated migration and reset the folder to a `.gitkeep`. Schema is now synced to Neon via `drizzle-kit push` (verified: the `workflows` table is live and push reports no changes).

---

## [0.4.0] — 2026-07-19

> **Highlights** 🗄️ The app now has a database — Neon serverless Postgres wired up with Drizzle ORM, an initial `users` schema, and a generated + applied migration.

### ✨ Added

- **Neon Postgres + Drizzle ORM** — the database layer, connected to the `flowbrowse` Neon project provisioned via `neon init`.
  - **Dependencies** — `@neondatabase/serverless` (`^1.1.0`, HTTP driver), `drizzle-orm` (`^0.45.2`), `drizzle-kit` (`^0.31.10`, dev), `dotenv` (`^17.4.2`).
  - **`.neon`** — Neon project context (`orgId` + `projectId`). Safe to commit; connection strings live only in the gitignored `.env.local` (`DATABASE_URL` / `DATABASE_URL_UNPOOLED`, pulled by `neon env pull`).
  - **`drizzle.config.ts`** — schema at `lib/db/schema.ts`, migrations to `lib/db/migrations`, DDL over `DATABASE_URL_UNPOOLED` (direct/unpooled), `casing: "snake_case"`, `verbose` + `strict`; loads env from `.env.local`.
  - **`lib/db/schema.ts`** — starter `users` table (`uuid` id, unique `clerk_id`, `email`, `name`, `created_at`/`updated_at` timestamptz with an auto-touched `updated_at`), exporting `User` / `NewUser` inferred types.
  - **`lib/db/index.ts`** — the `db` client over `drizzle-orm/neon-http` + `neon()`, with schema and snake_case casing; re-exports `schema`. Safe for serverless/edge and Next.js Server Components.
  - **`lib/db/migrations/`** — initial migration (`0000`) creating the `users` table, generated with `drizzle-kit generate` and applied to Neon with `drizzle-kit migrate`. Verified end-to-end (all 6 columns present; one row in `drizzle.__drizzle_migrations`).
- **Neon agent-skills bundle** — the Neon skills suite (`neon`, `neon-postgres`, `neon-postgres-branches`, `neon-postgres-egress-optimizer`, `neon-ai-gateway`, `neon-functions`, `neon-object-storage`, `claimable-postgres`) installed from `neondatabase/agent-skills` into `.agents/skills/` and `.claude/skills/`, with `skills-lock.json` recording sources and content hashes. As with the Clerk bundle, the `.claude/skills/*` symlinks were committed as duplicate copies because this environment's `git config core.symlinks` is `false`.

---

## [0.3.1] — 2026-07-16

> **Highlights** 🧭 The sidebar's workflow list is now its own `WorkflowNav` component with a proper collapsed-state menu, the sidebar always renders (mobile-responsive hiding removed), and a hidden-Unicode-character bug in an import path was found and fixed.

### ✨ Added

- **`features/workflows/components/workflow-nav.tsx`** — extracted `WorkflowNav` component: the "Workflows" `SidebarGroup`, the workflow list with client-side active-workflow state, and the "New workflow" action, previously inlined in `AppSidebar`. Adds a dedicated collapsed-state view (`state === "collapsed"`): a single `Popover` trigger showing a Workflows icon/tooltip that opens a menu with "New workflow" plus the full workflow list, so the feature stays reachable when the sidebar is icon-only.

### 🐛 Fixed

- **Hidden Unicode character in an import path.** The `WorkflowNav` component previously lived in a directory literally named `\u200Efeatures` — with an invisible `U+200E` LEFT-TO-RIGHT MARK before "features" — which only worked because `components/app-sidebar.tsx`'s import repeated the exact same invisible character (confirmed via hex dump: `e2 80 8e` sitting between `@/` and `features`). This is a classic copy-paste artifact and made the path fragile: any tool or future edit that created a normal `features/` directory would silently fail to resolve. Recreated the component under a clean ASCII `features/` directory and repointed the import in `app-sidebar.tsx` — verified byte-for-byte clean afterward.

### ♻️ Changed

- **`components/app-sidebar.tsx`** — replaced the inline workflow list markup with `<WorkflowNav />`, imported from the corrected `@/features/workflows/components/workflow-nav` path.
- **`components/ui/sidebar.tsx`** — the sidebar is now always visible instead of hiding below the `md` breakpoint: `isMobile` is hardcoded to `false` instead of calling `useIsMobile()` (dropping the now-unused `hooks/use-mobile` import), and the `hidden ... md:block` / `hidden ... md:flex` wrapper classes became plain `block` / `flex`. Also two Tailwind v4 syntax touch-ups: negative-offset classes now use the shorthand arbitrary-property form (`-left-(--sidebar-width)` instead of `left-[calc(var(--sidebar-width)*-1)]`, same for the right side), and the rail's `after:start-1/2` became the logical-property `after:inset-s-1/2`.

---

## [0.3.0] — 2026-07-16

> **Highlights** 🗂️ A real dashboard shell — a collapsible sidebar with organization switching and a workflow list, plus an empty state guiding users to create their first workflow.

### ✨ Added

- **`app/(dashboard)/layout.tsx`** — new dashboard layout wrapping every route in `SidebarProvider` + `AppSidebar` + `SidebarInset` (from `components/ui/sidebar`), giving the whole dashboard shared sidebar chrome. Grouped under `(dashboard)` so it applies at the root without adding a URL segment.
- **`app/(dashboard)/page.tsx`** — replaces the removed `app/page.tsx` as the `/` route (route groups are URL-transparent). Renders an `Empty` state (icon, title, description, and a "New workflow" button) prompting the user to pick or create a workflow.
- **`components/app-sidebar.tsx`** — the `AppSidebar` component, built on the shadcn `Sidebar` primitives (`variant="inset"`, `collapsible="icon"`):
  - **Header** — Clerk's `<OrganizationSwitcher hidePersonal />` plus a `SidebarTrigger`, with appearance overrides so the switcher collapses cleanly in icon mode.
  - **Content** — a "Workflows" group listing placeholder workflow names as `SidebarMenuButton`s, with client-side active-workflow state and a "New workflow" `SidebarGroupAction`.
  - **Footer** — Clerk's `<UserButton />` with appearance overrides so it also collapses to icon-only.

### ♻️ Changed

- **`app/layout.tsx`** — added `<TooltipProvider>` (from `components/ui/tooltip`) wrapping `{children}` and `<Toaster />`, inside `ThemeProvider`, so any component using shadcn `Tooltip` (e.g. the sidebar's icon-mode tooltips) has a provider in scope. Imports were also reordered (external packages, then local aliases, then the relative CSS import) for readability.
- **`next.config.ts`** — added `devIndicators: false` to hide Next.js's dev-mode indicator overlay, which was visually colliding with the new sidebar UI.

---

## [0.2.2] — 2026-07-16

> **Highlights** 🎨 Synced `design/` with 4 mockups added upstream since the original pull — new sidebar-collapsed states, an alternate canvas view, and a node failure state.

### ✨ Added

- **`design/`** — 4 new reference mockups, checked against the upstream design reference and downloaded verbatim (byte size verified against the source):
  - `canvas-2.png` — alternate canvas view.
  - `collapsed-app-sidebar.png` — sidebar in its collapsed state.
  - `collapsed-app-sidebar-workflow-list.png` — collapsed sidebar showing the workflow list.
  - `node-fail.png` — a node's failed/error state.
  - The existing 16 files were checked against upstream `main` too and still match by size — no updates needed there.

---

## [0.2.1] — 2026-07-16

> **Highlights** 🎨 Reference design mockups for the workflow-editor UI, plus a round of global theme polish — a Clerk theme import at the stylesheet level, tighter corner radii, a softer dark mode, and pointer cursors on buttons.

### ✨ Added

- **`design/`** _(new, 16 PNGs)_ — reference screenshots/mockups downloaded verbatim from the upstream design reference (fetched via the GitHub Contents API so byte content matches the source exactly). Covers the app shell and workflow editor: `action-node`, `app-sidebar`, `canvas`, `empty-editor`, `logs-panel`, `logs-with-output-panel`, `no-workflow-selected`, `node-data-1/2/3`, `node-editor-1/2/3`, `node-in-progress`, `right-sidebar`, `trigger-node`. Serves as the visual reference for upcoming UI work.

### ♻️ Changed

- **`app/globals.css`** — global theme polish:
  - Added `@import "@clerk/ui/themes/shadcn.css";` alongside the existing Tailwind/shadcn imports, making Clerk's shadcn theme tokens available at the global stylesheet level in addition to the direct import already present in `app/layout.tsx`.
  - Reduced `--radius` from `0.625rem` to `0.4rem` for tighter corner rounding across every radius-derived token (`sm`/`md`/`lg`/`xl`/`2xl`/`3xl`/`4xl`).
  - Lightened the dark theme's `--background` (`0.145` → `0.222`), `--card` (`0.205` → `0.256`), and `--sidebar` (`0.205` → `0.235`) tokens for a softer, less pitch-black dark mode.
  - Added a new `@layer base` rule forcing `cursor: pointer` on all non-disabled buttons and `role="button"` elements.
  - Re-indented the file from 4-space to 2-space indentation for consistency with the rest of the codebase, and added the missing trailing newline.

---

## [0.2.0] — 2026-07-16

> **Highlights** 🏢 Clerk **Organizations** support — signed-in users can be prompted to choose or create an organization, and switch between organizations directly from the home page.

### ✨ Added

- **`app/(auth)/choose-organization/page.tsx`** — new route rendering Clerk's `<TaskChooseOrganization redirectUrlComplete="/" />`, grouped under the existing `(auth)` route group. Resolves to `/choose-organization` (route groups are URL-transparent) and returns the user to `/` once they've picked or created an organization.
- **`app/page.tsx`** — added `<OrganizationSwitcher />` alongside the existing `<UserButton />` (wrapped in a flex column), so the active organization can be switched directly from the home page.

### ♻️ Changed

- **`app/layout.tsx`** — added `taskUrls={{ "choose-organization": "/choose-organization" }}` to `<ClerkProvider>`, so when Clerk determines a signed-in user has an outstanding "choose organization" task, it redirects them to the new in-app page instead of Clerk's default hosted task UI.

---

## [0.1.3] — 2026-07-16

> **Highlights** 🤖 Installed the Clerk agent-skills bundle — reference documentation for Clerk CLI, Backend API, custom UI, Next.js patterns, organizations, billing, setup, and testing — so AI coding assistants have first-party Clerk context available in this repo.

### ✨ Added

- **`.agents/skills/`** — the canonical Clerk agent-skills bundle, pulled from [`clerk/skills`](https://github.com/clerk/skills) by the Clerk CLI's skills installer (`npx skills`) during the earlier `clerk init` run. Eight skills covering `clerk`, `clerk-backend-api`, `clerk-billing`, `clerk-cli`, `clerk-custom-ui`, `clerk-nextjs-patterns`, `clerk-orgs`, and `clerk-setup` — each a `SKILL.md` plus supporting references, scripts, and templates.
- **`.claude/skills/`** — the same eight skills, so Claude Code resolves Clerk skill context directly. On disk these are symlinks into `.agents/skills/`; because this environment's `git config core.symlinks` is `false`, Windows Git followed the links and committed full duplicate copies rather than symlink entries (a known tradeoff, accepted for now — see the `Other agent tools note` below).
- **`skills-lock.json`** — the installer's lockfile recording each skill's source repo, path, and content hash, so future `clerk update`/re-installs can detect drift or upstream changes.

> **Other agent tools note:** the installer also wired up (but did not need to duplicate into this repo) symlinks for Amp, Antigravity, Codex, Continue, Cursor, Gemini CLI, Junie, Windsurf, and Zed, all pointing at the same `.agents/skills/` source.

---

## [0.1.2] — 2026-07-16

> **Highlights** 🔐 The Clerk auth routes are now organized under a single `(auth)` route group, the account control moved to the home page, and **every route now requires authentication**. A committed `.env.example` documents the expected configuration.

### ♻️ Changed

- **Auth routes grouped under `(auth)`** — moved `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` into `app/(auth)/…`. Route groups (parenthesized folders) are organizational only and **not** part of the URL, so `/sign-in` and `/sign-up` resolve exactly as before — no `proxy.ts` matcher or Clerk `*_URL` env changes needed. Moved with `git mv` (R100 renames), preserving history.
- **`app/layout.tsx`** — removed the global `<header>` that rendered the `Show`-gated `SignInButton`/`SignUpButton` and `UserButton` (and their now-unused imports). `ClerkProvider` (shadcn theme), `ThemeProvider`, and `Toaster` are unchanged.
- **`app/page.tsx`** — replaced the toast demo with a minimal home page rendering Clerk's `<UserButton />` (back to a Server Component; no `"use client"`).
- **`proxy.ts`** — dropped `/` from the public route matcher, so the home page now **requires authentication**; only `/sign-in(.*)` and `/sign-up(.*)` stay public. Signed-out visitors to `/` are redirected to the sign-in page.

### ✨ Added

- **`.env.example`** — a committed template documenting the expected environment variables (the Clerk `*_URL` route configuration plus empty `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY` placeholders). A `!.env.example` negation was added to `.gitignore` so the template is tracked while all real `.env*` files (including `.env.local`) stay ignored.

---

## [0.1.1] — 2026-07-16

> **Highlights** 📝 A ground-up overhaul of this changelog — status badges, a conventions legend, a linked version index, per-release highlight callouts, emoji-labeled sections, and collapsible detail blocks — with every prior entry preserved.

### ♻️ Changed

- **`CHANGELOG.md`** — redesigned for readability and polish (content of past releases preserved verbatim in substance):
  - Added a centered masthead with **Keep a Changelog**, **SemVer**, and **latest-release** status badges.
  - Added a **Conventions** legend table explaining the ✨ / ♻️ / 🗑️ / 🐛 / ⚠️ / 🔒 change-type labels, plus reading tips.
  - Added a **Version index** table linking to each release with a one-line headline.
  - Gave each release a **Highlights** callout (and, for `0.1.0`, an at-a-glance metrics line).
  - Grouped `Added` / `Changed` entries under emoji-labeled feature headings, and moved the large component and dependency enumerations into collapsible `<details>` blocks for scannability.
  - Added a **Back to top** control and refreshed the compare/release footer links.
  - Scoped a `markdownlint-disable` (MD001 / MD033 / MD041) directive to the top of the file so the intentional inline HTML that powers the styling does not raise lint warnings.

---

## [0.1.0] — 2026-07-15

> **Highlights** 🔐 Full **Clerk authentication** (sign-in, sign-up, user button, route protection) themed to match shadcn. 🔔 App-wide **Sonner toasts** wired into the shell. 🧩 The **entire shadcn/ui component library** plus **AI chat-kit primitives** landed and became reachable at runtime.
>
> 📊 **At a glance** — 11 new runtime dependencies · 50+ UI components · 3 new auth routes/files · first app that requires a signed-in user.

### ✨ Added

#### 🧩 Full shadcn/ui component library

Installed via the shadcn CLI on top of the existing `button.tsx` primitive. All components build on `radix-ui` primitives and `class-variance-authority` variants, styled with Tailwind CSS v4 and the project's `cn()` helper.

<details>
<summary><strong>▸ All components, grouped by role (50+)</strong></summary>

<br>

- **Layout & structure** — `accordion.tsx`, `aspect-ratio.tsx`, `card.tsx`, `collapsible.tsx`, `resizable.tsx` (panel groups via `react-resizable-panels`), `scroll-area.tsx`, `separator.tsx`, `sidebar.tsx` (full collapsible app sidebar system with mobile sheet fallback, cookie-persisted state, and keyboard-shortcut toggle).
- **Navigation** — `breadcrumb.tsx`, `menubar.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `tabs.tsx`.
- **Overlays & surfaces** — `alert-dialog.tsx`, `context-menu.tsx`, `dialog.tsx`, `drawer.tsx` (via `vaul`), `dropdown-menu.tsx`, `hover-card.tsx`, `popover.tsx`, `sheet.tsx`, `tooltip.tsx`.
- **Forms & inputs** — `checkbox.tsx`, `combobox.tsx`, `command.tsx` (via `cmdk`), `field.tsx`, `input.tsx`, `input-group.tsx`, `input-otp.tsx` (via `input-otp`), `label.tsx`, `native-select.tsx`, `radio-group.tsx`, `select.tsx`, `slider.tsx`, `switch.tsx`, `textarea.tsx`, `toggle.tsx`, `toggle-group.tsx`, `button-group.tsx`, `calendar.tsx` (via `react-day-picker` + `date-fns`).
- **Feedback & status** — `alert.tsx`, `badge.tsx`, `empty.tsx`, `progress.tsx`, `skeleton.tsx`, `spinner.tsx`, `sonner.tsx` (toast notifications via `sonner`).
- **Data display** — `avatar.tsx`, `carousel.tsx` (via `embla-carousel-react`), `chart.tsx` (via `recharts`), `kbd.tsx`, `table.tsx`.
- **Direction / RTL utility** — `direction.tsx` for `dir="ltr"|"rtl"` context propagation across components.

</details>

#### 💬 AI chat-kit primitives

Building blocks for conversational UI, from the `@shadcn/react` package.

<details>
<summary><strong>▸ Chat primitives (5)</strong></summary>

<br>

- `components/ui/message.tsx` — `MessageGroup`/`Message` layout primitives supporting `align="start"|"end"` for user vs. assistant message positioning.
- `components/ui/bubble.tsx` — `BubbleGroup` and variant-driven chat bubble styling (default/ghost variants, start/end alignment).
- `components/ui/attachment.tsx` — file/media attachment card with `default`/`sm`/`xs` sizes and `horizontal`/`vertical` orientations, plus idle/error states for upload flows.
- `components/ui/message-scroller.tsx` — auto-scrolling message list built on `useMessageScroller`/`useMessageScrollerScrollable`/`useMessageScrollerVisibility` from `@shadcn/react/message-scroller`, with a scroll-to-bottom button.
- `components/ui/marker.tsx` — inline text marker/divider with `default`/`separator`/`border` variants for annotating message content.

</details>

#### 🔔 App-wide toast notifications

Wired the `sonner` toast system into the app shell, making the pre-installed `components/ui/sonner.tsx` primitive reachable at runtime **for the first time**.

- **`app/layout.tsx`** — added `import { Toaster } from "@/components/ui/sonner"` and rendered a single app-wide `<Toaster />` inside `ThemeProvider`, immediately after `{children}`.
  - _Why once, at the root:_ every route then renders its toasts through the same portal — individual pages only call `toast(...)`, never mount their own toaster.
  - _Why inside `ThemeProvider`:_ `sonner.tsx` calls `useTheme()` from `next-themes` to mirror the app's light/dark theme onto toasts. Mounting `<Toaster />` outside the provider would fall back to the default theme and desync toast styling from the rest of the UI.

#### 🔐 Clerk authentication

Added via the Clerk CLI (`clerk init --framework next --pm npm`, linked to the `flowbrowse` Clerk application) and finished by hand to match a reference implementation.

- **`proxy.ts`** _(new)_ — root proxy (Next.js 16 renamed Middleware → **Proxy**; same functionality) wiring up `clerkMiddleware()`. Uses `createRouteMatcher` to keep `/`, `/sign-in(.*)`, and `/sign-up(.*)` **public** and calls `auth.protect()` on every other request — the landing and auth pages stay reachable while all other routes require authentication. `config.matcher` skips `_next` and static assets while covering app routes and `/api|/trpc`.
- **`app/sign-in/[[...sign-in]]/page.tsx`** & **`app/sign-up/[[...sign-up]]/page.tsx`** _(new)_ — Clerk catch-all auth routes, each rendering the prebuilt `<SignIn />` / `<SignUp />` component centered on a full-height page.
- **`.env.local`** — Clerk publishable/secret keys and sign-in/sign-up route env vars written by `clerk init` _(gitignored, never committed)_.
- **`.gitignore`** — updated by `clerk init` to ensure Clerk secrets in `.env*` stay out of version control.

#### 📦 Dependencies

<details>
<summary><strong>▸ New runtime dependencies (13)</strong></summary>

<br>

- **UI / component library** — `@base-ui/react`, `@shadcn/react`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`.
- **Authentication** — `@clerk/nextjs` (`^7.5.18`, Next.js SDK), `@clerk/ui` (`^1.24.1`, pinned to match the reference commit — shadcn-styled Clerk component theme).

</details>

### ♻️ Changed

- **`app/page.tsx`** — turned the placeholder home page into an interactive demo of the toast API.
  - Added the `"use client"` directive: the button now uses an `onClick` handler, and per [`use-client` docs](node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-client.md) event handlers can only run in Client Components (the page was previously a Server Component).
  - Added `import { toast } from "sonner"` to call the imperative toast API directly (the `<Toaster />` rendering these toasts is mounted globally in `app/layout.tsx`, so no per-page setup is needed).
  - Wired the existing "Button" with `onClick={() => toast("Button clicked!", { description: "The toast API is working." })}` — a working end-to-end confirmation the `sonner` integration is live. All other page markup (heading, paragraphs, dark-mode `kbd` hint) left untouched.
- **`app/layout.tsx`** — integrated Clerk into the app shell.
  - Wrapped the app in `<ClerkProvider appearance={{ theme: shadcn }}>` (inside `<body>`, wrapping `ThemeProvider`) using the `shadcn` theme from `@clerk/ui/themes`, and imported `@clerk/ui/themes/shadcn.css` so Clerk's prebuilt components (`SignIn`, `SignUp`, `UserButton`) match the app's shadcn styling.
  - Added a global `<header>` with `Show`-gated auth controls: **signed-out** → modal `SignInButton`/`SignUpButton` (`mode="modal"`) rendered through the project's own `Button` (`ghost`/default variants); **signed-in** → Clerk's `<UserButton />`. Every route now has a consistent, polished place to sign in, sign up, and manage the account.
- **`CLAUDE.md`** _(new)_ — project instructions at the repo root mirroring the `nextjs-agent-rules` block (the "This is NOT the Next.js you know" notice), so Claude Code picks up the same "read `node_modules/next/dist/docs/` before writing code" guidance that `AGENTS.md` already provides to other agents.
- **`AGENTS.md`** — inserted a blank line after the `<!-- BEGIN:nextjs-agent-rules -->` marker so its formatting matches the new `CLAUDE.md`.

---

## [0.0.1] — 2026-07-15

> **Highlights** 🌱 The initial project scaffold — Next.js 16 App Router on React 19, Tailwind CSS v4, shadcn/ui foundations, and the full tooling chain.

### ✨ Added

- **Project scaffold** based on the Next.js + shadcn/ui template.
- **Framework** — Next.js 16.2.6 App Router (`app/layout.tsx`, `app/page.tsx`, `app/globals.css`) on React 19.2.4.
- **Styling** — Tailwind CSS v4 wired up via `@tailwindcss/postcss` and `postcss.config.mjs`.
- **shadcn/ui foundations**
  - `components.json` — configuration for the shadcn CLI.
  - `components/theme-provider.tsx` — wraps `next-themes` for light/dark theme support (toggle bound to the `d` key on the placeholder home page).
  - `components/ui/button.tsx` — the first installed UI primitive, built on `class-variance-authority` and `radix-ui`.
  - `lib/utils.ts` — the `cn()` class-merging helper (`clsx` + `tailwind-merge`).
- **Placeholder home page** (`app/page.tsx`) confirming the scaffold renders and the theme toggle works.
- **Tooling & configuration**
  - TypeScript via `tsconfig.json`.
  - ESLint flat config (`eslint.config.mjs`) extending `eslint-config-next`.
  - Prettier (`.prettierrc`, `.prettierignore`) with `prettier-plugin-tailwindcss` for class sorting.
  - npm scripts: `dev`, `build`, `start`, `lint`, `format`, `typecheck`.
- **Placeholder directories** for future work: `components/`, `hooks/`, `lib/`, `public/` (tracked via `.gitkeep`).
- **Documentation** — `README.md` (shadcn component usage) and `AGENTS.md` (agent-facing note to consult `node_modules/next/dist/docs/` given breaking changes in this Next.js version).
- **`.gitignore`** for standard Next.js/Node artifacts (`node_modules`, `.next`, env files, build output, etc.).

---

<div align="center">

**[⬆ Back to top](#-flowbrowse--changelog)**

</div>

[Unreleased]: https://github.com/RISHII7/Flowbrowse/compare/v0.29.2...HEAD
[0.29.2]: https://github.com/RISHII7/Flowbrowse/compare/v0.29.1...v0.29.2
[0.29.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.29.0...v0.29.1
[0.29.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.28.5...v0.29.0
[0.28.5]: https://github.com/RISHII7/Flowbrowse/compare/v0.28.4...v0.28.5
[0.28.4]: https://github.com/RISHII7/Flowbrowse/compare/v0.28.3...v0.28.4
[0.28.3]: https://github.com/RISHII7/Flowbrowse/compare/v0.28.2...v0.28.3
[0.28.2]: https://github.com/RISHII7/Flowbrowse/compare/v0.28.1...v0.28.2
[0.28.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.28.0...v0.28.1
[0.28.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.27.1...v0.28.0
[0.27.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.27.0...v0.27.1
[0.27.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.26.1...v0.27.0
[0.26.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.26.0...v0.26.1
[0.26.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.25.1...v0.26.0
[0.25.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.25.0...v0.25.1
[0.25.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.24.2...v0.25.0
[0.24.2]: https://github.com/RISHII7/Flowbrowse/compare/v0.24.1...v0.24.2
[0.24.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.24.0...v0.24.1
[0.24.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.23.0...v0.24.0
[0.23.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.19.0...v0.20.0
[0.19.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.18.0...v0.19.0
[0.18.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.17.1...v0.18.0
[0.17.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.17.0...v0.17.1
[0.17.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.16.0...v0.17.0
[0.16.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.15.1...v0.16.0
[0.15.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.14.1...v0.15.0
[0.14.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.14.0...v0.14.1
[0.14.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.12.1...v0.13.0
[0.12.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.6.1...v0.7.0
[0.6.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/RISHII7/Flowbrowse/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/RISHII7/Flowbrowse/releases/tag/v0.0.1
