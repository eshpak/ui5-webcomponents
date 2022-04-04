import { html} from 'lit-html';
import '@ui5/webcomponents/dist/RadioButton.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/RadioButton',
  argTypes: { wrappingType: {
			description: `Defines whether the component text wraps when there is not enough space. <br><br> Available options are: <ul> <li><code>None</code> - The text will be truncated with an ellipsis.</li> <li><code>Normal</code> - The text will wrap. The words will not be broken based on hyphenation.</li> </ul>`,
			control: { type: 'select' },
			options: [
				'None','Normal',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-radio-button

	?checked="${ args['checked'] }" 
	?disabled="${ args['disabled'] }" 
	name="${ args['name'] }" 
	?readonly="${ args['readonly'] }" 
	text="${ args['text'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
	wrapping-type="${ args['wrappingType'] }" 
>
	
</ui5-radio-button>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	checked: false,
	
	disabled: false,
	
	name: "",
	
	readonly: false,
	
	text: "",
	
	value: "",
	
	valueState: "None",
	
	wrappingType: "None",
	
};




const BasicRadioButtonTypesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-radio-button text="Option A" checked name="GroupA"></ui5-radio-button>		<ui5-radio-button text="Option B" value-state="None" name="GroupA"></ui5-radio-button>		<ui5-radio-button text="Option C" value-state="Warning" name="GroupA"></ui5-radio-button>		<ui5-radio-button text="Option D" value-state="Error" name="GroupA"></ui5-radio-button>		<ui5-radio-button text="Option E" disabled name="GroupA"></ui5-radio-button>		<ui5-radio-button text="Option F" readonly name="GroupA"></ui5-radio-button>	</div>
${ 
  (function () { setTimeout(function () { 
radioGroup.addEventListener("change", function(e) {
	lblRadioGroup.innerHTML = e.target.text;
});
 }, 500) })()
}`;
}

export const BasicRadioButtonTypes = BasicRadioButtonTypesTemplate.bind({});

BasicRadioButtonTypes.storyName = `Basic RadioButton Types`;
BasicRadioButtonTypes.parameters = {
  controls: {
		disabled: true,
	}
};const RadioButtoningroupnavigateviaUPRightandDOWNLeftarrowkeysTemplate = () => {
	
return html`
<div class="snippet">		<div aria-labelledby="radioGroupTitle1" role="radiogroup" id="radioGroup" class="radio-button-group">			<ui5-title id="radioGroupTitle1">Group of states</ui5-title>			<ui5-label id="lblRadioGroup">Selected radio: None</ui5-label>			<ui5-radio-button text="None" value-state="None" checked name="GroupB"></ui5-radio-button>			<ui5-radio-button text="Warning" value-state="Warning" name="GroupB"></ui5-radio-button>			<ui5-radio-button text="Error" value-state="Error" name="GroupB"></ui5-radio-button>		</div>		<div aria-labelledby="radioGroupTitle2" role="radiogroup" id="radioGroup2" class="radio-button-group">			<ui5-title id="radioGroupTitle2">Group of options</ui5-title>			<ui5-label id="lblRadioGroup2">Selected radio: Option A</ui5-label>			<ui5-radio-button text="Option A" checked name="GroupC"></ui5-radio-button>			<ui5-radio-button text="Option B" value-state="None" name="GroupC"></ui5-radio-button>			<ui5-radio-button text="Option C" value-state="None" name="GroupC"></ui5-radio-button>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RadioButtoningroupnavigateviaUPRightandDOWNLeftarrowkeys = RadioButtoningroupnavigateviaUPRightandDOWNLeftarrowkeysTemplate.bind({});

RadioButtoningroupnavigateviaUPRightandDOWNLeftarrowkeys.storyName = `RadioButton in group - navigate via [UP/Right] and [DOWN/Left] arrow keys`;
RadioButtoningroupnavigateviaUPRightandDOWNLeftarrowkeys.parameters = {
  controls: {
		disabled: true,
	}
};const RadioButtonwithTextWrappingTemplate = () => {
	
return html`
<div class="snippet">		<ui5-radio-button text="ui5-radio-button with &apos;wrapping-type=Normal&apos; set and some long text" wrapping-type="Normal" style="width:200px"></ui5-radio-button>		<ui5-radio-button text="Another ui5-radio-button with very long text here" wrapping-type="Normal" style="width:200px"></ui5-radio-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RadioButtonwithTextWrapping = RadioButtonwithTextWrappingTemplate.bind({});

RadioButtonwithTextWrapping.storyName = `RadioButton with Text Wrapping`;
RadioButtonwithTextWrapping.parameters = {
  controls: {
		disabled: true,
	}
};
