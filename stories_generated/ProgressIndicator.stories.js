import { html} from 'lit-html';
import '@ui5/webcomponents/dist/ProgressIndicator.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/ProgressIndicator',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-progress-indicator

	?disabled="${ args['disabled'] }" 
	?hideValue="${ args['hideValue'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
>
	
</ui5-progress-indicator>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	disabled: false,
	
	hideValue: false,
	
	value: 0,
	
	valueState: "None",
	
};




const BasicProgressIndicatorTemplate = () => {
	
return html`
<div class="snippet">        <ui5-progress-indicator value="0"></ui5-progress-indicator>        <ui5-progress-indicator value="25"></ui5-progress-indicator>        <ui5-progress-indicator value="75" disabled></ui5-progress-indicator>        <ui5-progress-indicator value="100"></ui5-progress-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicProgressIndicator = BasicProgressIndicatorTemplate.bind({});

BasicProgressIndicator.storyName = `Basic Progress Indicator`;
BasicProgressIndicator.parameters = {
  controls: {
		disabled: true,
	}
};const ProgressIndicatorWithCustomDisplayValueTemplate = () => {
	
return html`
<div class="snippet">        <ui5-progress-indicator value="25" display-value="Custom Display Value"></ui5-progress-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ProgressIndicatorWithCustomDisplayValue = ProgressIndicatorWithCustomDisplayValueTemplate.bind({});

ProgressIndicatorWithCustomDisplayValue.storyName = `Progress Indicator With Custom Display Value`;
ProgressIndicatorWithCustomDisplayValue.parameters = {
  controls: {
		disabled: true,
	}
};const ProgressIndicatorWithValueStateTemplate = () => {
	
return html`
<div class="snippet">        <ui5-progress-indicator value-state="None" value="25"></ui5-progress-indicator>        <ui5-progress-indicator value-state="Error" value="50"></ui5-progress-indicator>        <ui5-progress-indicator value-state="Warning" value="75"></ui5-progress-indicator>        <ui5-progress-indicator value-state="Success" value="90"></ui5-progress-indicator>        <ui5-progress-indicator value-state="Information" value="100"></ui5-progress-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ProgressIndicatorWithValueState = ProgressIndicatorWithValueStateTemplate.bind({});

ProgressIndicatorWithValueState.storyName = `Progress Indicator With Value State`;
ProgressIndicatorWithValueState.parameters = {
  controls: {
		disabled: true,
	}
};const ProgressIndicatorWithCustomSizesTemplate = () => {
	
return html`
<div class="snippet">        <ui5-progress-indicator value="25" style="height: 50px; width: 200px;"></ui5-progress-indicator>        <ui5-progress-indicator value="75" style="height: 50px; width: 200px;"></ui5-progress-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ProgressIndicatorWithCustomSizes = ProgressIndicatorWithCustomSizesTemplate.bind({});

ProgressIndicatorWithCustomSizes.storyName = `Progress Indicator With Custom Sizes`;
ProgressIndicatorWithCustomSizes.parameters = {
  controls: {
		disabled: true,
	}
};
