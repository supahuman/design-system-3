# Design System 3

[![CI/CD Pipeline](https://github.com/supahuman/design-system-3/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/supahuman/design-system-3/actions/workflows/ci-cd.yml)
[![GitHub Package](https://img.shields.io/github/v/release/supahuman/design-system-3?label=GitHub%20Package)](https://github.com/supahuman/design-system-3/packages)
[![License](https://img.shields.io/github/license/supahuman/design-system-3)](https://github.com/supahuman/design-system-3/blob/main/LICENSE)
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

### GitHub Packages

```bash
# First, configure npm to use GitHub Packages for @supahuman scope
npm config set @supahuman:registry https://npm.pkg.github.com

# Then install the package
npm install @supahuman/design-system-3
# or
yarn add @supahuman/design-system-3
# or
pnpm add @supahuman/design-system-3
```

## Usage

```jsx
import { Button, TextField } from '@supahuman/design-system-3';
import '@supahuman/design-system-3/styles'; // Import styles

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
