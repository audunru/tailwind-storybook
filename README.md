# Tailwind CSS + Storybook

This is a starter for [Tailwind CSS](https://tailwindcss.com/) and [Storybook](https://storybook.js.org/) with [React](https://reactjs.org/) components.

[Example of Storybook published to GitHub pages](https://audunru.github.io/tailwind-storybook/).

## Installation

```bash
git clone https://github.com/audunru/tailwind-storybook.git

cd tailwind-storybook

yarn install
```

## Running Storybook

```bash
yarn start-storybook
```

## Running the React application

```bash
yarn start
```

## Creating components

Take a look at the [Button](src/components/Button) or [Card](src/components/Card) component. You can duplicate this directory and its contents to get started making your own components.

Each component directory contains the following files:

| File              | Contains                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Button.css        | Imports the main index.css file, which contains classes from Tailwind CSS. You don't have to add anything here if you're just going to use Tailwind's classes directly in your components. |
| Button.js         | The Button component, which will be used by your React application and documented by Storybook.                                                                                            |
| Button.stories.js | Contains the Storybook component documentation (called "stories"), and is used when the Storybook is generated.                                                                            |
| Button.test.js    | Tests for the Button component that you can run with `yarn test`.                                                                                                                          |
| index.js          | Export for the Button component so you can import it in your app with `import Button from "./components/Button"`.                                                                          |

## Customizing Tailwind CSS

Take a look at [tailwind.config.js](tailwind.config.js).

## Deploy to Github Pages

Change the repository URL in package.json to your own repository:

```json
  "repository": {
    "type": "git",
    "url": "https://github.com/johnshickson/epic-storybook"
  },
```

Run:

```bash
yarn deploy-storybook
```

## Background

To get Tailwind CSS working with Storybook and Create React App, you can setup Tailwind CSS as a postcss plugin in Storybook's [webpack.config.js](.storybook/webpack.config.js) and Craco's [craco.config.js](craco.config.js). That's what this starter does, in case you were wondering.
