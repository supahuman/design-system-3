import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../utils/classNames.js';
import styles from './Button.module.css';

/**
 * Button variants
 */
export type ButtonVariant = 'primary' | 'secondary';

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
  // Combine CSS Module classes
  const buttonClasses = classNames(
    styles[variant],
    styles[size],
    isLoading ? styles['loading'] : undefined,
    className,
  );

  return (
    <button className={buttonClasses} disabled={disabled || isLoading} {...props}>
      {!isLoading && leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span>{rightIcon}</span>}
      {isLoading && (
        <div className={styles['spinner']}>
          <svg className={styles['spinnerIcon']} fill="none" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              className="opacity-75"
            />
          </svg>
        </div>
      )}
    </button>
  );
}
