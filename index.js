module.exports = {
	"parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module"
	},
	"env": {
		"es6": true,
		"node": true,
		"browser": true,
		"jasmine": true
	},
	globals: {},
	extends: ['eslint:recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
	plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff),
	rules: {
		'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
			'error',
			{
				singleQuote: true,
				trailingComma: 'es5',
				useTabs: true
			}
		],
		eqeqeq: ['error', 'always'],
		"no-console": ['error']
	}
};
