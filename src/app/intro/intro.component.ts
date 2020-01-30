import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'my-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

	screenWidth : number;
	let section = document.getElementsByTagName("section");

	constructor() {
		this.onResize();
	}

	ngOnInit() {
	}

	

	@HostListener('window:resize', ['$event'])
	onResize(event?) {
	   this.screenWidth = window.innerWidth;
	   section.style.width = this.scrrenWidth;
	}

}
