import { globalIgnores } from "eslint/config";
import reactDom from "eslint-plugin-react-dom";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import globals from "globals";
import tseslint from "typescript-eslint";

const reactXTypeScript = reactX.configs["recommended-typescript"];
const reactDomRecommended = reactDom.configs.recommended;
const reactHooksOff = reactX.configs["disable-conflict-eslint-plugin-react-hooks"];

export default tseslint.config(
  globalIgnores([
    "dist",
    "coverage",
    ".husky",
    "eslint.config.js",
    "vite.config.ts",
  ]),
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      ...reactXTypeScript.plugins,
      ...reactDomRecommended.plugins,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooksOff.rules,
      ...reactXTypeScript.rules,
      ...reactDomRecommended.rules,
      "react-x/no-forward-ref": "off",
      ...reactRefresh.configs.vite.rules,
    },
    settings: {
      ...reactXTypeScript.settings,
      ...reactDomRecommended.settings,
    },
  },
  // Route modules export config arrays + lazy imports; must run after react-refresh rules
  {
    files: [
      "**/routes/**/*.{ts,tsx}",
      "**/*Routes.{ts,tsx}",
      "**/router.{ts,tsx}",
    ],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  }
);
