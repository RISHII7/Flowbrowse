# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-07-15

### Added

- Full shadcn/ui component library, installed via the shadcn CLI on top of the existing `button.tsx` primitive. All components are built on `radix-ui` primitives and `class-variance-authority` variants, styled with Tailwind CSS v4 and the project's `cn()` helper:
  - **Layout & structure**: `accordion.tsx`, `aspect-ratio.tsx`, `card.tsx`, `collapsible.tsx`, `resizable.tsx` (panel groups via `react-resizable-panels`), `scroll-area.tsx`, `separator.tsx`, `sidebar.tsx` (full collapsible app sidebar system with mobile sheet fallback, cookie-persisted state, and keyboard shortcut toggle).
  - **Navigation**: `breadcrumb.tsx`, `menubar.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `tabs.tsx`.
  - **Overlays & surfaces**: `alert-dialog.tsx`, `context-menu.tsx`, `dialog.tsx`, `drawer.tsx` (via `vaul`), `dropdown-menu.tsx`, `hover-card.tsx`, `popover.tsx`, `sheet.tsx`, `tooltip.tsx`.
  - **Forms & inputs**: `checkbox.tsx`, `combobox.tsx`, `command.tsx` (via `cmdk`), `field.tsx`, `input.tsx`, `input-group.tsx`, `input-otp.tsx` (via `input-otp`), `label.tsx`, `native-select.tsx`, `radio-group.tsx`, `select.tsx`, `slider.tsx`, `switch.tsx`, `textarea.tsx`, `toggle.tsx`, `toggle-group.tsx`, `button-group.tsx`, `calendar.tsx` (via `react-day-picker` + `date-fns`).
  - **Feedback & status**: `alert.tsx`, `badge.tsx`, `empty.tsx`, `progress.tsx`, `skeleton.tsx`, `spinner.tsx`, `sonner.tsx` (toast notifications via `sonner`).
  - **Data display**: `avatar.tsx`, `carousel.tsx` (via `embla-carousel-react`), `chart.tsx` (via `recharts`), `kbd.tsx`, `table.tsx`.
  - **Direction/RTL utility**: `direction.tsx` for `dir="ltr"|"rtl"` context propagation across components.
- AI chat-kit primitives from the `@shadcn/react` package, laying groundwork for conversational UI:
  - `components/ui/message.tsx` — `MessageGroup`/`Message` layout primitives supporting `align="start"|"end"` for user vs. assistant message positioning.
  - `components/ui/bubble.tsx` — `BubbleGroup` and variant-driven chat bubble styling (default/ghost variants, start/end alignment).
  - `components/ui/attachment.tsx` — file/media attachment card with `default`/`sm`/`xs` sizes and `horizontal`/`vertical` orientations, plus idle/error states for upload flows.
  - `components/ui/message-scroller.tsx` — auto-scrolling message list built on `useMessageScroller`/`useMessageScrollerScrollable`/`useMessageScrollerVisibility` from `@shadcn/react/message-scroller`, with a scroll-to-bottom button.
  - `components/ui/marker.tsx` — inline text marker/divider with `default`/`separator`/`border` variants for annotating message content.
- `hooks/use-mobile.ts` — `useIsMobile()` hook backing `sidebar.tsx`'s responsive behavior, tracking a 768px breakpoint via `matchMedia`.
- New runtime dependencies in `package.json` to support the above: `@base-ui/react`, `@shadcn/react`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`.
- Global toast notifications wired into the app shell using the `sonner` toast system, making the pre-installed `components/ui/sonner.tsx` primitive actually reachable at runtime for the first time:
  - `app/layout.tsx`:
    - Added `import { Toaster } from "@/components/ui/sonner"` next to the existing `ThemeProvider` and `cn` imports.
    - Rendered a single app-wide `<Toaster />` instance inside `ThemeProvider`, immediately after `{children}`. Mounting it once at the root layout means every route renders its toasts through the same portal — individual pages only need to call `toast(...)`, never mount their own toaster.
    - Placement rationale: `sonner.tsx` calls `useTheme()` from `next-themes` to mirror the app's light/dark theme onto the toasts. The `<Toaster />` must therefore live *inside* `ThemeProvider`; mounting it outside the provider would fall back to the default theme and desync toast styling from the rest of the UI.
