import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Calendar.js';
import '@ui5/webcomponents/dist/CalendarDate.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Calendar',
  argTypes: { selectionMode: {
			description: `Defines the type of selection used in the calendar component. Accepted property values are:<br> <ul> <li><code>CalendarSelectionMode.Single</code> - enables a single date selection.(default value)</li> <li><code>CalendarSelectionMode.Range</code> - enables selection of a date range.</li> <li><code>CalendarSelectionMode.Multiple</code> - enables selection of multiple dates.</li> </ul>`,
			control: { type: 'select' },
			options: [
				'Multiple','Range','Single',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-calendar

	?hideWeekNumbers="${ args['hideWeekNumbers'] }" 
	selection-mode="${ args['selectionMode'] }" 
>
	
</ui5-calendar>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	hideWeekNumbers: false,
	
	selectionMode: "Single",
	
};




const BasicCalendarTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicCalendar = BasicCalendarTemplate.bind({});

BasicCalendar.storyName = `Basic Calendar`;
BasicCalendar.parameters = {
  controls: {
		disabled: true,
	}
};const CalendarwithMinimumandMaximumDateFormatPatternTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar min-date="7/7/2020" max-date="20/10/2020" format-pattern="dd/MM/yyyy"></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CalendarwithMinimumandMaximumDateFormatPattern = CalendarwithMinimumandMaximumDateFormatPatternTemplate.bind({});

CalendarwithMinimumandMaximumDateFormatPattern.storyName = `Calendar with Minimum and Maximum Date & Format Pattern`;
CalendarwithMinimumandMaximumDateFormatPattern.parameters = {
  controls: {
		disabled: true,
	}
};const CalendarwithHiddenWeekNumbersTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar hide-week-numbers></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CalendarwithHiddenWeekNumbers = CalendarwithHiddenWeekNumbersTemplate.bind({});

CalendarwithHiddenWeekNumbers.storyName = `Calendar with Hidden Week Numbers`;
CalendarwithHiddenWeekNumbers.parameters = {
  controls: {
		disabled: true,
	}
};const CalendarwithSelectionModeMultipleTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar selection-mode="Multiple"></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CalendarwithSelectionModeMultiple = CalendarwithSelectionModeMultipleTemplate.bind({});

CalendarwithSelectionModeMultiple.storyName = `Calendar with Selection Mode Multiple`;
CalendarwithSelectionModeMultiple.parameters = {
  controls: {
		disabled: true,
	}
};const CalendarwithSelectionModeRangeTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar selection-mode="Range"></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CalendarwithSelectionModeRange = CalendarwithSelectionModeRangeTemplate.bind({});

CalendarwithSelectionModeRange.storyName = `Calendar with Selection Mode Range`;
CalendarwithSelectionModeRange.parameters = {
  controls: {
		disabled: true,
	}
};const JapaneseCalendarTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar primary-calendar-type="Japanese"></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const JapaneseCalendar = JapaneseCalendarTemplate.bind({});

JapaneseCalendar.storyName = `Japanese Calendar`;
JapaneseCalendar.parameters = {
  controls: {
		disabled: true,
	}
};const IslamicCalendarTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar primary-calendar-type="Islamic"></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const IslamicCalendar = IslamicCalendarTemplate.bind({});

IslamicCalendar.storyName = `Islamic Calendar`;
IslamicCalendar.parameters = {
  controls: {
		disabled: true,
	}
};const BuddhistCalendarTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar primary-calendar-type="Buddhist"></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BuddhistCalendar = BuddhistCalendarTemplate.bind({});

BuddhistCalendar.storyName = `Buddhist Calendar`;
BuddhistCalendar.parameters = {
  controls: {
		disabled: true,
	}
};const PersianCalendarTemplate = () => {
	
return html`
<div class="snippet">		<div class="datepicker-width">			<ui5-calendar primary-calendar-type="Persian"></ui5-calendar>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const PersianCalendar = PersianCalendarTemplate.bind({});

PersianCalendar.storyName = `Persian Calendar`;
PersianCalendar.parameters = {
  controls: {
		disabled: true,
	}
};
