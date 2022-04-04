import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Breadcrumbs.js';
import '@ui5/webcomponents/dist/BreadcrumbsItem.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Breadcrumbs',
  argTypes: { design: {
			description: `Defines the visual indication and behavior of the breadcrumbs. Available options are <code>Standard</code> (by default) and <code>NoCurrentPage</code>. <br><br> <b>Note:</b> The <code>Standard</code> breadcrumbs show the current page as the last item in the trail. The last item contains only plain text and is not a link.`,
			control: { type: 'select' },
			options: [
				'NoCurrentPage','Standard',
			]
		},separatorStyle: {
			description: `Determines the visual style of the separator between the breadcrumb items.<br><br> Available options are: <ul> <li><code>Slash</code></li> <li><code>BackSlash</code></li> <li><code>DoubleBackSlash</code></li> <li><code>DoubleGreaterThan</code></li> <li><code>DoubleSlash</code></li> <li><code>GreaterThan</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'BackSlash','DoubleBackSlash','DoubleGreaterThan','DoubleSlash','GreaterThan','Slash',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-breadcrumbs

	design="${ args['design'] }" 
	separator-style="${ args['separatorStyle'] }" 
>
	
			<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
		
</ui5-breadcrumbs>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	design: "Standard",
	
	separatorStyle: "Slash",
	
};




const StandardBreadcrumbsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-breadcrumbs>			<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>			<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>			<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>		</ui5-breadcrumbs>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const StandardBreadcrumbs = StandardBreadcrumbsTemplate.bind({});

StandardBreadcrumbs.storyName = `Standard Breadcrumbs`;
StandardBreadcrumbs.parameters = {
  controls: {
		disabled: true,
	}
};const BreadcrumbswithnocurrentpageTemplate = () => {
	
return html`
<div class="snippet">		<ui5-breadcrumbs design="NoCurrentPage">			<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>			<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>		</ui5-breadcrumbs>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const Breadcrumbswithnocurrentpage = BreadcrumbswithnocurrentpageTemplate.bind({});

Breadcrumbswithnocurrentpage.storyName = `Breadcrumbs with no current page`;
Breadcrumbswithnocurrentpage.parameters = {
  controls: {
		disabled: true,
	}
};const BreadcrumbswithspecificseparatorTemplate = () => {
	
return html`
<div class="snippet">		<div>			<ui5-breadcrumbs separator-style="Slash">				<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>				<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>				<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>			</ui5-breadcrumbs>		</div>		<div>			<ui5-breadcrumbs separator-style="BackSlash">				<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>				<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>				<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>			</ui5-breadcrumbs>		</div>		<div>			<ui5-breadcrumbs separator-style="DoubleBackSlash">				<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>				<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>				<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>			</ui5-breadcrumbs>		</div>		<div>			<ui5-breadcrumbs separator-style="DoubleGreaterThan">				<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>				<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>				<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>			</ui5-breadcrumbs>		</div>		<div>			<ui5-breadcrumbs separator-style="DoubleSlash">				<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>				<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>				<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>			</ui5-breadcrumbs>		</div>		<div>			<ui5-breadcrumbs separator-style="GreaterThan">				<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>				<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>				<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>			</ui5-breadcrumbs>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const Breadcrumbswithspecificseparator = BreadcrumbswithspecificseparatorTemplate.bind({});

Breadcrumbswithspecificseparator.storyName = `Breadcrumbs with specific separator`;
Breadcrumbswithspecificseparator.parameters = {
  controls: {
		disabled: true,
	}
};
