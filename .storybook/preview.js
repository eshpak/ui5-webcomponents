import "./theme-switcher.js";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: { 
		disable: true
	}
}

export const globalTypes = {
	"sap-ui5-theme": {
		name: 'Theme',
		description: 'Global theme for components',
		default: 'sap_horizon_exp',
		toolbar: {
			icon: 'paintbrush',
			items: [
				"sap_fiori_3",
				"sap_fiori_3_dark",
				"sap_fiori_3_hcb",
				"sap_fiori_3_hcw",
				"sap_belize",
				"sap_belize_hcb",
				"sap_belize_hcw",
				"sap_horizon",
				"sap_horizon_exp"
			],
			showName: true,
		},
	}
};
