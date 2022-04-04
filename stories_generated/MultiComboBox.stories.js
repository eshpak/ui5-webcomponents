import { html} from 'lit-html';
import '@ui5/webcomponents/dist/MultiComboBox.js';
import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
import '@ui5/webcomponents/dist/Icon.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/MultiComboBox',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-multi-combobox

	?allowCustomValues="${ args['allowCustomValues'] }" 
	?disabled="${ args['disabled'] }" 
	filter="${ args['filter'] }" 
	?open="${ args['open'] }" 
	placeholder="${ args['placeholder'] }" 
	?readonly="${ args['readonly'] }" 
	?required="${ args['required'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
>
	
			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
		
</ui5-multi-combobox>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	allowCustomValues: false,
	
	disabled: false,
	
	filter: "StartsWithPerTerm",
	
	open: false,
	
	placeholder: "",
	
	readonly: false,
	
	required: false,
	
	value: "",
	
	valueState: "None",
	
};




const BasicMultiComboBoxTemplate = () => {
	
return html`
<div class="snippet">		<ui5-multi-combobox placeholder="Type your value">			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>		</ui5-multi-combobox>		<ui5-multi-combobox readonly value="Readonly combo">			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>		</ui5-multi-combobox>		<ui5-multi-combobox disabled value="Disabled combo">			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>		</ui5-multi-combobox>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicMultiComboBox = BasicMultiComboBoxTemplate.bind({});

BasicMultiComboBox.storyName = `Basic MultiComboBox`;
BasicMultiComboBox.parameters = {
  controls: {
		disabled: true,
	}
};const MultiComboBoxwithitemsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-multi-combobox style="width: 100%" placeholder="Choose your countries">			<ui5-mcb-item selected text="Argentina"></ui5-mcb-item>			<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>			<ui5-mcb-item text="Denmark"></ui5-mcb-item>			<ui5-mcb-item text="England"></ui5-mcb-item>			<ui5-mcb-item text="Albania"></ui5-mcb-item>			<ui5-mcb-item text="Morocco"></ui5-mcb-item>			<ui5-mcb-item text="Portugal"></ui5-mcb-item>			<ui5-mcb-item text="Germany"></ui5-mcb-item>			<ui5-mcb-item text="Philippines"></ui5-mcb-item>			<ui5-mcb-item text="Paraguay"></ui5-mcb-item>		</ui5-multi-combobox>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const MultiComboBoxwithitems = MultiComboBoxwithitemsTemplate.bind({});

MultiComboBoxwithitems.storyName = `MultiComboBox with items`;
MultiComboBoxwithitems.parameters = {
  controls: {
		disabled: true,
	}
};const MultiComboBoxwithfreetextinputTemplate = () => {
	
return html`
<div class="snippet">		<ui5-multi-combobox style="width: 100%" placeholder="Choose your countries" allow-custom-values>			<ui5-mcb-item text="Argentina"></ui5-mcb-item>			<ui5-mcb-item selected text="Bulgaria"></ui5-mcb-item>			<ui5-mcb-item text="Denmark"></ui5-mcb-item>			<ui5-mcb-item selected text="England"></ui5-mcb-item>			<ui5-mcb-item text="Albania"></ui5-mcb-item>			<ui5-mcb-item text="Morocco"></ui5-mcb-item>			<ui5-mcb-item text="Portugal"></ui5-mcb-item>			<ui5-mcb-item selected text="Germany"></ui5-mcb-item>			<ui5-mcb-item text="Philippines"></ui5-mcb-item>			<ui5-mcb-item text="Paraguay"></ui5-mcb-item>		</ui5-multi-combobox>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const MultiComboBoxwithfreetextinput = MultiComboBoxwithfreetextinputTemplate.bind({});

MultiComboBoxwithfreetextinput.storyName = `MultiComboBox with free text input`;
MultiComboBoxwithfreetextinput.parameters = {
  controls: {
		disabled: true,
	}
};const MultiComboBoxwithValueStateTemplate = () => {
	
return html`
<div class="snippet">		<ui5-multi-combobox value-state="Success">			<ui5-mcb-item text="Fortune"></ui5-mcb-item>			<ui5-mcb-item text="Luck"></ui5-mcb-item>			<ui5-mcb-item selected text="Success"></ui5-mcb-item>		</ui5-multi-combobox>				<ui5-multi-combobox value-state="Warning">			<ui5-mcb-item text="Attention"></ui5-mcb-item>			<ui5-mcb-item text="Caution"></ui5-mcb-item>			<ui5-mcb-item selected text="Warning"></ui5-mcb-item>		</ui5-multi-combobox>				<ui5-multi-combobox value-state="Error">			<ui5-mcb-item text="Fault"></ui5-mcb-item>			<ui5-mcb-item selected text="Error"></ui5-mcb-item>			<ui5-mcb-item text="Mistake"></ui5-mcb-item>		</ui5-multi-combobox>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const MultiComboBoxwithValueState = MultiComboBoxwithValueStateTemplate.bind({});

MultiComboBoxwithValueState.storyName = `MultiComboBox with Value State`;
MultiComboBoxwithValueState.parameters = {
  controls: {
		disabled: true,
	}
};
