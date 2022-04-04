import { html} from 'lit-html';
import '@ui5/webcomponents/dist/DatePicker.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/DatePicker',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-date-picker

	accessible-name-ref="${ args['accessibleNameRef'] }" 
	?disabled="${ args['disabled'] }" 
	?hideWeekNumbers="${ args['hideWeekNumbers'] }" 
	name="${ args['name'] }" 
	placeholder="${ args['placeholder'] }" 
	?readonly="${ args['readonly'] }" 
	?required="${ args['required'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
>
	
</ui5-date-picker>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleNameRef: "",
	
	disabled: false,
	
	hideWeekNumbers: false,
	
	name: "",
	
	placeholder: undefined,
	
	readonly: false,
	
	required: false,
	
	value: "",
	
	valueState: "None",
	
};




const BasicDatePickerTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-date-picker id="myDatepicker1"></ui5-date-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () { 
	const dp = document.getElementById('myDatepicker2');
	dp.addEventListener('change', (e) => {
		dp.setAttribute('value-state', e.detail.valid ? 'None' : 'Error');
		console.log('change: ', e.detail);
	});
	dp.addEventListener('input', (e) => console.log('input: ', e.detail));
 }, 500) })()
}`;
}

export const BasicDatePicker = BasicDatePickerTemplate.bind({});

BasicDatePicker.storyName = `Basic DatePicker`;
BasicDatePicker.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithPlaceholderTooltipEventsValueStateandvalueStateMessageTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-date-picker id="myDatepicker2" placeholder="Delivery Date...">				<div slot="valueStateMessage">The value is not valid. Please provide valid value</div>			</ui5-date-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithPlaceholderTooltipEventsValueStateandvalueStateMessage = DatePickerwithPlaceholderTooltipEventsValueStateandvalueStateMessageTemplate.bind({});

DatePickerwithPlaceholderTooltipEventsValueStateandvalueStateMessage.storyName = `DatePicker with Placeholder, Tooltip, Events, ValueState and valueStateMessage`;
DatePickerwithPlaceholderTooltipEventsValueStateandvalueStateMessage.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithMinimumandMaximumDateformatpatternddMMyyyyTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-date-picker id="myDatepicker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-date-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithMinimumandMaximumDateformatpatternddMMyyyy = DatePickerwithMinimumandMaximumDateformatpatternddMMyyyyTemplate.bind({});

DatePickerwithMinimumandMaximumDateformatpatternddMMyyyy.storyName = `DatePicker with Minimum and Maximum Date - 1/1/2020 - 4/5/2020 format-pattern="dd/MM/yyyy"`;
DatePickerwithMinimumandMaximumDateformatpatternddMMyyyy.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithshortcutstypetodayoryesterdayandpressEnterTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-date-picker></ui5-date-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithshortcutstypetodayoryesterdayandpressEnter = DatePickerwithshortcutstypetodayoryesterdayandpressEnterTemplate.bind({});

DatePickerwithshortcutstypetodayoryesterdayandpressEnter.storyName = `DatePicker with shortcuts: type "today" or "yesterday" and press "Enter"`;
DatePickerwithshortcutstypetodayoryesterdayandpressEnter.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithformatpatternshortTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker format-pattern="short"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithformatpatternshort = DatePickerwithformatpatternshortTemplate.bind({});

DatePickerwithformatpatternshort.storyName = `DatePicker with format-pattern='short'`;
DatePickerwithformatpatternshort.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithformatpatternlongTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker format-pattern="long"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithformatpatternlong = DatePickerwithformatpatternlongTemplate.bind({});

DatePickerwithformatpatternlong.storyName = `DatePicker with format-pattern='long'`;
DatePickerwithformatpatternlong.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithformatpatternQQQyyyyMMMddvalueQFebTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-date-picker format-pattern="QQQ yyyy, MMM dd" value="Q4 2018, Feb 14"></ui5-date-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithformatpatternQQQyyyyMMMddvalueQFeb = DatePickerwithformatpatternQQQyyyyMMMddvalueQFebTemplate.bind({});

DatePickerwithformatpatternQQQyyyyMMMddvalueQFeb.storyName = `DatePicker with format-pattern='QQQ yyyy, MMM dd', value='Q4 2018, Feb 14'`;
DatePickerwithformatpatternQQQyyyyMMMddvalueQFeb.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithformatpatternEEEMdyyyyTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker format-pattern="EEE, M/d/yyyy"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithformatpatternEEEMdyyyy = DatePickerwithformatpatternEEEMdyyyyTemplate.bind({});

DatePickerwithformatpatternEEEMdyyyy.storyName = `DatePicker with format-pattern='EEE, M/d/yyyy'`;
DatePickerwithformatpatternEEEMdyyyy.parameters = {
  controls: {
		disabled: true,
	}
};const DisabledDatePickerTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker disabled value="8 September 2021"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DisabledDatePicker = DisabledDatePickerTemplate.bind({});

DisabledDatePicker.storyName = `Disabled DatePicker`;
DisabledDatePicker.parameters = {
  controls: {
		disabled: true,
	}
};const readonlyDatePickerTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker readonly value="8 September 2021"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const readonlyDatePicker = readonlyDatePickerTemplate.bind({});

readonlyDatePicker.storyName = `readonly DatePicker`;
readonlyDatePicker.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithJapaneseCalendarTypeTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker primary-calendar-type="Japanese"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithJapaneseCalendarType = DatePickerwithJapaneseCalendarTypeTemplate.bind({});

DatePickerwithJapaneseCalendarType.storyName = `DatePicker with Japanese Calendar Type`;
DatePickerwithJapaneseCalendarType.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithIslamicCalendarTypeTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker primary-calendar-type="Islamic"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithIslamicCalendarType = DatePickerwithIslamicCalendarTypeTemplate.bind({});

DatePickerwithIslamicCalendarType.storyName = `DatePicker with Islamic Calendar Type`;
DatePickerwithIslamicCalendarType.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithBuddhistCalendarTypeTemplate = () => {
	
return html`
<div class="snippet">			<div class="datepicker-width">				<ui5-date-picker primary-calendar-type="Buddhist"></ui5-date-picker>			</div>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithBuddhistCalendarType = DatePickerwithBuddhistCalendarTypeTemplate.bind({});

DatePickerwithBuddhistCalendarType.storyName = `DatePicker with Buddhist Calendar Type`;
DatePickerwithBuddhistCalendarType.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithPersianCalendarTypeTemplate = () => {
	
return html`
<div class="snippet">        <div class="datepicker-width">            <ui5-date-picker primary-calendar-type="Persian"></ui5-date-picker>        </div>    </div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithPersianCalendarType = DatePickerwithPersianCalendarTypeTemplate.bind({});

DatePickerwithPersianCalendarType.storyName = `DatePicker with Persian Calendar Type`;
DatePickerwithPersianCalendarType.parameters = {
  controls: {
		disabled: true,
	}
};const DatePickerwithprimaryandsecondarycalendartypeTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-date-picker primary-calendar-type="Islamic" secondary-calendar-type="Gregorian"></ui5-date-picker>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DatePickerwithprimaryandsecondarycalendartype = DatePickerwithprimaryandsecondarycalendartypeTemplate.bind({});

DatePickerwithprimaryandsecondarycalendartype.storyName = `DatePicker with primary and secondary calendar type`;
DatePickerwithprimaryandsecondarycalendartype.parameters = {
  controls: {
		disabled: true,
	}
};
