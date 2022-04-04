import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Label.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Label',
  argTypes: { wrappingType: {
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
<ui5-label

	for="${ args['for'] }" 
	?required="${ args['required'] }" 
	?showColon="${ args['showColon'] }" 
	wrapping-type="${ args['wrappingType'] }" 
>
	The quick brown fox jumps over the lazy dog.
</ui5-label>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	for: "",
	
	required: false,
	
	showColon: false,
	
	wrappingType: "None",
	
};




const BasicLabelTemplate = () => {
	
return html`
<div class="snippet">		<ui5-label>The quick brown fox jumps over the lazy dog.</ui5-label>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicLabel = BasicLabelTemplate.bind({});

BasicLabel.storyName = `Basic Label`;
BasicLabel.parameters = {
  controls: {
		disabled: true,
	}
};const RequiredLabelTemplate = () => {
	
return html`
<div class="snippet">		<ui5-label required>Required Label</ui5-label>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RequiredLabel = RequiredLabelTemplate.bind({});

RequiredLabel.storyName = `Required Label`;
RequiredLabel.parameters = {
  controls: {
		disabled: true,
	}
};const RequiredLabelWithColonTemplate = () => {
	
return html`
<div class="snippet">		<ui5-label required show-colon>Required Label</ui5-label>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const RequiredLabelWithColon = RequiredLabelWithColonTemplate.bind({});

RequiredLabelWithColon.storyName = `Required Label With Colon`;
RequiredLabelWithColon.parameters = {
  controls: {
		disabled: true,
	}
};const TruncatedLabelTemplate = () => {
	
return html`
<div class="snippet">		<ui5-label style="width:200px">Long labels are truncated by default.</ui5-label>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TruncatedLabel = TruncatedLabelTemplate.bind({});

TruncatedLabel.storyName = `Truncated Label`;
TruncatedLabel.parameters = {
  controls: {
		disabled: true,
	}
};const WrappedLabelTemplate = () => {
	
return html`
<div class="snippet">		<ui5-label style="width:200px" wrapping-type="Normal">Long labels can wrap if the &apos;wrapping-type=&quot;Normal&quot;&apos; property is set.</ui5-label>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const WrappedLabel = WrappedLabelTemplate.bind({});

WrappedLabel.storyName = `Wrapped Label`;
WrappedLabel.parameters = {
  controls: {
		disabled: true,
	}
};const LabelforTemplate = () => {
	
return html`
<div class="snippet">		<ui5-label id="myLabel" for="myInput" required show-colon>First name</ui5-label>		<ui5-input id="myInput" aria-required="true" accessible-name-ref="myLabel" placeholder="Enter your name"></ui5-input>		<br>		<ui5-label id="myLabel2" for="myDP" required show-colon>Date of birth</ui5-label>		<ui5-date-picker id="myDP" accessible-name-ref="myLabel2" aria-required="true"></ui5-date-picker>		<br>		<ui5-label id="myLabel3" for="mySelect" required show-colon>Job</ui5-label>		<ui5-select id="mySelect" aria-required="true" accessible-name-ref="myLabel3">			<ui5-option>Manager</ui5-option>			<ui5-option>Sales</ui5-option>			<ui5-option selected>Developer</ui5-option>		</ui5-select>		<br>		<ui5-label id="myLabel4" for="myTextArea" required show-colon>Description label test</ui5-label>		<ui5-textarea id="myTextArea" accessible-name-ref="myLabel4" aria-required="true" placeholder="Type as much text as you wish"></ui5-textarea>		<br>		<div style="display: flex; align-items: center;">			<ui5-label for="myRB" required show-colon>Gender</ui5-label>			<ui5-radio-button id="myRB" name="a" text="Choice 1"></ui5-radio-button>			<ui5-radio-button id="myRB2" name="a" checked text="Choice 2"></ui5-radio-button>		</div>		<div style="display: flex; align-items: center;">			<ui5-label for="myCB" required show-colon>Accept terms of use</ui5-label>			<ui5-checkbox id="myCB"></ui5-checkbox>		</div>		<pre class="prettyprint lang-html"><xmp><ui5-label id="myLabel" for="myInput" required show-colon>First name</ui5-label><ui5-input id="myInput" aria-required="true" accessible-name-ref="myLabel" placeholder="Enter your name"></ui5-input><ui5-label id="myLabel2" for="myDP" required show-colon>Date of birth</ui5-label><ui5-date-picker id="myDP" accessible-name-ref="myLabel2" aria-required="true"></ui5-date-picker><ui5-label id="myLabel3" for="mySelect" required show-colon>Job</ui5-label><ui5-select id="mySelect" aria-required="true" accessible-name-ref="myLabel3">	<ui5-option>Manager</ui5-option>	<ui5-option>Sales</ui5-option>	<ui5-option selected>Developer</ui5-option></ui5-select><ui5-label id="myLabel4" for="myTextArea" required show-colon>Description label test</ui5-label><ui5-textarea id="myTextArea" accessible-name-ref="myLabel4" aria-required="true" placeholder="Type as much text as you wish"></ui5-textarea><ui5-label for="myRB" required show-colon>Gender</ui5-label>	<ui5-radio-button id="myRB" group="a" text="Choice 1"></ui5-radio-button>	<ui5-radio-button id="myRB2" group="a" checked text="Choice 2"></ui5-radio-button><ui5-label for="myCB" required show-colon>Accept terms of use</ui5-label>	<ui5-checkbox id="myCB"></ui5-checkbox>		</xmp></pre></div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const Labelfor = LabelforTemplate.bind({});

Labelfor.storyName = `Label 'for'`;
Labelfor.parameters = {
  controls: {
		disabled: true,
	}
};
