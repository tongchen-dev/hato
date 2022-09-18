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
	/* 优先级低于parse的语法解析配置 */
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	// 'parserOptions': {
	// 	'ecmaVersion': 'latest',
	// 	'sourceType': 'module'
	// },
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'vue/multi-word-component-names': 0,
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
		'semi': [
			'error',
			'always'
		]
	}
};
