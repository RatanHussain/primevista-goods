/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#3b82f6', // blue-500
			},
		},
	},
	plugins: [],
};
