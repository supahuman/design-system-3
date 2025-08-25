import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.target = "es2020";
    options.banner = {
      js: `/**
 * @designsystem/core v0.1.0
 * A modern, composable design system built with TypeScript, React, and CSS Modules
 * 
 * Copyright (c) ${new Date().getFullYear()}
 * @license MIT
 */`,
    };
  },
  treeshake: true,
});
