import { html} from 'lit-html';
import '@ui5/webcomponents/dist/DateTimePicker.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/DateTimePicker',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-datetime-picker

>
	
</ui5-datetime-picker>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
};




const DateTimePickerTemplate = () => {
	
return html`
<div class="snippet">		<ui5-datetime-picker style="width: 230px"></ui5-datetime-picker>	</div>
${ 
  (function () { setTimeout(function () { 
			var counter = 0;
			input1.value = "{ value: 13/04/2020, 03:16:16 AM }";

			dt1.addEventListener("change", function(event) {
				input1.value = "{ value: " + dt1.value + " , valid: " + event.detail.valid + " }";
			});
		 }, 500) })()
}`;
}

export const DateTimePicker = DateTimePickerTemplate.bind({});

DateTimePicker.storyName = `DateTimePicker`;
DateTimePicker.parameters = {
  controls: {
		disabled: true,
	}
};const DateTimePickerwithformatpatternTemplate = () => {
	
return html`
<div class="snippet">		<div style="display: flex; flex-direction: column;">			<ui5-label>d/MM/yyyy, hh:mm aa</ui5-label>			<ui5-datetime-picker style="width: 230px" format-pattern="dd/MM/yyyy, hh:mm aa" value="13/04/2020, 09:16 AM"></ui5-datetime-picker>			<br>			<ui5-label>yyyy-MM-dd-hh:mm:ss aa</ui5-label>			<ui5-datetime-picker style="width: 230px" format-pattern="yyyy-MM-dd-hh:mm:ss aa" value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>			<br>			<ui5-label>d/MM/yyyy, hh:mm:ss aa</ui5-label>			<div style="display: flex; flex-direction: row;">				<ui5-datetime-picker id="dt1" style="width: 230px" format-pattern="dd/MM/yyyy, hh:mm:ss aa" value="13/04/2020, 03:16:16 AM"></ui5-datetime-picker>				<ui5-input id="input1" style="width: 320px"></ui5-input>			</div>		</div>			</div>
${ 
  (function () { setTimeout(function () { 
	myDateTimePicker.addEventListener("change", event => {});
 }, 500) })()
}`;
}

export const DateTimePickerwithformatpattern = DateTimePickerwithformatpatternTemplate.bind({});

DateTimePickerwithformatpattern.storyName = `DateTimePicker with format-pattern`;
DateTimePickerwithformatpattern.parameters = {
  controls: {
		disabled: true,
	}
};const DateTimePickerinstatesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-datetime-picker value-state="Error"></ui5-datetime-picker>		<ui5-datetime-picker value-state="Warning"></ui5-datetime-picker>		<ui5-datetime-picker value-state="Information"></ui5-datetime-picker>		<ui5-datetime-picker value-state="Success"></ui5-datetime-picker>		<br><br>		<ui5-datetime-picker readonly value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>		<ui5-datetime-picker disabled value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DateTimePickerinstates = DateTimePickerinstatesTemplate.bind({});

DateTimePickerinstates.storyName = `DateTimePicker in states`;
DateTimePickerinstates.parameters = {
  controls: {
		disabled: true,
	}
};
