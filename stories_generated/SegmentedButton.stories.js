import { html} from 'lit-html';
import '@ui5/webcomponents/dist/SegmentedButton.js';
import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/SegmentedButton',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-segmented-button

>
	
            <ui5-segmented-button-item>Map</ui5-segmented-button-item>
            <ui5-segmented-button-item pressed>Satellite</ui5-segmented-button-item>
            <ui5-segmented-button-item>Terrain</ui5-segmented-button-item>
        
</ui5-segmented-button>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
};




const BasicSegmentedButtonTemplate = () => {
	
return html`
<div class="snippet">        <ui5-segmented-button accessible-name="Geographic location">            <ui5-segmented-button-item>Map</ui5-segmented-button-item>            <ui5-segmented-button-item pressed>Satellite</ui5-segmented-button-item>            <ui5-segmented-button-item>Terrain</ui5-segmented-button-item>        </ui5-segmented-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicSegmentedButton = BasicSegmentedButtonTemplate.bind({});

BasicSegmentedButton.storyName = `Basic SegmentedButton`;
BasicSegmentedButton.parameters = {
  controls: {
		disabled: true,
	}
};const SegmentedButtonwithIconsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-segmented-button>			<ui5-segmented-button-item icon="employee" pressed></ui5-segmented-button-item>			<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>			<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>		</ui5-segmented-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const SegmentedButtonwithIcons = SegmentedButtonwithIconsTemplate.bind({});

SegmentedButtonwithIcons.storyName = `SegmentedButton with Icons`;
SegmentedButtonwithIcons.parameters = {
  controls: {
		disabled: true,
	}
};const SegmentedButtonwithSegmentedButtonItemsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-segmented-button>			<ui5-segmented-button-item>Item</ui5-segmented-button-item>			<ui5-segmented-button-item pressed>Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>			<ui5-segmented-button-item>Item</ui5-segmented-button-item>			<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>			<ui5-segmented-button-item>Press me</ui5-segmented-button-item>		</ui5-segmented-button>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const SegmentedButtonwithSegmentedButtonItems = SegmentedButtonwithSegmentedButtonItemsTemplate.bind({});

SegmentedButtonwithSegmentedButtonItems.storyName = `SegmentedButton with 5 SegmentedButtonItems`;
SegmentedButtonwithSegmentedButtonItems.parameters = {
  controls: {
		disabled: true,
	}
};
