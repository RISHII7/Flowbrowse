# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/RISHII7/Flowbrowse/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/RISHII7/Flowbrowse/releases/tag/v0.0.1
