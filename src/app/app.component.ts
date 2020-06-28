import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myAnimation } from './route-animations';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ myAnimation ]
})
export class AppComponent {
  title = 'portfolio';
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService){}

  prepareRoute(outlet: RouterOutlet){
  	return outlet.activatedRouteData['animation'];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
       class: 'modal-lg modal-dialog-centered',
       ignoreBackdropClick: true, 
       keyboard: false
    });
  }

  


}
