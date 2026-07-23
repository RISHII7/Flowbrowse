<!-- markdownlint-disable MD001 MD033 MD041 -->

<div align="center">

# 📓 Flowbrowse — Changelog

_All notable changes to this project, documented with care._

[![Keep a Changelog](https://img.shields.io/badge/Keep%20a%20Changelog-1.1.0-E05735?style=flat-square&logo=keepachangelog&logoColor=white)](https://keepachangelog.com/en/1.1.0/)
[![Semantic Versioning](https://img.shields.io/badge/SemVer-2.0.0-3F51B5?style=flat-square&logo=semver&logoColor=white)](https://semver.org/spec/v2.0.0.html)
[![Latest Release](https://img.shields.io/badge/latest-v0.13.0-2EA043?style=flat-square&logo=github&logoColor=white)](https://github.com/RISHII7/Flowbrowse/releases/tag/v0.13.0)

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

> _Nothing yet — the working tree is in sync with `v0.13.0`._

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

[Unreleased]: https://github.com/RISHII7/Flowbrowse/compare/v0.13.0...HEAD
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
