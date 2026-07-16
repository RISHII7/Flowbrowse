<!-- markdownlint-disable MD001 MD033 MD041 -->

<div align="center">

# 📓 Flowbrowse — Changelog

_All notable changes to this project, documented with care._

[![Keep a Changelog](https://img.shields.io/badge/Keep%20a%20Changelog-1.1.0-E05735?style=flat-square&logo=keepachangelog&logoColor=white)](https://keepachangelog.com/en/1.1.0/)
[![Semantic Versioning](https://img.shields.io/badge/SemVer-2.0.0-3F51B5?style=flat-square&logo=semver&logoColor=white)](https://semver.org/spec/v2.0.0.html)
[![Latest Release](https://img.shields.io/badge/latest-v0.1.3-2EA043?style=flat-square&logo=github&logoColor=white)](https://github.com/RISHII7/Flowbrowse/releases/tag/v0.1.3)

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
| [**0.1.3**](#013--2026-07-16) | 2026-07-16 | 🤖 Clerk agent-skills bundle for AI coding tools |
| [**0.1.2**](#012--2026-07-16) | 2026-07-16 | 🔐 Auth reorganized into an `(auth)` route group · protected home |
| [**0.1.1**](#011--2026-07-16) | 2026-07-16 | 📝 World-class changelog overhaul |
| [**0.1.0**](#010--2026-07-15) | 2026-07-15 | 🔐 Clerk authentication · 🔔 Sonner toasts · 🧩 Full shadcn/ui + AI chat-kit |
| [**0.0.1**](#001--2026-07-15) | 2026-07-15 | 🌱 Initial Next.js + shadcn/ui scaffold |

---

## [Unreleased]

> _Nothing yet — the working tree is in sync with `v0.1.3`._

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

Added via the Clerk CLI (`clerk init --framework next --pm npm`, linked to the `flowbrowse` Clerk application) and finished by hand to match the [reference implementation](https://github.com/code-with-antonio/browser-automation-app/commit/80acac26b81efad23c1ef5e6bafe3a812ce2ae55).

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

[Unreleased]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.3...HEAD
[0.1.3]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/RISHII7/Flowbrowse/releases/tag/v0.0.1
