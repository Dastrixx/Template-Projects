module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "prettier", "react"],
  rules: {

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-var": "error",
    semi: "error",
    indent: "error",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    "arrow-parens": ["error", "as-needed"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    "no-trailing-spaces": "error",
    "no-tabs": "error",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "brace-style": ["error", "1tbs"],
    "keyword-spacing": "error",
    eqeqeq: "error",
    camelcase: "error",
    "max-len": ["error", 100],
    "react/prop-types": "off"


  },
}
