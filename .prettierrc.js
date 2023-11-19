import tailwind from 'prettier-plugin-tailwindcss';

/** @type {import("prettier").Options} */
export default {
	printWidth: 80,
	trailingComma: 'all',
	htmlWhitespaceSensitivity: 'css',
	plugins: [tailwind],
}; // .prettierrc.js
