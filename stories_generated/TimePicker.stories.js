import { html} from 'lit-html';
import '@ui5/webcomponents/dist/TimePicker.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/TimePicker',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-time-picker

>
	
</ui5-time-picker>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
};




const BasicTimePickerTemplate = () => {
	
return html`
<div class="snippet">			<ui5-time-picker id="timepicker1"></ui5-time-picker>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicTimePicker = BasicTimePickerTemplate.bind({});

BasicTimePicker.storyName = `Basic TimePicker`;
BasicTimePicker.parameters = {
  controls: {
		disabled: true,
	}
};const TimePickerintwelvehoursformatTemplate = () => {
	
return html`
<div class="snippet">			<ui5-time-picker id="timepicker1" format-pattern="hh:mm:ss a"></ui5-time-picker>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TimePickerintwelvehoursformat = TimePickerintwelvehoursformatTemplate.bind({});

TimePickerintwelvehoursformat.storyName = `TimePicker in twelve hours format`;
TimePickerintwelvehoursformat.parameters = {
  controls: {
		disabled: true,
	}
};const TimePickerwithonlyminutesandsecondsTemplate = () => {
	
return html`
<div class="snippet">			<ui5-time-picker id="timepicker1" format-pattern="mm:ss"></ui5-time-picker>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TimePickerwithonlyminutesandseconds = TimePickerwithonlyminutesandsecondsTemplate.bind({});

TimePickerwithonlyminutesandseconds.storyName = `TimePicker with only minutes and seconds`;
TimePickerwithonlyminutesandseconds.parameters = {
  controls: {
		disabled: true,
	}
};const TimePickerwithvaluestateandvalueStateMessageTemplate = () => {
	
return html`
<div class="snippet">		<ui5-time-picker id="timepicker3" format-pattern="mm:ss" value-state="Error">			<div slot="valueStateMessage">Please provide valid value</div>		</ui5-time-picker>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TimePickerwithvaluestateandvalueStateMessage = TimePickerwithvaluestateandvalueStateMessageTemplate.bind({});

TimePickerwithvaluestateandvalueStateMessage.storyName = `TimePicker with value-state and valueStateMessage`;
TimePickerwithvaluestateandvalueStateMessage.parameters = {
  controls: {
		disabled: true,
	}
};
