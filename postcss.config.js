const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const atImport = require("postcss-import")

module.exports = {
	plugins: [
		tailwindcss('./tailwind.js'),
		cssnano({
			preset: 'default',
		}),
		purgecss({
			content: ['./src/html/**/*.html']
		}),
		autoprefixer,
		atImport,
	]
}