import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import '@ui5/webcomponents/dist/Icon.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Input',
  argTypes: { type: {
			description: `Defines the HTML type of the component. Available options are: <code>Text</code>, <code>Email</code>, <code>Number</code>, <code>Password</code>, <code>Tel</code>, and <code>URL</code>. <br><br> <b>Notes:</b> <ul> <li>The particular effect of this property differs depending on the browser and the current language settings, especially for type <code>Number</code>.</li> <li>The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.</li> </ul>`,
			control: { type: 'select' },
			options: [
				'Email','Number','Password','Tel','Text','URL',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-input

	accessible-name-ref="${ args['accessibleNameRef'] }" 
	?disabled="${ args['disabled'] }" 
	name="${ args['name'] }" 
	placeholder="${ args['placeholder'] }" 
	?readonly="${ args['readonly'] }" 
	?required="${ args['required'] }" 
	?showSuggestions="${ args['showSuggestions'] }" 
	type="${ args['type'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
>
	
</ui5-input>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleNameRef: "",
	
	disabled: false,
	
	name: "",
	
	placeholder: "",
	
	readonly: false,
	
	required: false,
	
	showSuggestions: false,
	
	type: "Text",
	
	value: "",
	
	valueState: "None",
	
};




const BasicInputTemplate = () => {
	
return html`
<div class="snippet">		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Input"></ui5-input>		<ui5-input class="samples-margin samples-responsive-margin-bottom" readonly value="readonly Input"></ui5-input>		<ui5-input class="samples-margin samples-responsive-margin-bottom" disabled value="Disabled Input"></ui5-input>	</div>
${ 
  (function () { setTimeout(function () { 
			var input = document.getElementById("suggestions-input");

			var ui5_database_entries = ["Argentina", "Albania", "Algeria", "Angola", "Austria",  "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
	"England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait", "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal", "Spain", "Sweden", "Sri Lanka", "Senegal", "United Kingdom", "USA" ];

			input.addEventListener("input", function(event) {
				var value = input.value;
				var suggestionItems = [];

				if (value) {
					suggestionItems = ui5_database_entries.filter(function (item) {
						return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
					});
				}

				[].slice.call(input.children).forEach(function(child) {
					input.removeChild(child);
				});

				suggestionItems.forEach(function(item) {
					var li = document.createElement("ui5-suggestion-item");
					li.icon = "world";
					li.additionalText = "explore";
					li.additionalTextState = "Success";
					li.description = "travel the world";
					li.text = item;
					input.appendChild(li);
				});
			});
		 }, 500) })()
}`;
}

export const BasicInput = BasicInputTemplate.bind({});

BasicInput.storyName = `Basic Input`;
BasicInput.parameters = {
  controls: {
		disabled: true,
	}
};const InputWithSuggestionsnotetheusagedependsontheframeworkyouareusingTemplate = () => {
	
return html`
<div class="snippet">		<ui5-input id="suggestions-input" class="samples-responsive-padding-bottom" placeholder="Start typing country name" show-suggestions></ui5-input>			</div>
${ 
  (function () { setTimeout(function () { 
	// data
	var ui5_database_entries = ["Argentina", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark", '...'];

	var input = document.getElementById("suggestions-input");
	
	// listen for the input event
	input.addEventListener("input", event => {
		var value = input.value;
		var suggestionItems = [];

		if (value) {
			suggestionItems = ui5_database_entries.filter(item => {
				return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
			});
		}

		// remove the previous suggestions
		[].slice.call(input.children).forEach(child => {
			input.removeChild(child);
		});

		// add the new suggestions according to the  user input
		suggestionItems.forEach(item => {
			var li = document.createElement("ui5-suggestion-item");
			li.icon = "world";
			li.additionalText = "explore";
			li.additionalTextState = "Success";
			li.description = "travel the world";
			li.text = item;
			input.appendChild(li);
		});
	});
 }, 500) })()
}`;
}

export const InputWithSuggestionsnotetheusagedependsontheframeworkyouareusing = InputWithSuggestionsnotetheusagedependsontheframeworkyouareusingTemplate.bind({});

InputWithSuggestionsnotetheusagedependsontheframeworkyouareusing.storyName = `Input With Suggestions (note: the usage depends on the framework you are using)`;
InputWithSuggestionsnotetheusagedependsontheframeworkyouareusing.parameters = {
  controls: {
		disabled: true,
	}
};const InputwithValueStateTemplate = () => {
	
return html`
<div class="snippet">		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Success" value-state="Success"></ui5-input>		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Warning" value-state="Warning"></ui5-input>		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Error" value-state="Error"></ui5-input>		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Information" value-state="Information"></ui5-input>	</div>
${ 
  (function () { setTimeout(function () { 
			var ui5_database_entries =  ["Argentina", "Albania", "Algeria", "Angola", "Austria",  "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
"England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait", "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal", "Spain", "Sweden", "Sri Lanka", "Senegal", "United Kingdom", "USA" ];

			var oInput = document.getElementById("value-state-suggestions");

			oInput.addEventListener("input", function(event) {
				var value = event.target.value;
				var suggestionItems = [];

				if (value) {
					suggestionItems = ui5_database_entries.filter(function (item) {
						return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
					});
				}

				[].slice.call(oInput.children).forEach(function(child) {
					oInput.removeChild(child);
				});

				suggestionItems.forEach(function(item) {
					var li = document.createElement("ui5-suggestion-item");
					li.icon = "world";
					li.id = item;
					li.text = item;
					oInput.appendChild(li);
				});
			});
		 }, 500) })()
}`;
}

export const InputwithValueState = InputwithValueStateTemplate.bind({});

InputwithValueState.storyName = `Input with Value State`;
InputwithValueState.parameters = {
  controls: {
		disabled: true,
	}
};const InputwithSuggestionsandValueStatemessageTemplate = () => {
	
return html`
<div class="snippet">		<ui5-input class="samples-margin samples-responsive-margin-bottom" id="value-state-suggestions" placeholder="Start typing country name" show-suggestions value-state="Warning">		</ui5-input>		<ui5-input class="samples-margin samples-responsive-margin-bottom" placeholder="Choose content density" show-suggestions value-state="Error">			<div slot="valueStateMessage">This is an error message. Extra long text used as an error message.</div>			<ui5-li>Cozy</ui5-li>			<ui5-li>Compact</ui5-li>			<ui5-li>Condensed</ui5-li>		</ui5-input>			</div>
${ 
  (function () { setTimeout(function () { 
	var searchCriteria = "PASTA";
	searchIcon.addEventListener("click", function(){
		alert("Look for: " + searchCriteria);
	});
	searchInput.addEventListener("change", function(e){
		searchCriteria = e.target.value;
	});
 }, 500) })()
}`;
}

export const InputwithSuggestionsandValueStatemessage = InputwithSuggestionsandValueStatemessageTemplate.bind({});

InputwithSuggestionsandValueStatemessage.storyName = `Input with Suggestions and Value State message`;
InputwithSuggestionsandValueStatemessage.parameters = {
  controls: {
		disabled: true,
	}
};const InputasSearchFieldTemplate = () => {
	
return html`
<div class="snippet">		<div class="flex-column samples-margin">			<ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">				<ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>			</ui5-input>		</div>	</div>
${ 
  (function () { setTimeout(function () { 
	var searchCriteria = "PASTA";
	searchIcon.addEventListener("click", function(){
		alert("Look for: " + searchCriteria);
	});
	searchInput.addEventListener("input", function(e){
		searchCriteria = e.target.value;
	});
 }, 500) })()
}`;
}

export const InputasSearchField = InputasSearchFieldTemplate.bind({});

InputasSearchField.storyName = `Input as Search Field`;
InputasSearchField.parameters = {
  controls: {
		disabled: true,
	}
};const InputwithLabelTemplate = () => {
	
return html`
<div class="snippet">		<div class="flex-column samples-margin">			<ui5-label class="samples-big-margin-right" for="myInput" required show-colon>Name</ui5-label>			<ui5-input id="myInput" placeholder="Enter your Name" required></ui5-input>		</div>		<div class="flex-column">			<ui5-label class="samples-big-margin-right" for="myPassword" required show-colon>Secret Code</ui5-label>			<ui5-input id="myPassword" type="Password" value-state="Error" placeholder="Enter your Secret Code" required></ui5-input>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const InputwithLabel = InputwithLabelTemplate.bind({});

InputwithLabel.storyName = `Input with Label`;
InputwithLabel.parameters = {
  controls: {
		disabled: true,
	}
};
