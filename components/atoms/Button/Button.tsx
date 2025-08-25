import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

/**
 * Button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

/**
 * Button sizes
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content to display inside the button */
  children: ReactNode;
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Icon to display before the button text */
  leftIcon?: ReactNode;
  /** Icon to display after the button text */
  rightIcon?: ReactNode;
  /** Additional CSS class */
  className?: string;
}

/**
 * Button component - a flexible button with multiple variants and sizes
 */
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  // Build class names using ES6+ template literals
  const buttonClass = `ds-button ds-button-${variant} ds-button-${size} ${className} ${
    isLoading ? 'ds-button-loading' : ''
  }`.trim();

  return (
    <button className={buttonClass} disabled={disabled || isLoading} {...props}>
      {isLoading && <span className="ds-button-spinner" />}
      {leftIcon && <span className="ds-button-icon ds-button-icon-left">{leftIcon}</span>}
      <span className="ds-button-text">{children}</span>
      {rightIcon && <span className="ds-button-icon ds-button-icon-right">{rightIcon}</span>}
    </button>
  );
}
