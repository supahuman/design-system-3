# Contributing to Design System 3

Thank you for your interest in contributing to our design system! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm 10 or higher

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/design-system-3.git
   cd design-system-3
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start development:
   ```bash
   pnpm storybook
   ```

## 📋 Development Workflow

### Branch Naming

- `feature/component-name` - New components or features
- `fix/issue-description` - Bug fixes
- `docs/update-description` - Documentation updates
- `chore/task-description` - Maintenance tasks

### Commit Convention

We use [Conventional Commits](https://conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:

```
feat(button): add loading state with spinner
fix(textfield): resolve focus ring accessibility issue
docs(readme): update installation instructions
```

### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following our coding standards
3. **Add tests** for new functionality
4. **Update documentation** and Storybook stories
5. **Run the test suite**:
   ```bash
   pnpm test
   pnpm lint
   pnpm format:check
   pnpm build
   ```
6. **Create a pull request** with a clear description

## 🧩 Component Development

### File Structure

```
components/
├── atoms/
│   └── ComponentName/
│       ├── ComponentName.tsx
│       ├── ComponentName.module.css
│       ├── ComponentName.stories.tsx
│       ├── ComponentName.test.tsx
│       └── index.ts
```

### Component Guidelines

#### TypeScript

- Use strict TypeScript
- Export component props interface
- Use proper JSDoc comments
- Prefer type unions over enums

#### CSS Modules

- Use semantic class names
- Utilize design tokens (CSS variables)
- Follow BEM-like naming for modifiers
- Support responsive design

#### Accessibility

- Follow WCAG 2.1 AA guidelines
- Include proper ARIA attributes
- Support keyboard navigation
- Test with screen readers

#### Storybook

- Create comprehensive stories
- Document all props and variants
- Include accessibility tests
- Add interactive examples

#### Testing

- Write unit tests for all components
- Test accessibility features
- Include snapshot tests
- Test all prop combinations

### Design Tokens

Design tokens are defined in `theme/tokens.json`:

- Colors
- Typography
- Spacing
- Border radius
- Shadows

Use CSS variables in components:

```css
.button {
  background-color: var(--colors-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radii-base);
}
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run with coverage
pnpm test --coverage
```

### Test Types

- **Unit Tests**: Test component logic and rendering
- **Accessibility Tests**: Ensure WCAG compliance
- **Snapshot Tests**: Catch unintended visual changes
- **Integration Tests**: Test component interactions

## 📚 Documentation

### Storybook Stories

Each component should have:

- Default story
- All variant stories
- Interactive examples
- Documentation with props table

### Code Documentation

- Use JSDoc for functions and components
- Include examples in comments
- Document complex logic
- Keep comments up to date

## 🔧 Tools & Scripts

### Available Scripts

```bash
pnpm build          # Build the package
pnpm test           # Run tests
pnpm lint           # Run ESLint
pnpm format         # Format code with Prettier
pnpm storybook      # Start Storybook
pnpm build-storybook # Build Storybook
```

### Code Quality

- **ESLint**: Code linting and best practices
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Jest**: Testing framework
- **Storybook**: Component documentation

## 🚀 Release Process

### Automated Releases

We use semantic-release for automated versioning:

- Commits trigger version bumps
- Releases are published to NPM
- Changelogs are generated automatically
- GitHub releases are created

### Manual Testing Before Release

1. Test all components in Storybook
2. Verify accessibility compliance
3. Test in different browsers
4. Validate responsive behavior

## 📞 Getting Help

- **Issues**: Create an issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check Storybook for component docs

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to our design system! 🎨✨