- Clerk authentication, added via the Clerk CLI (`clerk init --framework next --pm npm`, linked to the `flowbrowse` Clerk application) and finished by hand to match the reference implementation:
  - New runtime dependencies in `package.json`: `@clerk/nextjs` (^7.5.18) for the Next.js SDK, and `@clerk/ui` (pinned to `^1.24.1` to match the reference commit) for the shadcn-styled Clerk component theme.
  - `proxy.ts` — new root proxy (Next.js 16 renamed Middleware to Proxy; same functionality) wiring up `clerkMiddleware()`. Uses `createRouteMatcher` to mark `/`, `/sign-in(.*)`, and `/sign-up(.*)` as public and calls `auth.protect()` on every other request, so the landing page and auth pages stay reachable while all other routes require authentication. The `config.matcher` skips `_next` and static assets while covering app routes and `/api|/trpc`.
  - `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` — new Clerk catch-all auth routes, each rendering the prebuilt `<SignIn />` / `<SignUp />` component centered on a full-height page.
  - `.env.local` — Clerk publishable/secret keys and sign-in/sign-up route env vars written by `clerk init` (gitignored, not committed).
  - `.gitignore` — updated by `clerk init` to ensure Clerk secrets in `.env*` stay out of version control.

### Changed

- `app/page.tsx` — turned the placeholder home page into an interactive demo of the toast API:
  - Added the `"use client"` directive at the top of the file. This is required because the button now uses an `onClick` event handler, and per `node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-client.md`, event handlers can only run in Client Components. The page previously had no client-side interactivity and rendered as a Server Component.
  - Added `import { toast } from "sonner"` to call the imperative toast API directly (the `<Toaster />` that renders these toasts is mounted globally in `app/layout.tsx`, so no per-page setup is needed).
  - Wired the existing "Button" (unchanged markup, classes, and copy otherwise) with `onClick={() => toast("Button clicked!", { description: "The toast API is working." })}`, so clicking it surfaces a themed toast with a title and description — a working end-to-end confirmation that the `sonner` integration is live.
  - Left the rest of the page (heading, descriptive paragraphs, and the dark-mode `kbd` hint) untouched.
- `CLAUDE.md` — added a project instructions file at the repo root mirroring the `nextjs-agent-rules` block (the "This is NOT the Next.js you know" notice), so Claude Code picks up the same "read `node_modules/next/dist/docs/` before writing code" guidance that `AGENTS.md` already provides to other agents.
- `AGENTS.md` — inserted a blank line after the `<!-- BEGIN:nextjs-agent-rules -->` marker so its formatting matches the new `CLAUDE.md`.
- `app/layout.tsx` — integrated Clerk into the app shell:
  - Wrapped the app in `<ClerkProvider appearance={{ theme: shadcn }}>` (inside `<body>`, wrapping `ThemeProvider`) using the `shadcn` theme from `@clerk/ui/themes`, and imported `@clerk/ui/themes/shadcn.css` so Clerk's prebuilt components (`SignIn`, `SignUp`, `UserButton`) match the app's shadcn styling.
  - Added a global `<header>` with `Show`-gated auth controls: when `signed-out`, modal `SignInButton`/`SignUpButton` (`mode="modal"`) rendered through the project's own `Button` (`ghost`/default variants); when `signed-in`, Clerk's `<UserButton />`. This gives every route a consistent, polished place to sign in, sign up, and manage the account.

## [0.0.1] - 2026-07-15

### Added

- Initial project scaffold based on the Next.js + shadcn/ui template.
- Next.js 16.2.6 App Router setup (`app/layout.tsx`, `app/page.tsx`, `app/globals.css`) using React 19.2.4.
- Tailwind CSS v4 wired up via `@tailwindcss/postcss` and `postcss.config.mjs`.
- shadcn/ui component system:
  - `components.json` configuration for the shadcn CLI.
  - `components/theme-provider.tsx` wrapping `next-themes` for light/dark theme support (toggle bound to the `d` key on the placeholder home page).
  - `components/ui/button.tsx` as the first installed UI primitive, built on `class-variance-authority` and `radix-ui`.
  - `lib/utils.ts` with the `cn()` class-merging helper (`clsx` + `tailwind-merge`).
- Placeholder home page (`app/page.tsx`) confirming the scaffold renders and the theme toggle works.
- Tooling and project configuration:
  - TypeScript via `tsconfig.json`.
  - ESLint flat config (`eslint.config.mjs`) extending `eslint-config-next`.
  - Prettier (`.prettierrc`, `.prettierignore`) with `prettier-plugin-tailwindcss` for class sorting.
  - npm scripts: `dev`, `build`, `start`, `lint`, `format`, `typecheck`.
- Placeholder directories for future work: `components/`, `hooks/`, `lib/`, `public/` (tracked via `.gitkeep`).
- Project documentation: `README.md` (shadcn component usage) and `AGENTS.md` (agent-facing note to consult `node_modules/next/dist/docs/` given breaking changes in this Next.js version).
- `.gitignore` for standard Next.js/Node artifacts (`node_modules`, `.next`, env files, build output, etc.).

[Unreleased]: https://github.com/RISHII7/Flowbrowse/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/RISHII7/Flowbrowse/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/RISHII7/Flowbrowse/releases/tag/v0.0.1
