module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['plugin:svelte/recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			// Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	parserOptions: {
    ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
    extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2021: true,
		node: true
	},
  rules: {
    'prettier/prettier': 'error'
  }
}
