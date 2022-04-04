import { html} from 'lit-html';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/ListItem.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/List',
  argTypes: { mode: {
			description: `Defines the mode of the component. <br><br> <b>Note:</b> Available options are <code>None</code>, <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code>, <code>MultiSelect</code>, and <code>Delete</code>.`,
			control: { type: 'select' },
			options: [
				'Delete','MultiSelect','None','SingleSelect','SingleSelectAuto','SingleSelectBegin','SingleSelectEnd',
			]
		},separators: {
			description: `Defines the item separator style that is used. <br><br> <b>Notes:</b> <ul> <li>Avalaible options are <code>All</code>, <code>Inner</code>, and <code>None</code>.</li> <li>When set to <code>None</code>, none of the items are separated by horizontal lines.</li> <li>When set to <code>Inner</code>, the first item doesn't have a top separator and the last item doesn't have a bottom separator.</li> </ul>`,
			control: { type: 'select' },
			options: [
				'All','Inner','None',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-list

	accessible-name="${ args['accessibleName'] }" 
	accessible-name-ref="${ args['accessibleNameRef'] }" 
	accessible-role="${ args['accessibleRole'] }" 
	?busy="${ args['busy'] }" 
	busy-delay="${ args['busyDelay'] }" 
	footer-text="${ args['footerText'] }" 
	growing="${ args['growing'] }" 
	header-text="${ args['headerText'] }" 
	?indent="${ args['indent'] }" 
	mode="${ args['mode'] }" 
	no-data-text="${ args['noDataText'] }" 
	separators="${ args['separators'] }" 
>
	
			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>
			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Warning">Orange</ui5-li>
			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Information">Blueberry</ui5-li>
			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>
		
</ui5-list>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleName: "",
	
	accessibleNameRef: "",
	
	accessibleRole: "list",
	
	busy: false,
	
	busyDelay: 1000,
	
	footerText: "",
	
	growing: "None",
	
	headerText: "",
	
	indent: false,
	
	mode: "None",
	
	noDataText: "",
	
	separators: "All",
	
};




const BasicListTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list id="myList" class="full-width">			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Warning">Orange</ui5-li>			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Information">Blueberry</ui5-li>			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>		</ui5-list>	</div>
${ 
  (function () { setTimeout(function () { 
	const infiniteScrollEx = document.getElementById("infiniteScrollEx");

	infiniteScrollEx.addEventListener("load-more", (e) => {
		infiniteScrollEx.busy = true;

		setTimeout(() => {
			for(let i = 0; i < 5; i++) {
				const li = document.createElement("ui5-li");
				li.textContent = "Fruit name" + i;
				infiniteScrollEx.appendChild(li);
			}

			infiniteScrollEx.busy = false;
		}, 200);
	});
 }, 500) })()
}`;
}

export const BasicList = BasicListTemplate.bind({});

BasicList.storyName = `Basic List`;
BasicList.parameters = {
  controls: {
		disabled: true,
	}
};const ListwithgrowingScrollTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list id="infiniteScrollEx" style="height: 300px" growing="Scroll">			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Warning">Orange</ui5-li>			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Error">Banana</ui5-li>			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>			<ui5-li icon="nutrition-activity" description="An apple is a sweet, edible fruit produced by an apple tree " additional-text="In-stock" additional-text-state="Success">Apple</ui5-li>			<ui5-li icon="nutrition-activity" description="The peach (Prunus persica) is a deciduous tree native to the region of Northwest China" additional-text="Expires" additional-text-state="Warning">Peach</ui5-li>			<ui5-li icon="nutrition-activity" description="The pomelo is the largest citrus fruit from the family Rutaceae and the principal ancestor of the grapefruit" additional-text="Re-stock" additional-text-state="Error">Pomelo</ui5-li>			<ui5-li icon="nutrition-activity" description="The pear (/&#x2C8;p&#x25B;&#x259;r/) tree and shrub are a species of genus Pyrus, bearing the pomaceous fruit of the same name." additional-text="Re-stock" additional-text-state="Error">Pear</ui5-li>		</ui5-list>	</div>
${ 
  (function () { setTimeout(function () { 
		function template(i) {
			var li = document.createElement("ui5-li");
			li.textContent = "Fruit name";
			li.description = "the description goes here " + i;
			li.additionalText = "Available";
			li.additionalTextState = "Success";
			li.icon = "nutrition-activity" 
			return li;
		}

		function insertItems(el, num) {
			for(var i = 0; i < num; i++) {
				el.appendChild(template(i));
			}
		}

		infiniteScrollEx.addEventListener("load-more", (e) => {
			var el = infiniteScrollEx;
			el.busy = true;

			setTimeout(() => {
				insertItems(el, 5);
				el.busy = false;
			}, 200);
		});
	 }, 500) })()
}`;
}

export const ListwithgrowingScroll = ListwithgrowingScrollTemplate.bind({});

ListwithgrowingScroll.storyName = `List with  growing="Scroll"`;
ListwithgrowingScroll.parameters = {
  controls: {
		disabled: true,
	}
};const ListinSingleselectionModeTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list id="country-selector" class="full-width" mode="SingleSelect" header-text="Select a country:">			<ui5-li selected icon="map" icon-end>Argentina</ui5-li>			<ui5-li icon="map" icon-end>Bulgaria</ui5-li>			<ui5-li icon="map" icon-end>China</ui5-li>			<ui5-li type="Inactive" icon="map" icon-end>Denmark (ui5-li type=&apos;Inactive&apos;)</ui5-li>		</ui5-list>			</div>
${ 
  (function () { setTimeout(function () { 
			document.getElementById('country-selector').addEventListener("selection-change", function (event) {
				var selectedItems = event.detail.selectedItems;

				alert("The selected item:  " + selectedItems[0].textContent);
			});
		 }, 500) })()
}`;
}

export const ListinSingleselectionMode = ListinSingleselectionModeTemplate.bind({});

ListinSingleselectionMode.storyName = `List in Single-selection Mode`;
ListinSingleselectionMode.parameters = {
  controls: {
		disabled: true,
	}
};const ListinMultiselectionModeTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list id="myList1" class="samples-margin-bottom full-width" mode="MultiSelect" header-text="Multiple selection is possible">				<ui5-li>Pineapple</ui5-li>				<ui5-li selected>Orange</ui5-li>				<ui5-li>Banana</ui5-li>				<ui5-li>Mango</ui5-li>		</ui5-list>	</div>
${ 
  (function () { setTimeout(function () { 
	document.getElementById('country-selector').addEventListener("selection-change", function (event) {
		var selectedItems = event.detail.selectedItems;

		alert("The selected item:  " + selectedItems[0].textContent);
	});
 }, 500) })()
}`;
}

