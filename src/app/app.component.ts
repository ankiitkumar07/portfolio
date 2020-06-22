import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { trigger, transition, style, query, group,animate } from '@angular/animations';
import { myAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ myAnimation ]
})
export class AppComponent {
  title = 'portfolio';

  prepareRoute(outlet: RouterOutlet){
  	return outlet.activatedRouteData['animation'];
  }
}
