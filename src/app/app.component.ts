import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myAnimation } from './route-animations';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ myAnimation ]
})
export class AppComponent {
  title = 'portfolio';
  
  fb = faFacebookSquare;
  git = faGithub;
  insta = faInstagram;
  linkedin = faLinkedin;
  
  modalRef: BsModalRef;

  stacked: boolean = true;
  constructor(private modalService: BsModalService){}

  prepareRoute(outlet: RouterOutlet){
  	return outlet.activatedRouteData['animation'];
  }

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

  btnStacked($event){
    console.log("hey");
    this.stacked === true ? this.stacked = false : this.stacked = true;
    console.log(event.target);
    let span = <HTMLElement>event.target;
    span.style.transform === 'rotate(180deg)' ? span.style.transform = 'rotate(0deg)' : span.style.transform = 'rotate(180deg)';
  }
  


}
