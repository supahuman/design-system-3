import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button.js';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('primary', 'medium');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('secondary');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('small');

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('medium');

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('large');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('is disabled when loading', () => {
    render(<Button isLoading>Loading</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('loading');
  });

  it('shows loading spinner when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>);

    const spinner = screen.getByRole('button').querySelector('.spinner');
    expect(spinner).toBeInTheDocument();

    const spinnerIcon = spinner?.querySelector('.spinnerIcon');
    expect(spinnerIcon).toBeInTheDocument();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', () => {
    const handleClick = jest.fn();
    render(
      <Button isLoading onClick={handleClick}>
        Loading
      </Button>,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders with left icon', () => {
    const leftIcon = <span data-testid="left-icon">👈</span>;
    render(<Button leftIcon={leftIcon}>With Left Icon</Button>);

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByText('With Left Icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    const rightIcon = <span data-testid="right-icon">👉</span>;
    render(<Button rightIcon={rightIcon}>With Right Icon</Button>);

    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByText('With Right Icon')).toBeInTheDocument();
  });

  it('hides icons when loading', () => {
    const leftIcon = <span data-testid="left-icon">👈</span>;
    const rightIcon = <span data-testid="right-icon">👉</span>;

    render(
      <Button isLoading leftIcon={leftIcon} rightIcon={rightIcon}>
        Loading
      </Button>,
    );

    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('forwards additional props to button element', () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom label">
        Button
      </Button>,
    );

    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('has proper accessibility attributes', () => {
    render(<Button>Accessible Button</Button>);

    const button = screen.getByRole('button', { name: 'Accessible Button' });
    expect(button).toBeInTheDocument();
  });

  it('maintains focus management', () => {
    render(<Button>Focusable</Button>);

    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });

  describe('Snapshot Tests', () => {
    it('matches snapshot for primary variant', () => {
      const { container } = render(<Button variant="primary">Primary Button</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for secondary variant', () => {
      const { container } = render(<Button variant="secondary">Secondary Button</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for loading state', () => {
      const { container } = render(<Button isLoading>Loading Button</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for disabled state', () => {
      const { container } = render(<Button disabled>Disabled Button</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
