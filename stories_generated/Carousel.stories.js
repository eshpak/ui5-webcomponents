import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Carousel.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Carousel',
  argTypes: { arrowsPlacement: {
			description: `Defines the position of arrows. <br><br> Available options are: <ul> <li><code>Content</code></li> <li><code>Navigation</code></li> </ul> <br> When set to "Content", the arrows are placed on the sides of the current page. <br> When set to "Navigation", the arrows are placed on the sides of the page indicator.`,
			control: { type: 'select' },
			options: [
				'Content','Navigation',
			]
		},
  },
};

const Template = (args) => {

return html`
<ui5-carousel

	arrows-placement="${ args['arrowsPlacement'] }" 
	?cyclic="${ args['cyclic'] }" 
	?hideNavigationArrows="${ args['hideNavigationArrows'] }" 
	?hidePageIndicator="${ args['hidePageIndicator'] }" 
	items-per-page-l="${ args['itemsPerPageL'] }" 
	items-per-page-m="${ args['itemsPerPageM'] }" 
	items-per-page-s="${ args['itemsPerPageS'] }" 
>
	
			<img src="images/sample1.jpg" alt="Landscape 1">
			<img src="images/sample2.jpg" alt="Landscape 2">
			<img src="images/sample3.jpg" alt="Bulb">
		
</ui5-carousel>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	arrowsPlacement: "Content",
	
	cyclic: false,
	
	hideNavigationArrows: false,
	
	hidePageIndicator: false,
	
	itemsPerPageL: 1,
	
	itemsPerPageM: 1,
	
	itemsPerPageS: 1,
	
};




const CarouselWithSingleItemperPageTemplate = () => {
	
return html`
<div class="snippet">		<ui5-carousel>			<img src="images/sample1.jpg" alt="Landscape 1">			<img src="images/sample2.jpg" alt="Landscape 2">			<img src="images/sample3.jpg" alt="Bulb">		</ui5-carousel>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CarouselWithSingleItemperPage = CarouselWithSingleItemperPageTemplate.bind({});

CarouselWithSingleItemperPage.storyName = `Carousel With Single Item per Page`;
CarouselWithSingleItemperPage.parameters = {
  controls: {
		disabled: true,
	}
};const CarouselWithMultipleItemsperPageTemplate = () => {
	
return html`
<div class="snippet">		<ui5-carousel items-per-page-s="1" items-per-page-m="2" items-per-page-l="2">			<ui5-card class="medium">				<ui5-card-header slot="header" title-text="Activities" subtitle-text="For Today"></ui5-card-header>				<ui5-timeline>					<ui5-timeline-item id="test-item" title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>					<ui5-timeline-item title-text="Weekly Sync - CP Design" timestamp="1517349600000" icon="calendar">						MR SOF02 2.43					</ui5-timeline-item>					<ui5-timeline-item title-text="Video Converence Call - UI5" timestamp="1485813600000" icon="calendar">						Online meeting					</ui5-timeline-item>				</ui5-timeline>			</ui5-card>			<ui5-card class="small">				<ui5-card-header slot="header" title-text="David Willams" subtitle-text="Sales Manager">					<img src="images/avatars/man_avatar_1.png" slot="avatar">				</ui5-card-header>				<ui5-list separators="Inner" class="content-padding">					<ui5-li icon="competitor" icon-end>Personal Development</ui5-li>					<ui5-li icon="wallet" icon-end>Finance</ui5-li>					<ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>				</ui5-list>			</ui5-card>			<ui5-card class="medium">				<ui5-card-header slot="header" title-text="Team Dolphins" subtitle-text="Direct Reports" status="1 of 2">					<ui5-icon name="group" slot="avatar"></ui5-icon>				</ui5-card-header>				<div class="card-content">					<ui5-list separators="None" class="card-content-child" style="width: 100%">						<ui5-li image="images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>						<ui5-li image="images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>						<ui5-li image="images/avatars/woman_avatar_2.png" description="UX Specialist">Michael Adams</ui5-li>					</ui5-list>				</div>			</ui5-card>			<ui5-card class="medium">				<ui5-card-header slot="header" title-text="Team Bears" subtitle-text="Direct Reports" interactive status="2 of 2">						<ui5-icon name="group" slot="avatar"></ui5-icon>				</ui5-card-header>				<div class="card-content">					<ui5-list separators="None" class="card-content-child" style="width: 100%">						<ui5-li image="images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>						<ui5-li image="images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>						<ui5-li image="images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>					</ui5-list>				</div>			</ui5-card>		</ui5-carousel>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CarouselWithMultipleItemsperPage = CarouselWithMultipleItemsperPageTemplate.bind({});

CarouselWithMultipleItemsperPage.storyName = `Carousel With Multiple Items per Page`;
CarouselWithMultipleItemsperPage.parameters = {
  controls: {
		disabled: true,
	}
};const CarouselWithArrowPlacementandCyclicTemplate = () => {
	
return html`
<div class="snippet">		<ui5-carousel arrows-placement="Navigation" cyclic>			<img src="images/sample1.jpg" alt="Landscape 1">			<img src="images/sample2.jpg" alt="Landscape 2">			<img src="images/sample3.jpg" alt="Bulb">		</ui5-carousel>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CarouselWithArrowPlacementandCyclic = CarouselWithArrowPlacementandCyclicTemplate.bind({});

CarouselWithArrowPlacementandCyclic.storyName = `Carousel With Arrow Placement and Cyclic`;
CarouselWithArrowPlacementandCyclic.parameters = {
  controls: {
		disabled: true,
	}
};
