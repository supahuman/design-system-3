/**
 * Theme index file
 * Exports theme tokens and utilities
 */

// We'll use ES6+ features like object spread, template literals, etc.
import tokens from './tokens.json' with { type: 'json' };

// Re-export the tokens with modern syntax
export const { colors, spacing, typography, radii, shadows } = tokens;

// Export the entire tokens object
export default tokens;

// Import CSS variables (bundled with the package)
import './theme.css';
