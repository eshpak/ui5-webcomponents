import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Slider.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Slider',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-slider

	value="${ args['value'] }" 
>
	
</ui5-slider>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	value: 0,
	
};




const BasicSliderTemplate = () => {
	
return html`
<div class="snippet">		<ui5-slider></ui5-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicSlider = BasicSliderTemplate.bind({});

BasicSlider.storyName = `Basic Slider`;
BasicSlider.parameters = {
  controls: {
		disabled: true,
	}
};const SliderwithTooltipTemplate = () => {
	
return html`
<div class="snippet">		<ui5-slider min="0" max="20" show-tooltip></ui5-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const SliderwithTooltip = SliderwithTooltipTemplate.bind({});

SliderwithTooltip.storyName = `Slider with Tooltip`;
SliderwithTooltip.parameters = {
  controls: {
		disabled: true,
	}
};const DisabledSliderwithTickmarksandLabelsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-slider min="20" max="100" label-interval="5" disabled show-tickmarks></ui5-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DisabledSliderwithTickmarksandLabels = DisabledSliderwithTickmarksandLabelsTemplate.bind({});

DisabledSliderwithTickmarksandLabels.storyName = `Disabled Slider with Tickmarks and Labels`;
DisabledSliderwithTickmarksandLabels.parameters = {
  controls: {
		disabled: true,
	}
};const SliderTooltipTickmarksandLabelsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-slider min="-20" max="20" step="2" value="12" show-tooltip label-interval="2" show-tickmarks></ui5-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const SliderTooltipTickmarksandLabels = SliderTooltipTickmarksandLabelsTemplate.bind({});

SliderTooltipTickmarksandLabels.storyName = `Slider Tooltip, Tickmarks and Labels`;
SliderTooltipTickmarksandLabels.parameters = {
  controls: {
		disabled: true,
	}
};
