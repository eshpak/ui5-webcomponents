import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Badge.js';
import '@ui5/webcomponents/dist/Icon.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Badge',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-badge

	color-scheme="${ args['colorScheme'] }" 
>
	available 1
</ui5-badge>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	colorScheme: "1",
	
};




const BasicBadgeTemplate = () => {
	
return html`
<div class="snippet">		<ui5-badge color-scheme="1">available 1</ui5-badge>		<ui5-badge color-scheme="2">required 2</ui5-badge>		<ui5-badge color-scheme="3">3K</ui5-badge>		<ui5-badge color-scheme="4">bug 4</ui5-badge>		<ui5-badge color-scheme="5">in process 5</ui5-badge>		<ui5-badge color-scheme="6">in warehouse 6</ui5-badge>		<ui5-badge color-scheme="7">7$</ui5-badge>		<ui5-badge color-scheme="8">solution provided 8</ui5-badge>		<ui5-badge color-scheme="9">pending release 9</ui5-badge>		<ui5-badge color-scheme="10">customer action 10</ui5-badge>		<ui5-badge style="width:200px;">This would truncate as it is too long</ui5-badge>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicBadge = BasicBadgeTemplate.bind({});

BasicBadge.storyName = `Basic Badge`;
BasicBadge.parameters = {
  controls: {
		disabled: true,
	}
};const BadgewithIconTemplate = () => {
	
return html`
<div class="snippet">		<ui5-badge color-scheme="1">				<ui5-icon name="accept" slot="icon"></ui5-icon>done		</ui5-badge>		<ui5-badge color-scheme="2">				<ui5-icon name="sap-ui5" slot="icon"></ui5-icon>		</ui5-badge>		<ui5-badge color-scheme="3">				<ui5-icon name="add-equipment" slot="icon"></ui5-icon>in process		</ui5-badge>		<ui5-badge color-scheme="4">				<ui5-icon name="lab" slot="icon"></ui5-icon>		</ui5-badge>		<ui5-badge color-scheme="5">				<ui5-icon name="email-read" slot="icon"></ui5-icon>		</ui5-badge>		<ui5-badge color-scheme="6">				<ui5-icon name="pending" slot="icon"></ui5-icon>pending		</ui5-badge>		<ui5-badge color-scheme="7">				<ui5-icon name="lightbulb" slot="icon"></ui5-icon>		</ui5-badge>		<ui5-badge color-scheme="8">				<ui5-icon name="locked" slot="icon"></ui5-icon>		</ui5-badge>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BadgewithIcon = BadgewithIconTemplate.bind({});

BadgewithIcon.storyName = `Badge with Icon`;
BadgewithIcon.parameters = {
  controls: {
		disabled: true,
	}
};
