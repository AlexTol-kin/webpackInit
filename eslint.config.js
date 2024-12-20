import globals from "globals";
import { plugin } from "postcss";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], linterOptions: { sourceType: "module" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unuse-vars": "warn",
    },
  },
];
