# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
