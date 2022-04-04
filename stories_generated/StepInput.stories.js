import { html} from 'lit-html';
import '@ui5/webcomponents/dist/StepInput.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/StepInput',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-step-input

	accessible-name-ref="${ args['accessibleNameRef'] }" 
	?disabled="${ args['disabled'] }" 
	name="${ args['name'] }" 
	placeholder="${ args['placeholder'] }" 
	?readonly="${ args['readonly'] }" 
	?required="${ args['required'] }" 
	step="${ args['step'] }" 
	value="${ args['value'] }" 
	value-precision="${ args['valuePrecision'] }" 
	value-state="${ args['valueState'] }" 
>
	
</ui5-step-input>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleNameRef: "",
	
	disabled: false,
	
	name: "",
	
	placeholder: undefined,
	
	readonly: false,
	
	required: false,
	
	step: 1,
	
	value: 0,
	
	valuePrecision: 0,
	
	valueState: "None",
	
};




const BasicStepInputTemplate = () => {
	
return html`
<div class="snippet">		<div class="shorter">			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" readonly value="5"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" disabled value="5"></ui5-step-input>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicStepInput = BasicStepInputTemplate.bind({});

BasicStepInput.storyName = `Basic Step Input`;
BasicStepInput.parameters = {
  controls: {
		disabled: true,
	}
};const StepInputwithalignmentTemplate = () => {
	
return html`
<div class="snippet">		<div class="shorter">			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5" style="text-align: center"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5" style="text-align: right"></ui5-step-input>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const StepInputwithalignment = StepInputwithalignmentTemplate.bind({});

StepInputwithalignment.storyName = `Step Input with alignment`;
StepInputwithalignment.parameters = {
  controls: {
		disabled: true,
	}
};const StepInputwithminmaxstepandvaluePrecisionTemplate = () => {
	
return html`
<div class="snippet">		<div class="shorter">			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5" min="0" max="10" step="1"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="0" min="-100" max="100" step="10"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="10" min="0" max="20" step="0.5" value-precision="1"></ui5-step-input>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const StepInputwithminmaxstepandvaluePrecision = StepInputwithminmaxstepandvaluePrecisionTemplate.bind({});

StepInputwithminmaxstepandvaluePrecision.storyName = `Step Input with min, max, step and valuePrecision`;
StepInputwithminmaxstepandvaluePrecision.parameters = {
  controls: {
		disabled: true,
	}
};const StepInputwithValueStateTemplate = () => {
	
return html`
<div class="snippet">		<div class="shorter">			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Success"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Warning"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Error"></ui5-step-input>			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Information"></ui5-step-input>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const StepInputwithValueState = StepInputwithValueStateTemplate.bind({});

StepInputwithValueState.storyName = `Step Input with Value State`;
StepInputwithValueState.parameters = {
  controls: {
		disabled: true,
	}
};const StepInputwithLabelTemplate = () => {
	
return html`
<div class="snippet">		<div class="flex-column samples-margin">			<div class="shorter">				<ui5-label class="samples-big-margin-right" for="myStepInput" required show-colon>Number</ui5-label>				<ui5-step-input id="myStepInput" placeholder="Enter your Number" required></ui5-step-input>			</div>		</div>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const StepInputwithLabel = StepInputwithLabelTemplate.bind({});

StepInputwithLabel.storyName = `Step Input with Label`;
StepInputwithLabel.parameters = {
  controls: {
		disabled: true,
	}
};
