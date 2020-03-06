module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/vue',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-closing-bracket-spacing': ['error', {
      'selfClosingTag': 'never',
      'endTag': 'never'
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    "vue/html-self-closing": ["error",{
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off',
        'vue/script-indent': ['error', 2, {
          'baseIndent': 1,
          'switchCase': 1
        }]
      }
    }
  ]
}
