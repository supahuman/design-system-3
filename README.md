# Design System 3

[![CI/CD Pipeline](https://github.com/supahuman/design-system-3/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/supahuman/design-system-3/actions/workflows/ci-cd.yml)
[![NPM Version](https://img.shields.io/npm/v/@designsystem/core.svg)](https://www.npmjs.com/package/@designsystem/core)
[![NPM Downloads](https://img.shields.io/npm/dm/@designsystem/core.svg)](https://www.npmjs.com/package/@designsystem/core)
[![License](https://img.shields.io/npm/l/@designsystem/core.svg)](https://github.com/supahuman/design-system-3/blob/main/LICENSE)
[![Storybook](https://img.shields.io/badge/Storybook-deployed-ff4785)](https://supahuman.github.io/design-system-3/)

A modern, composable design system built with TypeScript, React, and CSS Modules, using ES6+ features.

## Features

- 🎨 **Modern Theme System** - JSON-based design tokens with CSS variables
- 🚀 **ES Modules** - Built with modern ES6+ syntax and features
- 🧩 **Atomic Design** - Components organized following atomic design principles
- ♿ **Accessibility** - Built with accessibility in mind from the start
- 📦 **Tree Shakable** - Import only what you need
- 🌓 **Dark Mode** - Support for light and dark themes

## Installation

```bash
npm install @designsystem/core
# or
yarn add @designsystem/core
# or
pnpm add @designsystem/core
```

## Usage

```jsx
import { Button, TextField } from '@designsystem/core';
import '@designsystem/core/styles'; // Import styles

function App() {
  return (
    <div>
      <TextField label="Name" placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Development

### Setup

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm storybook

# Build the package
pnpm build
```

### Commands

- `pnpm build` - Build the package for distribution
- `pnpm test` - Run tests
- `pnpm storybook` - Start Storybook for development
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## License

MIT
