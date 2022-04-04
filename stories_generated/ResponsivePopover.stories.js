import { html} from 'lit-html';
import '@ui5/webcomponents/dist/ResponsivePopover.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/ResponsivePopover',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-responsive-popover

>
	
			<div style="width: auto;padding: 2rem;display: flex;flex-direction: column;justify-content: center;">
				<ui5-label for="emailInput" required>Email: </ui5-label>
				<ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>
				<ui5-label>Note: If you open the page in mobile, dialog would be displayed.</ui5-label>
			</div>
			<div slot="footer" class="popover-footer">
				<ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
			</div>
		
</ui5-responsive-popover>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
};




const BasicResponsivePopoverTemplate = () => {
	
return html`
<div class="snippet">		<ui5-button id="openBtn" design="Emphasized">Open ResponsivePopover</ui5-button>		<ui5-responsive-popover id="hello-popover" header-text="Newsletter subscription">			<div style="width: auto;padding: 2rem;display: flex;flex-direction: column;justify-content: center;">				<ui5-label for="emailInput" required>Email: </ui5-label>				<ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>				<ui5-label>Note: If you open the page in mobile, dialog would be displayed.</ui5-label>			</div>			<div slot="footer" class="popover-footer">				<ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>			</div>		</ui5-responsive-popover>			</div>
${ 
  (function () { setTimeout(function () { 
			var popover = document.getElementById("hello-popover");
			var popoverOpener = document.getElementById("openBtn");
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

export const BasicResponsivePopover = BasicResponsivePopoverTemplate.bind({});

BasicResponsivePopover.storyName = `Basic ResponsivePopover`;
BasicResponsivePopover.parameters = {
  controls: {
		disabled: true,
	}
};
