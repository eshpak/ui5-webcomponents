import { html} from 'lit-html';
import '@ui5/webcomponents/dist/Card.js';
import '../packages/icons/dist/AllIcons.js';
import "../packages/main/dist/Assets.js";


export default {
  title: 'UI5 Web Components/Card',
  argTypes: { 
  },
};

const Template = (args) => {

return html`
<ui5-card

	accessible-name="${ args['accessibleName'] }" 
	accessible-name-ref="${ args['accessibleNameRef'] }" 
>
	
			<ui5-card-header slot="header" title-text="Team Space" subtitle-text="Direct Reports" status="3 of 10">
				<ui5-icon name="group" slot="avatar"></ui5-icon>
				<ui5-button design="Emphasized" slot="action">View All</ui5-button>
			</ui5-card-header>

			<div class="card-content">
				<ui5-list separators="None" class="card-content-child" style="width: 100%; margin-bottom: 0.75rem;">
					<ui5-li image="images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>
					<ui5-li image="images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>
					<ui5-li image="images/avatars/woman_avatar_2.png" description="UX Specialist">Isabella Adams</ui5-li>
				</ui5-list>

			</div>
		
</ui5-card>
`; 
}

export const Overview = Template.bind({});
Overview.args = {
	
	accessibleName: "",
	
	accessibleNameRef: "",
	
};




