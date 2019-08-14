# Tailwind CSS + Storybook

This is a starter for [Tailwind CSS](https://tailwindcss.com/) and [Storybook](https://storybook.js.org/).

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

Take a look at [the Button component](src/components/Button). You can duplicate this directory and its contents to get started making your own components.

## Background

To get Tailwind CSS and Storybook working with Create React App, you need to setup Tailwind CSS as a postcss plugin in [webpack.config.js](.storybook/webpack.config.js) and [craco.config.js](craco.config.js).
