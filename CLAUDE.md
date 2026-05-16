# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Vite dev server (port 3000)
npm run storybook        # Storybook dev server (port 4000)
npm run test             # Run Vitest unit tests
npm run test -- --run src/components/Button/Button.test.tsx  # Run a single test file
npm run build            # Type-check + Vite bundle
npm run build-storybook  # Build static Storybook site
npm run biome:check      # Lint/format check
npm run biome:write      # Auto-fix lint/format issues
```

## Architecture

React component library and design system starter. Components are documented via Storybook v10 and styled with Tailwind CSS v4. Deployed to GitHub Pages as a static Storybook site.

**Tailwind v4** uses zero-config: no `tailwind.config.js`; the `@tailwindcss/vite` plugin handles everything. Global CSS is a single import: `src/index.css` → `@import "tailwindcss";`.

**Biome** replaces ESLint + Prettier (2-space indent, 120 char line width). Pre-commit hooks via Husky + lint-staged auto-run `biome check --write` on staged files.

**React Compiler** is enabled via `@rolldown/plugin-babel` + `babel-plugin-react-compiler` in `vite.config.ts`. Components are automatically memoized — no manual `useMemo`/`useCallback` needed.

## Component Pattern

Each component lives in its own directory under `src/components/`:

```
src/components/ComponentName/
├── ComponentName.tsx        # Component implementation
├── ComponentName.stories.tsx # Storybook stories (CSF 3.0)
├── ComponentName.test.tsx   # Vitest + React Testing Library tests
└── index.ts                 # Named re-export
```

Stories use the CSF 3.0 format with typed `Meta` and `StoryObj`:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  args: { children: "Click me" },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  render: (args) => <Button {...args} />,
};
```

Storybook auto-discovers stories via the glob `../src/**/*.stories.@(ts|tsx)` in `.storybook/main.ts`.

## Testing

Vitest runs in jsdom environment (configured in `vite.config.ts`). Setup file is `src/setupTests.ts` (imports `@testing-library/jest-dom`).
