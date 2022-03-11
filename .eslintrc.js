// eslint-disable-next-line no-undef
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react-hooks", "react", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",

    // not needed from react > 17.0
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    "sort-imports": ["error", { ignoreDeclarationSort: true }],

    "import/default": "off",
    "import/no-unresolved": "off",
    "import/no-relative-packages": "off",
    "import/named": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "client",
            group: "internal",
          },
        ],
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
  },
};
