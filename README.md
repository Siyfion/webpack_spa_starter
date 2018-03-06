# Webpack SPA Starter [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is an opinionated SPA starter kit, utilising Webpack v4 as a build tool, React as a UI Library, Standard JS as a code linting tool and Prettier as a code formatter.

The original idea for this project was to provide a starter-kit for internal use, that all single page applications will be based from, giving a "known" starting point and making it easier for developers to switch projects and get up to speed quicker.

## Getting Started

### Development

1.  Clone repo
2.  Run either `yarn` or `npm install`
3.  To start the local server for general development run: `yarn start` or `npm run start`

## Transforms

### Babel

A default `.babelrc` file has been included with support for react and basic `env` transforms.

## Linting

If you have installed the `vscode-standardjs` plugin for VS Code, your code should be automatically linted, and fixed, whenever you save a file. However, if you haven't installed the plugin, you can take more direct control of linting by running either of the following commands:

#### `yarn lint` or `npm run lint`

This will list all linting errors in your console, in a readable format.

#### `yarn lint-fix` or `npm run lint-fix`

This will list all linting errors in your console and automatcially attempt to fix them for you. It will warn you about any errors that it could not automatically resolve.
