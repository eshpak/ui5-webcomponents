import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Title.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Title',
  argTypes: { level: {
			description: `Defines the component level. Available options are: <code>"H6"</code> to <code>"H1"</code>.`,
			control: { type: 'select' },
			options: [
				'H1','H2','H3','H4','H5','H6',
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
<ui5-title

	level="${ args['level'] }" 
	wrapping-type="${ args['wrappingType'] }" 
>
	Title level 1
</ui5-title>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	level: "H2",
	
	wrappingType: "None",
	
};




const TitleinAllAvailableLevelsTemplate = () => {
	
return html`
<div class="snippet flex-column">		<ui5-title level="H1">Title level 1</ui5-title>		<ui5-title level="H2">Title level 2</ui5-title>		<ui5-title level="H3">Title level 3</ui5-title>		<ui5-title level="H4">Title level 4</ui5-title>		<ui5-title level="H5">Title level 5</ui5-title>		<ui5-title level="H6">Title level 6</ui5-title>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TitleinAllAvailableLevels = TitleinAllAvailableLevelsTemplate.bind({});

TitleinAllAvailableLevels.storyName = `Title in All Available Levels`;
TitleinAllAvailableLevels.parameters = {
  controls: {
		disabled: true,
	}
};
