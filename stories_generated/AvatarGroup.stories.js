import { html} from 'lit-html';
import '@ui5/webcomponents/dist/AvatarGroup.js';
import '@ui5/webcomponents/dist/Avatar.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/AvatarGroup',
  argTypes: { type: {
			description: `Defines the mode of the <code>AvatarGroup</code>. <br><br> Available options are: <ul> <li><code>Group</code></li> <li><code>Individual</code></li> </ul>`,
			control: { type: 'select' },
			options: [
				'Group','Individual',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-avatar-group

	color-scheme="${ args['colorScheme'] }" 
	hidden-items="${ args['hiddenItems'] }" 
	type="${ args['type'] }" 
>
	
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
		
</ui5-avatar-group>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	colorScheme: [],
	
	hiddenItems: [],
	
	type: "Group",
	
};




const AvatarGrouptypeIndividualTemplate = () => {
	
return html`
<div class="snippet individual">		<ui5-popover header-text="Person Card" class="personPopover" style="width: 300px" placement-type="Bottom" prevent-focus-restore>			<div class="avatar-slot" style="display: inline-block;">				<ui5-avatar id="popAvatar"></ui5-avatar>			</div>				<div class="title-slot" style="display: inline-block;">				<ui5-title level="H5">John Doe</ui5-title>				<ui5-title level="H5">Software Developer</ui5-title>			</div>		</ui5-popover>			<ui5-popover header-text="My people" class="peoplePopover" style="width: 400px" placement-type="Bottom">			<div class="placeholder" style="display: flex; flex-wrap: wrap;"></div>		</ui5-popover>			<ui5-slider id="sliderIndividual" min="1" max="100" value="60"></ui5-slider>			<ui5-avatar-group type="Individual">			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" initials="JD"></ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" initials="JD"></ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" initials="JD"></ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>		</ui5-avatar-group>				</div>
${ 
  (function () { setTimeout(function () { 
			(function () {
				const section = document.querySelector(".individual");
				const slider = section.querySelector("ui5-slider");
	
				const avatarGroup = section.querySelector("ui5-avatar-group");
	
				const peoplePopover = section.querySelector(".peoplePopover");
				const personPopover = section.querySelector(".personPopover");
	
				const popAvatar = personPopover.querySelector("ui5-avatar");
	
				function onAvatarClicked(avatarRef) {
					const avatarIndex = avatarGroup.items.indexOf(avatarRef);

					popAvatar.colorScheme = avatarGroup.colorScheme[avatarIndex];
					popAvatar.initials = avatarRef.initials;
					while (popAvatar.firstChild) {
						popAvatar.removeChild(popAvatar.firstChild);
					}

					for (let i = 0; i < avatarRef.image.length; i++) {
						popAvatar.appendChild(avatarRef.image[i])
					}

					popAvatar.icon = avatarRef.icon;

					personPopover.showAt(avatarRef);
				}
				function onButtonClicked(targetRef) {
					const hiddenItems = avatarGroup.hiddenItems;
					const placeholder = peoplePopover.querySelector(".placeholder");
					const firstHiddenIndex = avatarGroup.items.length - hiddenItems.length;
	
					let html = "";
	
					hiddenItems.forEach((avatar, index) => {
						const color = avatarGroup.colorScheme[firstHiddenIndex + index];

						html += `<div class="avatar-slot" style="padding: 5px">
									<ui5-avatar interactive icon="${avatar.icon}" initials="${avatar.initials}" color-scheme="${color}">`;
						if (avatar.image.length > 0) {
							html += `<img src="${avatar.image[0].src}">`
						}
						html +=`</ui5-avatar></div>`;
					});
	
					placeholder.innerHTML = html;
	
					peoplePopover.close();
					peoplePopover.showAt(targetRef);
				}
	
				avatarGroup.addEventListener("click", function (event) {
					if (event.detail.overflowButtonClicked) {
						onButtonClicked(event.detail.targetRef);
					} else {
						onAvatarClicked(event.detail.targetRef);
					}
				});
	
	
				avatarGroup.style.width = slider.getAttribute("value") + '%';
				slider.addEventListener("input", function (event) {
					avatarGroup.style.width = event.target.value + '%';
				});
			}())
		 }, 500) })()
}`;
}

export const AvatarGrouptypeIndividual = AvatarGrouptypeIndividualTemplate.bind({});

AvatarGrouptypeIndividual.storyName = `Avatar Group - type "Individual"`;
AvatarGrouptypeIndividual.parameters = {
  controls: {
		disabled: true,
	}
};const AvatarGrouptypeGroupTemplate = () => {
	
return html`
<div class="snippet group">	    <ui5-popover header-text="My people" class="peoplePopover" style="width: 400px" placement-type="Bottom">			<div class="placeholder" style="display: flex; flex-wrap: wrap;"></div>		</ui5-popover>			<ui5-slider min="1" max="100" value="60"></ui5-slider>			<ui5-avatar-group type="Group">			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" initials="JD"></ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" initials="JD"></ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" icon="employee"></ui5-avatar>			<ui5-avatar size="M" initials="JD"></ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>		</ui5-avatar-group>				</div>
${ 
  (function () { setTimeout(function () { 
	const avatarGroup = document.querySelector("ui5-avatar-group");
	const peoplePopover = document.querySelector(".peoplePopover");
	const personPopover = document.querySelector(".personPopover");

	function onAvatarClicked(avatarRef) {
		personPopover.showAt(avatarRef);
	}

	function onButtonClicked(targetRef) {
		let html = "";
		const firstHiddenIndex = avatarGroup.items.length - avatarGroup.hiddenItems.length;

		avatarGroup.hiddenItems.forEach((avatar, index) => {
			html += `<ui5-avatar 
						...
						color-scheme="${avatarGroup.colorScheme[firstHiddenIndex + index]}"
					</ui5-avatar>`;
		});

		placeholder.innerHTML = html;
		peoplePopover.showAt(targetRef);
	}

	avatarGroup.addEventListener("click", function (event) {
		if (event.detail.overflowButtonClicked) {
			onButtonClicked(event.detail.targetRef);
		} else {
			onAvatarClicked(event.detail.targetRef);
		}
	});
 }, 500) })()
}`;
}

export const AvatarGrouptypeGroup = AvatarGrouptypeGroupTemplate.bind({});

AvatarGrouptypeGroup.storyName = `Avatar Group - type "Group"`;
AvatarGrouptypeGroup.parameters = {
  controls: {
		disabled: true,
	}
};const AvatarGroupSizesTemplate = () => {
	
return html`
<div class="snippet">		<ui5-avatar-group type="Individual">			<ui5-avatar size="S">				<img src="images/avatars/man_avatar_1.png" alt="Man Avatar 1">			</ui5-avatar>			<ui5-avatar size="S" initials="JD"></ui5-avatar>			<ui5-avatar size="S">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="S">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>		</ui5-avatar-group>		<br>		<ui5-avatar-group type="Individual">			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_1.png" alt="Man Avatar 1">			</ui5-avatar>			<ui5-avatar size="M" initials="JD"></ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="M">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>		</ui5-avatar-group>		<br>		<ui5-avatar-group type="Group">			<ui5-avatar size="L">				<img src="images/avatars/man_avatar_1.png" alt="Man Avatar 1">			</ui5-avatar>			<ui5-avatar size="L" initials="JD"></ui5-avatar>			<ui5-avatar size="L">				<img src="images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">			</ui5-avatar>			<ui5-avatar size="L">				<img src="images/avatars/man_avatar_3.png" alt="Man Avatar 3">			</ui5-avatar>		</ui5-avatar-group>	</div>
${ 
  (function () { setTimeout(function () { 
			(function () {
				const section = document.querySelector(".group");
				const slider = section.querySelector("ui5-slider");
	
				const avatarGroup = section.querySelector("ui5-avatar-group");
				const peoplePopover = section.querySelector(".peoplePopover");
	
				function onAvatarGroupClick(targetRef) {
					const placeholder = peoplePopover.querySelector(".placeholder");
	
					let html = "";
	
					avatarGroup.items.forEach((avatar, index) => {
						const avatarColor = avatarGroup.colorScheme[index];

						html += `<div class="avatar-slot" style="padding: 5px">
									<ui5-avatar interactive icon="${avatar.icon}" initials="${avatar.initials}" color-scheme="${avatarColor}">`;
						if (avatar.image.length > 0) {
							html += `<img src="${avatar.image[0].src}">`
						}
						html +=`</ui5-avatar></div>`;
					});
	
					placeholder.innerHTML = html;
	
					peoplePopover.close();
					peoplePopover.showAt(targetRef);
				}
	
				avatarGroup.addEventListener("click", function (event) {
					onAvatarGroupClick(event.detail.targetRef);
				});
	
				avatarGroup.style.width = slider.getAttribute("value") + '%';
				slider.addEventListener("input", function (event) {
					avatarGroup.style.width = event.target.value + '%';
				});
			}())
		 }, 500) })()
}`;
}

export const AvatarGroupSizes = AvatarGroupSizesTemplate.bind({});

AvatarGroupSizes.storyName = `Avatar Group Sizes`;
AvatarGroupSizes.parameters = {
  controls: {
		disabled: true,
	}
};
