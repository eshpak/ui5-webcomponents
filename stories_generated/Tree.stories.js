import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Tree.js';
import '@ui5/webcomponents/dist/TreeItem.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Tree',
  argTypes: { mode: {
			description: `Defines the mode of the component. Since the tree uses a <code>ui5-list</code> to display its structure, the tree modes are exactly the same as the list modes, and are all applicable.<br><br> <b>Note:</b><ul> <li><code>None</code></li> <li><code>SingleSelect</code></li> <li><code>SingleSelectBegin</code></li> <li><code>SingleSelectEnd</code></li> <li><code>MultiSelect</code></li> <li><code>Delete</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'Delete','MultiSelect','None','SingleSelect','SingleSelectAuto','SingleSelectBegin','SingleSelectEnd',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-tree

	footer-text="${ args['footerText'] }" 
	header-text="${ args['headerText'] }" 
	mode="${ args['mode'] }" 
	no-data-text="${ args['noDataText'] }" 
>
	
			<ui5-tree-item expanded text="Tree 1" icon="paste" selected>
				<ui5-tree-item expanded text="Tree 1.1" selected>
					<ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
					<ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>
				</ui5-tree-item>
			</ui5-tree-item>
			<ui5-tree-item text="Tree 2" icon="copy">
				<ui5-tree-item text="Tree 2.1">
					<ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>
					<ui5-tree-item text="Tree 2.1.2">
						<ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>
					</ui5-tree-item>
				</ui5-tree-item>
				<ui5-tree-item text="Tree 2.2"></ui5-tree-item>
			</ui5-tree-item>

			<ui5-tree-item expanded text="Tree 3 (no icon)">
			</ui5-tree-item>
		
</ui5-tree>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	footerText: "",
	
	headerText: "",
	
	mode: "None",
	
	noDataText: "",
	
};




const BasicTreeTemplate = () => {
	
return html`
<div class="snippet">		<ui5-tree id="myTree" class="full-width">			<ui5-tree-item expanded text="Tree 1" icon="paste" selected>				<ui5-tree-item expanded text="Tree 1.1" selected>					<ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>					<ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>				</ui5-tree-item>			</ui5-tree-item>			<ui5-tree-item text="Tree 2" icon="copy">				<ui5-tree-item text="Tree 2.1">					<ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>					<ui5-tree-item text="Tree 2.1.2">						<ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>						<ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>						<ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>						<ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>					</ui5-tree-item>				</ui5-tree-item>				<ui5-tree-item text="Tree 2.2"></ui5-tree-item>			</ui5-tree-item>			<ui5-tree-item expanded text="Tree 3 (no icon)">			</ui5-tree-item>		</ui5-tree>	</div>
${ 
  (function () { setTimeout(function () { 
	var busyIndicator = document.getElementById("busy");
	var dynamicTree = document.getElementById("treeDynamic");
	dynamicTree.addEventListener("item-toggle", function(event) {
		var item = event.detail.item; // get the node that is toggled

		// Only for the dynamic node, and only when it's empty
		if (item.id === "dynamicNode" && item.children.length === 0) {
			busyIndicator.active = true; // block the tree from the user
			event.preventDefault(); // do not let the toggle button switch yet
			setTimeout(function() {
				var newItem = document.createElement("ui5-tree-item"); // Fetching from db....
				newItem.text = "Node fetched from DB after 2 sec";
				item.appendChild(newItem); // add the newly fetched node to the tree
				item.toggle(); // now manually switch the toggle button
				busyIndicator.active = false; // unblock the tree
			}, 2000);
		}
	});
 }, 500) })()
}`;
}

export const BasicTree = BasicTreeTemplate.bind({});

BasicTree.storyName = `Basic Tree`;
BasicTree.parameters = {
  controls: {
		disabled: true,
	}
};const TreewithmultipleselectionTemplate = () => {
	
return html`
<div class="snippet">		<ui5-tree id="myTree" class="full-width" mode="MultiSelect">			<ui5-tree-item expanded text="Tree 1" icon="paste" selected>				<ui5-tree-item expanded text="Tree 1.1" selected>					<ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>					<ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>				</ui5-tree-item>			</ui5-tree-item>			<ui5-tree-item text="Tree 2" icon="copy">				<ui5-tree-item text="Tree 2.1">					<ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>					<ui5-tree-item text="Tree 2.1.2">						<ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>						<ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>						<ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>						<ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>					</ui5-tree-item>				</ui5-tree-item>				<ui5-tree-item text="Tree 2.2"></ui5-tree-item>			</ui5-tree-item>			<ui5-tree-item expanded text="Tree 3 (no icon)">			</ui5-tree-item>		</ui5-tree>	</div>
${ 
  (function () { setTimeout(function () { 
		var busyIndicator = document.getElementById("busy");
		var dynamicTree = document.getElementById("treeDynamic");
		dynamicTree.addEventListener("item-toggle", function(event) {
			var item = event.detail.item; // get the node that is toggled

			// Only for the dynamic node, and only when it's empty
			if (item.id === "dynamicNode" && item.children.length === 0) {
				busyIndicator.active = true; // block the tree from the user
				event.preventDefault(); // do not let the toggle button switch yet
				setTimeout(function() {
					var newItem = document.createElement("ui5-tree-item"); // Fetching from db....
					newItem.text = "Node fetched from DB after 2 sec";
					item.appendChild(newItem); // add the newly fetched node to the tree
					item.toggle(); // now manually switch the toggle button
					busyIndicator.active = false; // unblock the tree
				}, 2000);
			}
		});
	 }, 500) })()
}`;
}

export const Treewithmultipleselection = TreewithmultipleselectionTemplate.bind({});

Treewithmultipleselection.storyName = `Tree with multiple selection`;
Treewithmultipleselection.parameters = {
  controls: {
		disabled: true,
	}
};const TreewithdynamiccontentTemplate = () => {
	
return html`
<div class="snippet">		<ui5-busy-indicator id="busy" class="full-width">			<ui5-tree id="treeDynamic" mode="None" class="full-width">				<ui5-tree-item text="Has pre-loaded children">					<ui5-tree-item text="Child 1"></ui5-tree-item>					<ui5-tree-item text="Child 2"></ui5-tree-item>				</ui5-tree-item>				<ui5-tree-item text="Has no children at all"></ui5-tree-item>				<ui5-tree-item id="dynamicNode" text="Has children, but not yet loaded" has-children></ui5-tree-item>			</ui5-tree>		</ui5-busy-indicator>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const Treewithdynamiccontent = TreewithdynamiccontentTemplate.bind({});

Treewithdynamiccontent.storyName = `Tree with dynamic content`;
Treewithdynamiccontent.parameters = {
  controls: {
		disabled: true,
	}
};
