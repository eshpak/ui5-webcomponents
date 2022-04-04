import { html} from 'lit-html';
import '@ui5/webcomponents/dist/MessageStrip.js';
import '@ui5/webcomponents/dist/Icon.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/MessageStrip',
  argTypes: { design: {
			description: `Defines the component type. <br><br> <b>Note:</b> Available options are <code>"Information"</code>, <code>"Positive"</code>, <code>"Negative"</code>, and <code>"Warning"</code>.`,
			control: { type: 'select' },
			options: [
				'Information','Negative','Positive','Warning',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-message-strip

	design="${ args['design'] }" 
	?hideCloseButton="${ args['hideCloseButton'] }" 
	?hideIcon="${ args['hideIcon'] }" 
>
	Information MessageStrip
</ui5-message-strip>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	design: "Information",
	
	hideCloseButton: false,
	
	hideIcon: false,
	
};




const MessageStripTemplate = () => {
	
return html`
<div class="snippet">		<ui5-message-strip class="samples-margin-bottom" design="Information">Information MessageStrip</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Positive">Positive MessageStrip</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Negative">Negative MessageStrip</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Warning">Warning MessageStrip</ui5-message-strip>	</div>
${ 
  (function () { setTimeout(function () { 
	document.querySelectorAll("ui5-message-strip").forEach(function(messageStrip) {
		messageStrip.addEventListener("close", function() {
			messageStrip.parentNode.removeChild(messageStrip);
		});
	});
 }, 500) })()
}`;
}

export const MessageStrip = MessageStripTemplate.bind({});

MessageStrip.storyName = `MessageStrip`;
MessageStrip.parameters = {
  controls: {
		disabled: true,
	}
};const MessageStripWithNoCloseButtonTemplate = () => {
	
return html`
<div class="snippet">		<ui5-message-strip class="samples-margin-bottom" design="Information" hide-close-button>Information MessageStrip With No Close Button</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Positive" hide-close-button>Positive MessageStrip With No Close Button</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Negative" hide-close-button>Negative MessageStrip With No Close Button</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Warning" hide-close-button>Warning MessageStrip With No Close Button</ui5-message-strip>	</div>
${ 
  (function () { setTimeout(function () { 
	document.querySelectorAll("ui5-message-strip").forEach(function(messageStrip) {
		messageStrip.addEventListener("close", function() {
			messageStrip.parentNode.removeChild(messageStrip);
		});
	});
 }, 500) })()
}`;
}

export const MessageStripWithNoCloseButton = MessageStripWithNoCloseButtonTemplate.bind({});

MessageStripWithNoCloseButton.storyName = `MessageStrip With No Close Button`;
MessageStripWithNoCloseButton.parameters = {
  controls: {
		disabled: true,
	}
};const MessageStripWithNoIconTemplate = () => {
	
return html`
<div class="snippet">		<ui5-message-strip class="samples-margin-bottom" design="Information" hide-icon>Information MessageStrip With No Icon</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Positive" hide-icon>Positive MessageStrip With No Icon</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Negative" hide-icon>Negative MessageStrip With No Icon</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom" design="Warning" hide-icon>Warning MessageStrip With No Icon</ui5-message-strip>	</div>
${ 
  (function () { setTimeout(function () { 
	document.querySelectorAll("ui5-message-strip").forEach(function(messageStrip) {
		messageStrip.addEventListener("close", function() {
			messageStrip.parentNode.removeChild(messageStrip);
		});
	});
 }, 500) })()
}`;
}

export const MessageStripWithNoIcon = MessageStripWithNoIconTemplate.bind({});

MessageStripWithNoIcon.storyName = `MessageStrip With No Icon`;
MessageStripWithNoIcon.parameters = {
  controls: {
		disabled: true,
	}
};const CustomMessageStripTemplate = () => {
	
return html`
<div class="snippet">		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Information" hide-icon hide-close-button>You have new message.</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Positive" hide-close-button>Successfull login!</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Negative" hide-icon>Access denied!</ui5-message-strip>		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Warning">Update is required.</ui5-message-strip>        <ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Warning"><ui5-icon name="palette" slot="icon"></ui5-icon>Custom icon</ui5-message-strip>        <ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Positive"><img src="images/loading.gif" width="16" height="16" slot="icon">Custom animated gif</ui5-message-strip>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CustomMessageStrip = CustomMessageStripTemplate.bind({});

CustomMessageStrip.storyName = `Custom MessageStrip`;
CustomMessageStrip.parameters = {
  controls: {
		disabled: true,
	}
};
