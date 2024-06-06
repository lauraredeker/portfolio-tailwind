module.exports = {
	root: true,
	env: {
		node: true,
	},
	ignorePatterns: ['dist/**/*'],
	extends: [
		'plugin:vue/base',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-strongly-recommended',
		'@vue/typescript/recommended',
		'plugin:vuejs-accessibility/recommended',
		'@vue/eslint-config-typescript/recommended',
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaVersion: 2018,
	},
	plugins: ['tailwindcss', '@typescript-eslint', 'vuejs-accessibility'],
	settings: {
		tailwindcss: {
			callees: ['classnames', 'clsx', 'ctl'],
			config: 'tailwind.config.js',
			prependCustom: false,
			removeDuplicates: true,
			whitelist: ['custom\\-.*'],
		},
	},
	rules: {
		semi: ['warn', 'never'],
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
			2,
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
				baseIndent: 1,
				switchCase: 0,
				ignores: [],
			},
		],
		'tailwindcss/classnames-order': 'off',
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
}
