import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Icon.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Icon',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-icon

	accessible-name="${ args['accessibleName'] }" 
	?interactive="${ args['interactive'] }" 
	name="${ args['name'] }" 
	?showTooltip="${ args['showTooltip'] }" 
>
	
</ui5-icon>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleName: "",
	
	interactive: false,
	
	name: "",
	
	showTooltip: false,
	
};




const BasicIconsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-icon class="samples-margin" name="activate"></ui5-icon>		<ui5-icon class="samples-margin" name="activities"></ui5-icon>		<ui5-icon class="samples-margin" name="add-equipment"></ui5-icon>		<ui5-icon class="samples-margin" name="add-document"></ui5-icon>		<ui5-icon class="samples-margin" name="add-employee"></ui5-icon>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicIcons = BasicIconsTemplate.bind({});

BasicIcons.storyName = `Basic Icons`;
BasicIcons.parameters = {
  controls: {
		disabled: true,
	}
};const SAPFioriToolsIconsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-icon class="samples-margin" name="tnt/antenna"></ui5-icon>		<ui5-icon class="samples-margin" name="tnt/api"></ui5-icon>		<ui5-icon class="samples-margin" name="tnt/modem"></ui5-icon>		<ui5-icon class="samples-margin" name="tnt/data-store"></ui5-icon>		<ui5-icon class="samples-margin" name="tnt/flow"></ui5-icon>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const SAPFioriToolsIcons = SAPFioriToolsIconsTemplate.bind({});

SAPFioriToolsIcons.storyName = `SAP Fiori Tools Icons`;
SAPFioriToolsIcons.parameters = {
  controls: {
		disabled: true,
	}
};const CustomizedIconsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-icon class="samples-margin" name="employee" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>		<ui5-icon class="samples-margin" name="menu" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CustomizedIcons = CustomizedIconsTemplate.bind({});

CustomizedIcons.storyName = `Customized Icons`;
CustomizedIcons.parameters = {
  controls: {
		disabled: true,
	}
};
