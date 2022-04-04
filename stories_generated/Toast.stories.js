import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Toast.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Toast',
  argTypes: { placement: {
			description: `Defines the placement of the component. <br><br> Available options are: <ul> <li><code>TopStart</code></li> <li><code>TopCenter</code></li> <li><code>TopEnd</code></li> <li><code>MiddleStart</code></li> <li><code>MiddleCenter</code></li> <li><code>MiddleEnd</code></li> <li><code>BottomStart</code></li> <li><code>BottomCenter</code></li> <li><code>BottomEnd</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'BottomCenter','BottomEnd','BottomStart','MiddleCenter','MiddleEnd','MiddleStart','TopCenter','TopEnd','TopStart',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-toast

	duration="${ args['duration'] }" 
	placement="${ args['placement'] }" 
>
	Basic Toast
</ui5-toast>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	duration: 3000,
	
	placement: "BottomCenter",
	
};




const BasicToastTemplate = () => {
	
return html`
<div class="snippet">		<!--Basic Toast-->		<ui5-button id="wcBtnShowToastBasic" class="samples-margin">Basic Toast</ui5-button>		<ui5-toast id="wcToastBasic">Basic Toast</ui5-toast>	</div>
${ 
  (function () { setTimeout(function () { 

	// Attaching click listener to the Button which shows the Basic Toast
	wcBtnShowToastBasic.addEventListener('click', function () {
		wcToastBasic.show();
	});

 }, 500) })()
}`;
}

export const BasicToast = BasicToastTemplate.bind({});

BasicToast.storyName = `Basic Toast`;
BasicToast.parameters = {
  controls: {
		disabled: true,
	}
};const ToastDurationTemplate = () => {
	
return html`
<div class="snippet">		<!--Short Toast-->		<ui5-button id="wcBtnShowToastShort" class="samples-margin">Short Toast</ui5-button>		<ui5-toast id="wcToastShort" duration="1500" placement="BottomStart">Short Toast</ui5-toast>		<!--Long Toast-->		<ui5-button id="wcBtnShowToastLong" class="samples-margin">Long Toast</ui5-button>		<ui5-toast id="wcToastLong" duration="4500" placement="BottomEnd">Long Toast</ui5-toast>	</div>
${ 
  (function () { setTimeout(function () { 

	// Attaching click listener to the Button which shows the Short Toast
	wcBtnShowToastShort.addEventListener('click', function () {
		wcToastShort.show();
	});

	// Attaching click listener to the Button which shows the Long Toast
	wcBtnShowToastLong.addEventListener('click', function () {
		wcToastLong.show();
	});

 }, 500) })()
}`;
}

export const ToastDuration = ToastDurationTemplate.bind({});

ToastDuration.storyName = `Toast Duration`;
ToastDuration.parameters = {
  controls: {
		disabled: true,
	}
};const ToastPlacementsTemplate = () => {
	
return html`
<div class="snippet">		<!--TopStart-->		<ui5-button id="wcBtnShowToastTS" class="samples-margin">TopStart</ui5-button>		<ui5-toast id="wcToastTS" placement="TopStart">TopStart</ui5-toast>		<!--TopCenter-->		<ui5-button id="wcBtnShowToastTC" class="samples-margin">TopCenter</ui5-button>		<ui5-toast id="wcToastTC" placement="TopCenter">TopCenter</ui5-toast>		<!--TopEnd-->		<ui5-button id="wcBtnShowToastTE" class="samples-margin">TopEnd</ui5-button>		<ui5-toast id="wcToastTE" placement="TopEnd">TopEnd</ui5-toast>		<!--MiddleStart-->		<ui5-button id="wcBtnShowToastMS" class="samples-margin">MiddleStart</ui5-button>		<ui5-toast id="wcToastMS" placement="MiddleStart">MiddleStart</ui5-toast>		<!--MiddleCenter-->		<ui5-button id="wcBtnShowToastMC" class="samples-margin">MiddleCenter</ui5-button>		<ui5-toast id="wcToastMC" placement="MiddleCenter">MiddleCenter</ui5-toast>		<!--MiddleEnd-->		<ui5-button id="wcBtnShowToastME" class="samples-margin">MiddleEnd</ui5-button>		<ui5-toast id="wcToastME" placement="MiddleEnd">MiddleEnd</ui5-toast>		<!--BottomStart-->		<ui5-button id="wcBtnShowToastBS" class="samples-margin">BottomStart</ui5-button>		<ui5-toast id="wcToastBS" placement="BottomStart">BottomStart</ui5-toast>		<!--BottomCenter-->		<ui5-button id="wcBtnShowToastBC" class="samples-margin">BottomCenter</ui5-button>		<ui5-toast id="wcToastBC">BottomCenter</ui5-toast>		<!--BottomEnd-->		<ui5-button id="wcBtnShowToastBE" class="samples-margin">BottomEnd</ui5-button>		<ui5-toast id="wcToastBE" placement="BottomEnd">BottomEnd</ui5-toast>	</div>
${ 
  (function () { setTimeout(function () { 

	// Attaching click listeners to the buttons which show the toasts
	Array.from(document.querySelectorAll("ui5-button")).forEach(button => {
		button.addEventListener('click', function () {
			document.querySelector("#" + button.id.replace("BtnShow", "")).show();
		});
	});

 }, 500) })()
}`;
}

export const ToastPlacements = ToastPlacementsTemplate.bind({});

ToastPlacements.storyName = `Toast Placements`;
ToastPlacements.parameters = {
  controls: {
		disabled: true,
	}
};