export const ListinMultiselectionMode = ListinMultiselectionModeTemplate.bind({});

ListinMultiselectionMode.storyName = `List in Multi-selection Mode`;
ListinMultiselectionMode.parameters = {
  controls: {
		disabled: true,
	}
};const BusyListTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list header-text="Fetching data ..." class="full-width" busy></ui5-list>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BusyList = BusyListTemplate.bind({});

BusyList.storyName = `Busy List`;
BusyList.parameters = {
  controls: {
		disabled: true,
	}
};const ListWithGroupHeadersTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list header-text="Community" mode="MultiSelect">			<ui5-li-groupheader>Front End Developers</ui5-li-groupheader>			<ui5-li image="images/avatars/woman_avatar_3.png" icon="navigation-right-arrow" icon-end>Jennifer</ui5-li>			<ui5-li image="images/avatars/woman_avatar_4.png" icon="navigation-right-arrow" icon-end>Lora</ui5-li>			<ui5-li image="images/avatars/woman_avatar_5.png" icon="navigation-right-arrow" icon-end>Carlotta</ui5-li>			<ui5-li-groupheader>Back End Developers</ui5-li-groupheader>			<ui5-li image="images/avatars/man_avatar_1.png" icon="navigation-right-arrow" icon-end>Clark</ui5-li>			<ui5-li image="images/avatars/woman_avatar_1.png" icon="navigation-right-arrow" icon-end>Ellen</ui5-li>			<ui5-li image="images/avatars/man_avatar_2.png" icon="navigation-right-arrow" icon-end>Adam</ui5-li>			<ui5-li-groupheader>FullStack Developers</ui5-li-groupheader>			<ui5-li image="images/avatars/woman_avatar_2.png" icon="navigation-right-arrow" icon-end>Susan</ui5-li>			<ui5-li image="images/avatars/man_avatar_3.png" icon="navigation-right-arrow" icon-end>David</ui5-li>			<ui5-li image="images/avatars/woman_avatar_3.png" icon="navigation-right-arrow" icon-end>Natalie</ui5-li>		</ui5-list>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ListWithGroupHeaders = ListWithGroupHeadersTemplate.bind({});

ListWithGroupHeaders.storyName = `List With GroupHeaders`;
ListWithGroupHeaders.parameters = {
  controls: {
		disabled: true,
	}
};const ListinDeleteModeTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list id="myList5" class="full-width" mode="Delete" header-text="Note: The list items removal is up to application developers">			<ui5-li>Argentina</ui5-li>			<ui5-li>Bulgaria</ui5-li>			<ui5-li>China</ui5-li>		</ui5-list>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ListinDeleteMode = ListinDeleteModeTemplate.bind({});

ListinDeleteMode.storyName = `List in Delete Mode`;
ListinDeleteMode.parameters = {
  controls: {
		disabled: true,
	}
};const ListwithNoDataTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list class="full-width" header-text="Products" no-data-text="No Data Available" separators="None"></ui5-list>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ListwithNoData = ListwithNoDataTemplate.bind({});

ListwithNoData.storyName = `List with No Data`;
ListwithNoData.parameters = {
  controls: {
		disabled: true,
	}
};const ListItemSeparationTypesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-list header-text="No separators" separators="None" class="full-width">			<ui5-li icon="product">Item #1</ui5-li>			<ui5-li icon="product">Item #2</ui5-li>			<ui5-li icon="product">Item #3</ui5-li>		</ui5-list>		<ui5-list header-text="Inner separators" separators="Inner" class="full-width">			<ui5-li icon="shipping-status">Devilered</ui5-li>			<ui5-li icon="shipping-status">Pending</ui5-li>			<ui5-li icon="shipping-status">Declined</ui5-li>		</ui5-list>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const ListItemSeparationTypes = ListItemSeparationTypesTemplate.bind({});

ListItemSeparationTypes.storyName = `List Item Separation Types`;
ListItemSeparationTypes.parameters = {
  controls: {
		disabled: true,
	}
};
