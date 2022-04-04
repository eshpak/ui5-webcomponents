import { html} from 'lit-html';
import '@ui5/webcomponents/dist/RangeSlider.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/RangeSlider',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-range-slider

	end-value="${ args['endValue'] }" 
	start-value="${ args['startValue'] }" 
>
	
</ui5-range-slider>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	endValue: 100,
	
	startValue: 0,
	
};




const BasicRangeSliderTemplate = () => {
	
return html`
<div class="snippet">		<ui5-range-slider end-value="20"></ui5-range-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicRangeSlider = BasicRangeSliderTemplate.bind({});

BasicRangeSlider.storyName = `Basic Range Slider`;
BasicRangeSlider.parameters = {
  controls: {
		disabled: true,
	}
};const RangeSliderwithCustomminmaxstartValueandendValuePropertiesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-range-slider min="100" max="200" start-value="120" end-value="150"></ui5-range-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RangeSliderwithCustomminmaxstartValueandendValueProperties = RangeSliderwithCustomminmaxstartValueandendValuePropertiesTemplate.bind({});

RangeSliderwithCustomminmaxstartValueandendValueProperties.storyName = `Range Slider with Custom 'min', 'max', 'startValue' and 'endValue' Properties`;
RangeSliderwithCustomminmaxstartValueandendValueProperties.parameters = {
  controls: {
		disabled: true,
	}
};const RangeSliderwithTooltipsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-range-slider start-value="3" end-value="13" show-tooltip></ui5-range-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RangeSliderwithTooltips = RangeSliderwithTooltipsTemplate.bind({});

RangeSliderwithTooltips.storyName = `Range Slider with Tooltips`;
RangeSliderwithTooltips.parameters = {
  controls: {
		disabled: true,
	}
};const RangeSliderwithTickmarksandCustomStepTemplate = () => {
	
return html`
<div class="snippet">		<ui5-range-slider step="2" start-value="12" end-value="24" show-tickmarks></ui5-range-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RangeSliderwithTickmarksandCustomStep = RangeSliderwithTickmarksandCustomStepTemplate.bind({});

RangeSliderwithTickmarksandCustomStep.storyName = `Range Slider with Tickmarks and Custom Step`;
RangeSliderwithTickmarksandCustomStep.parameters = {
  controls: {
		disabled: true,
	}
};const RangeSliderwithTooltipsTickmarksandLabelsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-range-slider min="0" max="112" step="2" start-value="4" end-value="12" show-tooltip label-interval="2" show-tickmarks></ui5-range-slider>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RangeSliderwithTooltipsTickmarksandLabels = RangeSliderwithTooltipsTickmarksandLabelsTemplate.bind({});

RangeSliderwithTooltipsTickmarksandLabels.storyName = `Range Slider with Tooltips, Tickmarks and Labels`;
RangeSliderwithTooltipsTickmarksandLabels.parameters = {
  controls: {
		disabled: true,
	}
};
