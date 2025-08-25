/**
 * @designsystem/core
 * Main entry point for the design system
 */

// Export all components
export * from "./components/index.js";

// Export theme
export * from "./theme/index.js";

// Export utilities
export * from "./utils/index.js";

// Import CSS (this gets bundled but doesn't export anything)
import "./styles/index.css";
