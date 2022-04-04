import { html} from 'lit-html';
import '@ui5/webcomponents/dist/ComboBox.js';
import '@ui5/webcomponents/dist/ComboBoxItem.js';
import '@ui5/webcomponents/dist/Icon.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/ComboBox',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-combobox

	accessible-name-ref="${ args['accessibleNameRef'] }" 
	?disabled="${ args['disabled'] }" 
	filter="${ args['filter'] }" 
	?loading="${ args['loading'] }" 
	placeholder="${ args['placeholder'] }" 
	?readonly="${ args['readonly'] }" 
	?required="${ args['required'] }" 
	value="${ args['value'] }" 
	value-state="${ args['valueState'] }" 
>
	
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		
</ui5-combobox>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleNameRef: "",
	
	disabled: false,
	
	filter: "StartsWithPerTerm",
	
	loading: false,
	
	placeholder: "",
	
	readonly: false,
	
	required: false,
	
	value: "",
	
	valueState: "None",
	
};




const BasicExampleTemplate = () => {
	
return html`
<div class="snippet responsive-snippet">		<ui5-combobox placeholder="Enter value">			<ui5-cb-item text="Item 1"></ui5-cb-item>			<ui5-cb-item text="Item 2"></ui5-cb-item>			<ui5-cb-item text="Item 3"></ui5-cb-item>		</ui5-combobox>		<ui5-combobox value-state="Success" value="Item 1">			<ui5-cb-item text="Item 1"></ui5-cb-item>			<ui5-cb-item text="Item 2"></ui5-cb-item>			<ui5-cb-item text="Item 3"></ui5-cb-item>		</ui5-combobox>		<ui5-combobox value-state="Warning" value="Item 2">			<ui5-cb-item text="Item 1"></ui5-cb-item>			<ui5-cb-item text="Item 2"></ui5-cb-item>			<ui5-cb-item text="Item 3"></ui5-cb-item>		</ui5-combobox>		<ui5-combobox value-state="Error" value="Item 3">			<ui5-cb-item text="Item 1"></ui5-cb-item>			<ui5-cb-item text="Item 2"></ui5-cb-item>			<ui5-cb-item text="Item 3"></ui5-cb-item>		</ui5-combobox>	</div>
${ 
  (function () { setTimeout(function () { 
			const combo = document.getElementById("lazy-cb");

			combo.addEventListener("input", function (event) {
				while (combo.firstChild) {
					combo.removeChild(combo.firstChild);
				}

				event.target.loading = true;

				fetch("https://restcountries.eu/rest/v2/?fields=name")
					.then(function (response) {
						response.json()
							.then(function (list) {

								list.forEach(function (country) {
									const element = document.createElement("ui5-cb-item");

									element.setAttribute("text", country.name);
									combo.appendChild(element);
								});

								event.target.loading = false;

							});
					})
					.catch(function () { });
			});
		 }, 500) })()
}`;
}

export const BasicExample = BasicExampleTemplate.bind({});

BasicExample.storyName = `Basic Example`;
BasicExample.parameters = {
  controls: {
		disabled: true,
	}
};const DisabledandReadonlypropertiesTemplate = () => {
	
return html`
<div class="snippet responsive-snippet">		<ui5-combobox value="Disabled" disabled>			<ui5-cb-item text="Item 1"></ui5-cb-item>			<ui5-cb-item text="Item 2"></ui5-cb-item>			<ui5-cb-item text="Item 3"></ui5-cb-item>		</ui5-combobox>		<ui5-combobox value="Readonly" readonly>			<ui5-cb-item text="Item 1"></ui5-cb-item>			<ui5-cb-item text="Item 2"></ui5-cb-item>			<ui5-cb-item text="Item 3"></ui5-cb-item>		</ui5-combobox>	</div>
${ 
  (function () { setTimeout(function () { 
	const combo = document.getElementById("lazy-cb");

	combo.addEventListener("input", function (event) {
		while (combo.firstChild) {
			combo.removeChild(combo.firstChild);
		}

		event.target.loading = true;

		fetch("https://restcountries.eu/rest/v2/?fields=name")
			.then(function (response) {
				response.json()
					.then(function (list) {

						list.forEach(function (country) {
							const element = document.createElement("ui5-cb-item");

							element.setAttribute("text", country.name);
							combo.appendChild(element);
						});

						event.target.loading = false;

					});
			})
			.catch(function () { });
	});
 }, 500) })()
}`;
}

export const DisabledandReadonlyproperties = DisabledandReadonlypropertiesTemplate.bind({});

