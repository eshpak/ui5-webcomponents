import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Dialog.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Dialog',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-dialog

	accessible-name="${ args['accessibleName'] }" 
	?draggable="${ args['draggable'] }" 
	header-text="${ args['headerText'] }" 
	?resizable="${ args['resizable'] }" 
	?stretch="${ args['stretch'] }" 
>
	
			<section class="login-form">
				<div>
					<ui5-label for="username" required>Username: </ui5-label>
					<ui5-input id="username"></ui5-input>
				</div>

				<div>
					<ui5-label for="password" required>Password: </ui5-label>
					<ui5-input id="password" type="Password" value-state="Error"></ui5-input>
				</div>

				<div>
					<ui5-label for="email" type="Email" required>Email: </ui5-label>
					<ui5-input id="email"></ui5-input>
				</div>

				<div>
					<ui5-label for="address">Address: </ui5-label>
					<ui5-input id="address"></ui5-input>
				</div>
			</section>

			<div slot="footer" style="display: flex; align-items: center;padding: .5rem">
				<div style="flex: 1;"></div>
				<ui5-button id="closeDialogButton" design="Emphasized">Register</ui5-button>
			</div>
		
</ui5-dialog>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleName: "",
	
	draggable: false,
	
	headerText: "",
	
	resizable: false,
	
	stretch: false,
	
};




const BasicDialogTemplate = () => {
	
return html`
<div class="snippet">		<ui5-button id="openDialogButton" design="Emphasized">Show Dialog</ui5-button>		<ui5-dialog id="hello-dialog" header-text="Register Form">			<section class="login-form">				<div>					<ui5-label for="username" required>Username: </ui5-label>					<ui5-input id="username"></ui5-input>				</div>				<div>					<ui5-label for="password" required>Password: </ui5-label>					<ui5-input id="password" type="Password" value-state="Error"></ui5-input>				</div>				<div>					<ui5-label for="email" type="Email" required>Email: </ui5-label>					<ui5-input id="email"></ui5-input>				</div>				<div>					<ui5-label for="address">Address: </ui5-label>					<ui5-input id="address"></ui5-input>				</div>			</section>			<div slot="footer" style="display: flex; align-items: center;padding: .5rem">				<div style="flex: 1;"></div>				<ui5-button id="closeDialogButton" design="Emphasized">Register</ui5-button>			</div>		</ui5-dialog>			</div>
${ 
  (function () { setTimeout(function () { 
			var dialogOpener = document.getElementById("openDialogButton");
			var dialog = document.getElementById("hello-dialog");
			var dialogCloser = document.getElementById("closeDialogButton");

			dialogOpener.addEventListener("click", function() {
				dialog.show();
			});

			dialogCloser.addEventListener("click", function() {
				dialog.close();
			});
		 }, 500) })()
}`;
}

export const BasicDialog = BasicDialogTemplate.bind({});

BasicDialog.storyName = `Basic Dialog`;
BasicDialog.parameters = {
  controls: {
		disabled: true,
	}
};const DraggableandResizableDialogTemplate = () => {
	
return html`
<div class="snippet">		<ui5-button id="resizable-draggable-open">Open Draggable/Resizable dialog</ui5-button>		<ui5-dialog id="resize-draggable-dialog" header-text="Draggable/Resizable dialog" resizable draggable>			<p>Resize this dialog by dragging it by its resize handle.</p>			<p>This feature available only on Desktop.</p>			<p>Move this dialog around the screen by dragging it by its header.</p>			<p>This feature available only on Desktop.</p>			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">				<ui5-button id="resizable-drggable-close" design="Emphasized">OK</ui5-button>			</div>		</ui5-dialog>	</div>
${ 
  (function () { setTimeout(function () { 
	var dialogOpener = document.getElementById("openDialogButton");
	var dialog = document.getElementById("hello-dialog");
	var dialogCloser = document.getElementById("closeDialogButton");

	dialogOpener.addEventListener("click", function() {
		dialog.show();
	});

	dialogCloser.addEventListener("click", function() {
		dialog.close();
	});
 }, 500) })()
}`;
}

export const DraggableandResizableDialog = DraggableandResizableDialogTemplate.bind({});

DraggableandResizableDialog.storyName = `Draggable and Resizable Dialog`;
DraggableandResizableDialog.parameters = {
  controls: {
		disabled: true,
	}
};
