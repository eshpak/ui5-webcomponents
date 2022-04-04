import { html} from 'lit-html';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';
import '@ui5/webcomponents/dist/Button.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/TabContainer',
  argTypes: { tabLayout: {
			description: `Defines the alignment of the content and the <code>additionalText</code> of a tab.<br><br> <b>Note:</b> The content and the <code>additionalText</code> would be displayed vertically by defualt, but when set to <code>Inline</code>, they would be displayed horizontally.<br><br> Available options are: <ul> <li><code>Standard</code></li> <li><code>Inline</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'Inline','Standard',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-tabcontainer

	?collapsed="${ args['collapsed'] }" 
	?fixed="${ args['fixed'] }" 
	?showOverflow="${ args['showOverflow'] }" 
	tab-layout="${ args['tabLayout'] }" 
>
	
			<ui5-tab icon="menu" text="Tab 1">
				<ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="activities" text="Tab 2" selected>
				<ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="add" text="Tab 3">
				<ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="calendar" text="Tab 4">
				<ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>
			</ui5-tab>
			<ui5-tab-separator></ui5-tab-separator>
			<ui5-tab icon="action-settings" text="Tab 5">
				<ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>
			</ui5-tab>
		
</ui5-tabcontainer>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	collapsed: false,
	
	fixed: false,
	
	showOverflow: false,
	
	tabLayout: "Standard",
	
};




const BasicTabContainerTemplate = () => {
	
return html`
<div class="snippet">		<ui5-tabcontainer class="full-width" show-overflow>			<ui5-tab icon="menu" text="Tab 1">				<ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>			</ui5-tab>			<ui5-tab icon="activities" text="Tab 2" selected>				<ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>			</ui5-tab>			<ui5-tab icon="add" text="Tab 3">				<ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>			</ui5-tab>			<ui5-tab icon="calendar" text="Tab 4">				<ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>			</ui5-tab>			<ui5-tab-separator></ui5-tab-separator>			<ui5-tab icon="action-settings" text="Tab 5">				<ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>			</ui5-tab>		</ui5-tabcontainer>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const BasicTabContainer = BasicTabContainerTemplate.bind({});

BasicTabContainer.storyName = `Basic TabContainer`;
BasicTabContainer.parameters = {
  controls: {
		disabled: true,
	}
};const TabContainerwithtextonlytabsTemplate = () => {
	
return html`
<div class="snippet">		<ui5-tabcontainer class="full-width" collapsed fixed show-overflow>			<ui5-tab text="Home"></ui5-tab>			<ui5-tab text="What&apos;s new" selected></ui5-tab>			<ui5-tab text="Who are we"></ui5-tab>			<ui5-tab text="About"></ui5-tab>			<ui5-tab text="Contacts"></ui5-tab>		</ui5-tabcontainer>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TabContainerwithtextonlytabs = TabContainerwithtextonlytabsTemplate.bind({});

TabContainerwithtextonlytabs.storyName = `TabContainer with text only tabs`;
TabContainerwithtextonlytabs.parameters = {
  controls: {
		disabled: true,
	}
};const TabContainerwithtextandadditionaltextTemplate = () => {
	
return html`
<div class="snippet">		<ui5-tabcontainer show-overflow="true" collapsed fixed>			<ui5-tab text="Info" additional-text="3">			</ui5-tab>			<ui5-tab text="Attachments" additional-text="24" selected>			</ui5-tab>			<ui5-tab text="Notes" additional-text="16">			</ui5-tab>			<ui5-tab text="People" additional-text="34">			</ui5-tab>		</ui5-tabcontainer>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TabContainerwithtextandadditionaltext = TabContainerwithtextandadditionaltextTemplate.bind({});

TabContainerwithtextandadditionaltext.storyName = `TabContainer with text and additional-text`;
TabContainerwithtextandadditionaltext.parameters = {
  controls: {
		disabled: true,
	}
};const TabContainerwithtabLayoutInlineTemplate = () => {
	
return html`
<div class="snippet">		<ui5-tabcontainer tab-layout="Inline" show-overflow="true" collapsed fixed>			<ui5-tab text="Monitors" additional-text="(10)">			</ui5-tab>			<ui5-tab text="Cameras" additional-text="(2)" selected>			</ui5-tab>			<ui5-tab text="Rooms" additional-text="(16)">			</ui5-tab>		</ui5-tabcontainer>		<ui5-tabcontainer tab-layout="Inline" show-overflow="true" collapsed fixed>			<ui5-tab icon="laptop" ext="Monitors" additional-text="(10)">			</ui5-tab>			<ui5-tab icon="video" text="Cameras" additional-text="(2)" selected>			</ui5-tab>			<ui5-tab icon="home" text="Rooms" additional-text="(16)">			</ui5-tab>		</ui5-tabcontainer>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const TabContainerwithtabLayoutInline = TabContainerwithtabLayoutInlineTemplate.bind({});

TabContainerwithtabLayoutInline.storyName = `TabContainer with tabLayout="Inline"`;
TabContainerwithtabLayoutInline.parameters = {
  controls: {
		disabled: true,
	}
};
