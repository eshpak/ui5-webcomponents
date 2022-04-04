import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Select.js';
import '@ui5/webcomponents/dist/Option.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Select',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-select

	accessible-name-ref="${ args['accessibleNameRef'] }" 
	?disabled="${ args['disabled'] }" 
	name="${ args['name'] }" 
	?required="${ args['required'] }" 
	value-state="${ args['valueState'] }" 
>
	
			<ui5-option icon="iphone">Phone</ui5-option>
			<ui5-option icon="ipad">Tablet</ui5-option>
			<ui5-option icon="laptop" selected>Desktop</ui5-option>
		
</ui5-select>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleNameRef: "",
	
	disabled: false,
	
	name: "",
	
	required: false,
	
	valueState: "None",
	
};




const BasicSelectTemplate = () => {
	
return html`
<div class="snippet">		<ui5-select class="select">			<ui5-option icon="iphone">Phone</ui5-option>			<ui5-option icon="ipad">Tablet</ui5-option>			<ui5-option icon="laptop" selected>Desktop</ui5-option>		</ui5-select>		<ui5-select disabled class="select">				<ui5-option icon="iphone" selected>Phone</ui5-option>				<ui5-option icon="ipad">Tablet</ui5-option>				<ui5-option icon="laptop">Desktop</ui5-option>		</ui5-select>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicSelect = BasicSelectTemplate.bind({});

BasicSelect.storyName = `Basic Select`;
BasicSelect.parameters = {
  controls: {
		disabled: true,
	}
};const SelectwithValueStateandValueStateMessageTemplate = () => {
	
return html`
<div class="snippet">		<ui5-select value-state="Success" class="select">				<ui5-option icon="meal" selected>Apple</ui5-option>				<ui5-option icon="meal">Avocado</ui5-option>				<ui5-option icon="meal">Mango</ui5-option>		</ui5-select>		<ui5-select value-state="Warning" class="select">				<ui5-option icon="meal">Orange</ui5-option>				<ui5-option icon="meal" selected>Pumpkin</ui5-option>				<ui5-option icon="meal">Carrot</ui5-option>				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>		</ui5-select>		<ui5-select value-state="Error" class="select">				<ui5-option icon="meal">Strawberry</ui5-option>				<ui5-option icon="meal">Tomato</ui5-option>				<ui5-option icon="meal" selected>Red Chili Pepper</ui5-option>				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>		</ui5-select>		<ui5-select value-state="Information" class="select">			<ui5-option icon="meal">Blueberry</ui5-option>			<ui5-option icon="meal">Grape</ui5-option>			<ui5-option icon="meal" selected>Plum</ui5-option>			<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>			<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>		</ui5-select>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const SelectwithValueStateandValueStateMessage = SelectwithValueStateandValueStateMessageTemplate.bind({});

SelectwithValueStateandValueStateMessage.storyName = `Select with Value State and Value State Message`;
SelectwithValueStateandValueStateMessage.parameters = {
  controls: {
		disabled: true,
	}
};
