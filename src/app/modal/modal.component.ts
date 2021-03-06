import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	email=  new FormControl('');
	name = new FormControl('');
	message = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  sendDetails(){
  	console.log("Email: " + this.email.value + " Name: " + this.name.value + " Message: " + this.message.value);
  }

}
