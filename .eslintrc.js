module.exports = {
  env: {
    browser: true,
  },

  extends: "@callstack",

  rules: {
    "one-var": "off",
    "no-multi-assign": "off",
    "no-nested-ternary": "off",
    "no-undef": "off",
    "no-redeclare": "off",
    "global-require": "off",

    "import/no-extraneous-dependencies": "off",
    "import/first": "off",
    "import/no-unresolved": "off",

    "promise/catch-or-return": "off",
    "promise/always-return": "off",

    "react/jsx-no-undef": "off",
    "react-native-a11y/has-valid-accessibility-ignores-invert-colors": "off",

    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "off",
    "react-native/no-raw-text": "off",
    "react-native-a11y/has-valid-accessibility-descriptors": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },

  settings: {
    "import/extensions": [".js", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
  },
};