const CardwithListTemplate = () => {
	
return html`
<div class="snippet card-container">		<ui5-card class="medium">			<ui5-card-header slot="header" title-text="Team Space" subtitle-text="Direct Reports" status="3 of 10">				<ui5-icon name="group" slot="avatar"></ui5-icon>				<ui5-button design="Emphasized" slot="action">View All</ui5-button>			</ui5-card-header>			<div class="card-content">				<ui5-list separators="None" class="card-content-child" style="width: 100%; margin-bottom: 0.75rem;">					<ui5-li image="images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>					<ui5-li image="images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>					<ui5-li image="images/avatars/woman_avatar_2.png" description="UX Specialist">Isabella Adams</ui5-li>				</ui5-list>			</div>		</ui5-card>		<ui5-card class="medium">			<ui5-card-header slot="header" title-text="This header is interactive" interactive subtitle-text="Click, press Enter or Space" status="3 of 6">				<ui5-icon name="group" slot="avatar"></ui5-icon>			</ui5-card-header>			<div class="card-content">				<ui5-list separators="None" class="card-content-child" style="width: 100%; margin-bottom: 0.75rem;">					<ui5-li image="images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>					<ui5-li image="images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>					<ui5-li image="images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>				</ui5-list>			</div>		</ui5-card>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CardwithList = CardwithListTemplate.bind({});

CardwithList.storyName = `Card with List`;
CardwithList.parameters = {
  controls: {
		disabled: true,
	}
};const CardwithTableTemplate = () => {
	
return html`
<div class="snippet card-container">		<ui5-card>			<ui5-card-header slot="header" title-text="New Purchase Orders" subtitle-text="Today" status="3 of 15">			</ui5-card-header>			<ui5-table class="demo-table content-padding">				<!-- Columns -->				<ui5-table-column slot="columns">					<ui5-label>Sales Order</ui5-label>				</ui5-table-column>				<ui5-table-column slot="columns">					<ui5-label>Customer</ui5-label>				</ui5-table-column>				<ui5-table-column slot="columns">					<ui5-label>Net Amount</ui5-label>				</ui5-table-column>				<ui5-table-column slot="columns" min-width="450" popin-text="Status" demand-popin>					<ui5-label>Status</ui5-label>				</ui5-table-column>				<ui5-table-row>					<ui5-table-cell>						<ui5-label>5000010050</ui5-label>					</ui5-table-cell>					<ui5-table-cell>						<ui5-label>Entertainment Argentinia</ui5-label>					</ui5-table-cell>					<ui5-table-cell>							<ui5-label>6k USD</ui5-label>					</ui5-table-cell>					<ui5-table-cell>						<span class="status-success">Aproved</span>					</ui5-table-cell>				</ui5-table-row>				<ui5-table-row>					<ui5-table-cell>						<ui5-label>5000010051</ui5-label>					</ui5-table-cell>					<ui5-table-cell>						<ui5-label>Brazil Techologies</ui5-label>					</ui5-table-cell>					<ui5-table-cell>							<ui5-label>2k USD</ui5-label>					</ui5-table-cell>					<ui5-table-cell>						<span class="status-error">Rejected</span>					</ui5-table-cell>				</ui5-table-row>				<ui5-table-row>					<ui5-table-cell>						<ui5-label>5000010052</ui5-label>					</ui5-table-cell>					<ui5-table-cell>						<ui5-label>Robert Brown Ent.</ui5-label>					</ui5-table-cell>					<ui5-table-cell>							<ui5-label>17k USD</ui5-label>					</ui5-table-cell>					<ui5-table-cell>						<span class="status-warning">Pending</span>					</ui5-table-cell>				</ui5-table-row>			</ui5-table>		</ui5-card>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CardwithTable = CardwithTableTemplate.bind({});

CardwithTable.storyName = `Card with Table`;
CardwithTable.parameters = {
  controls: {
		disabled: true,
	}
};const CardwithTimelineTemplate = () => {
	
return html`
<div class="snippet card-container">		<ui5-card class="medium">			<ui5-card-header slot="header" title-text="Upcoming Activities" subtitle-text="For Today">			</ui5-card-header>			<ui5-timeline>				<ui5-timeline-item id="test-item" title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>				<ui5-timeline-item title-text="Weekly Sync - CP Design" timestamp="1517349600000" icon="calendar">					MR SOF02 2.43				</ui5-timeline-item>				<ui5-timeline-item title-text="Video Converence Call - UI5" timestamp="1485813600000" icon="calendar">					Online meeting				</ui5-timeline-item>			</ui5-timeline>		</ui5-card>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const CardwithTimeline = CardwithTimelineTemplate.bind({});

CardwithTimeline.storyName = `Card with Timeline`;
CardwithTimeline.parameters = {
  controls: {
		disabled: true,
	}
};const MoreCardsTemplate = () => {
	
return html`
<div class="snippet card-container">		<ui5-card class="small">			<ui5-card-header slot="header" title-text="David Willams" subtitle-text="Sales Manager">				<img src="images/avatars/man_avatar_1.png" slot="avatar">			</ui5-card-header>			<ui5-list separators="Inner" class="content-padding">				<ui5-li icon="competitor" icon-end>Personal Development</ui5-li>				<ui5-li icon="wallet" icon-end>Finance</ui5-li>				<ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>			</ui5-list>		</ui5-card>		<ui5-card class="small">			<ui5-card-header slot="header" title-text="Project Cloud Transformation" subtitle-text="Revenue per Product | EUR" status="3 of 3">			</ui5-card-header>			<ui5-list separators="None" class="content-padding">				<ui5-li-custom>					<div class="item">						<div class="item-content-begin">							<ui5-title level="H5" class="item-content-begin-title">Avantel</ui5-title>							<ui5-label>ID234522566-D44</ui5-label>						</div>						<div class="item-content-end">							<span class="status-success">27.25K EUR</span>						</div>					</div>				</ui5-li-custom>				<ui5-li-custom>					<div class="item">						<div class="item-content-begin">							<ui5-title level="H5" class="item-content-begin-title">Telecomunicaciones Star</ui5-title>							<ui5-label>ID7125852785-A51</ui5-label>						</div>						<div class="item-content-end">							<span class="status-warning">22.89K EUR</span>						</div>					</div>				</ui5-li-custom>				<ui5-li-custom>					<div class="item">						<div class="item-content-begin">							<ui5-title level="H5" class="item-content-begin-title">Talpa</ui5-title>							<ui5-label>ID123555587-I05</ui5-label>						</div>						<div class="item-content-end">							<span class="status-error">7.85K EUR</span>						</div>					</div>				</ui5-li-custom>			</ui5-list>		</ui5-card>		<ui5-card class="small">			<ui5-card-header slot="header" title-text="Dona Maria Moore" subtitle-text="Senior Sales Executive">				<img src="images/avatars/man_avatar_1.png" slot="avatar">			</ui5-card-header>			<div class="content content-padding">				<ui5-title level="H5" style="padding-bottom: 1rem;">Contact details</ui5-title>				<div class="content-group">					<ui5-label>Company Name</ui5-label>					<ui5-title level="H6">Company A</ui5-title>				</div>				<div class="content-group">					<ui5-label>Address</ui5-label>					<ui5-title level="H6">481 West Street, Anytown 45066, USA</ui5-title>				</div>				<div class="content-group">					<ui5-label>Website</ui5-label>					<ui5-link target="_blank">www.company_a.example.com</ui5-link>				</div>			</div>		</ui5-card>	</div>
${ 
  (function () { setTimeout(function () {  }, 500) })()
}`;
}

export const MoreCards = MoreCardsTemplate.bind({});

MoreCards.storyName = `More Cards`;
MoreCards.parameters = {
  controls: {
		disabled: true,
	}
};