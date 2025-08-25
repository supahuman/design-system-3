/**
 * Combines multiple CSS class names into a single string
 * Modern implementation using ES6+ features
 *
 * @param classes - CSS class names or conditional class objects
 * @returns Combined class names as a string
 */
export function classNames(
  ...classes: (string | Record<string, boolean> | undefined | null)[]
): string {
  // Using array methods and arrow functions (ES6+)
  return classes
    .filter(Boolean)
    .flatMap((cls) => {
      if (typeof cls === 'string') return cls;

      if (typeof cls === 'object' && cls !== null) {
        // Object entries and array methods (ES6+)
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }

      return [];
    })
    .join(' ')
    .trim();
}
