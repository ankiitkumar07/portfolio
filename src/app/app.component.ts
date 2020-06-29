import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myAnimation } from './route-animations';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
import { faFacebookSquare,faGithub,
         faInstagram,
         faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

import {
         faUser

} from '@fortawesome/free-regular-svg-icons';
import {
         faLaptopCode,
         faChartArea,
         faProjectDiagram,
         faBasketballBall

} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ myAnimation ]
})
export class AppComponent {
  title = 'portfolio';

  width = window.innerWidth;
  
  //icons
  fb = faFacebookSquare;
  git = faGithub;
  insta = faInstagram;
  linkedin = faLinkedin;
  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faProjectDiagram = faProjectDiagram;
  faChartArea = faChartArea;
  faBasketballBall = faBasketballBall;

  //navBar data 
  buttonData = [{
    'text': 'Intro',
    'link': '/',
    'icon': '<span class="material-icons">face</span>'
  },
  {
    'text': 'Technical Experience',
    'link': '/experience',
    'icon': '<span class="material-icons">laptop</span>'
  },
  {
    'text': 'Projects Undertaken',
    'link': '/projects',
    'icon': '<span class="material-icons">code</span>'
  },
  {
    'text': 'Skills',
    'link': '/skills',
    'icon': '<span class="material-icons">insert_chart_outlined</span>'
  },
  {
    'text': 'Hobbies and Interests',
    'link': '/hobbies',
    'icon': '<span class="material-icons">sports_basketball</span>'
  }]
  
  

  constructor(private modalService: BsModalService){}


  //Animation Route
  prepareRoute(outlet: RouterOutlet){
  	return outlet.activatedRouteData['animation'];
  }

  //Modal 
  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>, $event) {
    let span = <HTMLElement>event.target;
    span.style.transform === 'rotate(360deg)' ? span.style.transform = 'rotate(0deg)' : span.style.transform = 'rotate(360deg)';
    this.modalRef = this.modalService.show(template, {
       class: 'modal-lg modal-dialog-centered'
    });
    this.modalService.onHide.subscribe((reason: string) => {
       span.style.transform === 'rotate(360deg)' ? span.style.transform = 'rotate(0deg)' : span.style.transform = 'rotate(360deg)';
    });
  }

  
  //Buttons
  stacked: boolean = true;
  btnStacked($event){
    console.log("hey");
    this.stacked === true ? this.stacked = false : this.stacked = true;
    console.log(event.target);
    let span = <HTMLElement>event.target;
    span.style.transform === 'rotate(180deg)' ? span.style.transform = 'rotate(0deg)' : span.style.transform = 'rotate(180deg)';
  }
  


}
