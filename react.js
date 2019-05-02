module.exports = {
	extends: ['./browser.js', 'plugin:react/recommended', 'prettier/react'],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	plugins: ['react'],
	env: {
		"jest": true
	},
	rules: {
		"react/prop-types": ['warn']
	}
};
