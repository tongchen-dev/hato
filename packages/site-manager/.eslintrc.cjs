module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	parser: 'vue-eslint-parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		parser: '@typescript-eslint/parser'
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': ['error','always'],
		'yoda': 2,
		'curly': 1,
		'eqeqeq': 1,
		'no-var': 2,
		'no-empty': 2,
		'no-debugger': 2,
		'dot-location': 1,
		'no-undef-init': 2,
		'no-extra-label': 2,
		'no-multi-spaces': 2,
		'no-unused-labels': 2,
		'no-useless-return': 2,
		'no-unsafe-negation': 2,
		'no-mixed-spaces-and-tabs': 2,
		'vue/multi-word-component-names': 0,
	}
};
