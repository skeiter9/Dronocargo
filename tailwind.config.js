const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const primaryColor = '#307460';
const serifFallback = ['serif', 'system-ui'];

const fonts = {
	// Please refer to storybook playground at `/?path=/story/typography--typography`
	families: {
		...defaultTheme.fontFamily,
		// The new ones
		inter: ['Inter', ...serifFallback],
	},
};

module.exports = {
	prefix: 'dro-',
	mode: 'jit',
	purge: {
		enabled: true,
		content: [
			'./components/**/*.{ts,tsx,js,jsx}',
			'./stories/**/*.{ts,tsx}',
			'./pages/**/*.{ts,tsx}',
			'./models/**/*.{ts,tsx}',
		],
	},
	darkMode: false,
	theme: {
		extend: {
			fontFamily: fonts.families,
			colors: {
				...colors,
				white: colors.white,
				black: colors.black,
				primary: primaryColor,
				secondary: colors.white,
			},
			boxShadow: {
				textInput: '0px 1px 4px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	corePlugins: {
		width: true,
		height: true,
	},
};
