module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/vue3-recommended',
		'plugin:vue/essential',
		'plugin:vuejs-accessibility/recommended',
		'@vue/eslint-config-typescript/recommended',
		'prettier',
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaVersion: 2018,
	},
	plugins: ['tailwindcss', '@typescript-eslint', 'vuejs-accessibility'],
	settings: {
		tailwindcss: {
			// These are the default values but feel free to customize
			callees: ['classnames', 'clsx', 'ctl'],
			config: 'tailwind.config.js',
			prependCustom: false,
			removeDuplicates: true,
			whitelist: ['custom\\-.*'],
		},
	},
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
		'vue/no-duplicate-attributes': [
			'warn',
			{
				allowCoexistClass: true,
				allowCoexistStyle: true,
			},
		],
		'vue/html-indent': [
			'warn',
			4,
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		'vue/script-indent': [
			'warn',
			2,
			{
				baseIndent: 0,
				switchCase: 0,
				ignores: [],
			},
		],
		'tailwindcss/classnames-order': 'warn',
		'tailwindcss/no-contradicting-classname': 'error',
		'no-unused-vars': 'warn',
		'vue/multi-word-component-names': 'off',
		'vue/no-reserved-component-names': 'warn',
		'prefer-const': 'warn',
		'no-param-reassign': 'warn',
		'vue/v-on-event-hyphenation': 'off',
		'vue/attribute-hyphenation': 'off',
		'vue/max-attributes-per-line': [
			'warn',
			{
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			},
		],
		'no-underscore-dangle': [
			'error',
			{
				allow: ['_uid', '_jv'],
			},
		],
	},
	overrides: [
		{
			files: ['**/*/*.{j,t}s?(x)', '**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				mocha: true,
			},
		},
	],
};
