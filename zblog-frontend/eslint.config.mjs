import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Customizing or disabling specific ESLint rules
      "react/no-unescaped-entities": "off",  // Disable unescaped entities rule
      "@typescript-eslint/no-explicit-any": "off",  // Disable the any type rule
      "@typescript-eslint/no-unused-vars": "warn",  // Warn about unused variables
      "no-unused-vars": "warn",  // Use ESLint's core no-unused-vars rule for both React and TypeScript
    },
  },
];

export default eslintConfig;
