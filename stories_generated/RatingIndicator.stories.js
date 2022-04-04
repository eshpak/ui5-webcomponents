import { html} from 'lit-html';
import '@ui5/webcomponents/dist/RatingIndicator.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/RatingIndicator',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-rating-indicator

	?disabled="${ args['disabled'] }" 
	max="${ args['max'] }" 
	?readonly="${ args['readonly'] }" 
	value="${ args['value'] }" 
>
	
</ui5-rating-indicator>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	disabled: false,
	
	max: 5,
	
	readonly: false,
	
	value: 0,
	
};




const BasicRatingIndicatorTemplate = () => {
	
return html`
<div class="snippet">		<ui5-rating-indicator></ui5-rating-indicator>		<ui5-rating-indicator value="3"></ui5-rating-indicator>		<ui5-rating-indicator value="3.7"></ui5-rating-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicRatingIndicator = BasicRatingIndicatorTemplate.bind({});

BasicRatingIndicator.storyName = `Basic Rating Indicator`;
BasicRatingIndicator.parameters = {
  controls: {
		disabled: true,
	}
};const RatingIndicatorWithDifferentMaxValueTemplate = () => {
	
return html`
<div class="snippet">		<ui5-rating-indicator max="10" value="5"></ui5-rating-indicator>		<ui5-rating-indicator max="3" value="3"></ui5-rating-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RatingIndicatorWithDifferentMaxValue = RatingIndicatorWithDifferentMaxValueTemplate.bind({});

RatingIndicatorWithDifferentMaxValue.storyName = `Rating Indicator With Different Max Value`;
RatingIndicatorWithDifferentMaxValue.parameters = {
  controls: {
		disabled: true,
	}
};const DisabledRatingIndicatorTemplate = () => {
	
return html`
<div class="snippet">		<ui5-rating-indicator value="4" disabled></ui5-rating-indicator>		<ui5-rating-indicator max="10" value="5" disabled></ui5-rating-indicator>		<ui5-rating-indicator max="3" value="3" disabled></ui5-rating-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DisabledRatingIndicator = DisabledRatingIndicatorTemplate.bind({});

DisabledRatingIndicator.storyName = `Disabled Rating Indicator`;
DisabledRatingIndicator.parameters = {
  controls: {
		disabled: true,
	}
};const ReadonlyRatingIndicatorTemplate = () => {
	
return html`
<div class="snippet">		<ui5-rating-indicator value="4" readonly></ui5-rating-indicator>		<ui5-rating-indicator max="7" value="5" readonly></ui5-rating-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ReadonlyRatingIndicator = ReadonlyRatingIndicatorTemplate.bind({});

ReadonlyRatingIndicator.storyName = `Readonly Rating Indicator`;
ReadonlyRatingIndicator.parameters = {
  controls: {
		disabled: true,
	}
};
