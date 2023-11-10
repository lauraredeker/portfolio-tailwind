module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
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
        'custom\\-.*'
      ],
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-duplicate-attributes': ['warn', {
      'allowCoexistClass': true,
      'allowCoexistStyle': true,
    }],
    'vue/no-multi-spaces': ['warn', {
      'ignoreProperties': false,
    }],
    'vue/html-indent': ['warn', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': [],
    }],
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 0,
      'switchCase': 0,
      'ignores': [],
    }],
    'vue/component-tags-order': [
      'warn',
      {
        order: ['template', 'script', 'style'],
      }
    ],
    'comma-dangle': ['warn', 'always-multiline'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'no-unused-vars':                  'warn',
    'vue/multi-word-component-names':  'off',
    'vue/no-reserved-component-names': 'warn',
    'prefer-const':                    'warn',
    'space-before-function-paren':     'warn',
    'spaced-comment':                  'warn',
    'comma-dangle':                    [
      'error',
      {
        objects: 'always-multiline',
      }
    ],
    'no-trailing-spaces':          'warn',
    'no-param-reassign':           'warn',
    'no-multiple-empty-lines': [2, {'max': 2}],
    'vue/no-multi-spaces': ['warn', {
      ignoreProperties: true,
    }],
    'vue/no-multi-spaces':         ['off'],
    'brace-style':                 ['off'],
    'vue/v-on-event-hyphenation':  'off',
    'vue/attribute-hyphenation':   'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 1,
        },
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_uid', '_jv'],
      }
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true,
      },
    }
  ],
}
