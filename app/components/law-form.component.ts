import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import { Law } from '../classes/law'

@Component({
	selector: 'law-form',
	templateUrl: 'app/components/law-form.component.html'
})

export class LawFormComponent {
	
	cats = ['Civiles', 'Penales', 'Mercantiles', 'Tributarias'];
	
	model = new Law(23,822,"Ley de Concertacion Tributaria",'12/17/2012', 
	this.cats[3]);
	
	submitted = false;
	
	onSubmit(){ this.submitted = true; }
	
	//TODO: Remove this when we are done
	
	get diagnostic() { return JSON.stringify(this.model);}
}