import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Switch.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Switch',
  argTypes: { design: {
			description: `Defines the component design. <br><br> <b>Note:</b> If <code>Graphical</code> type is set, positive and negative icons will replace the <code>textOn</code> and <code>textOff</code>.`,
			control: { type: 'select' },
			options: [
				'Graphical','Textual',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-switch

	?checked="${ args['checked'] }" 
	design="${ args['design'] }" 
	?disabled="${ args['disabled'] }" 
	text-off="${ args['textOff'] }" 
	text-on="${ args['textOn'] }" 
>
	
</ui5-switch>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	checked: false,
	
	design: "Textual",
	
	disabled: false,
	
	textOff: "",
	
	textOn: "",
	
};




const BasicSwitchTemplate = () => {
	
return html`
<div class="snippet">		<ui5-switch text-on="On" text-off="Off"></ui5-switch>		<ui5-switch text-on="On" text-off="Off" checked></ui5-switch>		<ui5-switch></ui5-switch>		<ui5-switch checked></ui5-switch>		<ui5-switch text-on="Yes" text-off="No" disabled></ui5-switch>		<ui5-switch text-on="Yes" text-off="No" checked disabled></ui5-switch>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicSwitch = BasicSwitchTemplate.bind({});

BasicSwitch.storyName = `Basic Switch`;
BasicSwitch.parameters = {
  controls: {
		disabled: true,
	}
};const GraphicalSwitchTemplate = () => {
	
return html`
<div class="snippet">		<ui5-switch design="Graphical"></ui5-switch>		<ui5-switch design="Graphical" checked></ui5-switch>		<ui5-switch design="Graphical" disabled></ui5-switch>		<ui5-switch design="Graphical" checked disabled></ui5-switch>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const GraphicalSwitch = GraphicalSwitchTemplate.bind({});

GraphicalSwitch.storyName = `Graphical Switch`;
GraphicalSwitch.parameters = {
  controls: {
		disabled: true,
	}
};