DisabledandReadonlyproperties.storyName = `Disabled and Readonly properties`;
DisabledandReadonlyproperties.parameters = {
  controls: {
		disabled: true,
	}
};const FiltersStartsWithPerTermdefaultStartsWithContainsTemplate = () => {
	
return html`
<div class="snippet responsive-snippet">			<ui5-combobox placeholder="Starts With Per Term filter (default)">				<ui5-cb-item text="Austria"></ui5-cb-item>				<ui5-cb-item text="Bulgaria"></ui5-cb-item>				<ui5-cb-item text="Germany"></ui5-cb-item>				<ui5-cb-item text="United Kingdom"></ui5-cb-item>				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>			</ui5-combobox>			<ui5-combobox placeholder="StartsWith" filter="StartsWith">				<ui5-cb-item text="Austria"></ui5-cb-item>				<ui5-cb-item text="Bulgaria"></ui5-cb-item>				<ui5-cb-item text="Germany"></ui5-cb-item>				<ui5-cb-item text="United Kingdom"></ui5-cb-item>				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>			</ui5-combobox>			<ui5-combobox placeholder="Contains" filter="Contains">				<ui5-cb-item text="Austria"></ui5-cb-item>				<ui5-cb-item text="Bulgaria"></ui5-cb-item>				<ui5-cb-item text="Germany"></ui5-cb-item>				<ui5-cb-item text="United Kingdom"></ui5-cb-item>				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>			</ui5-combobox>		</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const FiltersStartsWithPerTermdefaultStartsWithContains = FiltersStartsWithPerTermdefaultStartsWithContainsTemplate.bind({});

FiltersStartsWithPerTermdefaultStartsWithContains.storyName = `Filters (StartsWithPerTerm(default), StartsWith, Contains)`;
FiltersStartsWithPerTermdefaultStartsWithContains.parameters = {
  controls: {
		disabled: true,
	}
};const ComboBoxwithTwoColumnLayoutItemsTemplate = () => {
	
return html`
<div class="snippet responsive-snippet">		<ui5-combobox placeholder="Two-column Layout">			<ui5-cb-item text="Austria" additional-text="AT"></ui5-cb-item>			<ui5-cb-item text="Belgium" additional-text="BE"></ui5-cb-item>			<ui5-cb-item text="Brazil" additional-text="BR"></ui5-cb-item>			<ui5-cb-item text="Bulgaria" additional-text="BG"></ui5-cb-item>			<ui5-cb-item text="Canada" additional-text="CA"></ui5-cb-item>		</ui5-combobox>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ComboBoxwithTwoColumnLayoutItems = ComboBoxwithTwoColumnLayoutItemsTemplate.bind({});

ComboBoxwithTwoColumnLayoutItems.storyName = `ComboBox with Two-Column Layout Items`;
ComboBoxwithTwoColumnLayoutItems.parameters = {
  controls: {
		disabled: true,
	}
};const ComboBoxwithGroupingofItemsTemplate = () => {
	
return html`
<div class="snippet responsive-snippet">		<ui5-combobox placeholder="ComboBox with grouping of suggestions">			<ui5-cb-group-item text="A"></ui5-cb-group-item>			<ui5-cb-item text="Argentina"></ui5-cb-item>			<ui5-cb-item text="Australia"></ui5-cb-item>			<ui5-cb-item text="Austria"></ui5-cb-item>				<ui5-cb-group-item text="B"></ui5-cb-group-item>			<ui5-cb-item text="Bahrain"></ui5-cb-item>			<ui5-cb-item text="Belgium"></ui5-cb-item>			<ui5-cb-item text="Brazil"></ui5-cb-item>			<ui5-cb-group-item text="C"></ui5-cb-group-item>			<ui5-cb-item text="Canada"></ui5-cb-item>			<ui5-cb-item text="Chile"></ui5-cb-item>		</ui5-combobox>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ComboBoxwithGroupingofItems = ComboBoxwithGroupingofItemsTemplate.bind({});

ComboBoxwithGroupingofItems.storyName = `ComboBox with Grouping of Items`;
ComboBoxwithGroupingofItems.parameters = {
  controls: {
		disabled: true,
	}
};const LazyloadingTemplate = () => {
	
return html`
<div class="snippet responsive-snippet">		<ui5-combobox placeholder="Enter value" id="lazy-cb"></ui5-combobox>			</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const Lazyloading = LazyloadingTemplate.bind({});

Lazyloading.storyName = `Lazy loading`;
Lazyloading.parameters = {
  controls: {
		disabled: true,
	}
};
