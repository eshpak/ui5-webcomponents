import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Popover.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Popover',
  argTypes: { horizontalAlign: {
			description: `Determines the horizontal alignment of the component. <br><br> Available options are: <ul> <li><code>Center</code></li> <li><code>Left</code></li> <li><code>Right</code></li> <li><code>Stretch</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'Center','Left','Right','Stretch',
			]
		},placementType: {
			description: `Determines on which side the component is placed at. <br><br> Available options are: <ul> <li><code>Left</code></li> <li><code>Right</code></li> <li><code>Top</code></li> <li><code>Bottom</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'Bottom','Left','Right','Top',
			]
		},verticalAlign: {
			description: `Determines the vertical alignment of the component. <br><br> Available options are: <ul> <li><code>Center</code></li> <li><code>Top</code></li> <li><code>Bottom</code></li> <li><code>Stretch</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'Bottom','Center','Stretch','Top',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-popover

	?allowTargetOverlap="${ args['allowTargetOverlap'] }" 
	header-text="${ args['headerText'] }" 
	?hideArrow="${ args['hideArrow'] }" 
	?hideBackdrop="${ args['hideBackdrop'] }" 
	horizontal-align="${ args['horizontalAlign'] }" 
	?modal="${ args['modal'] }" 
	placement-type="${ args['placementType'] }" 
	vertical-align="${ args['verticalAlign'] }" 
>
	
			<div class="popover-content">
				<div class="flex-column">
					<ui5-label for="emailInput" required>Email: </ui5-label>
					<ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>
				</div>
			</div>
			<div slot="footer" class="popover-footer">
				<div style="flex: 1;"></div>
				<ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
			</div>
		
</ui5-popover>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	allowTargetOverlap: false,
	
	headerText: "",
	
	hideArrow: false,
	
	hideBackdrop: false,
	
	horizontalAlign: "Center",
	
	modal: false,
	
	placementType: "Right",
	
	verticalAlign: "Center",
	
};




const BasicPopoverTemplate = () => {
	
return html`
<div class="snippet">		<ui5-button id="openPopoverButton" design="Emphasized">Open Popover</ui5-button>		<ui5-popover id="hello-popover" header-text="Newsletter subscription">			<div class="popover-content">				<div class="flex-column">					<ui5-label for="emailInput" required>Email: </ui5-label>					<ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>				</div>			</div>			<div slot="footer" class="popover-footer">				<div style="flex: 1;"></div>				<ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>			</div>		</ui5-popover>			</div>
${ 
  (function () { setTimeout(function () { 
			var popoverOpener = document.getElementById("openPopoverButton");
			var popover = document.getElementById("hello-popover");
			var popoverCloser = document.getElementById("closePopoverButton");

			popoverOpener.addEventListener("click", function() {
				popover.showAt(popoverOpener);
			});

			popoverCloser.addEventListener("click", function() {
				popover.close();
			});
		 }, 500) })()
}`;
}

export const BasicPopover = BasicPopoverTemplate.bind({});

BasicPopover.storyName = `Basic Popover`;
BasicPopover.parameters = {
  controls: {
		disabled: true,
	}
};
