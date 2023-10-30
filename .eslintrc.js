module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['tailwindcss'],
  settings: {
    'tailwindcss': {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl'],
      config: 'tailwind.config.js',
      prependCustom: false,
      removeDuplicates: true,
      whitelist: [  
        'custom\\-.*',
      ],
    },
  },
  rules: {
    'vue/html-indent': ['warn', 2, {
      'attribute': 2,
      'baseIndent': 2,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': [],
    }],
    'vue/component-tags-order': [
      'warn',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '.eslintrc.js',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      parser: 'vue-eslint-parser',
      env: {
        mocha: true,
      },
    },
    {
      files: [
        '*.vue',
      ],
      parser: 'vue-eslint-parser',
    },
    {
      files: [
        '*.html',
      ],
      parser: '@angular-eslint/template-parser',
    },
  ],
}
