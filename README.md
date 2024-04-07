# Tailwind CSS + Storybook

This is a starter for [Tailwind CSS](https://tailwindcss.com/) and [Storybook](https://storybook.js.org/) with [React](https://reactjs.org/) components.

It's written in [Typescript](https://www.typescriptlang.org/) and uses [Vite](https://vitejs.dev/). Tests are written with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

[Example of Storybook published to GitHub pages](https://audunru.github.io/tailwind-storybook/).

## Installation

```bash
git clone https://github.com/audunru/tailwind-storybook
cd tailwind-storybook
npm i
```

## Running Storybook

```bash
npm run storybook
```

## Running the React application

```bash
npm run dev
```

## Creating components

Take a look at the [Button](src/components/Button) or [Card](src/components/Card) component. You can duplicate this directory and its contents to get started making your own components.

Each component directory contains the following files:

| File               | Contains                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Button.stories.tsx | Contains the Storybook component documentation (called "stories"), and is used when the Storybook is generated.   |
| Button.test.tsx    | Tests for the Button component that you can run with `npm run test`.                                              |
| Button.tsx         | The Button component, which will be used by your React application and documented by Storybook.                   |
| index.ts           | Export for the Button component so you can import it in your app with `import Button from "./components/Button"`. |

## Customizing Tailwind CSS

Take a look at [tailwind.config.ts](tailwind.config.ts).
