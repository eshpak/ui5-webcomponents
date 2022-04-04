module.exports = {
	"stories": [
		"../stories_generated/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		'storybook-addon-themes',
	],
	"framework": "@storybook/web-components",
	staticDirs: ['../stories_generated/assets'],

}