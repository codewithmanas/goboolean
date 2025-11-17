import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier"
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import tsESlint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.

    // JS + TS base rules
    js.configs.recommended,
    ...tsESlint.configs.recommended,

    globalIgnores([
      // Default ignores of eslint-config-next:
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "public/**",
      "pnpm-lock.yaml",
      "next-env.d.ts",
      "*.d.ts",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      ".env",
      ".env.*",
    ]),

  {
    plugins: {
      "unused-imports": unusedImports,
      import: importPlugin,
    },

    rules: {
      // Remove unused imports
      "unused-imports/no-unused-imports": "error",

      // Import sorting
      // "import/order": [
      //   "error",
      //   {
      //     "newlines-between": "never",
      //     alphabetize: { order: "asc", caseInsensitive: true },
      //   },
      // ],

      // Console / debugging
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
    },
  },

    // Prettier (disable conflicting rules)
    prettier,
]);

export default eslintConfig;
