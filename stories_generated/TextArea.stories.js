import { html} from 'lit-html';
import '@ui5/webcomponents/dist/TextArea.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/TextArea',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-textarea

	accessible-name-ref="${ args['accessibleNameRef'] }" 
	?disabled="${ args['disabled'] }" 
	?growing="${ args['growing'] }" 
	growing-max-lines="${ args['growingMaxLines'] }" 
	maxlength="${ args['maxlength'] }" 
	name="${ args['name'] }" 
	placeholder="${ args['placeholder'] }" 
	?readonly="${ args['readonly'] }" 
	?required="${ args['required'] }" 
	rows="${ args['rows'] }" 
	?showExceededText="${ args['showExceededText'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
>
	
</ui5-textarea>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleNameRef: "",
	
	disabled: false,
	
	growing: false,
	
	growingMaxLines: 0,
	
	maxlength: null,
	
	name: "",
	
	placeholder: "",
	
	readonly: false,
	
	required: false,
	
	rows: 0,
	
	showExceededText: false,
	
	value: "",
	
	valueState: "None",
	
};




const BasicTextAreaTemplate = () => {
	
return html`
<div class="snippet">		<ui5-textarea class="textarea-width" placeholder="Type as much text as you wish"></ui5-textarea>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicTextArea = BasicTextAreaTemplate.bind({});

BasicTextArea.storyName = `Basic TextArea`;
BasicTextArea.parameters = {
  controls: {
		disabled: true,
	}
};const TextAreawithMaximumLengthTemplate = () => {
	
return html`
<div class="snippet">		<ui5-textarea class="textarea-width" placeholder="Type no more than 10 symbols" maxlength="10" show-exceeded-text></ui5-textarea>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TextAreawithMaximumLength = TextAreawithMaximumLengthTemplate.bind({});

TextAreawithMaximumLength.storyName = `TextArea with Maximum Length`;
TextAreawithMaximumLength.parameters = {
  controls: {
		disabled: true,
	}
};
