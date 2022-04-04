import { html} from 'lit-html';
import '@ui5/webcomponents/dist/MultiInput.js';
import '@ui5/webcomponents/dist/Token.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/MultiInput',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-multi-input

	?showValueHelpIcon="${ args['showValueHelpIcon'] }" 
>
	
</ui5-multi-input>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	showValueHelpIcon: false,
	
};




const BasicMultiInputTemplate = () => {
	
return html`
<div class="snippet">		<ui5-multi-input class="samples-margin samples-responsive-margin-bottom" value="basic input"></ui5-multi-input>		<ui5-multi-input class="samples-margin samples-responsive-margin-bottom" show-value-help-icon value="value help icon"></ui5-multi-input>	</div>
${ 
  (function () { setTimeout(function () { 
			var createTokenFromText = function (text) {
				var token = document.createElement("ui5-token");

				token.setAttribute("text", text);
				token.setAttribute("slot", "tokens");

				return token;
			};

			document.getElementById("token-unique").addEventListener("change", function (event) {
				if (!event.target.value) {
					return;
				};

				var isDuplicate = event.target.tokens.some(function(token) {
					return token.text === event.target.value
				});

				if (isDuplicate) {
					event.target.valueState = "Error";

					setTimeout(function () {
						event.target.valueState = "Normal";
					}, 2000);

					return;
				}

				event.target.appendChild(createTokenFromText(event.target.value));

				event.target.value = "";
			});
		 }, 500) })()
}`;
}

export const BasicMultiInput = BasicMultiInputTemplate.bind({});

BasicMultiInput.storyName = `Basic Multi Input`;
BasicMultiInput.parameters = {
  controls: {
		disabled: true,
	}
};const MultiInputwithtokensTemplate = () => {
	
return html`
<div class="snippet">		<ui5-multi-input style="width: 30%">			<ui5-token slot="tokens" text="Bulgaria"></ui5-token>		</ui5-multi-input>				<ui5-multi-input style="width: 30%">			<ui5-token slot="tokens" text="Argentina"></ui5-token>			<ui5-token slot="tokens" text="Bulgaria"></ui5-token>			<ui5-token slot="tokens" text="England"></ui5-token>			<ui5-token slot="tokens" text="Finland"></ui5-token>			<ui5-token slot="tokens" text="Germany"></ui5-token>			<ui5-token slot="tokens" text="Hungary"></ui5-token>			<ui5-token slot="tokens" text="Italy"></ui5-token>			<ui5-token slot="tokens" text="Luxembourg"></ui5-token>			<ui5-token slot="tokens" text="Mexico"></ui5-token>			<ui5-token slot="tokens" text="Philippines"></ui5-token>			<ui5-token slot="tokens" text="Sweden"></ui5-token>			<ui5-token slot="tokens" text="USA"></ui5-token>		</ui5-multi-input>	</div>
${ 
  (function () { setTimeout(function () { 
	var createTokenFromText = function (text) {
		var token = document.createElement("ui5-token");

		token.setAttribute("text", text);
		token.setAttribute("slot", "tokens");

		return token;
	};

	document.getElementById("token-unique").addEventListener("change", function (event) {
		if (!event.target.value) {
			return;
		};

		var isDuplicate = event.target.tokens.some(function(token) {
			return token.text === event.target.value
		});

		if (isDuplicate) {
			event.target.valueState = "Error";

			setTimeout(function () {
				event.target.valueState = "Normal";
			}, 2000);

			return;
		}

		event.target.appendChild(createTokenFromText(event.target.value));

		event.target.value = "";
	});
 }, 500) })()
}`;
}

export const MultiInputwithtokens = MultiInputwithtokensTemplate.bind({});

MultiInputwithtokens.storyName = `Multi Input with tokens`;
MultiInputwithtokens.parameters = {
  controls: {
		disabled: true,
	}
};const MultiInputandtokencreationonChangeTemplate = () => {
	
return html`
<div class="snippet">		<ui5-multi-input show-suggestions id="token-unique" style="width: 50%">			<div slot="valueStateMessage">Token is already in the list</div>		</ui5-multi-input>					</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const MultiInputandtokencreationonChange = MultiInputandtokencreationonChangeTemplate.bind({});

MultiInputandtokencreationonChange.storyName = `Multi Input and token creation onChange`;
MultiInputandtokencreationonChange.parameters = {
  controls: {
		disabled: true,
	}
};
