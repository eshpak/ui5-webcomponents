import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Link.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Link',
  argTypes: { design: {
			description: `Defines the component design. <br><br> <b>Note:</b> Avaialble options are <code>Default</code>, <code>Subtle</code>, and <code>Emphasized</code>.`,
			control: { type: 'select' },
			options: [
				'Default','Emphasized','Subtle',
			]
		},wrappingType: {
			description: `Defines how the text of a component will be displayed when there is not enough space. Available options are: <ul> <li><code>None</code> - The text will be truncated with an ellipsis.</li> <li><code>Normal</code> - The text will wrap. The words will not be broken based on hyphenation.</li> </ul>`,
			control: { type: 'select' },
			options: [
				'None','Normal',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-link

	accessible-name-ref="${ args['accessibleNameRef'] }" 
	design="${ args['design'] }" 
	?disabled="${ args['disabled'] }" 
	href="${ args['href'] }" 
	target="${ args['target'] }" 
	wrapping-type="${ args['wrappingType'] }" 
>
	Standard Link
</ui5-link>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleNameRef: "",
	
	design: "Default",
	
	disabled: false,
	
	href: "",
	
	target: "",
	
	wrappingType: "None",
	
};




const DifferentLinkDesignsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank">Standard Link</ui5-link>		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Subtle">Subtle link</ui5-link>		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" disabled>Disabled</ui5-link>		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Emphasized">Emphasized</ui5-link>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const DifferentLinkDesigns = DifferentLinkDesignsTemplate.bind({});

DifferentLinkDesigns.storyName = `Different Link Designs`;
DifferentLinkDesigns.parameters = {
  controls: {
		disabled: true,
	}
};
