import { setTheme, getTheme } from "@ui5/webcomponents-base/dist/config/Theme";

setTheme('sap_horizon_exp');

(function (history) {
	const pushState = history.pushState;
	
	history.pushState = function (state) {
		if (typeof history.onpushstate == "function") {
			history.onpushstate({ state: state });
		}

		return pushState.apply(history, arguments);
	}
})(window.history);

history.pushState = (f => function pushState() {
	let ret = f.apply(this, arguments);

	window.dispatchEvent(new Event('pushstate'));
	window.dispatchEvent(new Event('locationchange'));

	return ret;
})(history.pushState);

history.replaceState = (f => function replaceState() {
	let ret = f.apply(this, arguments);

	window.dispatchEvent(new Event('replacestate'));
	window.dispatchEvent(new Event('locationchange'));

	return ret;
})(history.replaceState);

window.addEventListener('popstate', () => {
	window.dispatchEvent(new Event('locationchange'))
});

const switchTheme = (theme) => {
	const isDark = ['sap_fiori_3_dark', 'sap_fiori_3_hcb', 'sap_belize_hcb'].includes(theme);
	
	document.body.classList.toggle('theme-dark', isDark);
	setTheme(theme);
};

window.addEventListener('locationchange', function () {
	const params = new URLSearchParams(location.search);
	const globalParams = params.get('globals');

	if (!globalParams) {
		return;
	}

	globalParams.split(';')
		.forEach(parameter => {
			if (!parameter) {
				return;
			}

			const [name, value] = parameter.split(':');

			(name === 'sap-ui5-theme' && getTheme() !== value) && switchTheme(value);
		});
});

