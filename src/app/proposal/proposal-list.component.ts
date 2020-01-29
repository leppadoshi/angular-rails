import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.scss']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.jordanhugdens.com', 
		'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
	proposalTwo: Proposal = new Proposal(16, 'Def Company', 'http://portfolio.jordanhugdens.com',
		'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')
	proposalThree: Proposal = new Proposal(17, 'XYZ Company', 'http://portfolio.jordanhugdens.com',
		'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree
	]
}