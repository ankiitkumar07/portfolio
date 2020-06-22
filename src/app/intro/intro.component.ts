import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit{
	@ViewChild('intro') intro : ElementRef;
	aText = [
	"I am a Full-Stack Web Developer, currently working for Tech Mahindra. " + 
	"For a long time now, I have been obsessed with " + 
	"Web Desgining and love the way how different components and modules intregate with each others" + 
	" and create wonders." 
	];

	iSpeed : number = 50; // time delay of print out
	iIndex : number = 0; // start printing array at this posision
	iArrLength : number = this.aText[0].length; // the length of the text array
	iScrollAt : number = 20; // start scrolling up at this many lines
	 
	iTextPos : number = 0; // initialise text position
	sContents : string = ''; // initialise contents letiable
	iRow : any; // initialise current row

	constructor() {
	}

	ngOnInit() {
		setTimeout(() => {
			this.typewriter();
		}, 1000);
	}

	 
	typewriter(){
	 this.sContents =  ' ';
	 this.iRow = Math.max(0, this.iIndex - this.iScrollAt);
	 
	 while ( this.iRow < this.iIndex ) {
	  this.sContents += this.aText[this.iRow++] + '<br />';
	 }
	 this.intro.nativeElement.innerHTML = this.sContents + this.aText[this.iIndex].substring(0, this.iTextPos) + "_";
	 if ( this.iTextPos++ == this.iArrLength ) {
	  this.iTextPos = 0;
	  this.iIndex++;
	  if ( this.iIndex != this.aText.length ) {
	   this.iArrLength = this.aText[this.iIndex].length;
	   setTimeout(() => {this.typewriter()}, 500);
	  }
	 } else {
	  setTimeout(() => {this.typewriter()}, this.iSpeed);
	 }
	}
}