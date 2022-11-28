module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		projects: ['./tsconfig.json'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:eslint-comments/recommended',
	],
	plugins: ['simple-import-sort', 'import'],
	rules: {
		quotes: ['off', 'single'],
		indent: ['warn', 'tab'],
		'no-unused-vars': 'off',

		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',

		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': ['off'],
		'@typescript-eslint/no-empty-interface': ['off'],
		'@typescript-eslint/ban-ts-comment': ['off'],
		'@typescript-eslint/ban-types': 'off',

		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',

		'react-hooks/exhaustive-deps': 'off',
	},
}
