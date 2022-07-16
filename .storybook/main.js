module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-jest',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
				cssLoaderOptions: { importLoaders: 50 },
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
};
