import { html} from 'lit-html';
import '@ui5/webcomponents/dist/ColorPalettePopover.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/ColorPalettePopover',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-color-palette-popover

	?showDefaultColor="${ args['showDefaultColor'] }" 
	?showMoreColors="${ args['showMoreColors'] }" 
	?showRecentColors="${ args['showRecentColors'] }" 
>
	
			<ui5-color-palette-item value="pink"></ui5-color-palette-item>
			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
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
		
</ui5-color-palette-popover>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	showDefaultColor: false,
	
	showMoreColors: false,
	
	showRecentColors: false,
	
};




const ColorPalettePopoverwithrecentcolorsdefaultcolorandmorecolorsfeaturesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>		<ui5-color-palette-popover id="colorPalettePopover" show-recent-colors show-more-colors show-default-color default-color="green">			<ui5-color-palette-item value="pink"></ui5-color-palette-item>			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>			<ui5-color-palette-item value="#444444"></ui5-color-palette-item>			<ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>			<ui5-color-palette-item value="green"></ui5-color-palette-item>			<ui5-color-palette-item value="darkred"></ui5-color-palette-item>			<ui5-color-palette-item value="yellow"></ui5-color-palette-item>			<ui5-color-palette-item value="blue"></ui5-color-palette-item>			<ui5-color-palette-item value="cyan"></ui5-color-palette-item>			<ui5-color-palette-item value="orange"></ui5-color-palette-item>			<ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>			<ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>		</ui5-color-palette-popover>	</div>
${ 
  (function () { setTimeout(function () { 
		colorPaletteBtn.addEventListener("click", function(event) {
			colorPalettePopover.openPopover(this);
		});
	 }, 500) })()
}`;
}

export const ColorPalettePopoverwithrecentcolorsdefaultcolorandmorecolorsfeatures = ColorPalettePopoverwithrecentcolorsdefaultcolorandmorecolorsfeaturesTemplate.bind({});

ColorPalettePopoverwithrecentcolorsdefaultcolorandmorecolorsfeatures.storyName = `Color Palette Popover with recent colors, default color and more colors features`;
ColorPalettePopoverwithrecentcolorsdefaultcolorandmorecolorsfeatures.parameters = {
  controls: {
		disabled: true,
	}
};const ColorPalettePopoverwithoutanyadditionalfeaturesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-button id="colorPaletteBtn1">Open ColorPalettePopover</ui5-button>		<ui5-color-palette-popover id="colorPalettePopover1">			<ui5-color-palette-item value="pink"></ui5-color-palette-item>			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>			<ui5-color-palette-item value="#444444"></ui5-color-palette-item>			<ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>			<ui5-color-palette-item value="green"></ui5-color-palette-item>			<ui5-color-palette-item value="darkred"></ui5-color-palette-item>			<ui5-color-palette-item value="yellow"></ui5-color-palette-item>			<ui5-color-palette-item value="blue"></ui5-color-palette-item>			<ui5-color-palette-item value="cyan"></ui5-color-palette-item>			<ui5-color-palette-item value="orange"></ui5-color-palette-item>			<ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>			<ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>		</ui5-color-palette-popover>	</div>
${ 
  (function () { setTimeout(function () { 
	colorPaletteBtn.addEventListener("click", (event) => {
		colorPalettePopover.openPopover(this);
	});
 }, 500) })()
}`;
}

export const ColorPalettePopoverwithoutanyadditionalfeatures = ColorPalettePopoverwithoutanyadditionalfeaturesTemplate.bind({});

ColorPalettePopoverwithoutanyadditionalfeatures.storyName = `Color Palette Popover without any additional features`;
ColorPalettePopoverwithoutanyadditionalfeatures.parameters = {
  controls: {
		disabled: true,
	}
};
