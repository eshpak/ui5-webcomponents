import { html} from 'lit-html';
import '@ui5/webcomponents/dist/ColorPicker.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/ColorPicker',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-color-picker

>
	
</ui5-color-picker>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
};




const PickcolorTemplate = () => {
	
return html`
<div class="snippet">		<ui5-color-picker></ui5-color-picker>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const Pickcolor = PickcolorTemplate.bind({});

Pickcolor.storyName = `Pick color`;
Pickcolor.parameters = {
  controls: {
		disabled: true,
	}
};
