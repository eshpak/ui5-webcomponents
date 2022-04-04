import { html} from 'lit-html';
import '@ui5/webcomponents/dist/DateRangePicker.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/DateRangePicker',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-daterange-picker

>
	
</ui5-daterange-picker>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
};




const BasicDateRangePickerTemplate = () => {
	
return html`
<div class="snippet">		<div class="daterange-picker-width">			<ui5-daterange-picker id="mydaterange-picker1"></ui5-daterange-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicDateRangePicker = BasicDateRangePickerTemplate.bind({});

BasicDateRangePicker.storyName = `Basic DateRangePicker`;
BasicDateRangePicker.parameters = {
  controls: {
		disabled: true,
	}
};const DateRangePickerwithMinimumandMaximumDateformatpatternddMMyyyyTemplate = () => {
	
return html`
<div class="snippet">		<div class="daterange-picker-width">			<ui5-daterange-picker id="mydaterange-picker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-daterange-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DateRangePickerwithMinimumandMaximumDateformatpatternddMMyyyy = DateRangePickerwithMinimumandMaximumDateformatpatternddMMyyyyTemplate.bind({});

DateRangePickerwithMinimumandMaximumDateformatpatternddMMyyyy.storyName = `DateRangePicker with Minimum and Maximum Date - 1/1/2020 - 4/5/2020 format-pattern="dd/MM/yyyy"`;
DateRangePickerwithMinimumandMaximumDateformatpatternddMMyyyy.parameters = {
  controls: {
		disabled: true,
	}
};const DateRangePickerwithformatpatternlongTemplate = () => {
	
return html`
<div class="snippet">		<div class="daterange-picker-width">			<ui5-daterange-picker format-pattern="long"></ui5-daterange-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DateRangePickerwithformatpatternlong = DateRangePickerwithformatpatternlongTemplate.bind({});

DateRangePickerwithformatpatternlong.storyName = `DateRangePicker with format-pattern='long'`;
DateRangePickerwithformatpatternlong.parameters = {
  controls: {
		disabled: true,
	}
};const DisabledDateRangePickerTemplate = () => {
	
return html`
<div class="snippet">		<div class="daterange-picker-width">			<ui5-daterange-picker disabled value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DisabledDateRangePicker = DisabledDateRangePickerTemplate.bind({});

DisabledDateRangePicker.storyName = `Disabled DateRangePicker`;
DisabledDateRangePicker.parameters = {
  controls: {
		disabled: true,
	}
};const readonlyDateRangePickerTemplate = () => {
	
return html`
<div class="snippet">		<div class="daterange-picker-width">			<ui5-daterange-picker readonly value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const readonlyDateRangePicker = readonlyDateRangePickerTemplate.bind({});

readonlyDateRangePicker.storyName = `readonly DateRangePicker`;
readonlyDateRangePicker.parameters = {
  controls: {
		disabled: true,
	}
};
