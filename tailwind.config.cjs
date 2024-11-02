module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				urban: ['Urbanist', 'sans-serif'],
				sans: ['Roboto', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: [
			{
				black: {
					...require('daisyui/src/theming/themes')['black'],
					primary: '#00B7CC'
				}
			}
		]
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar')({ nocompatible: true })],
	variants: {
		display: ['group-hover']
	}
}
