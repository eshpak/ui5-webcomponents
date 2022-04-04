import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Panel.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Panel',
  argTypes: { accessibleRole: {
			description: `Sets the accessible aria role of the component. Depending on the usage, you can change the role from the default <code>Form</code> to <code>Region</code> or <code>Complementary</code>.`,
			control: { type: 'select' },
			options: [
				'Complementary','Form','Region',
			]
		},headerLevel: {
			description: `Defines the "aria-level" of component heading, set by the <code>headerText</code>. <br><br> Available options are: <code>"H6"</code> to <code>"H1"</code>.`,
			control: { type: 'select' },
			options: [
				'H1','H2','H3','H4','H5','H6',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-panel

	accessible-name="${ args['accessibleName'] }" 
	accessible-role="${ args['accessibleRole'] }" 
	?collapsed="${ args['collapsed'] }" 
	?fixed="${ args['fixed'] }" 
	header-level="${ args['headerLevel'] }" 
	header-text="${ args['headerText'] }" 
	?noAnimation="${ args['noAnimation'] }" 
>
	
			<h1 class="content-color">I am a native heading!</h1>
			<ui5-label wrapping-type="Normal">Short text.</ui5-label>
			<br>
			<ui5-label wrapping-type="Normal">Another text.</ui5-label>
			<p class="content-color">
				Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna. Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore commodo Lorem laboris nisi Lorem.
			</p>
		
</ui5-panel>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleName: "",
	
	accessibleRole: "Form",
	
	collapsed: false,
	
	fixed: false,
	
	headerLevel: "H2",
	
	headerText: "",
	
	noAnimation: false,
	
};




const BasicPanelTemplate = () => {
	
return html`
<div class="snippet">		<ui5-panel width="100%" accessible-role="Complementary" header-text="Both expandable and expanded" class="full-width">			<h1 class="content-color">I am a native heading!</h1>			<ui5-label wrapping-type="Normal">Short text.</ui5-label>			<br>			<ui5-label wrapping-type="Normal">Another text.</ui5-label>			<p class="content-color">				Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna. Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore commodo Lorem laboris nisi Lorem.			</p>		</ui5-panel>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicPanel = BasicPanelTemplate.bind({});

BasicPanel.storyName = `Basic Panel`;
BasicPanel.parameters = {
  controls: {
		disabled: true,
	}
};const PanelwithListTemplate = () => {
	
return html`
<div class="snippet">		<ui5-panel accessible-role="Complementary" header-text="Select your country" class="full-width">			<ui5-list id="myList1" mode="MultiSelect">				<ui5-li key="country1">Argentina</ui5-li>				<ui5-li key="country2">Bulgaria</ui5-li>				<ui5-li key="country3">China</ui5-li>				<ui5-li key="country4">Germany</ui5-li>				<ui5-li key="country5">Hungary</ui5-li>				<ui5-li key="country6">England</ui5-li>				<ui5-li key="country7">USA</ui5-li>				<ui5-li key="country8">Canada</ui5-li>			</ui5-list>		</ui5-panel>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const PanelwithList = PanelwithListTemplate.bind({});

PanelwithList.storyName = `Panel with List`;
PanelwithList.parameters = {
  controls: {
		disabled: true,
	}
};const FixedPanelCantbeCollapsedExpandedTemplate = () => {
	
return html`
<div class="snippet panel-snippet">		<ui5-panel class="full-width" fixed accessible-role="Complementary" header-text="Country Of Birth">			<ui5-list id="myList2" mode="SingleSelectBegin">				<ui5-li key="country1">Argentina</ui5-li>				<ui5-li key="country2">Bulgaria</ui5-li>				<ui5-li key="country3">China</ui5-li>				<ui5-li key="country4">Germany</ui5-li>			</ui5-list>		</ui5-panel>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const FixedPanelCantbeCollapsedExpanded = FixedPanelCantbeCollapsedExpandedTemplate.bind({});

FixedPanelCantbeCollapsedExpanded.storyName = `Fixed Panel (Can't be Collapsed/Expanded)`;
FixedPanelCantbeCollapsedExpanded.parameters = {
  controls: {
		disabled: true,
	}
};const PanelwithCustomHeaderTemplate = () => {
	
return html`
<div class="snippet">		<ui5-panel accessible-role="Complementary" class="full-width">			<!-- Panel header -->			<div slot="header" class="header">				<ui5-title>Countries</ui5-title>				<div>					<ui5-button>Edit</ui5-button>					<ui5-button design="Emphasized">Add</ui5-button>					<ui5-button design="Negative">Remove</ui5-button>				</div>			</div>			<ui5-list id="myList1" mode="MultiSelect">				<ui5-li key="country1">Argentina</ui5-li>				<ui5-li key="country2">Bulgaria</ui5-li>				<ui5-li key="country3">China</ui5-li>			</ui5-list>		</ui5-panel>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const PanelwithCustomHeader = PanelwithCustomHeaderTemplate.bind({});

PanelwithCustomHeader.storyName = `Panel with Custom Header`;
PanelwithCustomHeader.parameters = {
  controls: {
		disabled: true,
	}
};
