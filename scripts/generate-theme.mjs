// ES6+ script to generate theme CSS variables from tokens.json
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Modern ES modules pattern for __dirname equivalent
const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensPath = join(__dirname, "../theme/tokens.json");
const cssPath = join(__dirname, "../theme/theme.css");

// Using async/await pattern
async function generateThemeCSS() {
  try {
    // Read tokens using modern JS
    const tokens = JSON.parse(await readFile(tokensPath, "utf8"));

    // Convert tokens to CSS using modern functional approach
    const toCssVars = (obj, prefix = "") =>
      Object.entries(obj)
        .flatMap(([key, value]) =>
          typeof value === "object" && value !== null
            ? toCssVars(value, `${prefix}${key}-`)
            : `  --${prefix}${key}: ${value};`
        )
        .join("\n");

    const cssVars = toCssVars(tokens);
    const cssContent = `:root {\n${cssVars}\n}\n\n/* Dark theme variant */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --colors-background: #121212;\n    --colors-text: #E5E7EB;\n    --colors-textLight: #D1D5DB;\n    --colors-border: #374151;\n    --colors-borderDark: #4B5563;\n  }\n}`;

    // Write the CSS file
    await writeFile(cssPath, cssContent);
    console.error("Theme CSS generated at", cssPath);

    // Format the file if prettier is available
    try {
      const { exec } = await import("child_process");
      const { promisify } = await import("util");
      const execAsync = promisify(exec);

      await execAsync(`npx prettier --write "${cssPath}"`);
      console.error("Theme CSS formatted with Prettier");
    } catch (error) {
      // Silent fail if prettier is not available
    }
  } catch (error) {
    console.error("Error generating theme CSS:", error);
    process.exit(1);
  }
}

// Execute the function
generateThemeCSS();
