import { html} from 'lit-html';
import '@ui5/webcomponents/dist/BusyIndicator.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/BusyIndicator',
  argTypes: { size: {
			description: `Defines the size of the component.<br><br> <b>Note:</b><ul> <li><code>Small</code></li> <li><code>Medium</code></li> <li><code>Large</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'Large','Medium','Small',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-busy-indicator

	?active="${ args['active'] }" 
	delay="${ args['delay'] }" 
	size="${ args['size'] }" 
	text="${ args['text'] }" 
>
	
</ui5-busy-indicator>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	active: false,
	
	delay: 1000,
	
	size: "Medium",
	
	text: "",
	
};




const BusyIndicatorwithdifferentsizeTemplate = () => {
	
return html`
<div class="snippet flex center">			<ui5-busy-indicator active size="Small"></ui5-busy-indicator>			<ui5-busy-indicator active size="Medium"></ui5-busy-indicator>			<ui5-busy-indicator active size="Large"></ui5-busy-indicator>		</div>
${ 
  (function () { setTimeout(function () { 
	const busyIndicator = document.getElementById("busy-container");
	const list = document.getElementById("fetch-list");
	const fetchBtn = document.getElementById("fetch-btn");

	fetchBtn.addEventListener("click", event => {
		busyIndicator.active = true;

		setTimeout(() => {
			const elements = ["UI5", "Web", "Components"].forEach(title => {
				const el = document.createElement("ui5-li");
				el.textContent = title;
				list.appendChild(el);
			});

			busyIndicator.active = false;
		}, 2000);
	});
 }, 500) })()
}`;
}

export const BusyIndicatorwithdifferentsize = BusyIndicatorwithdifferentsizeTemplate.bind({});

BusyIndicatorwithdifferentsize.storyName = `Busy Indicator with different size`;
BusyIndicatorwithdifferentsize.parameters = {
  controls: {
		disabled: true,
	}
};const BusyIndicatorwrappingotherelementsTemplate = () => {
	
return html`
<div class="snippet flex">		<ui5-button id="fetch-btn" style="width: 120px;">Fetch List Data</ui5-button>		<ui5-busy-indicator id="busy-container" size="Medium">			<ui5-list id="fetch-list" no-data-text="No Data" header-text="Available Items"></ui5-list>		</ui5-busy-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BusyIndicatorwrappingotherelements = BusyIndicatorwrappingotherelementsTemplate.bind({});

BusyIndicatorwrappingotherelements.storyName = `Busy Indicator wrapping other elements`;
BusyIndicatorwrappingotherelements.parameters = {
  controls: {
		disabled: true,
	}
};
