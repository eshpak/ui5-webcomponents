import { html} from 'lit-html';
import '@ui5/webcomponents/dist/ToggleButton.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/ToggleButton',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-toggle-button

	?pressed="${ args['pressed'] }" 
>
	ToggleButton
</ui5-toggle-button>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	pressed: false,
	
};




const ToggleButtonStatesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-toggle-button class="samples-margin">ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" pressed>Pressed ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" disabled>Disabled ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" disabled pressed>Disabled and Pressed ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Positive">Accept ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Positive" pressed>Pressed Accept ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Negative">Reject ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Negative" pressed>Pressed Reject ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Transparent">Transparent ToggleButton</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Transparent" pressed>Pressed Transparent ToggleButton</ui5-toggle-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ToggleButtonStates = ToggleButtonStatesTemplate.bind({});

ToggleButtonStates.storyName = `ToggleButton States`;
ToggleButtonStates.parameters = {
  controls: {
		disabled: true,
	}
};const ToggleButtonwithIconTemplate = () => {
	
return html`
<div class="snippet">		<ui5-toggle-button class="samples-margin" icon="menu">Menu</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Emphasized" icon="add">Add</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Default" icon="nav-back">Back</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Positive" icon="accept">Accept</ui5-toggle-button>		<ui5-toggle-button class="samples-margin" design="Negative" icon="sys-cancel">Deny</ui5-toggle-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ToggleButtonwithIcon = ToggleButtonwithIconTemplate.bind({});

ToggleButtonwithIcon.storyName = `ToggleButton with Icon`;
ToggleButtonwithIcon.parameters = {
  controls: {
		disabled: true,
	}
};const ToggleButtonwithIconOnlyTemplate = () => {
	
return html`
<div class="snippet">			<ui5-toggle-button class="samples-margin" icon="away"></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="action-settings" pressed></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="add"></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="alert" pressed></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="accept" design="Positive"></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="bookmark" design="Positive" pressed></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="cancel" design="Negative"></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="call" design="Negative" pressed></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="camera" design="Transparent"></ui5-toggle-button>			<ui5-toggle-button class="samples-margin" icon="cart" design="Transparent" pressed></ui5-toggle-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ToggleButtonwithIconOnly = ToggleButtonwithIconOnlyTemplate.bind({});

ToggleButtonwithIconOnly.storyName = `ToggleButton with Icon Only`;
ToggleButtonwithIconOnly.parameters = {
  controls: {
		disabled: true,
	}
};const ToggleButtonTemplate = () => {
	
return html`
<div class="snippet">			<ui5-toggle-button class="samples-margin">Yes/No</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" pressed>Yes/No</ui5-toggle-button>			<ui5-toggle-button class="samples-margin">Toggle Button</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" pressed>Toggle Button pressed</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" design="Positive">On/Off</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" design="Positive" pressed>On/Off</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" design="Negative">Menu</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" design="Negative" pressed>Menu</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" design="Transparent">Transparent</ui5-toggle-button>			<ui5-toggle-button class="samples-margin" design="Transparent" pressed>Transparent</ui5-toggle-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ToggleButton = ToggleButtonTemplate.bind({});

ToggleButton.storyName = `ToggleButton`;
ToggleButton.parameters = {
  controls: {
		disabled: true,
	}
};
