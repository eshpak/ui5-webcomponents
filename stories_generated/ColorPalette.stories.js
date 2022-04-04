import { html} from 'lit-html';
import '@ui5/webcomponents/dist/ColorPalette.js';
import '@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/ColorPalette',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-color-palette

>
	
			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
			<ui5-color-palette-item value="pink"></ui5-color-palette-item>
			<ui5-color-palette-item value="#444444"></ui5-color-palette-item>
			<ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>
			<ui5-color-palette-item value="green"></ui5-color-palette-item>
			<ui5-color-palette-item value="darkred"></ui5-color-palette-item>
			<ui5-color-palette-item value="yellow"></ui5-color-palette-item>
			<ui5-color-palette-item value="blue"></ui5-color-palette-item>
			<ui5-color-palette-item value="cyan"></ui5-color-palette-item>
			<ui5-color-palette-item value="orange"></ui5-color-palette-item>
			<ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>
			<ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>
		
</ui5-color-palette>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
};




const ColorPaletteTemplate = () => {
	
return html`
<div class="snippet">		<ui5-color-palette>			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>			<ui5-color-palette-item value="pink"></ui5-color-palette-item>			<ui5-color-palette-item value="#444444"></ui5-color-palette-item>			<ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>			<ui5-color-palette-item value="green"></ui5-color-palette-item>			<ui5-color-palette-item value="darkred"></ui5-color-palette-item>			<ui5-color-palette-item value="yellow"></ui5-color-palette-item>			<ui5-color-palette-item value="blue"></ui5-color-palette-item>			<ui5-color-palette-item value="cyan"></ui5-color-palette-item>			<ui5-color-palette-item value="orange"></ui5-color-palette-item>			<ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>			<ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>		</ui5-color-palette>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ColorPalette = ColorPaletteTemplate.bind({});

ColorPalette.storyName = `Color Palette`;
ColorPalette.parameters = {
  controls: {
		disabled: true,
	}
};
