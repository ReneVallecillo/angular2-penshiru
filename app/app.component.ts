import {Component} from 'angular2/core';
import { LawFormComponent } from './components/law-form.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>Penshiru App</h1>
    <law-form></law-form>
    `,
    directives: [LawFormComponent]
})
export class AppComponent { }