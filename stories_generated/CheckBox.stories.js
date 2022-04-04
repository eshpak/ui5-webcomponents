import { html} from 'lit-html';
import '@ui5/webcomponents/dist/CheckBox.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/CheckBox',
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
<ui5-checkbox

	?checked="${ args['checked'] }" 
	?disabled="${ args['disabled'] }" 
	?indeterminate="${ args['indeterminate'] }" 
	name="${ args['name'] }" 
	?readonly="${ args['readonly'] }" 
	text="${ args['text'] }" 
	value-state="${ args['valueState'] }" 
	wrapping-type="${ args['wrappingType'] }" 
>
	
</ui5-checkbox>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	checked: false,
	
	disabled: false,
	
	indeterminate: false,
	
	name: "",
	
	readonly: false,
	
	text: "",
	
	valueState: "None",
	
	wrappingType: "None",
	
};




const BasicCheckBoxTemplate = () => {
	
return html`
<div class="snippet">		<ui5-checkbox text="Chocolate" checked></ui5-checkbox>		<ui5-checkbox text="Strawberry" checked></ui5-checkbox>		<ui5-checkbox text="Waffles" checked value-state="Error"></ui5-checkbox>		<ui5-checkbox text="Cake" checked value-state="Warning"></ui5-checkbox>	</div>
${ 
  (function () { setTimeout(function () { 
			var resultCb = document.querySelector("#result-cb");
			var langCbs = Array.from(document.querySelectorAll("[id^=cb]"));

			langCbs.forEach(cbEl => {
				cbEl.addEventListener("change", event => {
					const hasChecked = langCbs.some(cb => cb.checked);
					const hasUnchecked = langCbs.some(cb => !cb.checked);

					resultCb.indeterminate = hasChecked && hasUnchecked;
					resultCb.checked = hasChecked;
				});
			});

			resultCb.addEventListener("change", event => {
				langCbs.forEach(cb => cb.checked = event.target.checked);
			});
		 }, 500) })()
}`;
}

export const BasicCheckBox = BasicCheckBoxTemplate.bind({});

BasicCheckBox.storyName = `Basic CheckBox`;
BasicCheckBox.parameters = {
  controls: {
		disabled: true,
	}
};const CheckBoxstatesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-checkbox text="Success" value-state="Success"></ui5-checkbox>		<ui5-checkbox text="Error" value-state="Error"></ui5-checkbox>		<ui5-checkbox text="Warning" value-state="Warning"></ui5-checkbox>		<ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>		<ui5-checkbox text="Disabled" disabled checked></ui5-checkbox>		<ui5-checkbox text="Readonly" readonly checked></ui5-checkbox>		<ui5-checkbox text="Success disabled" disabled value-state="Success" checked></ui5-checkbox>		<ui5-checkbox text="Error disabled" disabled value-state="Error" checked></ui5-checkbox>		<ui5-checkbox text="Warning disabled " disabled value-state="Warning" checked></ui5-checkbox>		<ui5-checkbox text="Information disabled " disabled value-state="Information" checked></ui5-checkbox>		<ui5-checkbox text="Success readonly" readonly value-state="Success" checked></ui5-checkbox>		<ui5-checkbox text="Error readonly" readonly value-state="Error" checked></ui5-checkbox>		<ui5-checkbox text="Warning readonly" readonly value-state="Warning" checked></ui5-checkbox>		<ui5-checkbox text="Information readonly" readonly value-state="Information" checked></ui5-checkbox>		<ui5-checkbox text="Success indeterminate" value-state="Success" indeterminate checked></ui5-checkbox>		<ui5-checkbox text="Error indeterminate" value-state="Error" indeterminate checked></ui5-checkbox>		<ui5-checkbox text="Warning indeterminate" value-state="Warning" indeterminate checked></ui5-checkbox>		<ui5-checkbox text="Information indeterminate" value-state="Information" indeterminate checked></ui5-checkbox>	</div>
${ 
  (function () { setTimeout(function () { 
	var resultCb = document.querySelector("#result-cb");
	var langCbs = Array.from(document.querySelectorAll("[id^=cb]"));

	langCbs.forEach(function (cbEl) {
		cbEl.addEventListener("change", function (event) {
			const hasChecked = langCbs.some(function (cb) { return cb.checked });
			const hasUnchecked = langCbs.some(function (cb) { return !cb.checked });

			resultCb.indeterminate = hasChecked && hasUnchecked;
			resultCb.checked = hasChecked;
		});
	});

	resultCb.addEventListener("change", function (event) {
		langCbs.forEach(function (cb) {
			cb.checked = event.target.checked;
		});
	});
 }, 500) })()
}`;
}

export const CheckBoxstates = CheckBoxstatesTemplate.bind({});

CheckBoxstates.storyName = `CheckBox states`;
CheckBoxstates.parameters = {
  controls: {
		disabled: true,
	}
};const CheckBoxwithTextWrappingTemplate = () => {
	
return html`
<div class="snippet">		<ui5-checkbox text="ui5-checkbox with &apos;wrapping-type=Normal&apos; set and some long text." wrapping-type="Normal" style="width:200px"></ui5-checkbox>		<ui5-checkbox text="Another ui5-checkbox with very long text here" wrapping-type="Normal" style="width:200px"></ui5-checkbox>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CheckBoxwithTextWrapping = CheckBoxwithTextWrappingTemplate.bind({});

CheckBoxwithTextWrapping.storyName = `CheckBox with Text Wrapping`;
CheckBoxwithTextWrapping.parameters = {
  controls: {
		disabled: true,
	}
};const CheckBoxwithindeterminateTemplate = () => {
	
return html`
<div class="snippet">		<ui5-checkbox id="result-cb" text="Select / deselect all" indeterminate checked></ui5-checkbox>		<hr>		<div style="display: flex; flex-direction: column; align-items: flex-start;">			<ui5-checkbox id="cb1" text="English" checked></ui5-checkbox>			<ui5-checkbox id="cb2" text="German"></ui5-checkbox>			<ui5-checkbox id="cb3" text="French"></ui5-checkbox>		</div>			</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CheckBoxwithindeterminate = CheckBoxwithindeterminateTemplate.bind({});

CheckBoxwithindeterminate.storyName = `CheckBox with indeterminate`;
CheckBoxwithindeterminate.parameters = {
  controls: {
		disabled: true,
	}
};
