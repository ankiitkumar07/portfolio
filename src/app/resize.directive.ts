import { Renderer2, ElementRef, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  constructor(private renderer: Renderer2, private section: ElementRef ) {
  	console.log("Hi " + section);
  	console.log("Hi " + section.nativeElement);
  	console.log(section.nativeElement.style.color);
  	this.renderer.setStyle(this.section.nativeElement, 'color', 'yellow');
  }

	@HostListener('resize') onResize() {
	  this.resize(window.innerWidth);
	}

	private resize(size: number){
		console.log('resize');
		this.section.nativeElement.style.width = size + 'px';
	}

}
