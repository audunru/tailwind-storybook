# Tailwind CSS + Storybook

This is a starter for [Tailwind CSS](https://tailwindcss.com/) and [Storybook](https://storybook.js.org/).

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

To get Tailwind CSS working with Storybook and Create React App, you can setup Tailwind CSS as a postcss plugin in Storybook's [webpack.config.js](.storybook/webpack.config.js) and Craco's [craco.config.js](craco.config.js).
